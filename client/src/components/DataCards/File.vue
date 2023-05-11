<template>
  <v-sheet
    class="clickable-element font-family"
    v-bind="attrs"
    v-on="on"
    color="indigo lighten-3"
    rounded="xl"
    @click="downloadFile"
  >
    <v-container>
      <v-row justify="center">
        <v-col cols="3" class="d-flex justify-center">
          <v-icon class="pa-3" large>{{ fileIcon }}</v-icon>
        </v-col>

        <v-col cols="6" class="d-flex align-center text-center">
          <span class="text-h7 text-truncate">{{ fileName }}</span>
        </v-col>

        <v-col cols="3" class="d-flex align-center justify-end">
          <MenuButton :items="[{ title: 'מחיקה', icon: 'mdi-trash-can' }]" />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import MenuButton from "@/components/Menus/MenuButton.vue";
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
  components: {
    MenuButton,
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
    fileExtension() {
      return this.name.split(".").pop();
    },
    fileIcon() {
      return getFileIconByExtension(this.fileExtension);
    },
  },
};
</script>

<style scoped>
@import "../../utils/styles/index.css";
</style>
