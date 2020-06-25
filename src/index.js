const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const indexRoutes = require('./routes/index');
const app = express();

//Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

// Routes
app.use('/', indexRoutes);

// Settings
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
	console.log('server on port ', app.get('port'));
});
