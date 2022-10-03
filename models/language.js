import mongoose from "mongoose"

const Schema = mongoose.Schema

const languageSchema = new Schema({
  language: String,
  difficulty: String,
  structure: String,
  conjugation: Boolean,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const Language = mongoose.model('Language', languageSchema)

export {
  Language
}