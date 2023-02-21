const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');


const cors = require('./cors');
const helmet = require('./helmet');
const routes = require('../routes');

const port = process.env.PORT || '80';

const app = express();


app.set('port', port);
app.set('trust proxy', 1);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


helmet(app);
cors(app);
routes(app);


const server = http.createServer(app);
server.listen(port,()=>{
    console.log( `Server started on port ${port}`);
});

