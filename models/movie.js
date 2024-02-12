//we are pulling in a thing called a Schema, using more of those Mongoose modules we installed

const { Schema } = require('mongoose')


//creating a new Object called a Actor, that follows the rules that Mongoose defines through the schema
const Movie = new Schema(
  {
    title: { type: String, required: true },
    runtime: { type: Number, required: true },
    rating: { type: Number, required: true }, //should be the average of all review scores
    yearReleased: { type: Number, required: true },
    logline:  { type: String, required: true }
  },
  { timestamps: true }
)

//exporting this thing called a Actor and all of its information so other files can use it
module.exports = Movie