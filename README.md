# Setup

## 1) Install Node

https://nodejs.org/en/download/

## 2) Install JSPM

    $ sudo npm install -g jspm

## 3) Install SASS

http://sass-lang.com/install

## 4) Install Other Dependencies

    $ npm install

(This will also trigger `jspm install`)

## 5) Start Local Server & File Watcher

    $ npm start

This will start a local webserver on http://127.0.0.1:8000

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
