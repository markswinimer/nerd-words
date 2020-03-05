const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const libraryRouter = require('./routers/library')
const cors = require('cors')


const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/node-react-starter`);

app.use(cors()) 
app.use(bodyParser.json());
app.use(libraryRouter);

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
