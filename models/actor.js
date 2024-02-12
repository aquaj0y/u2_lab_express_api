//we are pulling in a thing called a Schema, using more of those Mongoose modules we installed

const { Schema } = require('mongoose')


//creating a new Object called a Actor, that follows the rules that Mongoose defines through the schema
const Actor = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    isAlive: { type: Boolean, required: true }
  },
  { timestamps: true }
)

//exporting this thing called a Actor and all of its information so other files can use it
module.exports = Actor