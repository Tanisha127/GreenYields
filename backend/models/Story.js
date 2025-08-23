import mongoose from "mongoose";

const storySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    district: { type: String, required: true, trim: true },
    practice: { 
      type: String, 
      enum: ["AWD", "DSR", "Straw Recycling"], 
      required: true 
    },
    summary: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

const Story = mongoose.model("Story", storySchema);

export default Story;
