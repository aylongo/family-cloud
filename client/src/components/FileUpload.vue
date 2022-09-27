<template>
  <v-container class="file-upload">
    <v-sheet color="blue-grey lighten-5" rounded="xl">
      <v-row>
        <v-col class="text-center">
          <span class="text-h7"> העלאת קבצים לענן </span>
        </v-col>
      </v-row>

      <v-form ref="form" @submit.prevent="uploadFile()">
        <v-row>
          <v-col>
            <v-file-input
              type="file"
              class="px-12"
              counter
              show-size
              chips
              multiple
              label="הכנס קובץ"
              v-model="files"
              truncate-length="50"
            ></v-file-input>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="d-flex justify-center">
            <v-btn
              class="ma-1 white--text"
              :loading="loading"
              :disabled="loading || !isFileAdded"
              type="submit"
              color="indigo lighten-3"
              elevation="0"
              fab
            >
              <v-icon> mdi-cloud-upload </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-sheet>
  </v-container>
</template>

<script>
const api = require("../api/api.js");
const FormData = require("form-data");

export default {
  name: "FileUpload",
  data: () => ({
    loader: null,
    loading: false,
    files: [],
  }),
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];
      setTimeout(() => (this[l] = false), 3000);
      this.loader = null;
    },
  },
  methods: {
    async uploadFile() {
      this.loader = "loading";

      const filesData = new FormData();

      filesData.append("newFile", [...this.files][0]);

      try {
        await api.files().upload(filesData);

        this.$toast.success("הקובץ הועלה");
      } catch (err) {
        this.$toast.error("העלאת הקובץ נכשלה");
      }
    },
  },
  computed: {
    isFileAdded() {
      return this.files.length > 0;
    },
  },
};
</script>

<style scoped>
.file-upload {
  font-family: "Heebo";
}
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
.ajs-success {
  font-family: "Heebo";
}
</style>
