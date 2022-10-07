const express = require("express");
const {
  getAllUsersRecords,
  getUserRecord,
  createUserRecord,
  deleteUserRecord,
  updateUserRecord,
} = require("../controllers/userRecordController");
const { update } = require("../models/userRecordModel");

const router = express.Router();

// GET all records
router.get("/", getAllUsersRecords);

// GET a single record
router.get("/:id", getUserRecord);

// POST a new record
router.post("/", createUserRecord);

// DELETE a new record
router.delete("/:id", deleteUserRecord);

// UPDATE a new record
router.patch("/:id", updateUserRecord);

module.exports = router;
