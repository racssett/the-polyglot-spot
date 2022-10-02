import mongoose from "mongoose"

const Schema = mongoose.Schema

const languageSchema = new Schema({
  language: String,
  difficulty: String,
  structure: String,
  conjugation: Boolean,
}, {
  timestamps: true
})

const Language = mongoose.model('Language', languageSchema)

export {
  Language
}