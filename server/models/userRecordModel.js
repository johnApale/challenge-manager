const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserRecordSchema = new Schema(
  {
    participant: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
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

module.exports = mongoose.model("UserRecord", UserRecordSchema);
