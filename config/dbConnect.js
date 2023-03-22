import mongoose from 'mongoose'

export const connectDB = (url) => {
  mongoose
    .connect(url)
    .then(() => {
      console.log('connected to the database now ....')
    })
    .catch((err) => {
      console.log(`${err} did not connect to the database`)
    })
}

//module.exports = {connectDB}