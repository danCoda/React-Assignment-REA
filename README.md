# REA UI Coding Challenge

This is a simple full stack web application that uses: React for the frontend, NodeJS (ExpressJS) for the backend.

The frontend requests data to the backend via an API, and the backend returns data after retrieving it from an external source (also through an API). 

The frontend then displays the data. 

## Frontend interaction

You can interact with the frontend by hovering over the images to reveal buttons. Clicking the buttons will either 'add' or 'remove' the item from the 'Saved' list. 

### Shortfalls

Testing is using [Jest](https://jestjs.io/) and [Enzyme](https://enzymejs.github.io/enzyme/). However I am not proficient with testing yet, so the tests are not thorough. To run tests, in ./frontend, `npm test`.

## How to run it

1. Run the backend server; in ./backend, `node app`. It runs in port 5000.
2. Run the frontend; in ./frontend, `npm start`. 
3. Navigate to (default) http://localhost:3000/.

<img src="https://i.imgur.com/cjWYopw.png" />