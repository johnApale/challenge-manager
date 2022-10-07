const Challenge = require("../models/challengeModel");
const mongoose = require("mongoose");

// get all challenges
const getAllChallenges = async (req, res) => {
  const challenges = await Challenge.find({});
  res.status(200).json(challenges);
};

// get challenge by id
const getChallenge = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Challenge not found" });
  }

  const challenge = await Challenge.findById(id);

  if (!challenge) {
    return res.status(404).json({ error: "Challenge not found" });
  }

  res.status(200).json(challenge);
};

// create new challenge
const createChallenge = async (req, res) => {
  const { name, start, end, buyIn, admin, contestants } = req.body;

  // add doc to db
  try {
    const challenge = await Challenge.create({
      name,
      start,
      end,
      buyIn,
      contestants,
      admin,
    });
    res.status(200).json(challenge);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a challenge
const deleteChallenge = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Challenge not found" });
  }

  const challenge = await Challenge.findOneAndDelete({ _id: id });

  if (!challenge) {
    return res.status(400).json({ error: "Challenge not found" });
  }

  res.status(200).json(challenge);
};

// add participant to challenge
const addParticpant = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Challenge not found" });
  }
  const challenge = await Challenge.findOneAndUpdate(
    { _id: id },
    {
      $addToSet: {
        ...req.body,
      },
    }
  );
  if (!challenge) {
    return res.status(400).json({ error: "Challenge not found" });
  }

  res.status(200).json(challenge);
};

// update a person
const updateChallenge = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Challenge not found" });
  }

  const challenge = await Challenge.findByOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!challenge) {
    return res.status(400).json({ error: "Challenge not found" });
  }

  res.status(200).json(challenge);
};

module.exports = {
  getAllChallenges,
  getChallenge,
  createChallenge,
  deleteChallenge,
  updateChallenge,
  addParticpant,
};
