const axiosInstance = require("./axiosInstance.js");

module.exports = {
  files: () => ({
    get: async (filesPath) => {
      const filesPromise = await axiosInstance.get("/files", {
        params: { filesPath },
      });

      return filesPromise.data;
    },
    upload: async (newFile) => {
      return await axiosInstance.post("/files/upload", newFile);
    },
    download: async (filePath) => {
      if (filePath) {
        return await axiosInstance.get("/files/download", {
          params: { filePath },
          responseType: "blob",
        });
      } else {
        throw new Error("לא ניתן להוריד את הקובץ");
      }
    },
  }),
};
