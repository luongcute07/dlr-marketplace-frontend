<template>
  <section class="container my-5">
    <!-- HEADER / SEO -->
    <header class="mb-4">
      <h1 class="fw-bold mb-2">Tài liệu Ngoại ngữ</h1>
      <p class="text-muted">
        Kho <strong>tài liệu học ngoại ngữ</strong>:
        Tiếng Anh, Tiếng Nhật, Tiếng Hàn từ cơ bản đến nâng cao,
        phù hợp cho học tập và công việc.
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
  name: 'Language',
  components: { DocumentCard },
  data() {
    return {
      documents: [
        {
          id: 1,
          title: 'Tiếng Anh giao tiếp cho người mới',
          slug: 'tieng-anh-giao-tiep-co-ban',
          description: 'Phát âm, phản xạ giao tiếp hàng ngày',
          price: 49000,
          thumbnail:
            'https://mcbooks.vn/wp-content/uploads/2023/07/Bia-3D-tap-viet-tieng-Nhat-tap-2.jpg',
          level: 'Beginner',
        },
        {
          id: 2,
          title: 'Tiếng Nhật N5 – N4',
          slug: 'tieng-nhat-n5-n4',
          description: 'Ngữ pháp, từ vựng, Kanji nền tảng',
          price: 59000,
          thumbnail:
            'https://mcbooks.vn/wp-content/uploads/2023/07/Bia-3D-tap-viet-tieng-Nhat-tap-2.jpg',
          level: 'Beginner → Intermediate',
        },
        {
          id: 3,
          title: 'Tiếng Anh chuyên ngành IT',
          slug: 'tieng-anh-chuyen-nganh-it',
          description: 'Từ vựng, tài liệu, phỏng vấn IT',
          price: 69000,
          thumbnail:
            'https://mcbooks.vn/wp-content/uploads/2023/07/Bia-3D-tap-viet-tieng-Nhat-tap-2.jpg',
          level: 'Intermediate',
        },
      ],
    }
  },
}
</script>
