const router = require('express').Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
  updateUser,

} = require('../../controllers/userController');

// /api/students
router.route('/')
  .get(getUsers)
  .post(createUser);

// /api/students/:studentId
router.route('/:userId')
  .get(getSingleUser)
  .delete(deleteUser)
  .put(updateUser);

// /api/students/:studentId/assignments
router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;
