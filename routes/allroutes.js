const express = require('express');
const complaintController = require('../controllers/complaintController');
const studentController = require('../controllers/studentController');
const leaveController = require('./../controllers/leaveController')


const router = express.Router();

router.route('/complaint/')
    .get(complaintController.getAllComplaints)
    .post(complaintController.postcomplaint)

router.route('/complaint/:id')
    .get(complaintController.getComplaint)
    .patch(complaintController.updatecomplaint)
    .delete(complaintController.deletecomplaint)

router.route('/student/')
    .get(studentController.getAllStudents)
    .post(studentController.poststudent)

router.route('/student/:id')
    .get(studentController.getstudent)
    .patch(studentController.updatestudent)
    .delete(studentController.deletestudent)

router.route('/leave/')
    .get(leaveController.getAllLeaves)
    .post(leaveController.postleave)

router.route('/leave/:id')
    .get(leaveController.getLeave)
    .patch(leaveController.updateleave)
    .delete(leaveController.deleteleave)

module.exports = router;