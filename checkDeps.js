var commandExists = require('command-exists');
const chalk = require('chalk');
const check = chalk.keyword('green');


const checkRun = () => {
    return new Promise((resolve, reject) => {
      console.log(check(" [...] Checking if git is installed..."));
      commandExists('git', function (err, commandExists) {
        if (err) reject(err);
        if (commandExists) {
          console.log(check(" [OK!] Git was found."));
          resolve();
        } else {
          reject("[!!!] Could not find git CLI. -20. Stop.");
          process.exit(1);
        }
      });
    });
  }

module.exports = checkRun;
