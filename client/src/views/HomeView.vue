<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <file-upload />
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="6">
        <file-search />
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="2">
        <file />
      </v-col>

      <v-col cols="2">
        <folder />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FileUpload from "@/components/FileUpload.vue";
import FileSearch from '@/components/FileSearch.vue';
import File from '@/components/File.vue';
import Folder from '@/components/Folder.vue';

export default {
  name: "HomeView",

  components: {
    FileUpload,
    FileSearch,
    File,
    Folder
  },
};
</script>
