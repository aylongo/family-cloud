const fs = require("fs");

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

exports.uploadFile = async (newFile, newFilePath) => {
  try {
    await fs.appendFileSync(`${newFilePath}/${newFile.name}`, newFile.data);
  } catch (err) {
    throw err;
  }
};