const router = require("express").Router();

const {
  getAllUsers,
  createUser,
  getUserById,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController.js');

router.route("/").get(getAllUsers).post(createUser);

router.route("/:userId").get(getUserById).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;