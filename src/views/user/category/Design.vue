<template>
  <div class="container my-5">
    <h2 class="fw-bold mb-2">Tài liệu Thiết kế</h2>
    <p class="text-muted mb-4">
      UI/UX, Figma, Photoshop dành cho người mới và designer
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
  name: "Design",
  components: { DocumentCard },
  data() {
    return {
      documents: [
        {
          id: 10,
          title: "UI/UX cho người mới",
          description: "Nguyên lý thiết kế & thực hành Figma",
          price: 49000,
          thumbnail: "https://via.placeholder.com/300x200",
        },
      ],
    };
  },
};
</script>
