const router = require("express").Router();

const {
  getAllThoughts,
  createThought,
  getThoughtById,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

router.route("/").get(getAllThoughts).post(createThought);

router.route("/:thoughtId").get(getThoughtById).put(updateThought).delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;