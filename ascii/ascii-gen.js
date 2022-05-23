var figlet = require("figlet");
const readline = require("readline-sync");

let word = readline.question("> ");

figlet(word, (err, data) => {
  if (err) {
    console.log("something went wrong");
    console.dir(err);
    return;
  }
  console.log(data);
});
