const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'A student must have a name']
    },
    roomNo:{
        type: String,
        required: [true, 'A student must have a room']
    },
    phoneNo:{
        type: String,
        required: [true, 'A student must have a phone number']
    }
})

const Student = mongoose.model('Student', studentSchema)

module.exports = Student