<template>
  <div class="container my-5">
    <h2 class="fw-bold mb-2">Tài liệu Lập trình</h2>
    <p class="text-muted mb-4">
      Tổng hợp tài liệu lập trình Web, Mobile, Backend từ cơ bản đến nâng cao
    </p>

    <div class="row g-4">
      <div
        v-for="doc in documents"
        :key="doc.id"
        class="col-md-4 col-lg-3"
      >
        <DocumentCard :document="doc" />
      </div>
    </div>
  </div>
</template>

<script>
import DocumentCard from "@/components/DocumentCard.vue";

export default {
  name: "Programming",
  components: { DocumentCard },
  data() {
    return {
      documents: [
        {
          id: 1,
          title: "Lập trình Web Fullstack",
          description: "HTML, CSS, JS, React, Node.js từ A-Z",
          price: 59000,
          thumbnail: "https://via.placeholder.com/300x200",
        },
        {
          id: 2,
          title: "Java Spring Boot cơ bản",
          description: "Xây dựng REST API cho doanh nghiệp",
          price: 69000,
          thumbnail: "https://via.placeholder.com/300x200",
        },
      ],
    };
  },
};
</script>
