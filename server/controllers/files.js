const express = require("express");
const router = express.Router();
const fs = require("fs");

const filesService = require("../services/filesService");

const FILES_PATH = "files";

router.post("/upload", async (req, res, next) => {
  try {
    if (!req.body) {
      throw new Error("File not found");
    } else {
      const newFile = req.files.newFile;

      fs.appendFileSync(`${FILES_PATH}/${newFile.name}`, newFile.data);

      res.send();
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send();
  }

  res.send();
});

router.get("/download", (req, res, next) => {});

router.get("/all", async (req, res, next) => {
  res.send(filesService.getAll());
});

module.exports = router;
