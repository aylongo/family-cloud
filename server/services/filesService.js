const filesRepository = require("../repositories/filesRepository");
const { getFullFilePath } = require("../utils/functions");

exports.getFilesOnPath = async (fileRelativePath) => {
  try {
    const filesPath = getFullFilePath(fileRelativePath);

    return (await filesRepository.getFilesOnPath(filesPath))
      .filter(({ fileName }) => !fileName.startsWith("."))
      .map(({ fileName, fileStats }) => ({
        name: fileName,
        path: fileRelativePath || "",
        size: fileStats.size,
        createdAt: fileStats.birthtime,
        isDirectory: fileStats.isDirectory(),
      }));
  } catch (err) {
    throw err;
  }
};

exports.uploadFile = async (newFile, fileName) => {
  try {
    fileName && (newFile.name = fileName);
    await filesRepository.uploadFile(newFile);
  } catch (err) {
    throw err;
  }
};
