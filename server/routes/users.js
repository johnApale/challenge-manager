const express = require("express");
const {
  createUser,
  getUser,
  getUsers,
  getUsersByChallengeId,
  deleteUser,
  updateUser,
} = require("../controllers/userController");
const { update } = require("../models/userModel");

const router = express.Router();

// GET all people
router.get("/", getUsers);

// GET a single person
router.get("/:id", getUser);

// GET a people by challengeId
router.get("/challenge/:id", getUsersByChallengeId);

// POST a new person
router.post("/", createUser);

// DELETE a new person
router.delete("/:id", deleteUser);

// UPDATE a new person
router.patch("/:id", updateUser);

module.exports = router;
