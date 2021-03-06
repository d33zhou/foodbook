const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const recipesRouter = require('./routes/recipes');
const authRouter = require('./routes/auth');
const ingredientRouter = require('./routes/ingredients');
const likesRouter = require('./routes/likes');
const bookmarksRouter = require('./routes/bookmarks');
const friendsRouter = require('./routes/friends');
const app = express();
const db = require('./db'); // making the connection the the database => db
const dbHelpers = require('./helpers/db_helpers')(db);
const cors = require('cors');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false })); app.use(bodyParser.json());
app.use(cors());

app.use('/', indexRouter);
app.use('/api/users', usersRouter(dbHelpers));
app.use('/api/recipes', recipesRouter(dbHelpers));
app.use('/api/auth',authRouter(dbHelpers));
app.use('/api/ingredients',ingredientRouter(dbHelpers));
app.use('/api/friends',friendsRouter(dbHelpers));
app.use('/api',likesRouter(dbHelpers));
app.use('/api',bookmarksRouter(dbHelpers));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
