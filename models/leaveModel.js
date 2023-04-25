const mongoose = require('mongoose')

const leaveSchema = new mongoose.Schema({
    subject:{
        type: String,
        required: [true, 'A leave application mush have a title']
    },
    description:{
        type: String,
        required: [true, 'A leave application must have a description']
    },
    roomNo:{
        type: String,
        required: [true, 'Room No required']
    },
})

const Leave = mongoose.model('Leave', leaveSchema)

module.exports = Leave