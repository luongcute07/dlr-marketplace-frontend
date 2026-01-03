<template>
  <section class="container my-5">
    <!-- HEADER / SEO -->
    <header class="mb-4">
      <h1 class="fw-bold mb-2">Tài liệu lập trình</h1>
      <p class="text-muted">
        Tổng hợp <strong>tài liệu lập trình Web, Mobile, Backend</strong>
        từ cơ bản đến nâng cao, phù hợp cho sinh viên và người đi làm IT.
      </p>
    </header>

    <!-- DOCUMENT LIST -->
    <div class="row g-4">
      <div
        v-for="doc in documents"
        :key="doc.id"
        class="col-lg-3 col-md-4 col-sm-6"
      >
        <DocumentCard :document="doc" />
      </div>
    </div>
  </section>
</template>

<script>
import DocumentCard from '@/components/DocumentCard.vue'

export default {
  name: 'Programming',
  components: {
    DocumentCard,
  },
  data() {
    return {
      documents: [
        {
          id: 1,
          title: 'Lập trình Web Fullstack',
          slug: 'lap-trinh-web-fullstack',
          description: 'HTML, CSS, JavaScript, React, Node.js từ A-Z',
          price: 59000,
          thumbnail:
            'https://m.media-amazon.com/images/I/61kT13Rj9SL._SL1180_.jpg',
          level: 'Beginner → Advanced',
        },
        {
          id: 2,
          title: 'Java Spring Boot cơ bản',
          slug: 'java-spring-boot-co-ban',
          description: 'Xây dựng REST API cho doanh nghiệp',
          price: 69000,
          thumbnail:
            'https://m.media-amazon.com/images/I/61kT13Rj9SL._SL1180_.jpg',
          level: 'Beginner',
        },
      ],
    }
  },
}
</script>
