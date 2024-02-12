const db = require('../db')
const { Movie } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const movies  = [
    {
      title: "Astroid City",
      runtime: 120,
      rating: 5,
      yearReleased: 2022,
      logline: "Astroid City is in the desert which exteroirial phenomenones happen."
    },
    {
      title: "Twin Peak",
      runtime: 110,
      rating: 3,
      yearReleased: 1990,
      logline: "Twin Peak is actually a TV show."
    },
    {
      title: "Perfect Day",
      runtime: 120,
      rating: 5,
      yearReleased: 2023,
      logline: "Wim Wenders 2023 new work"
    },
  ]
  await Movie.insertMany(movies)
  console.log("Created Movies!")
}

const run = async () => {
 await main() 
 db.close()
}

run()
