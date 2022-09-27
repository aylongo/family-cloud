const filesRepository = require("../repositories/filesRepository");

exports.getAll = (name) => {
    return filesRepository.findAll(name);
}

exports.getByName = (name) => {
    return filesRepository.findByName(name);
}