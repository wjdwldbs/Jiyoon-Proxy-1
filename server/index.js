const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;
const cors = require('cors');
const morgan = require('morgan')

app.use(cors());
app.use(express.static(path.join(__dirname, '../dist')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, console.log(`listening on port ${port}`));
