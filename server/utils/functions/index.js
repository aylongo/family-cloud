const { FILES_PATH } = require("../constants");

exports.getFullFilePath = (fileRelativePath) => {
    return fileRelativePath ? FILES_PATH + "/" + fileRelativePath : FILES_PATH;
}