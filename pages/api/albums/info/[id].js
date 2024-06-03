import connectToDatabase from "../../../../utils/mongoose";
import Album from "../../../../models/Album";

export default async function handler(req, res) {
  const { id } = req.query;

  await connectToDatabase();
  console.log({ id });

  try {
    const albums = await Album.findById(id);

    console.log({ albums });
    if (!albums) {
      return res.status(404).json({ error: "Albums not found" });
    }
    res.status(200).json(albums);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch albums" });
  }
}
