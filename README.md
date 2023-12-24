<div align="center">
  <img height="64" src="./public/images/logo.svg" alt="Project Logo">
</div>

# Comeon Games

Welcome to the ComeOn Javascript Test project! This repository contains the implementation of a minimal casino website built using React and Typescript. The goal of this assignment is to showcase Javascript,TypeScript skills by tying together existing HTML, CSS, and data to create a functional casino experience.

## Project Overview

The project comprises several key features, including:

1. **Login Functionality:**
   - Connect the login form to the /login API call.
   - Transition to the games list screen on valid credentials.
   - Provide feedback and allow retry on invalid credentials.

2. **Logout Functionality:**
   - Connect the logout button to the /logout API call.
   - Transition to the login screen with empty input fields on successful logout.

3. **Games List Screen:**
   - Requires user login.
   - List all games from the /games API call.
   - List categories from the /categories API call.
   - Allow filtering by typing and category.
   - Start a game by clicking on the play icon.

4. **Game Play Screen:**
   - Requires user login.
   - Load the selected game via the provided API.
   - Provide a way to go back to the Games list screen.


## Getting Started

To set up the project, follow these steps:

### Setup mock API

```
npm install -g json-server
json-server --watch mock/mock-data.json --port 3001 --middlewares mock/mock-api.js
```

### Start the application

```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

```
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
