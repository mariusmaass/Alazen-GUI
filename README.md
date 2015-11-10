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
- More TBD

# Documentation Links
## Frontend

- https://facebook.github.io/react/docs/getting-started.html

## Tooling

- https://babeljs.io
- https://github.com/systemjs/systemjs
- http://jspm.io
- https://docs.npmjs.com

# Remarks / things to watch out for

- Code reloading sometimes takes some seconds
- Transpile errors sometimes hard to spot in terminal
- To kill old server ("port already taken") do `killall node`
