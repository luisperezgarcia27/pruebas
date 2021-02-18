var pl = require("tau-prolog");

var session = pl.create();
/**
 * OR path/to/src.pl
 */
// session.consult(`
//     likes(sam, salad).
//     likes(dean, pie).
//     likes(sam, apples).
//     likes(dean, whiskey).
// `, {
//   success: function () { /* Program loaded correctly */ },
//   error: function (err) { /* Error parsing program */ }
// });

// session.query("likes(sam, X).", {
//   success: function (goal) { console.log(goal); },
//   error: function (err) { /* Error parsing program */ }
// });

// session.answer({
//   success: function (answer) {
//     console.log(session.format_answer(answer)); // X = salad ;
//     session.answer({
//       success: function (answer) {
//         console.log(session.format_answer(answer)); // X = apples ;
//       },
//       // ...
//     });
//   },
//   fail: function () { /* No more answers */ },
//   error: function (err) { /* Uncaught exception */ },
//   limit: function () { /* Limit exceeded */ }
// });

let program = `
    likes(sam, salad).
    likes(dean, pie).
    likes(sam, apples).
    likes(dean, whiskey).
`;

let goal = "likes(dean, X).";

let data = [];

var show = function (answer) {
  console.log(session.format_answer(answer));
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

            // console.log(answer);
          },
          error: function (err) {
            console.log("err");
          },
          fail: function () {
            /* Fail */
          },
          limit: function () {
            /* Limit exceeded */
          },
        });
      },
      error: function (err) {
        console.log("err");
      },
    });
  },
  error: function (err) {
    console.log("err");
  },
});
