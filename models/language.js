import mongoose from "mongoose"

const Schema = mongoose.Schema

const tipSchema = new Schema({
  content: String,
  creator: {type: Schema.Types.ObjectId, ref: "Profile"},
}, {
  timestamps: true
})

const languageSchema = new Schema({
  language: String,
  difficulty: String,
  structure: String,
  conjugation: Boolean,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  tips: [tipSchema]
}, {
  timestamps: true
})

const Language = mongoose.model('Language', languageSchema)

export {
  Language
}