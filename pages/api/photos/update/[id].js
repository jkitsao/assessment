import connectToDatabase from "../../../../utils/mongoose";
import Photo from "../../../../models/Photo";

export default async function handler(req, res) {
  const { id } = req.query;
  const { method } = req;

  await connectToDatabase();

  if (method === "PATCH" || method === "PUT") {
    try {
      const { title } = req.body;
      const updatedPhoto = await Photo.findByIdAndUpdate(
        id,
        { title },
        { new: true }
      );

      if (!updatedPhoto) {
        return res.status(404).json({ error: "Photo not found" });
      }

      res.status(200).json(updatedPhoto);
    } catch (error) {
      res.status(500).json({ error: "Failed to update photo" });
    }
  } else {
    res.setHeader("Allow", ["PATCH", "PUT"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
