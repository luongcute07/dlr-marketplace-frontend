<template>
  <section class="container my-5">
    <!-- SEO Header -->
    <header class="mb-4 text-center text-md-start">
      <h1 class="fw-bold mb-2">Tài liệu thiết kế (Design)</h1>
      <p class="text-muted">
        Tổng hợp <strong>tài liệu thiết kế UI/UX, Figma, Branding</strong>
        từ cơ bản đến nâng cao – dành cho designer và sinh viên ngành sáng tạo.
      </p>
    </header>

    <!-- Documents List -->
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

<script setup>
import { ref } from 'vue'
import { useHead } from '@vueuse/head'
import DocumentCard from '@/components/DocumentCard.vue'

/* ================= SEO ================= */
useHead({
  title: 'Tài liệu thiết kế UI/UX, Figma, Branding | LearnBooks',
  meta: [
    {
      name: 'description',
      content:
        'Kho tài liệu thiết kế UI/UX, Figma, Branding từ cơ bản đến nâng cao. Phù hợp cho designer, sinh viên và người làm sáng tạo.',
    },
    {
      name: 'keywords',
      content:
        'tài liệu thiết kế, ui ux, figma, branding, học thiết kế',
    },
  ],
})

/* ================= DATA ================= */
const documents = ref([
  {
    id: 1,
    title: 'UI/UX Design Fundamentals',
    slug: 'ui-ux-design-fundamentals',
    description: 'Nền tảng UI/UX: layout, màu sắc, typography, user flow',
    price: 59000,
    thumbnail:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiaK1dIsD85A_SEFLUR4cZYFHejgEpcgmGq5B9L31k02IZ0fnfcHP5gf73Km26uCDrl2y_fTFGfHJFUj3BBd3GqgF93PLQ0CNqr9aBmeyFAR-Yu2klSCe9oHvVsw8_OVf9rDIKN_xgzBTcV1uosMy8FBCo3TAnXnSa1m5PkUNq_euzt8cHBCVGwwHCk/s3508/figma.png',
    level: 'Beginner',
  },
  {
    id: 2,
    title: 'Figma từ cơ bản đến nâng cao',
    slug: 'figma-tu-co-ban-den-nang-cao',
    description: 'Thiết kế giao diện, prototype và design system bằng Figma',
    price: 69000,
    thumbnail:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiaK1dIsD85A_SEFLUR4cZYFHejgEpcgmGq5B9L31k02IZ0fnfcHP5gf73Km26uCDrl2y_fTFGfHJFUj3BBd3GqgF93PLQ0CNqr9aBmeyFAR-Yu2klSCe9oHvVsw8_OVf9rDIKN_xgzBTcV1uosMy8FBCo3TAnXnSa1m5PkUNq_euzt8cHBCVGwwHCk/s3508/figma.png',
    level: 'Beginner → Intermediate',
  },
  {
    id: 3,
    title: 'Branding & Visual Identity',
    slug: 'branding-visual-identity',
    description: 'Xây dựng thương hiệu và nhận diện hình ảnh chuyên nghiệp',
    price: 79000,
    thumbnail:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiaK1dIsD85A_SEFLUR4cZYFHejgEpcgmGq5B9L31k02IZ0fnfcHP5gf73Km26uCDrl2y_fTFGfHJFUj3BBd3GqgF93PLQ0CNqr9aBmeyFAR-Yu2klSCe9oHvVsw8_OVf9rDIKN_xgzBTcV1uosMy8FBCo3TAnXnSa1m5PkUNq_euzt8cHBCVGwwHCk/s3508/figma.png',
    level: 'Intermediate',
  },
])
</script>
