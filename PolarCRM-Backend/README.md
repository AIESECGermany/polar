# PolarCRM Backend
Backend for PolarCRM using Express, NodeJS, Mongoose and a MongoDB Atlas Database

Find the Frontend [here](https://github.com/gbcarlos/PolarCRM-Frontend)

## Setup
After cloning install the dependencies:

´npm install´

You need to create an environment (.env) file with the following keys:
- PORT (Port where to launch the backend)
- MONGO_URI (String that contains the URI to your mongoDB Atlas instance)
- DB_NAME (The name of the mongoDB database that contains your collections)
- CLIENT_ID (The Google Social Login Client ID of your workspace, you can find the string (ends in apps.googleusercontent.com) in your Google Cloud)
- CLIENT_SECRET (Same as the client ID)
- REDIRECT_URI (URI where you get redirected after the login was successful, e.g. ´REDIRECT_URI='http://localhost:4200/dashboard'´)
- ORIGIN_URI (All URLs from where you can send requests to the server)

## Launch

`npm start`
