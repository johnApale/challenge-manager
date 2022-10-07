const UserRecord = require("../models/userRecordModel");
const mongoose = require("mongoose");

// get all records
const getAllUsersRecords = async (req, res) => {
  const records = await UserRecord.find({}).sort({ createdAt: -1 });

  res.status(200).json(records);
};

// get a single persons entries
const getUserRecord = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Person not found" });
  }

  const record = await UserRecord.findById(id);

  if (!record) {
    return res.status(404).json({ error: "Person not found" });
  }

  res.status(200).json(record);
};

// create a new user record
const createUserRecord = async (req, res) => {
  const { participant, starting, total_weight, entry_count, entries } =
    req.body;

  // add doc to db
  try {
    const record = await UserRecord.create({
      participant,
      starting,
      total_weight,
      entry_count,
      entries,
    });
    res.status(200).json(record);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a person
const deleteUserRecord = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Person not found" });
  }

  const record = await UserRecord.findOneAndDelete({ _id: id });

  if (!record) {
    return res.status(400).json({ error: "Person not found" });
  }

  res.status(200).json(record);
};

// update a person
const updateUserRecord = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Person not found" });
  }

  const record = await UserRecord.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!record) {
    return res.status(400).json({ error: "Person not found" });
  }

  res.status(200).json(record);
};

module.exports = {
  getAllUsersRecords,
  getUserRecord,
  createUserRecord,
  deleteUserRecord,
  updateUserRecord,
};
