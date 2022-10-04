import mongoose from 'mongoose'

const Schema = mongoose.Schema

const languageLearnerSchema = new Schema({
  language: String,
  proficiency: String,
  time: Number,
  unit: String,
}, {
  timestamps: true
})

const profileSchema = new Schema({
  name: String,
  avatar: String,
  languagesSpoken: [languageLearnerSchema],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
