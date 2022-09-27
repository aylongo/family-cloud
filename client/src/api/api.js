const axiosInstance = require("./axiosInstance.js");

module.exports = {
  files: () => ({
    upload: async (newFile) => {
      return await axiosInstance.post("/files/upload", newFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
  }),
};
