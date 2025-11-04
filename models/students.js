import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    required: false,
  },
  grade: {
    type: String,
    required: false,
  },
  major: {
    type: String,
    required: false,
  },
}, { timestamps: true });

// Avoid OverwriteError during dev with hot reload
export default mongoose.models.Student || mongoose.model('Student', StudentSchema);