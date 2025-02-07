<template>
  <div @click.right.prevent>
    <v-app-bar class="nav-bar-text" color="indigo lighten-3" elevation="0" dark>
      <v-icon class="pr-4 pl-3" large>mdi-cloud-tags</v-icon>
      <v-toolbar-title>ענן משפחתי</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped>
@import "../utils/styles/index.css";

.nav-bar-text {
  font-family: "Heebo";
  font-weight: Bold;
}
</style>
