import fileModel from "../models/fileSch.js";

export const uploadImage = async (request, res) => {
  try {
    const fileObj = {
      path: request.file.path,
      name: request.file.originalname,
    };
    const file = await fileModel.create(fileObj);

    res.status(200).json({ path: `http://localhost:8000/file/${file._id}` });
  } catch (error) {
    res.status(500).json("failed to store data");
  }
};
export const downloadImage = async (req, res) => {
  try {
    const file = await fileModel.findById(req.params.fileId);
    file.downloadContent++;

    await file.save();

    res.download(file.path, file.name);
  } catch (error) {
    console.log(error.message);
    res.status(500).json("failed to store data");
  }
};
