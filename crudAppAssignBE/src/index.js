const express = require('express');
require('./db/mongoose');
const employeeRouter = require('./routers/employee');

const app = express();
app.use(express.json());
app.use(employeeRouter);

app.listen(3000, () => {
    console.log('Server is up on port 3000');
})