const fs = require("fs");

exports.getFilesOnPath = async (filesPath) => {
  try {
    return await fs.readdirSync(filesPath).map((fileName) => ({
      fileName,
      fileStats: fs.statSync(filesPath + "/" + fileName),
    }));
  } catch (error) {
    throw error;
  }
};

exports.uploadFile = async (newFile, newFilePath) => {
  try {
    fs.appendFileSync(`${newFilePath}/${newFile.name}`, newFile.data);
  } catch (error) {
    throw error;
  }
};

exports.deleteFile = async (filePath) => {
  try {
    fs.unlinkSync(filePath);
  } catch (error) {
    throw error;
  }
};
