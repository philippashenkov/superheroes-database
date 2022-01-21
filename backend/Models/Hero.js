const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let heroSchema = new Schema({
  name: {
    type: String
  },
  realname: {
    type: String
  },
  rollno: {
    type: String
  },
  catchphrase: {
    type: String
  },
  superpower: {
    type: String
  }
}, {
    collection: 'heroes'
  })

module.exports = mongoose.model('Hero', heroSchema)