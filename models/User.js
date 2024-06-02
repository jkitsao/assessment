// models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    maxlength: [50, "Name cannot be more than 50 characters"],
  },
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
    maxlength: [30, "Username cannot be more than 30 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
