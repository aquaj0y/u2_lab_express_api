const db = require('../db')
const { Movie, Review } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

  // we are finding the Parent data
  // to get their _id
  // to reference for our children
  const wesMovie = await Movie.find(
    { title: 'Astroid City'}
  )
  const wimMovie = await Movie.find(
    { title: 'Perfect Day' }
  )
  const tvShow = await Movie.find(
    { title: 'Twin Peak'})

  const reviews = [
    {
      movie_id: wesMovie[0]._id,
      score: 4,
      comment: "Wes Anderson's shot design can be a little robotic and unnatural but perfection is unnatural"
    },
    {
      movie_id: wesMovie[0]._id,
      score: 5,
      comment: "Great Movie!"
    },
    {
      movie_id: wimMovie[0]._id,
      score: 5,
      comment: "I love everything Wim Wenders does"
    },
    {
      movie_id: wimMovie[0]._id,
      score: 5,
      comment: "Amazing!"
    },
    {
      movie_id: tvShow[0]._id,
      score: 5,
      comment: "The classic 90s tv show"
    },
    {
      movie_id: tvShow[0]._id,
      score: 3,
      comment: "It's over-rated"
    }
  ]
  await Review.insertMany(reviews)
  console.log("Created Reviews!")
}

const run = async () => {
 await main() 
 db.close()
}

run()
