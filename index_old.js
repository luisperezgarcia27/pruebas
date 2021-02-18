const pl = require("tau-prolog");

const session = pl.create();

let program = "./nbd.pl";

let goal = "padre(proceso, X).";

const TauProlog = () => {
  const show = function (answer) {
    // console.log(session.format_answer(answer));
    HandleData(session.format_answer(answer));
  };

  const HandleData = (item) => {
    if (item != "false.") {
      console.log(item);
      return item
    }
  };
  // Consult
  session.consult(program, {
    success: function () {
      // Query
      session.query(goal, {
        success: function (goal) {
          // Answers
          session.answer({
            success: function (answer) {
              show(answer);
              session.answers((x) => {
                // console.log(pl.format_answer(x));
                HandleData(pl.format_answer(x));
              });
            },
            error: function (err) {
              console.log("err", err);
            },
            fail: function () {
              console.log("fail");
            },
            limit: function () {
              console.log("limit");
            },
          });
        },
        error: function (err) {
          console.log("err", err);
        },
      });
    },
    error: function (err) {
      console.log("err", err);
    },
  });
};

TauProlog();
