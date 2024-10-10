const express = require('express');
const queryParser = require('query-parser-express');
const { usersControler, phonesControler } = require('./controllers');
const { errorHandlers, validate, paginate } = require('./middleware');

const app = express();

app.use(express.json());

app.use(
  queryParser({
    parseBoolean: true, // default true
    parseNumber: true, // default true
  })
);

// POST /users body:{users}
// GET /users?page=1&results=5
// GET /users/1
// PATCH /users/1 body:{users}
// DELETE /users/1

app.post('/users', validate.validationOnCreate, usersControler.createUser);
app.get('/users', paginate.paginateUsers, usersControler.getAllUsers);
app.get('/users/:userId', usersControler.getUserById);
app.patch('/users/:userId', usersControler.updateUserById);
app.delete('/users/:userId', usersControler.deleteUserById);


// ---------------- phones ---------------------\\
app.post('/phones', validate.validationOnCreatePhone, phonesControler.createPhone);
app.get('/phones', paginate.paginatePhones, phonesControler.getAllPhones);
app.get('/phones/:phoneId', phonesControler.getPhoneById);
app.patch('/phones/:phoneId', phonesControler.updatePhoneById);
app.delete('/phones/:phoneId', phonesControler.deletePhoneById);

app.use(errorHandlers.errorHandler);

module.exports = app;
