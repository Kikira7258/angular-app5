const mongoose = require('mongoose');

// >> Blue Print <<
const studentSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        cohort: String,
        phoneNumber: Number,
    },
    {
        collection: 'students'
    }
);

// >> Model <<
const Student = mongoose.model('Student', studentSchema);

// >> exports model
module.exports = Student;
