# PolarCRM-Frontend

CRM App for AIESEC in Germany to manage new applicants as well as current members of the organization

## Stack
### Frontend
- Angular 16

### Backend
- NodeJS
- ExpressJS
- MongoDB

The Backend can be found [here](https://github.com/gbcarlos/PolarCRM-Backend)

## Get Started
- Clone the repo and execute `npm i`
- To run the code execute `npm start`

### Environment File
You will have to create an environment.development.ts file to get access to the backend.
The environment file needs to contain the following entries:
- googleClientId: 'example123.apps.googleusercontent.com' (Google Client ID can be found [here](https://developers.google.com/identity/oauth2/web/guides/get-google-api-clientid?hl=en)
- serverUrl: 'http://localhost:8000' (The URL where your server is running)
