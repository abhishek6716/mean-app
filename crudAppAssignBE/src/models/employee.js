const mongoose = require('mongoose');
const validator = require('validator');
const AutoIncrement = require('mongoose-auto-increment');

const employeeSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    dateOfBirth: { 
        type: Date, 
        required: true ,
        validate(value){
            if(!validator.isDate(value)){
                throw new Error('DOB is invalid!');
            }
        }
    },
    department: { 
        type: String, 
        required: true 
    },
    skills: { 
        type: [String], 
        required: true 
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid');
            }
        }
    },
    photo: {
        type: String,
        required: true,
    }
});

AutoIncrement.initialize(mongoose.connection);
employeeSchema.plugin(AutoIncrement.plugin, { model: 'Employee', field: 'employeeCode', startAt: 1 });

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;