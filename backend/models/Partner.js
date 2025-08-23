import mongoose from "mongoose";

const partnerSchema = new mongoose.Schema({
  name: String,
  organization: String,
  email: String,
  phone:String,
  message:String,
  createdAt: { type: Date, default: Date.now },
});

const Partner = mongoose.model("Partner", partnerSchema);

export default Partner;
