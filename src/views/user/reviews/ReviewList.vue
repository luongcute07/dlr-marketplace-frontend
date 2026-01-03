<template>
  <div class="review-list-page">
    <!-- HERO -->
    <section class="bg-light py-5 text-center">
      <div class="container">
        <h1 class="fw-bold mb-3">
          Review Sách Hay Nên Đọc
        </h1>
        <p class="text-muted fs-5">
          Tổng hợp review sách học tập, phát triển bản thân & kỹ năng
          được chọn lọc bởi LearnBooks
        </p>
      </div>
    </section>

    <!-- BLOG LIST -->
    <section class="container py-5">
      <div class="row g-4">
        <div
          class="col-md-4"
          v-for="post in reviews"
          :key="post.id"
        >
          <div class="card h-100 shadow-sm review-card">
            <img
              :src="post.image"
              :alt="post.title"
              class="card-img-top"
            />

            <div class="card-body d-flex flex-column">
              <span class="badge bg-primary mb-2">
                {{ post.category }}
              </span>

              <h2 class="fs-5 fw-bold">
                {{ post.title }}
              </h2>

              <p class="text-muted small flex-grow-1">
                {{ post.excerpt }}
              </p>

              <router-link
                :to="`/review/${post.slug}`"
                class="btn btn-outline-primary btn-sm mt-2"
              >
                Đọc review →
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const reviews = [
  {
    id: 1,
    title: "Review sách Clean Code – Có đáng đọc cho lập trình viên?",
    slug: "review-clean-code",
    category: "Lập trình",
    image: "https://via.placeholder.com/400x250",
    excerpt:
      "Clean Code là cuốn sách kinh điển giúp lập trình viên viết code sạch, dễ đọc và dễ bảo trì. Nhưng liệu có phù hợp cho người mới?"
  },
  {
    id: 2,
    title: "Review Atomic Habits – Thay đổi thói quen có thật sự hiệu quả?",
    slug: "review-atomic-habits",
    category: "Phát triển bản thân",
    image: "https://via.placeholder.com/400x250",
    excerpt:
      "Atomic Habits hướng dẫn cách thay đổi thói quen nhỏ để tạo ra kết quả lớn. Cuốn sách này phù hợp với ai?"
  },
  {
    id: 3,
    title: "Review Deep Work – Bí quyết tập trung sâu trong thời đại xao nhãng",
    slug: "review-deep-work",
    category: "Kỹ năng",
    image: "https://via.placeholder.com/400x250",
    excerpt:
      "Deep Work giúp bạn rèn luyện khả năng tập trung cao độ để làm việc hiệu quả hơn trong thế giới nhiều xao nhãng."
  },
]
</script>

<style scoped>
.review-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.review-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
}
</style>
