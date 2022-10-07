const User = require("../models/userModel");
const mongoose = require("mongoose");

// get all users
const getUsers = async (req, res) => {
  const users = await User.find({});

  res.status(200).json(users);
};

const getUsersByChallengeId = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.log("error");
    return res.status(404).json({ error: "Challenge not found" });
  }

  const users = await User.find({ challengeId: id });

  if (!users) {
    return res.status(404).json({ error: "Challenge not found" });
  }

  res.status(200).json(users);
};

// get a single user
const getUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "User not found" });
  }

  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.status(200).json(user);
};

// create new user
const createUser = async (req, res) => {
  const { first_name, last_name, email } = req.body;

  // add doc to db
  try {
    const user = await User.create({
      first_name,
      last_name,
      email,
    });
    res.status(200).json(user);
  } catch (error) {
    console.log(req.body);
    res.status(400).json({ error: error.message });
  }
};

// delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "User not found" });
  }

  const user = await User.findOneAndDelete({ _id: id });

  if (!user) {
    return res.status(400).json({ error: "User not found" });
  }

  res.status(200).json(user);
};

// update a user
const updateUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "User not found" });
  }

  const user = await User.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!user) {
    return res.status(400).json({ error: "User not found" });
  }

  res.status(200).json(user);
};

module.exports = {
  getUsers,
  getUsersByChallengeId,
  getUser,
  createUser,
  deleteUser,
  updateUser,
};
