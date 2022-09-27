<template>
  <div>
    <v-app-bar class="nav-bar" color="indigo" elevation="2" dark>
      <v-icon class="pa-3" large>mdi-cloud-tags</v-icon>
      <v-toolbar-title>ענן משפחתי</v-toolbar-title>

      <v-spacer />

      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-container>
        <v-row>
          <v-col class="text-center">
            <span class="text-h6"> תפריט </span>
          </v-col>
        </v-row>
      </v-container>

      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="indigo--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>בית</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-folder-arrow-up</v-icon>
            </v-list-item-icon>
            <v-list-item-title>העלאה</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
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
.nav-bar {
  font-family: "Heebo";
  font-weight: bold;
}
</style>
