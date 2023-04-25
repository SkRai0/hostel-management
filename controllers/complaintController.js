const complaintModel = require('../models/complaintModel');

exports.getAllComplaints = async (req,res) => {
    try {
        const complaints = await complaintModel.find()
        res.status(200).json({
			status: 'Success',
			data: {
				complaints
			},
		});
    } catch (err) {
        res.status(400).json({
            status: 'Fail',
            err: err
        })       
    }
}

exports.getComplaint = async (req, res) => {
	try{
		const complaint = await complaintModel.findById(req.params.id)
		res.status(200).json({
			status: 'Success',
			data: {
				complaint
			},
		});
	}catch(err){
		res.status(400).json({
			status: 'Fail',
			message: 'Cannot get tour'
		})
	}
}

exports.postcomplaint = async (req, res) => {
	try{
		const newcomplaint = await complaintModel.create(req.body)
		res.status(201).json({
			status: 'Success',
			data: {
				complaint: newcomplaint,
			},
		});
	}catch(err){
		res.status(400).json({
			status: 'Fail',
			message: 'Cannot post tour'
		})
	}
}

exports.updatecomplaint = async (req, res) => {
	try{
		const complaint = await complaintModel.findByIdAndUpdate(req.params.id, req.body)

		res.status(200).json({
			status: 'Success',
			data: {
				complaint
			}
		})
	}catch(err){
		res.status(400).json({
			status: 'Failed',
			message: 'Could not update tour'
		});
	}
}

exports.deletecomplaint = async (req, res) => {
	
	try {
		await complaintModel.findByIdAndDelete(req.params.id)
		res.status(200).json({
			status: 'Success',
			data: null
		})
		console.log(req.params.id)
	} catch (err) {
		res.status(400).json({
			status: 'Failed',
			message: 'Could not delete'
		})
	}
}