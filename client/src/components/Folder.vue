<template>
  <v-container class="folder">
    <v-sheet color="indigo lighten-4" rounded="xl">
      <v-row justify="center">
        <v-col cols="2">
          <v-icon class="pa-3" large>mdi-folder-open</v-icon>
        </v-col>

        <v-col class="d-flex align-center">
          <span class="text-h7 mb-6 mr-4 mt-4">תיקייה</span>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  name: "FolderCard",
};
</script>

<style scoped>
.folder {
  font-family: "Heebo";
}
</style>
