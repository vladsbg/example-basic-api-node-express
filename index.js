const express = require('express');
const bodyParser = require('body-parser');

const usersRoute = require('./routes/usersRoute');
const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

usersRoute(app);

app.listen(port, () => console.log(`Express running port ${port}`));
