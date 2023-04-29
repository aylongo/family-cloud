<template>
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
</template>

<script>
export default {};
</script>

<style scoped>
@import "../../utils/styles/index.css";
</style>
