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

exports.uploadFile = async (newFile, fileName, newFileRelativePath) => {
  try {
    fileName && (newFile.name = fileName);
    const newFileFullPath = getFullFilePath(newFileRelativePath);
    await filesRepository.uploadFile(newFile, newFileFullPath);
  } catch (err) {
    throw err;
  }
};
