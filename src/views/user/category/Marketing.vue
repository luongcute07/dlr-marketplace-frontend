<template>
  <div class="container my-5">
    <h2 class="fw-bold mb-2">Tài liệu Marketing</h2>
    <p class="text-muted mb-4">
      Digital Marketing, Content, Facebook Ads, SEO thực chiến
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
  name: "Marketing",
  components: { DocumentCard },
  data() {
    return {
      documents: [
        {
          id: 20,
          title: "Digital Marketing căn bản",
          description: "Facebook, Google Ads cho người mới",
          price: 55000,
          thumbnail: "https://via.placeholder.com/300x200",
        },
      ],
    };
  },
};
</script>
