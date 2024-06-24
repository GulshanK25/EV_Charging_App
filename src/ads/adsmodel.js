// models/adsmodel.js
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const adSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  postedBy: {
    type: mongoose.Schema.Types.String,
    ref: 'Registration',
    required: true
  }
});

const Ad = model('Ad', adSchema);

export default Ad;
