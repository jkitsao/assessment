import mongoose from "mongoose";

const AlbumSchema = new mongoose.Schema({
  albumId: {
    type: String,
    required: [true, "Please provide an album ID"],
    unique: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide a user ID"],
  },
  title: {
    type: String,
    required: [true, "Please provide an album title"],
    maxlength: [100, "Album title cannot be more than 100 characters"],
  },
});

export default mongoose.models.Album || mongoose.model("Album", AlbumSchema);
