<template>
  <v-sheet
    class="clickable-element font-family"
    color="indigo lighten-3"
    rounded="xl"
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
          <menu-button :items="menuItems" />
          <file-details-dialog
            :name="fileName"
            :icon="fileIcon"
            :size="fileFormattedSize"
            :createdAt="fileFormattedCreatedAt"
            :showDialog="isDetailsDialogShown"
            @update:showDialog="isDetailsDialogShown = $event"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import { format } from "date-fns";
import { he } from "date-fns/locale";
import MenuButton from "@/components/Menus/MenuButton.vue";
import FileDetailsDialog from "./FileDetailsDialog.vue";
import { getFileIconByExtension } from "@/utils/functions";
const api = require("../../../api/api.js");

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
    FileDetailsDialog,
  },
  data: () => ({
    menuItems: [],
    isDetailsDialogShown: false,
  }),
  methods: {
    createDownloadLinkElement(fileData) {
      const url = window.URL.createObjectURL(new Blob([fileData]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", this.name);
      document.body.appendChild(link);

      return link;
    },
    async downloadFile() {
      try {
        const res = await api.files().download(this.fileFormattedPath);

        this.createDownloadLinkElement(res.data).click();
      } catch (error) {
        this.$toast.error(error.message);
      }
    },
    async deleteFile() {
      try {
        await api.files().delete(this.fileFormattedPath);
        this.$toast.success(`הקובץ '${this.fileName}' נמחק`);
      } catch (error) {
        this.$toast.error(error.message);
      }
    },
    openDetailsDialog() {
      this.isDetailsDialogShown = true;
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
    fileFormattedPath() {
      return this.path ? this.path + "/" + this.name : this.name;
    },
    fileFormattedCreatedAt() {
      return format(this.createdAt, "PPPPp", { locale: he });
    },
    fileFormattedSize() {
      if (this.size == 0) return "0 Bytes";

      const kiloByteSize = 1024;
      const sizesNames = [
        `${this.size <= 1 ? "Byte" : "Bytes"}`,
        "KB",
        "MB",
        "GB",
        "TB",
        "PB",
        "EB",
        "ZB",
        "YB",
      ];
      const i = Math.floor(Math.log(this.size) / Math.log(kiloByteSize));

      return (
        parseFloat((this.size / Math.pow(kiloByteSize, i)).toFixed(2)) +
        " " +
        sizesNames[i]
      );
    },
  },
  created() {
    this.menuItems = [
      {
        title: "פרטים נוספים",
        icon: "mdi-information-outline",
        itemAction: this.openDetailsDialog,
      },
      {
        title: "הורדה",
        icon: "mdi-tray-arrow-down",
        itemAction: this.downloadFile,
      },
      {
        title: "מחיקה",
        icon: "mdi-trash-can-outline",
        itemAction: this.deleteFile,
      },
    ];
  },
};
</script>

<style scoped>
@import "../../../utils/styles/index.css";
</style>
