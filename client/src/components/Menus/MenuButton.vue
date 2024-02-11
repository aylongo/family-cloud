<template>
  <v-menu
    v-model="showMenu"
    :nudge-width="200"
    rounded="xl"
    transition="scale-transition"
    origin="right top"
    close-on-content-click
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        @click.right.prevent="showMenu = !showMenu"
        icon
      >
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>

    <v-list class="list font-family" flat>
      <v-list-item-group v-model="selectedItem">
        <v-list-item
          v-for="(item, key) in items"
          :key="key"
          class="list-item clickable-element"
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
      item.itemAction && item.itemAction();
    },
  },
};
</script>

<style scoped>
@import "../../utils/styles/index.css";

.list-item:hover {
  background-color: #f5f5f5;
  transition: filter 0.3s;
  filter: contrast(85%);
}
.list-item-icon {
  color: #000;
  size: 25;
}
.list-item-title {
  font-size: smaller;
  font-weight: normal;
}
</style>
