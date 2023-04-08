<template>
  <v-container class="font-heebo">
    <v-sheet class="background-sheet" color="blue-grey lighten-5" rounded="xl">
      <v-row>
        <v-col class="text-center">
          <span class="text-h7"> חיפוש קבצים בענן </span>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="d-flex justify-center">
          <v-btn
            class="ma-1 white--text"
            :loading="loading"
            :disabled="loading"
            color="indigo lighten-3"
            elevation="0"
            fab
            @click="loader = 'loading'"
          >
            <v-icon dark> mdi-file-search </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  name: "FileUpload",
  data: () => ({
    loader: null,
    loading: false,
  }),
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];
      setTimeout(() => (this[l] = false), 3000);
      this.loader = null;
    },
  },
};
</script>

<style scoped>
@import "../utils/styles/index.css";

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
</style>
