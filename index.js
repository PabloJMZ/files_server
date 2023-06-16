const express = require('express');
const morgan = require('morgan');
const router = require('./src/routes');
const notFound = require('./src/errors/notFound');
const errorHanddler = require('./src/errors/errorHanddler');

const app = express();

//middlewares
app.use(morgan('common'));
app.use(express.json());

//routes
app.use('/api/files/',router);

//errors
app.use(errorHanddler);
app.use(notFound);

app.listen(8080,console.log('Server Init'));