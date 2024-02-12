# Steps:

## 1. install mongoose

```sh
npm init -y
npm install mongoose
mkdir db models seed
touch db/index.js models/{index,actor, movie, review}.js seed/{actors,movies,reviews}.js
```

## 2. Mongoose Database Connectioon

./db/index.js

```js
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/movieDatabase")
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
```

## 3. Define Schemas and Generating Models

A schema is a structure, that gives information about how the data is being stored in a collection.

/models/actor.js
/models/movie.js
/models/review.js

(Create parent first, then child so the child can reference the parent's Schema by its id.)

```js
//we are pulling in a thing called a Schema, using more of those Mongoose modules we installed
const { Schema } = require("mongoose");

//creating a new Object called a Actor, that follows the rules that Mongoose defines through the schema
const Actor = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    isAlive: { type: Boolean, required: true },
  },
  { timestamps: true }
);

//exporting this thing called a Actor and all of its information so other files can use it
module.exports = Actor;
```

## 4. index.js file in `models` folder

Then we have to create a model using that schema which is then used to store data in a document as objects.

What is a model?
A model is created by combining a schema with Mongoose's model method.
The model acts as a constructor for creating instances of the documents that can be saved to the database. It also provides instance methods for documents and static methods for collections, allowing for document manipulation and querying.

```js
const mongoose = require("mongoose");
const ActorSchema = require("./actor");
const MovieSchema = require("./movie");
const ReviewSchema = require("./review");

// Create a model using that schema.
// two argument, name and schema reference
const Actor = mongoose.model("Actor", ActorSchema);
const Movie = mongoose.model("Movie", MovieSchema);
const Review = mongoose.model("Review", ReviewSchema);

module.exports = {
  Actor,
  Movie,
  Review,
};
```

## 5. Seeding The Database

/seed/actors.js
/seed/movies.js
/seed/reviews.js

seed db from Parent to Child.
Movie -> Actors
Movie -> Reviews
run `node seed/movie.js`
