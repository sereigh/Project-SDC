const mongoose = require("mongoose");
const { questionsSchema } = require("./Question.js");

exports.productsSchema = mongoose.Schema(
  {
    product_id: { type: Number, index: { unique: true } },
    results: [
      {
        type: mongoose.Schema.Types.Number,
        ref: "Question",
      },
    ],
  },
  { _id: false }
);
