const fs = require("fs");

const File = require("../models/file");
const { FILES_PATH } = require("../utils/constants");

exports.getFilesOnPath = async (filesPath) => {
  try {
    return await fs.readdirSync(filesPath).map((fileName) => ({
      fileName,
      fileStats: fs.statSync(filesPath + "/" + fileName),
    }));
  } catch (err) {
    throw err;
  }
};

exports.uploadFile = async (newFile) => {
  try {
    await fs.appendFileSync(`${FILES_PATH}/${newFile.name}`, newFile.data);
  } catch (err) {
    throw err;
  }
};

// =====

exports.findAll = () => {
  return File.find().lean().exec();
};

exports.findById = (fileId) => {
  return File.where("_id").eq(fileId).lean().exec();
};

exports.findByName = (name) => {
  return File.where("name").eq(name).lean().exec();
};
