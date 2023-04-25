const leaveModel = require('../models/leaveModel');

exports.getAllLeaves = async (req,res) => {
    try {
        const leave = await leaveModel.find()
        res.status(200).json({
			status: 'Success',
			data: {
				leaves: leave
			},
		});
    } catch (err) {
        res.status(400).json({
            status: 'Fail',
            err: err
        })       
    }
}

exports.getLeave = async (req, res) => {
	try{
		const leave = await leaveModel.findById(req.params.id)
		res.status(200).json({
			status: 'Success',
			data: {
				leave: leave
			},
		});
	}catch(err){
		res.status(400).json({
			status: 'Fail',
			message: 'Cannot get tour'
		})
	}
}

exports.postleave = async (req, res) => {
	try{
		const newleave = await leaveModel.create(req.body)
		res.status(201).json({
			status: 'Success',
			data: {
				leave: newleave,
			},
		});
	}catch(err){
		res.status(400).json({
			status: 'Fail',
			message: 'Cannot post tour'
		})
	}
}

exports.updateleave = async (req, res) => {
	try{
		const leave = await leaveModel.findByIdAndUpdate(req.params.id, req.body)

		res.status(200).json({
			status: 'Success',
			data: {
				leave: leave
			}
		})
	}catch(err){
		res.status(400).json({
			status: 'Failed',
			message: 'Could not update tour'
		});
	}
}

exports.deleteleave = async (req, res) => {
	
	try {
		await leaveModel.findByIdAndDelete(req.params.id)
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