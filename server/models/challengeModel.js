const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// admin nested schema
const Admin = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  email: String,
  first_name: String,
  last_name: String,
});

// Individual challenge schemas
const ChallengeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contestants: [
      {
        type: Schema.Types.ObjectId,
        ref: "Person",
      },
    ],
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    },
    buyIn: {
      type: Number,
      require: true,
    },
    admin: {
      type: Admin,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Challenge", ChallengeSchema);
