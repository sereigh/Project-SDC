const mongoose = require('mongoose')

const reportSchema = mongoose.Schema({
  id: {type: String, unique: true},
  reports: {type: Number, default: 0},
}, { _id : false })

const Report = mongoose.model('Report', reportSchema);

module.exports = Report
