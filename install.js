const { spawn } = require('child_process');

const install = ({ name, root }) => {
  return new Promise( (resolve, reject) => {
    // process.chdir(root);
    // console.log(process.cwd())
    // console.log(root);
    const ls = spawn('npm.cmd', ['install'], { cwd: root });
    ls.stdout.on('data', log => console.log(log.toString()));
    ls.stderr.on('data', log => console.log(log.toString()));

    ls.on('close', async () => {
      console.log(`Installation Completed!`);
      resolve();
    });
  });
};

module.exports = install;