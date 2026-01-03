<template>
  <div class="review-page">
    <div class="container py-5">
      <div class="row g-5">
        <!-- LEFT: BOOK IMAGE -->
        <div class="col-md-4 text-center">
          <img
            :src="book.image"
            :alt="book.title"
            class="img-fluid rounded shadow book-image"
          />

          <!-- CTA -->
          <a
            :href="book.affiliateLink"
            target="_blank"
            class="btn btn-danger btn-lg w-100 mt-4 fw-bold"
          >
            🛒 Mua sách ngay
          </a>

          <p class="text-muted small mt-2">
            (* Link affiliate – bạn không tốn thêm chi phí)
          </p>
        </div>

        <!-- RIGHT: CONTENT -->
        <div class="col-md-8">
          <h1 class="fw-bold mb-2">{{ book.title }}</h1>
          <p class="text-muted mb-3">Tác giả: {{ book.author }}</p>

          <!-- RATING -->
          <div class="mb-3">
            <span class="text-warning fs-5">
              ★★★★☆
            </span>
            <span class="ms-2 text-muted">({{ book.rating }}/5)</span>
          </div>

          <!-- SHORT DESC -->
          <p class="fs-5">
            {{ book.shortDesc }}
          </p>

          <hr />

          <!-- REVIEW -->
          <h4 class="fw-bold mb-3">📖 Review chi tiết</h4>
          <p class="text-muted">
            {{ book.review }}
          </p>

          <!-- WHO SHOULD READ -->
          <div class="row mt-4">
            <div class="col-md-6">
              <div class="card h-100 shadow-sm">
                <div class="card-body">
                  <h5 class="fw-bold text-success">
                    ✅ Ai nên đọc?
                  </h5>
                  <ul class="mt-3">
                    <li v-for="(item, index) in book.shouldRead" :key="index">
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card h-100 shadow-sm">
                <div class="card-body">
                  <h5 class="fw-bold text-danger">
                    ❌ Ai KHÔNG nên đọc?
                  </h5>
                  <ul class="mt-3">
                    <li v-for="(item, index) in book.shouldNotRead" :key="index">
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- FINAL CTA -->
          <div class="alert alert-primary mt-4">
            👉 <strong>Kết luận:</strong> Nếu bạn đang tìm một cuốn sách giúp
            <strong>{{ book.benefit }}</strong> thì đây là lựa chọn rất đáng cân nhắc.
          </div>

          <a
            :href="book.affiliateLink"
            target="_blank"
            class="btn btn-primary btn-lg fw-semibold"
          >
            🔥 Xem giá tốt nhất & mua ngay
          </a>
        </div>
      </div>

      <!-- RELATED BOOKS -->
      <div class="mt-5">
        <h3 class="fw-bold mb-4">📚 Sách liên quan</h3>
        <div class="row g-4">
          <div
            class="col-md-3"
            v-for="related in relatedBooks"
            :key="related.id"
          >
            <div class="card h-100 shadow-sm">
              <img :src="related.image" class="card-img-top" />
              <div class="card-body">
                <h6 class="fw-bold">{{ related.title }}</h6>
                <router-link
                  :to="`/review/${related.id}`"
                  class="btn btn-outline-primary btn-sm mt-2"
                >
                  Xem review
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const book = {
  id: 1,
  title: "Clean Code",
  author: "Robert C. Martin",
  rating: 4.7,
  image: "https://via.placeholder.com/400x550",
  shortDesc:
    "Cuốn sách kinh điển giúp lập trình viên viết code dễ đọc, dễ bảo trì và chuyên nghiệp hơn.",
  review:
    "Clean Code không chỉ dạy bạn cách viết code, mà còn thay đổi tư duy lập trình. Cuốn sách phân tích chi tiết các nguyên tắc quan trọng như đặt tên biến, viết hàm, xử lý lỗi và clean architecture. Rất phù hợp cho lập trình viên muốn nâng trình tư duy kỹ thuật.",
  shouldRead: [
    "Sinh viên IT năm 2 trở lên",
    "Lập trình viên Frontend / Backend",
    "Người muốn nâng cao chất lượng code",
  ],
  shouldNotRead: [
    "Người chưa biết lập trình",
    "Người chỉ học code đối phó",
  ],
  benefit: "viết code sạch và chuyên nghiệp",
  affiliateLink: "https://shopee.vn", // link affiliate
}

const relatedBooks = [
  {
    id: 2,
    title: "Refactoring",
    image: "https://via.placeholder.com/300x420",
  },
  {
    id: 3,
    title: "The Pragmatic Programmer",
    image: "https://via.placeholder.com/300x420",
  },
  {
    id: 4,
    title: "Design Patterns",
    image: "https://via.placeholder.com/300x420",
  },
]
</script>

<style scoped>
.book-image {
  max-height: 520px;
  object-fit: cover;
}
</style>
