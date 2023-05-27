const Media = require("../models/Media");

exports.getAll = async (req, res) => {
  try {
    const media = await Media.find();

    res.json(media);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

exports.postVideo = async (req, res) => {
  console.log("Here I am in Media create");
  const { name } = req.body;
  let videosPath = [];

  if (Array.isArray(req.files.videos) && req.files.videos.length > 0) {
    for (let video of req.files.videos) {
      console.log(video.path)
      videosPath.push("/" + video.path);
    }
  }

  try {
    console.log("Here I am in Media create");
    const createdMedia = await Media.create({
      name,
      videos: videosPath,
    });
    res.status(200).json({ message: "Media created successfully", createdMedia });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
