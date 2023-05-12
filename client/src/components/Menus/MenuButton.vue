<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="true"
    :nudge-width="250"
    rounded="xl"
    left
    bottom
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        @click.right.prevent="menu = !menu"
        icon
      >
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>

    <v-list class="font-family">
      <v-list-item v-for="(item, key) in items" :key="key" dense>
        <v-list-item-icon>
          <v-icon class="list-item-icon" left>
            {{ item.icon }}
          </v-icon>
        </v-list-item-icon>

        <v-list-item-title class="list-item-title">
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
  data: () => ({
    menu: false
  }),
  methods: {},
};
</script>

<style scoped>
@import "../../utils/styles/index.css";

.list-item-icon {
  color: #000;
  size: 25;
}
.list-item-title {
  font-size: smaller;
  font-weight: normal;
}
</style>
