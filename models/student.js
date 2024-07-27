import mongoose from 'mongoose';

const { Schema } = mongoose;

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
     // Ensures no duplicate emails
  },
  batch: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  dsa: {
    type: Number,
    required: true,
  },
  webdev: {
    type: Number,
    required: true,
  },
  react: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: 'not placed', // Default value for status
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});

const Student = mongoose.model('Student', studentSchema);

export default Student;
