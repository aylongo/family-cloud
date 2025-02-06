const axios = require("axios");

const FILES_SERVER_URL = process.env.VUE_APP_FILES_SERVER_URL || "http://localhost:3000";

module.exports = axios.create({
  baseURL: FILES_SERVER_URL,
});
