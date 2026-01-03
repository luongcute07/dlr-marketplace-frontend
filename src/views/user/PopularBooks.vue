<template>
  <div class="popular-books">
    <!-- HERO -->
    <section class="hero-section text-white text-center">
      <div class="container">
        <h1 class="fw-bold mb-3">📈 Sách bán chạy</h1>
        <p class="lead mb-0">
          Những cuốn sách được nhiều người lựa chọn và đánh giá cao
        </p>
      </div>
    </section>

    <!-- BOOK LIST -->
    <section class="py-5">
      <div class="container">
        <div class="row g-4">
          <div
            class="col-lg-3 col-md-4 col-sm-6"
            v-for="book in books"
            :key="book.id"
          >
            <div class="card h-100 shadow-sm book-card">
              <img
                :src="book.image"
                class="card-img-top"
                :alt="book.title"
              />

              <div class="card-body d-flex flex-column">
                <h6 class="fw-bold">{{ book.title }}</h6>
                <p class="text-muted small mb-2">{{ book.category }}</p>

                <div class="mb-2">
                  <i
                    v-for="n in 5"
                    :key="n"
                    class="bi"
                    :class="n <= book.rating ? 'bi-star-fill text-warning' : 'bi-star text-muted'"
                  ></i>
                </div>

                <p class="text-muted small flex-grow-1">
                  {{ book.description }}
                </p>

                <a
                  :href="book.affiliateLink"
                  target="_blank"
                  class="btn btn-primary w-100 mt-2"
                >
                  Mua ngay
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "PopularBooks",
  data() {
    return {
      books: [
        {
          id: 1,
          title: "Clean Code",
          category: "Lập trình",
          rating: 5,
          description: "Cuốn sách kinh điển giúp viết code sạch, dễ bảo trì.",
          image: "https://images-na.ssl-images-amazon.com/images/I/41SH-SvWPxL.jpg",
          affiliateLink: "https://amzn.to/your-affiliate-link",
        },
        {
          id: 2,
          title: "Atomic Habits",
          category: "Phát triển bản thân",
          rating: 5,
          description: "Xây dựng thói quen tốt và loại bỏ thói quen xấu.",
          image: "https://images-na.ssl-images-amazon.com/images/I/51-uspgqWIL.jpg",
          affiliateLink: "https://amzn.to/your-affiliate-link",
        },
        {
          id: 3,
          title: "Design Thinking",
          category: "Thiết kế",
          rating: 4,
          description: "Tư duy thiết kế để giải quyết vấn đề hiệu quả.",
          image: "https://images-na.ssl-images-amazon.com/images/I/41p9F8N6xTL.jpg",
          affiliateLink: "https://amzn.to/your-affiliate-link",
        },
        {
          id: 4,
          title: "Digital Marketing 101",
          category: "Marketing",
          rating: 4,
          description: "Kiến thức nền tảng cho người mới bắt đầu marketing.",
          image: "https://images-na.ssl-images-amazon.com/images/I/51QpG1JQxDL.jpg",
          affiliateLink: "https://amzn.to/your-affiliate-link",
        },
      ],
    };
  },
};
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #0d6efd, #4f8dfd);
  padding: 70px 0;
}

.book-card img {
  height: 260px;
  object-fit: cover;
}

.book-card {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.book-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
}
</style>
