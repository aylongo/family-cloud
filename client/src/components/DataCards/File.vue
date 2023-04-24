<template>
  <v-sheet
    v-bind="attrs"
    v-on="on"
    color="indigo lighten-3"
    rounded="xl"
    @click="downloadFile"
    class="clickable-element font-heebo"
  >
    <v-container>
      <v-row justify="center">
        <v-col cols="3" class="d-flex justify-center">
          <v-icon class="pa-3" large>{{ fileIcon }}</v-icon>
        </v-col>

        <v-col cols="6" class="d-flex align-center text-center">
          <span class="text-h7">{{
            isFileNameLengthValid ? fileName : shortenFileName
          }}</span>
        </v-col>

        <v-col cols="3" class="d-flex align-center justify-end">
          <v-menu
            v-model="menu"
            :close-on-content-click="true"
            :nudge-width="150"
            offset-x
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list> </v-list>
          </v-menu>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import { getFileIconByExtension } from "@/utils/functions";
const api = require("../../api/api.js");

export default {
  name: "FileCard",
  props: {
    name: String,
    path: String,
    size: Number,
    createdAt: String,
  },
  methods: {
    async downloadFile() {
      try {
        const res = await api
          .files()
          .download(this.path ? this.path + "/" + this.name : this.name);

        this.createDownloadLinkElement(res.data).click();
      } catch (err) {
        this.$toast.error(err.message);
      }
    },
    createDownloadLinkElement(fileData) {
      const url = window.URL.createObjectURL(new Blob([fileData]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", this.name);
      document.body.appendChild(link);

      return link;
    },
  },
  computed: {
    fileName() {
      return this.name || "קובץ";
    },
    shortenFileName() {
      return this.name.substring(0, 20) + "...";
    },
    fileExtension() {
      return this.name.split(".").pop();
    },
    fileIcon() {
      return getFileIconByExtension(this.fileExtension);
    },
    isFileNameLengthValid() {
      return this.name.length <= 20;
    },
  },
};
</script>

<style scoped>
@import "../../utils/styles/index.css";
</style>
