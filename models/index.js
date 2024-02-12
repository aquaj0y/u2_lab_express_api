const mongoose = require('mongoose')
const ActorSchema = require('./actor')
const MovieSchema = require('./movie')
const ReviewSchema = require('./review')

// Create a model using that schema. 
// two argument, name and schema reference
const Actor = mongoose.model('Actor', ActorSchema)
const Movie = mongoose.model('Movie', MovieSchema)
const Review = mongoose.model('Review', ReviewSchema)

module.exports = {
  Actor,
  Movie,
  Review
}
