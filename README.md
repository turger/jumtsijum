# Jumtsijum

Singing game inspired by famous Finnish TV program.

## Setup

Add firebase:  
`npm install -g firebase-tools`

Login to firebase:  
`firebase login`

`firebase init`  
Select database & hosting and no overwrite.

#### Add app check
REACT_APP_RECAPTCHA_KEY=
1. Add reCAPTCHA Enterprise from Google cloud console and create a Website-type key. Get the key from here and add it to .env file as REACT_APP_RECAPTCHA_KEY.
2. In Firebase console: register your apps to use App Check with the reCAPTCHA Enterprise provider in the App Check section.
3. Enforce App Check for Realtime Database in the Firebase console.   
-> For more details read these instructions:  
 https://firebase.google.com/docs/app-check/web/recaptcha-enterprise-provider

#### Add .env file to project root:  
REACT_APP_APIKEY=  
REACT_APP_AUTHDOMAIN=  
REACT_APP_DATABASEURL=  
REACT_APP_PROJECTID=  
REACT_APP_STORAGEBUCKET=  
REACT_APP_MESSAGINGSENDERID=  
REACT_APP_ID=  
REACT_APP_RECAPTCHA_KEY=

`yarn`

`yarn start`

## Deploy to firebase

`yarn fb-deploy`

## Try it out! 🔥

https://jumt5ijum.web.app
