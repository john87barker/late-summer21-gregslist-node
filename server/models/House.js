import mongoose from 'mongoose'
const Schema = mongoose.Schema

const House = new Schema(
  {
    year: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    levels: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    imgUrl: { type: String, default: '//place-puppy.com', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default House
