import express from 'express';
import { mongoose } from 'mongoose';
import bodyPaser from 'body-parser';
const app = express();
const port = 3000;
mongoose.connect('mongodb://localhostproject2');

routes(app);
app.get('/', (req, res) => {
    res.send('Node and express server running on port: ${PORT}')
});

