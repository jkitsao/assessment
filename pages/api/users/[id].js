import connectToDatabase from "../../../utils/mongoose";
import User from "../../../models/User";

export default async function handler(req, res) {
  const { id } = req.query;

  await connectToDatabase();

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
}
