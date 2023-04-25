const studentModel = require('./../models/studentModel');

exports.getAllStudents = async (req,res) => {
    try {
        const students = await studentModel.find()
        res.status(200).json({
			status: 'Success',
			data: {
				students
			},
		});
    } catch (err) {
        res.status(400).json({
            status: 'Fail',
            err: err
        })       
    }
}

exports.getstudent = async (req, res) => {
	try{
		const student = await studentModel.findById(req.params.id)
		res.status(200).json({
			status: 'Success',
			data: {
				student
			},
		});
	}catch(err){
		res.status(400).json({
			status: 'Fail',
			message: 'Cannot get tour'
		})
	}
}

exports.poststudent = async (req, res) => {
	try{
		const newstudent = await studentModel.create(req.body)
		res.status(201).json({
			status: 'Success',
			data: {
				student: newstudent,
			},
		});
	}catch(err){
		res.status(400).json({
			status: 'Fail',
			message: 'Cannot post tour'
		})
	}
}

exports.updatestudent = async (req, res) => {
	try{
		const student = await studentModel.findByIdAndUpdate(req.params.id, req.body)

		res.status(200).json({
			status: 'Success',
			data: {
				student
			}
		})
	}catch(err){
		res.status(400).json({
			status: 'Failed',
			message: 'Could not update tour'
		});
	}
}

exports.deletestudent = async (req, res) => {
	
	try {
		await studentModel.findByIdAndDelete(req.params.id)
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