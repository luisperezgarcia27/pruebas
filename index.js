const pl = require("tau-prolog");

const session = pl.create();

let data = `
padre(proceso, preparacion).
padre(proceso, posicionamiento).
padre(proceso, construccion).
padre(proceso, intercambio).
padre(proceso, revision).
padre(proceso, negociacion).
padre(proceso, acuerdo).

padre(canvas, nuestra_posicion_inicial).
padre(canvas, nuestro_interes).
padre(canvas, nuestra_mejor_alternativa).
padre(canvas, nuestra_meta).
padre(canvas, su_posicion_inicial).
padre(canvas, su_interes).
padre(canvas, su_mejor_alternativa).
padre(canvas, su_meta).
padre(canvas, fichas).
padre(canvas, propuesta).
padre(canvas, acuerdo).

padre(actors, decisionmakers).
padre(actors, influencers).
padre(actors, implementers).

padre(navegacion, proceso).
padre(navegacion, canvas).
padre(navegacion, actors).
`;

let program = `
${data}
hermano(X,Y):- padre( Z, X ), padre( Z, Y), X \\== Y.
abuelo(X,Y):- padre( X, Z), padre( Z, Y ), X \\== Y.
primo(X,Y):- padre(A,X), padre(B,Y), hermano(A,B).
tio(X,Y) :-  padre(Z,Y), hermano(Z,X). 
bisabuelo(X,Y):- padre(A,Y), padre( B, A), padre( X, B).
`;

let goal = "hermano(proceso, X).";

const TauProlog = () => {
  const show = function (answer) {
    // console.log(session.format_answer(answer));
    HandleData(session.format_answer(answer));
  };

  const HandleData = (item) => {
    if (item != "false.") {
      console.log(item);
      return item;
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
      console.log("err");
    },
  });
};

TauProlog();
