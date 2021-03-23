const mongoose = require('mongoose')

exports.reportsSchema = mongoose.Schema({
  id: {type: String, unique: true},
  reports: {type: Number, default: 0},
})
