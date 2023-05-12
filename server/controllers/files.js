const express = require("express");
const router = express.Router();

const filesService = require("../services/filesService");
const { getFullFilePath } = require("../utils/functions");

router.get("", async (req, res, next) => {
  try {
    res.send(await filesService.getFilesOnPath(req.query.filesPath));
  } catch (err) {
    next(err);
  }
});

router.post("/upload", async (req, res, next) => {
  try {
    if (!req.body) {
      throw new Error("File was not found");
    } else {
      filesService.uploadFile(req.files.newFile, req.body.fileName, req.query.newFilePath);

      res.send(req.files.newFile);
    }
  } catch (err) {
    next(err);
  }
});

router.get("/download", async (req, res, next) => {
  try {
    res.download(getFullFilePath(req.query.filePath));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
