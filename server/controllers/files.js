const express = require("express");
const router = express.Router();

const filesService = require("../services/filesService");
const { getFullFilePath } = require("../utils/functions");

router.get("", async (req, res, next) => {
  try {
    res.send(await filesService.getFilesOnPath(req.query.filesPath));
  } catch (error) {
    next(error);
  }
});

router.post("/upload", async (req, res, next) => {
  try {
    if (!req.body) {
      throw new Error("File was not found");
    } else {
      filesService.uploadFile(
        req.files.newFile,
        req.body.newFileName,
        req.query.newFilePath
      );

      res.send(req.files.newFile);
    }
  } catch (error) {
    next(error);
  }
});

router.get("/download", async (req, res, next) => {
  try {
    res.download(getFullFilePath(req.query.filePath));
  } catch (error) {
    next(error);
  }
});

router.get("/delete", async (req, res, next) => {
  try {
    filesService.deleteFile(req.query.filePath);
    res.send(req.query.filePath);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
