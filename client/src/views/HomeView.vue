<template>
  <v-container @click.right.prevent>
    <v-row justify="center">
      <v-col>
        <file-view />
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col>
        <file-search />
      </v-col>
      <v-col>
        <file-upload />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FileUpload from "@/components/FileUpload.vue";
import FileSearch from "@/components/FileSearch.vue";
import FileView from "@/components/FileView.vue";

export default {
  name: "HomeView",
  components: {
    FileUpload,
    FileSearch,
    FileView,
  },
};
</script>
