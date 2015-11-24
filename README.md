# Setup

## 0) Clone this Project

    $ git clone git@github.com:hu-semesterprojekt-genombrowser/Alazen-GUI.git

## 1) Install Node

https://nodejs.org/en/download/

## 2) Install JSPM

    $ sudo npm install -g jspm

## 3) Install SASS

http://sass-lang.com/install

This requires an installed version of Ruby 2.x

## 4) Install Other Dependencies

In the project directory, run:

    $ npm install

(This will also trigger `jspm install`)

## 5) Start Local Server & File Watcher

    $ npm start

This will start a local webserver on http://127.0.0.1:8000

## Optional 6)

Install jshint:

    $ sudo npm install -g jshint

Install jshint integration for your editor:

http://jshint.com/install/

# Git Conventions

- Main development on `develop` branch
- Gitflow for small Features https://de.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow/

# Test Suite

Run:

    $ npm test

# Documentation Links
## Frontend

- JavaScript https://github.com/getify/You-Dont-Know-JS/
- React Docs: https://facebook.github.io/react/docs/getting-started.html
- React Style Guide: https://github.com/Khan/style-guides/blob/master/style/react.md
- Bootstrap Docs: http://getbootstrap.com/

## Tooling

- Babel: https://babeljs.io
- System.js: https://github.com/systemjs/systemjs
- JSPM: http://jspm.io
- NPM: https://docs.npmjs.com

# Remarks / things to watch out for

- Code reloading sometimes takes some seconds
- Transpile errors sometimes hard to spot in terminal
- To kill old server ("port already taken") do `killall node`

## Everytime a dependency is added to `package.json`

When someone adds a new package, everyone needs to run:

    $ npm install

to fetch new development modules (which NPM puts into `node_modules`).

This will automatically trigger:

    $ jspm install

which fetches all other dependencies (which JSPM puts into `jspm_modules`)
