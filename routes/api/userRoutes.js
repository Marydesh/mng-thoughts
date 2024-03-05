const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createStudent,
  deleteStudent,
  addAssignment,
  removeAssignment,
} = require('../../controllers/userController');

// /api/students
router.route('/').get(getUsers)
  .get(getUsers)
  .post(createStudent);

// /api/students/:studentId
router.route('/:userId')
  .get(getSingleUser)
  .delete(deleteStudent);

// /api/students/:studentId/assignments
router.route('/:studentId/assignments')
  .post(addAssignment);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;
