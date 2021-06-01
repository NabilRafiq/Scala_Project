const mongoose = require('mongoose');

const { Schema } = mongoose;
const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  cast: {
    type: String,
    required: true,
  
    lowercase: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
    lowercase: true,
  },
  image: {
    type: String,
  },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
