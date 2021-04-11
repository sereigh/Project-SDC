const mongoose = require("mongoose");

exports.photosSchema = mongoose.Schema(
  {
    photo_id: { type: Number, index: { unique: true } },
    answer_id: {
      type: mongoose.Schema.Types.Number,
      ref: "Answer",
    },
    url: { type: String, unique: true },
  },
  { _id: false }
);
