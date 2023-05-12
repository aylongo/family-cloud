<template>
  <v-menu
    v-model="showMenu"
    :close-on-content-click="true"
    :nudge-width="250"
    rounded="xl"
    transition="slide-y-transition"
    left
    bottom
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" @click.right.prevent="showMenu = !showMenu" icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>

    <v-list class="font-family" flat>
      <v-list-item-group v-model="selectedItem">
        <v-list-item
          v-for="(item, key) in items"
          :key="key"
          @click="handleItemClick(item)"
          @click.right.prevent
          dense
          link
        >
          <v-list-item-icon>
            <v-icon class="list-item-icon" left>
              {{ item.icon }}
            </v-icon>
          </v-list-item-icon>

          <v-list-item-title class="list-item-title">
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
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
    showMenu: false,
    selectedItem: null,
  }),
  methods: {
    handleItemClick(item) {
      item.itemAction();
    }
  },
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
