const { spawn } = require('child_process');
const mkdirp = require('mkdirp');

const installRepo = ({ name, github, root }) => {
  return new Promise( (resolve, reject) => {
    mkdirp.sync(root);
    const ls = spawn('git', ['clone', github, root]);
    ls.stdout.on('data', log => console.log(log.toString()));
    ls.stderr.on('data', log => console.log(log.toString()));

    ls.on('close', async () => {
      console.log(`Code has been cloned into repository. Entering and installing...`);
      resolve();
    });
  });
}

module.exports = installRepo;