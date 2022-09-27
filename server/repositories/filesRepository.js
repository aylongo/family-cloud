const File = require("../models/file");

exports.findAll = () => {
  return File.find().lean().exec();
};

exports.findById = (fileId) => {
  return File.where("_id").eq(fileId).lean().exec();
};

exports.findByName = (name) => {
  return File.where("name").eq(name).lean().exec();
};
