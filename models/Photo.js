import mongoose from "mongoose";

const PhotoSchema = new mongoose.Schema({
  albumId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Album",
    required: [true, "Please provide an album ID"],
  },
  title: {
    type: String,
    required: [true, "Please provide a photo title"],
    maxlength: [100, "Photo title cannot be more than 100 characters"],
  },
  imageUrl: {
    type: String,
    required: [true, "Please provide an image URL"],
  },
});

export default mongoose.models.Photo || mongoose.model("Photo", PhotoSchema);
