const express = require('express');
const cors = require('cors');

// import controllers
const movieController = require('./controllers/movieController')
const actorController = require('./controllers/actorController')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => console.log(`Serving up on port ${PORT}`))

app.get('/', (req, res) => {
  console.log('hello movies!')
  res.send('hello movies!')
})

app.get('/movies', movieController.getAllMovies)

