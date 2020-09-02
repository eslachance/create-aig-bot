#!/usr/bin/env node
const { prompt } = require('prompts');
const path = require('path');

const boilerplates = require('./boilerplates.json');
/*
todo: re-add to boilerplate.json after creating the repository.
  {
    "title": "Handler with Settings",
    "value": "settings",
    "description": "Just like the above but with per-guild settings with customization commands",
    "github": ""
  },
*/

const clone = require('./clone');
const installRepo = require('./install');
const postInstall = require('./postinstall');
const checkRun = require('./checkDeps');

const myArgs = process.argv.slice(2);
const name = myArgs[0];
let template = myArgs[1];
console.log("Installing to ", name);

if(!name) {
  console.log("Please provide a valid name for the folder in which to create the bot.");
  process.exit(1);
}



(async () => {
  if(!template) {
    console.log("Welcome to An Idiot's Guide boilerplate installer.");
    console.log("Please select which template you'd like to use to create your bot!");
    const answers = await prompt([
      {
        type: 'select',
        name: 'template',
        message: 'Select a Template',
        choices: boilerplates,
      }
    ]);
    if(!answers || !answers.template) process.exit(1);
    template = answers.template;
  }
  const boilerplate = boilerplates.find(b => b.value === template);
  if (!template || !boilerplate) {
    console.error("No template chosen, cancelling...");
    process.exit(1);
  } else {
    console.log(`Template ${template} chosen, proceeding to download...`);
    const originalDirectory = process.cwd();
    const root = path.resolve(name);
    await checkRun()
    await clone({ ...boilerplate, name, root});
    await installRepo({ name, root });
    await postInstall({ ...boilerplate });
    process.chdir(originalDirectory);
  }
})();
