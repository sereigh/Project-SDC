const mongoose = require("mongoose");
const { answersSchema } = require("./Answer.js");

exports.questionsSchema = mongoose.Schema(
  {
    product_id: {
      type: mongoose.Schema.Types.Number,
      ref: "Product",
    },
    question_id: { type: Number, index: { unique: true } },
    question_body: { type: String, unique: true },
    question_date: { type: Date, default: Date.now },
    asker_name: String,
    asker_email: String,
    question_helpfulness: { type: Number, default: 0 },
    report: { type: Boolean, default: false },
    answers: [
      {
        type: mongoose.Schema.Types.Number,
        ref: "Answer",
      },
    ],
  },
  { _id: false }
);
