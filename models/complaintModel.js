const mongoose = require('mongoose')

const complaintSchema = new mongoose.Schema({
    subject:{
        type: String,
        required: [true, 'A complaint mush have a title']
    },
    description:{
        type: String,
        required: [true, 'A complaint must have a description']
    },
    roomNo:{
        type: String,
        required: [true, 'Room No required']
    },
    complaintStatus: {
        type: String
    },
    feedback:{
        type: String
    }
})

const Complaint = mongoose.model('Complaint', complaintSchema)

module.exports = Complaint