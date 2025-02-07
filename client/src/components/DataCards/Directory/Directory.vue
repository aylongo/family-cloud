<template>
  <v-sheet
    class="clickable-element font-family"
    color="deep-purple lighten-3"
    rounded="xl"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
    @click="enterFolder"
  >
    <v-container absolute clipped right permanent>
      <v-row justify="center">
        <v-col cols="3" class="d-flex justify-center">
          <v-icon class="pa-3" large>{{
            isHover ? "mdi-folder-open" : "mdi-folder"
          }}</v-icon>
        </v-col>

        <v-col class="d-flex align-center text-center">
          <span class="text-h7 text-truncate">{{ name || "תיקייה" }}</span>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "DirectoryCard",
  props: {
    name: String,
    path: String,
    createdAt: String,
  },
  data: () => ({
    isHover: false,
    files: [],
  }),
  methods: {
    async enterFolder() {
      // TODO: use the vuex store to store global variables like the path
    }
  }
};
</script>

<style scoped>
@import "../../../utils/styles/index.css";
</style>
