//we are pulling in a thing called a Schema, using more of those Mongoose modules we installed
const db = require('../db')
const { Schema } = require('mongoose')


//creating a new Object called a Actor, that follows the rules that Mongoose defines through the schema
const Review = new Schema(
  {
    movie_id: { type: Schema.Types.ObjectId, ref: 'Movie' },
    score: { type: Number, required: true },
    comment:  { type: String, required: true }
  },
  { timestamps: true }
)

//exporting this thing called a Actor and all of its information so other files can use it
module.exports = Review