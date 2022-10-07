const express = require("express");
const {
  getAllChallenges,
  getChallenge,
  createChallenge,
  deleteChallenge,
  updateChallenge,
  addParticpant,
} = require("../controllers/challengeController");
const { update } = require("../models/challengeModel");

const router = express.Router();

// GET all challenges
router.get("/", getAllChallenges);

// GET a single challenge
router.get("/:id", getChallenge);

// POST a new challenge
router.post("/", createChallenge);

// DELETE a challenge
router.delete("/:id", deleteChallenge);

// PATCH a challenge
router.patch("/add-user/:id", addParticpant);

// PUT a challenge
router.put("/:id", updateChallenge);

module.exports = router;
