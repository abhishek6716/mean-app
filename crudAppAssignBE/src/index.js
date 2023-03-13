const express = require('express');
require('./db/mongoose');
const employeeRouter = require('./routers/employee');

const app = express();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use(express.json());
app.use(employeeRouter);
app.use(express.static('uploads'));

app.listen(3000, () => {
    console.log('Server is up on port 3000');
})