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
  } catch (error) {
    throw error;
  }
};

exports.uploadFile = async (newFile, newFileName, newFileRelativePath) => {
  try {
    newFile.name = newFileName;
    const newFileFullPath = getFullFilePath(newFileRelativePath);
    await filesRepository.uploadFile(newFile, newFileFullPath);
  } catch (error) {
    throw error;
  }
};

exports.deleteFile = async (relativeFilePath) => {
  try {
    const fullFilePath = getFullFilePath(relativeFilePath);
    await filesRepository.deleteFile(fullFilePath);
  } catch (error) {
    throw error;
  }
};
