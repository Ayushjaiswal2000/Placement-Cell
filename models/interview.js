import mongoose from 'mongoose';
const { Schema } = mongoose;

const interviewSchema = new mongoose.Schema({
    company: { type: String, required: true },
    date: { type: String, required: true },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
      }
});



const Interview = mongoose.model('Interview', interviewSchema);
export default Interview;
