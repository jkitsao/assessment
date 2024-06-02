import connectToDatabase from "../../utils/mongoose";
import Photo from "../../models/Photo";

export default async function handler(req, res) {
  await connectToDatabase();
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const photos = await Photo.find({}).populate("albumId");
        res.status(200).json({ success: true, data: photos });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    case "POST":
      try {
        const photo = await Photo.create(req.body);
        res.status(201).json({ success: true, data: photo });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
