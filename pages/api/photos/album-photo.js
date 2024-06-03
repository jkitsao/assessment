import connectToDatabase from "../../../utils/mongoose";
import Photo from "../../../models/Photo";

export default async function handler(req, res) {
  const { albumId } = req.query;

  await connectToDatabase();

  try {
    const photos = await Photo.find({ albumId });

    if (!photos) {
      return res.status(404).json({ error: "Photos not found" });
    }

    res.status(200).json(photos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch photos" });
  }
}
