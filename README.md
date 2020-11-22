# The Titanic
A web app to display the various plots generated during Data Analysis of The Titanic dataset
This web app also provides user friendly UI to use ml model, predicting survival chance of a passenger.

![]('./demo.mp4')

### How to use
Run following block of script in a terminal

```
git clone https://github.com/arpitgpta/The-Titanic
cd 'The-Titanic'
npm i
cd client
npm i
npm run build
cd ..
nodemon index
```

Now you can check on ``` http://localhost:5005```

## Technical details

- Tech stack used: 
    - NodeJS, Express for backend
    - React for frontend
    - spawn to run python script for prediction as child process
