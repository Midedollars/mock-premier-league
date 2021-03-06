const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const FixtureSchema = new Schema(
  {
    teams:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      required: true,
    }],
    date: {
      type: Date,
      required: true
    },
    stadium: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["completed", "pending"],
      default: "pending",
      trim: true,
    },
    homeTeam: {
      type: String,
      trim: true,
    },
    awayTeam: {
      type: String,
      trim: true,
    }
  },
  { timestamps: true }
);
const FixtureModel = mongoose.model("Fixture", FixtureSchema);
module.exports = FixtureModel;