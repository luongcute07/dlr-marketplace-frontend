<template>
  <main class="popular-books">
    <!-- HERO -->
    <section class="hero-section text-white text-center">
      <div class="container">
        <h1 class="fw-bold mb-3">
          Sách bán chạy nhất hiện nay (Best Seller Books)
        </h1>
        <p class="lead mb-0">
          Tổng hợp những cuốn sách được nhiều người đọc, đánh giá cao và mua nhiều nhất
        </p>
      </div>
    </section>

    <!-- SEO INTRO -->
    <section class="container my-5">
      <p class="text-muted">
        Trang <strong>sách bán chạy nhất</strong> tổng hợp các đầu sách nổi bật thuộc nhiều lĩnh vực
        như <strong>lập trình</strong>, <strong>phát triển bản thân</strong>,
        <strong>marketing</strong> và <strong>thiết kế</strong>.
        Mỗi cuốn sách đều được chọn lọc dựa trên mức độ phổ biến, đánh giá của độc giả
        và giá trị nội dung thực tế.
      </p>
      <p class="text-muted">
        Bạn có thể xem <strong>review chi tiết từng cuốn sách</strong>, đánh giá sao
        và truy cập liên kết mua uy tín để tham khảo thêm.
      </p>
    </section>

    <!-- BOOK LIST -->
    <section class="pb-5">
      <div class="container">
        <h2 class="fw-bold mb-4">📚 Danh sách sách bán chạy</h2>

        <div class="row g-4">
          <div
            class="col-lg-3 col-md-4 col-sm-6"
            v-for="book in books"
            :key="book.id"
          >
            <article class="card h-100 shadow-sm book-card">
              <img
                :src="book.image"
                class="card-img-top"
                :alt="`Review sách ${book.title}`"
                loading="lazy"
              />

              <div class="card-body d-flex flex-column">
                <!-- Internal link SEO -->
                <router-link
                  :to="book.reviewLink"
                  class="text-decoration-none text-dark"
                >
                  <h3 class="h6 fw-bold mb-1">
                    {{ book.title }}
                  </h3>
                </router-link>

                <p class="text-muted small mb-2">
                  Thể loại: {{ book.category }}
                </p>

                <!-- Rating -->
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

                <!-- Affiliate link -->
                <a
                  :href="book.affiliateLink"
                  target="_blank"
                  rel="nofollow sponsored"
                  class="btn btn-primary w-100 mt-2"
                >
                  Mua ngay
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { useHead } from '@vueuse/head'

export default {
  name: 'PopularBooks',
  setup() {
    useHead({
      title: 'Sách bán chạy nhất hiện nay | Review & Đánh giá chi tiết',
      meta: [
        {
          name: 'description',
          content:
            'Danh sách sách bán chạy nhất hiện nay gồm Clean Code, Atomic Habits, Design Thinking. Review ngắn gọn, đánh giá sao và link mua uy tín.',
        },
      ],
    })
  },
  data() {
    return {
      books: [
        {
          id: 1,
          title: 'Clean Code',
          category: 'Lập trình',
          rating: 5,
          description:
            'Cuốn sách kinh điển giúp lập trình viên viết code sạch, dễ đọc, dễ bảo trì và mở rộng.',
          image: 'https://images-na.ssl-images-amazon.com/images/I/41SH-SvWPxL.jpg',
          affiliateLink: 'https://amzn.to/your-affiliate-link',
          reviewLink: '/review/review-clean-code',
        },
        {
          id: 2,
          title: 'Atomic Habits',
          category: 'Phát triển bản thân',
          rating: 5,
          description:
            'Hướng dẫn xây dựng thói quen tốt mỗi ngày và loại bỏ thói quen xấu một cách khoa học.',
          image: 'https://images-na.ssl-images-amazon.com/images/I/51-uspgqWIL.jpg',
          affiliateLink: 'https://amzn.to/your-affiliate-link',
          reviewLink: '/review/review-atomic-habits',
        },
        {
          id: 3,
          title: 'Design Thinking',
          category: 'Thiết kế',
          rating: 4,
          description:
            'Giới thiệu tư duy thiết kế giúp giải quyết vấn đề sáng tạo và hiệu quả hơn.',
          image:
            'https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale,dpr_1.5/jackets/9781350305069.jpg',
          affiliateLink: 'https://amzn.to/your-affiliate-link',
          reviewLink: '/review/review-design-thinking',
        },
        {
          id: 4,
          title: 'Digital Marketing 101',
          category: 'Marketing',
          rating: 4,
          description:
            'Kiến thức marketing số nền tảng dành cho người mới bắt đầu và sinh viên.',
          image:
            'https://bookvandar.com/wp-content/uploads/2021/09/Digital-Marketing-101.jpg',
          affiliateLink: 'https://amzn.to/your-affiliate-link',
          reviewLink: '/review/review-digital-marketing-101',
        },
      ],
    }
  },
}
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
