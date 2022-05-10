export default function handler(req, res) {
  res.send("Bearer " +  req.query["access_token"]);
}

// This endpoint is for development purposes only. It's use is for getting an Spotify access token to be used in the API.