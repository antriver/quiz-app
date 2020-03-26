# Quiz App

A Vue / Node / Socket.io app that supports running a Pub Quiz remotely.

There are 2 screens - the player screen and the host screen.

Players use (e.g.) http://localhost:2053

Access the host screen at (e.g.) http://localhost:2053/#/host
From here you can see scores and ask questions.

Players answer by selecting the first letter of the answer.

## Setup

    git clone https://github.com/antriver/quiz-app.git
    cd quiz-app
    npm install
    cp .env.example .env

## Running

    npm start
    
Then visit http://localhost:2053    

## Building

    npm run build
    
## Running in Development with watchers

    # Run the Node server
    npm start
    # and run Webpack Dev Server
    npm dev    

Then visit http://localhost:8080
