import connectToDatabase from "../../utils/mongoose";
import Album from "../../models/Album";

export default async function handler(req, res) {
  await connectToDatabase();
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const albums = await Album.find({}).populate("userId");
        res.status(200).json({ success: true, data: albums });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const album = await Album.create(req.body);
        res.status(201).json({ success: true, data: album });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
