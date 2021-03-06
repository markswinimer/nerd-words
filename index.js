const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const libraryRouter = require('./routers/library')
const userRouter = require('./routers/user')
const cors = require('cors')


const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/node-react-starter`);
// mongoose.connect( process.env.MONGODB_URI || "mongodb://user:userpass1@ds043987.mlab.com:43987/heroku_bqm1gwf9");
// MUST RUN MONGOD SERVER FROM COMMAND LINE FIRST TO RUN LOCALLY
// Start the Mongod service
// /Users/markswinimer/mongodb/bin/mongod --dbpath=/Users/markswinimer/mongodb-data

app.use(cors()) 
app.use(bodyParser.json());
app.use(libraryRouter);
app.use(userRouter);
// { useUnifiedTopology: true }
// { useNewUrlParser: true }

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
});
