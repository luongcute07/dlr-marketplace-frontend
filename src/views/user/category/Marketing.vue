<template>
  <section class="container my-5">
    <!-- HEADER / SEO -->
    <header class="mb-4">
      <h1 class="fw-bold mb-2">Tài liệu Marketing</h1>
      <p class="text-muted">
        Tổng hợp <strong>tài liệu Marketing Online & Offline</strong>:
        Digital Marketing, SEO, Content, Branding từ cơ bản đến nâng cao.
      </p>
    </header>

    <!-- LIST -->
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
  name: 'Marketing',
  components: { DocumentCard },
  data() {
    return {
      documents: [
        {
          id: 1,
          title: 'Digital Marketing toàn tập',
          slug: 'digital-marketing-toan-tap',
          description: 'SEO, Facebook Ads, Google Ads, Content Marketing',
          price: 59000,
          thumbnail:
            'https://thaythuongdigital.com/wp-content/uploads/2025/04/Digital-Marketing-Facebook-La-Gi_-Toan-Tap-Ve-Digital-Marketing-Facebook-2-2.jpg',
          level: 'Beginner → Advanced',
        },
        {
          id: 2,
          title: 'Content Marketing thực chiến',
          slug: 'content-marketing-thuc-chien',
          description: 'Viết content bán hàng, blog, social hiệu quả',
          price: 49000,
          thumbnail:
            'https://thaythuongdigital.com/wp-content/uploads/2025/04/Digital-Marketing-Facebook-La-Gi_-Toan-Tap-Ve-Digital-Marketing-Facebook-2-2.jpg',
          level: 'Beginner',
        },
        {
          id: 3,
          title: 'SEO Website từ cơ bản đến nâng cao',
          slug: 'seo-website-co-ban-den-nang-cao',
          description: 'Onpage, Offpage, Technical SEO',
          price: 69000,
          thumbnail:
            'https://thaythuongdigital.com/wp-content/uploads/2025/04/Digital-Marketing-Facebook-La-Gi_-Toan-Tap-Ve-Digital-Marketing-Facebook-2-2.jpg',
          level: 'Intermediate',
        },
      ],
    }
  },
}
</script>
