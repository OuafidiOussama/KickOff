# Kick Off

## Description

    Shop Ease is a mobile application that allows users to be Update to date concerning football
    and star players. The application is built using React Native, Expo and Redux Toolkit.

## Features

-   View matches
-   View match details
-   view Players
-   View player details
-   search for player by name
-   filter matches by league
-   add a match to favorite and browes them

## Technologies

-   [React Native](https://reactnative.dev/)
-   [Expo](https://expo.io/)
-   [React Navigation](https://reactnavigation.org/)
-   [Redux Toolkit](https://redux-toolkit.js.org/)

## Installation

### Prerequisites

-   [Node.js](https://nodejs.org/en/)

### Steps

-   Ensure you have Node.js installed
-   Clone the repository
-   Run `npm install` to install dependencies
-   Run `npm start` to start the application

### Dockerization

-   Ensure you have [Docker](https://www.docker.com/) installed
-   run `docker build . -t kick-off ` to build the docker image
-   run `docker run -it -p 19000:19000 -p 19001:19001 -p 19002:19002 -p 19006:19006 -p 8081:8081 shop-ease` to run the docker container

## Testing
run `npm test` to run tests
