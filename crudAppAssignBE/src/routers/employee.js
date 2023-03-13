const express = require('express')
const multer = require('multer')
const Employee = require('../models/employee')
const router = new express.Router()

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-'));
    },
});

const upload = multer({
    storage, limits: {
        fileSize: 5000000,
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
            return cb(new Error("Please upload a Image"));
        }
        cb(undefined, true);
    },
});


// Handle POST requests to add a new employee
router.post('/employees', upload.single('photo'), async (req, res) => {
    try {
        let { name, dateOfBirth, department, skills, email } = req.body;
        skills = JSON.parse(skills);
        console.log(req.file);
        const photo = req.file.filename;
        const employee = new Employee({ name, dateOfBirth, department, skills, email, photo });
        await employee.save();
        res.status(201).send(employee);
    } catch (error) {
        res.status(400).send(error);
    }
});


// Handle GET requests to get all employees
router.get('/getAllEmployees', async (req, res) => {
    const employees = await Employee.find();
    res.send(employees);
});


// Handle GET requests to get a single employee by employee code
router.get('/employees/:employeeCode', async (req, res) => {
    const employee = await Employee.findOne({ employeeCode: req.params.employeeCode });
    if (!employee) return res.status(404).send('Employee not found');
    res.send(employee);
});


// Handle PUT requests to update an employee
router.put('/employees/:employeeCode', upload.single('photo'), async (req, res) => {
    let { name, dateOfBirth, department, skills, email } = req.body;
    skills = JSON.parse(skills);
    const photo = req.file ? req.file.filename : null;
    const employee = await Employee.findOneAndUpdate(
        { employeeCode: req.params.employeeCode },
        { name, dateOfBirth, department, skills, email, photo },
        { new: true }
    );
    if (!employee) return res.status(404).send('Employee not found');
    res.send(employee);
});


// Handle DELETE requests to delete an employee
router.delete('/removeEmployee/:employeeCode', async (req, res) => {
    console.log(req.params.employeeCode);
    const employee = await Employee.findOneAndDelete({ employeeCode: req.params.employeeCode });
    if (!employee) return res.status(404).send('Employee not found');
    res.send(employee);
});


module.exports = router

