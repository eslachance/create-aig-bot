# An Idiot's Guide Presents: The Bot Installer

After 5 years of making bots and helping others make them, we think it's time for a new, easier way of doing things. 

The Bot Installer has a single purpose: to get you up and running coding your bot as quickly as possible.
We know that creating a folder, installing discord.js, adding the basic code, isn't the biggest task in the world,
but it's just mechanical to start with. And with some people using guidebot and other repositories we've made,
you need to clone stuff, edit config files, blah blah blah.

We say: no more. 

> **ALPHA RELEASE**: Note that this tool is in alpha, meaning, we literally just started working on it. It might break,
> or it might work fine, 

## Pre-requisites

You will need two important things before you use the installer. 

### Node

We're making a discord.js bot which runs on nodejs so *obviously* you need to have node installed.
We recommend simply installing the Node LTS (Long Term Support), but really anything that's node 12 and higher will work beautifully.
You can download LTS or Latest of node from [The NodeJS Website](https://nodejs.org/en/).

### Git

To make this installer possible, and keep everything nice and fresh, the bot's code have been separated into their own git repository.
This means that we can easily update any of the templates without ever touching the actual installer, so it's smoother for everyone.
Linux and Mac users should already have git installed, Windows users, just get it from [the git-scm website](https://git-scm.com/downloads).

## Using the installer

The Bot Installer was created in nodejs and doesn't need to be downloaded or installed globally: it uses `npx` to run. NPX is the "Node Package Executable"
and it's essentially a way to run a node package without having to install it globally. It downloads, runs, the deletes the code, so if in a year you 
want to create a new bot, you don't need to worry about updating it : you always have the latest version, period.

To create a new bot, simply run this command in the folder where you'd like the bot to be created (we will create the folder for you):

```
npx create-aig-bot my-bot
```

The `my-bot` part is the name of the bot and folder. When the installer runs, it will create a folder with that name, get the bot's files, place them in, 
and install any pre-requisite the code needs (such as discord.js or anything else we're using for that template).

You can use a full path in here, or a relative path (like `npx create-aig-bot D:/blah/foo/my-bot`), but it's easier just to go in the folder you want it in.

## Pre-selecting template (non-interactive)

You can also directly install a template without showing the selector menu, by adding the template's name after the folder.

Template names are: `basic`, `args`, `handler`, `guidebot`, `guidebot-class`. 

For example to install the `handler` template in a folder called `mybot`, just run: `npx create-aig-bot myBot handler`.

## After Installation

Once the npx script finishes (it shouldn't take very long), you'll need to configure the code to use your own token, prefix, etc. 

Templates may have a different way of doing this, a message will inform you of the method after installation. Could be a .env or a config.json file. 

Guidebot and Guidebot-class will run their own post-installer and ask for things like your token and a prefix, so that configuration will be done for you.

Once your token and other information are put in and saved, you can `cd my-bot` (or whatever folder where the files were created) and run `node .` to start the bot.

## Available Templates

Here is a list of the currently available templates and the repository where they are hosted, if you want to take a look at the code.

- [Basic](https://github.com/eslachance/bf-basic): A very basic bot in one file, and a simple ping command
- [Argument Parser](https://github.com/eslachance/bf-arguments): A simple bot in one file with argument parsing and a prefix built-in
- [Command and Event Handler](https://github.com/eslachance/djs-handler) : A bot with commands and events in their own folder, ready to add your own
- [GuideBot](https://github.com/AnIdiotsGuide/guidebot) : The Official GuideBot Boilerplate with a few useful commands!
- [GuideBot Class](https://github.com/AnIdiotsGuide/guidebot-class) : The Class-based version of the above, if you prefer classes.

## Getting Support

All support for this tool is provided on [An Idiot's Guide Discord](https://discord.gg/4NE4bk7).