<template>
  <div class="container my-5">
    <h2 class="fw-bold mb-2">Tài liệu Ngoại ngữ</h2>
    <p class="text-muted mb-4">
      Tiếng Anh, tiếng Nhật, tiếng Hàn – học nhanh, đúng trọng tâm
    </p>

    <div class="row g-4">
      <div v-for="doc in documents" :key="doc.id" class="col-md-4 col-lg-3">
        <DocumentCard :document="doc" />
      </div>
    </div>
  </div>
</template>

<script>
import DocumentCard from "@/components/DocumentCard.vue";

export default {
  name: "Language",
  components: { DocumentCard },
  data() {
    return {
      documents: [
        {
          id: 30,
          title: "Tiếng Nhật N5 tổng hợp",
          description: "Ngữ pháp – từ vựng – bài tập",
          price: 45000,
          thumbnail: "https://via.placeholder.com/300x200",
        },
      ],
    };
  },
};
</script>
