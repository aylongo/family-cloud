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
      try {
        return await axiosInstance.post("/files/upload", newFile);
      } catch (error) {
        throw new Error("לא ניתן להעלות את הקובץ");
      }
    },
    download: async (filePath) => {
      try {
        if (filePath) {
          return await axiosInstance.get("/files/download", {
            params: { filePath },
            responseType: "blob",
          });
        } else {
          throw new Error("שגיאה בנתיב הקובץ");
        }
      } catch (error) {
        throw new Error("לא ניתן להוריד את הקובץ");
      }
    },
    delete: async (filePath) => {
      try {
        if (filePath) {
          return await axiosInstance.get("/files/delete", {
            params: { filePath },
          });
        } else {
          throw new Error("שגיאה בנתיב הקובץ");
        }
      } catch (error) {
        throw new Error("לא ניתן למחוק את הקובץ");
      }
    },
  }),
};
