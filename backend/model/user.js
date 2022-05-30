const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entitySchema = mongoose.Schema({
  "provider": "String",
  "id": "String"
});

const userSchema = Schema({
  entity: [entitySchema],
  givenName: {
    type: String
  },
  familyName: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  timestamps: {}
})

module.exports = mongoose.model("user", userSchema)