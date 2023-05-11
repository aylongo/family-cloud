<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="true"
    :nudge-width="160"
    bottom
    left
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>

    <v-list class="font-family">
      <v-list-item v-for="(item, key) in items" :key="key">
        <v-list-item-icon>
          <v-icon>
            {{ item.icon }}
          </v-icon>
        </v-list-item-icon>

        <v-list-item-title>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "MenuButton",
  props: {
    items: {
      type: Array,
    },
  },
  methods: {},
};
</script>

<style scoped>
@import "../../utils/styles/index.css";
</style>
