import mongoose from "mongoose"

const Schema = mongoose.Schema

const countrySchema = new Schema({
  country: String,
  nativeLanguages: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
}, {
  timestamps: true
})

const Country = mongoose.model('Country', countrySchema)

export {
  Country
}