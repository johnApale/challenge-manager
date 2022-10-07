const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User enum
const ROLE = {
  Role: {
    Admin: "admin",
    User: "user",
  },
  PasswordLength: 8,
  PasswordSaltRounds: 12,
};

// nested records
const UserRecordSchema = new Schema(
  {
    starting: {
      type: Number,
      required: true,
    },
    total_weight: {
      type: Number,
      required: true,
    },
    entry_count: {
      type: Number,
      required: true,
    },
    entries: [
      {
        weight: Number,
        time: Date,
      },
    ],
  },
  { timestamps: true }
);

const UserSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
    },
    role: {
      type: String,
      enum: Object.values(ROLE.Role),
    },

    challengeId: {
      type: Schema.Types.ObjectId,
      ref: "Challenge",
    },

    weight_record: {
      type: UserRecordSchema,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
