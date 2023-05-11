<template>
  <v-sheet
    class="background-sheet font-family"
    color="grey lighten-4"
    rounded="xl"
  >
    <v-container>
      <v-row>
        <v-col>
          <h4 class="font-family text-center text-h7 font-weight-medium">
            {{ `הנתיב הנוכחי: /${currentPath}` }}
          </h4>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="font-weight-medium" justify="start">
          <span class="text-h7 pa-3">תיקיות</span>
        </v-col>
      </v-row>

      <v-row justify="start">
        <v-col
          class="data-card"
          v-for="(directory, key) in directoriesOnPath"
          :key="key"
        >
          <directory
            :name="directory.name"
            :path="directory.path"
            :createdAt="directory.createdAt"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col class="font-weight-medium" justify="start">
          <span class="text-h7 pa-3">קבצים</span>
        </v-col>
      </v-row>

      <v-row justify="start">
        <v-col class="data-card" v-for="(file, key) in filesOnPath" :key="key">
          <file
            :name="file.name"
            :path="file.path"
            :size="file.size"
            :createdAt="file.createdAt"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import File from "@/components/DataCards/File.vue";
import Directory from "@/components/DataCards/Directory.vue";

const api = require("../api/api.js");

export default {
  name: "FileView",
  components: {
    File,
    Directory,
  },
  data: () => ({
    currentPath: "",
    files: [],
  }),
  watch: {
    async currentPath() {
      this.files = await this.getFilesOnPath(this.currentPath);
    },
  },
  methods: {
    async getFilesOnPath(filesPath) {
      return await api.files().get(filesPath);
    },
  },
  computed: {
    filesOnPath() {
      return this.files.filter((file) => !file.isDirectory);
    },
    directoriesOnPath() {
      return this.files.filter((file) => file.isDirectory);
    },
  },
  async created() {
    this.files = await this.getFilesOnPath(this.currentPath);
  },
};
</script>

<style scoped>
@import "../utils/styles/index.css";

.data-card {
  position: relative;
  min-width: 350px;
  max-width: 350px;
}
</style>
