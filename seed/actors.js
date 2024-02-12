const db = require('../db')
const { Actor } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const actors = [
    {
      name: "Jason Schwartzman",
      age: 38,
      isAlive: true
    },
    {
      name: "Maya Hawke",
      age: 22,
      isAlive: true
    },
    {
      name: "Maya Hawke",
      age: 22,
      isAlive: true
    }
  ]
  await Actor.insertMany(actors)
  console.log("Created Actors!")
}

const run = async () => {
 await main() 
 db.close()
}

run()
