const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  sponsor: {
    type: Boolean,
    required: true,
    default: false
  },
  meeting: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Contact", ContactSchema);
