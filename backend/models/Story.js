import mongoose from "mongoose";

const storySchema = new mongoose.Schema({
  title: String,
  district: String,
  practice:{ 
    type: String, 
    enum: ["AWD", "DSR", "Straw Recycling"], 
  },
  summary:String,
  createdAt: { type: Date, default: Date.now },
});

const Story = mongoose.model("Story", storySchema);

export default Story;
