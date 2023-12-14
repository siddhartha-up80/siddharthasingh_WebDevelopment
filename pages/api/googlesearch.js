// pages/api/googleSearch.js
import axios from "axios";

export default async function handler(req, res) {
  try {
    const { data } = await axios.get(
      "https://www.googleapis.com/customsearch/v1",
      {
        params: {
          //   key: "AIzaSyAMzSVI2wP5-fqgyo7ZanonDp2N9xSq_NU", 
          key: "AIzaSyAMzSVI2wP5-fqgyo7ZanonDp2N9xSq_NU", 
          cx: "269545214e96044a6", 
          q: req.query.q || "cars",
        },
      }
    );

    res.status(200).json(data);
  } catch (error) {
    console.error("Error searching Google:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
