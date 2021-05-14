const mongoose = require('mongoose');

//create Schema
const Schema = mongoose.Schema;


//instantiation of Schema
const studentSchema = new Schema({
    fullname:{
        type: String,
        require: true,
        trim: true
    },
    email:{
        type: String,
        require: true,
        trim: true
    }
},{
    timestamps: true
});

const Student = mongoose.model('student', studentSchema);

//exporting the students class
module.exports = Student;