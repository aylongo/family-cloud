const axios = require("axios");

const FILES_SERVER_IP = "10.100.102.21" || "localhost";
const PORT = 3000;

module.exports = axios.create({
  baseURL: `http://${FILES_SERVER_IP}:${PORT}`,
});
