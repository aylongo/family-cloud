<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col>
        <file-search />
      </v-col>

      <v-col>
        <file-upload />
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col>
        <file-view />
      </v-col>
    </v-row>

    <div class="text-center pa-8">
      <h2>משימות שנשארו</h2>
      <p>
        עדכון המסך לאחר העלאה/מחיקה של קבצים
        <br />
        למחוק קבצים
        <br />
        לעבור בין תיקיות ולהיכנס לתיקיות
        <br />
        לחפש קבצים
        <br />
        עדכון קובץ אם הועלה קובץ קיים (לדרוס את המידע הקיים בקובץ במידע החדש.
        כרגע המידע נוסף לסוף הקובץ)
        <br />
        שיפור עיצוב
        <br />
        להעלות קבצים בעברית
      </p>
    </div>
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
