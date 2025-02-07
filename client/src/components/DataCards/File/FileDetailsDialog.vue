<template>
  <v-dialog
    v-model="isVisible"
    width="35vw"
    transition="scale-transition"
    @click:outside="handleClickOutside"
  >
    <v-card class="font-family dialog-card-container">
      <v-card-title class="dialog-card-title">
        <v-icon class="ml-3" large>{{ icon }}</v-icon>
        {{ name }}
      </v-card-title>
      <v-card-text class="dialog-card-body">
        <div>
          <strong>נוסף ב: </strong>
          <span>{{ createdAt }}</span>
        </div>
        <div>
          <strong>גודל: </strong>
          <span dir="ltr">{{ size }}</span>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "FileDetailsDialog",
  props: {
    name: String,
    icon: String,
    size: String,
    createdAt: String,
    showDialog: Boolean,
  },
  data: () => ({
    isVisible: false,
  }),
  watch: {
    showDialog(newValue) {
      this.isVisible = newValue;
    },
  },
  methods: {
    handleClickOutside() {
      this.$emit("update:showDialog", false); // emit event to parent when dialog is toggled
    },
  },
  created() {
    this.isVisible = this.showDialog;
  },
};
</script>

<style scoped>
@import "../../../utils/styles/index.css";
</style>
