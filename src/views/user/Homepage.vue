<template>
  <div class="home-page">
    <!-- HERO -->
    <section class="hero-section text-white text-center">
      <div class="container">
        <h1 class="fw-bold mb-3">LearnBooks – Khám phá sách hay cho học tập & sự nghiệp</h1>
        <p class="lead mb-4">
          Tuyển chọn sách chất lượng về lập trình, thiết kế, marketing và ngoại ngữ
        </p>
        <router-link to="/categories" class="btn btn-light btn-lg fw-semibold">
          Khám phá ngay
        </router-link>
      </div>
    </section>

    <!-- CATEGORIES -->
    <section class="py-5">
      <div class="container">
        <h2 class="fw-bold text-center mb-5">Danh mục sách</h2>
        <div class="row g-4">
          <div v-for="cat in categories" :key="cat.slug" class="col-md-3">
            <router-link :to="`/category/${cat.slug}`" class="category-card text-decoration-none">
              <div class="card h-100 text-center shadow-sm">
                <div class="card-body"> 
                  <div class="icon mb-3">{{ cat.icon }}</div>
                  <h5 class="fw-bold">{{ cat.name }}</h5>
                  <p class="text-muted small">{{ cat.desc }}</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURED BOOKS -->
    <section class="bg-light py-5">
      <div class="container">
        <h2 class="fw-bold text-center mb-5">Sách nổi bật</h2>
        <div class="row g-4">
          <div v-for="book in featuredBooks" :key="book.id" class="col-md-3">
            <div class="card h-100 shadow-sm">
              <img :src="book.image" class="card-img-top" alt="book" />
              <div class="card-body d-flex flex-column">
                <h6 class="fw-bold">{{ book.title }}</h6>
                <p class="text-muted small mb-2">{{ book.author }}</p>
                <p class="fw-semibold text-primary mb-3">
                  {{ formatPrice(book.price) }}
                </p>
                <router-link :to="`/books/${book.id}`" class="btn btn-outline-primary mt-auto">
                  Xem chi tiết
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- NEW BOOKS SECTION -->
    <section class="py-5 bg-light">
      <div class="container">
        <!-- TITLE -->
        <div class="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 class="fw-bold mb-1">📘 Sách mới ra mắt</h2>
            <p class="text-muted mb-0">Những đầu sách mới nhất được LearnBooks chọn lọc cho bạn</p>
          </div>

          <router-link to="/latest-books" class="btn btn-outline-primary btn-sm">
            Xem tất cả →
          </router-link>
        </div>

        <!-- BOOK LIST -->
        <div class="row g-4">
          <div class="col-lg-3 col-md-4 col-sm-6" v-for="book in newBooks" :key="book.id">
            <div class="card h-100 shadow-sm book-card">
              <img :src="book.image" class="card-img-top" :alt="book.title" />

              <div class="card-body d-flex flex-column">
                <h6 class="fw-bold mb-2">
                  {{ book.title }}
                </h6>

                <p class="text-muted small flex-grow-1">
                  {{ book.shortDesc }}
                </p>

                <router-link :to="`/book/${book.id}`" class="btn btn-primary btn-sm mt-auto">
                  Xem chi tiết
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Review Section -->
    <section class="container py-5">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h3 class="fw-bold">📝 Review sách mới</h3>
        <router-link to="/reviews" class="text-decoration-none"> Xem tất cả → </router-link>
      </div>

      <div class="row g-4">
        <div class="col-md-4" v-for="post in reviewPosts" :key="post.id">
          <div class="card h-100 shadow-sm">
            <img :src="post.image" class="card-img-top" :alt="post.title" />
            <div class="card-body">
              <h6 class="fw-bold">{{ post.title }}</h6>
              <p class="text-muted small">{{ post.excerpt }}</p>
              <router-link :to="`/review/${post.slug}`" class="btn btn-outline-primary btn-sm">
                Đọc review
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Best Seller Section -->
    <section class="bg-light py-5">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h3 class="fw-bold">🔥 Sách bán chạy</h3>
          <router-link to="/best-seller" class="text-decoration-none"> Xem thêm → </router-link>
        </div>

        <div class="row g-4">
          <div class="col-md-3" v-for="book in bestSellers" :key="book.id">
            <div class="card h-100 shadow-sm text-center">
              <img :src="book.image" class="card-img-top" :alt="book.title" />
              <div class="card-body d-flex flex-column">
                <h6 class="fw-bold">{{ book.title }}</h6>
                <p class="text-muted small">{{ book.author }}</p>
                <span class="fw-bold text-danger mb-2">
                  {{ formatPrice(book.price) }}
                </span>

                <a :href="book.affiliateLink" target="_blank" class="btn btn-danger btn-sm mt-auto">
                  Mua ngay
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section text-white text-center py-5">
      <div class="container">
        <h2 class="fw-bold mb-3">Chọn đúng sách – Học nhanh hơn</h2>
        <p class="mb-4">Tất cả sách đều được chọn lọc và gắn link mua uy tín</p>
        <router-link to="/categories" class="btn btn-light btn-lg fw-semibold">
          Xem tất cả sách
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      /* ===== CATEGORIES ===== */
      categories: [
        {
          name: 'Lập trình',
          slug: 'programming',
          icon: '💻',
          desc: 'Web, Backend, Data',
        },
        {
          name: 'Thiết kế',
          slug: 'design',
          icon: '🎨',
          desc: 'UI/UX, Figma',
        },
        {
          name: 'Marketing',
          slug: 'marketing',
          icon: '📈',
          desc: 'Digital, Branding',
        },
        {
          name: 'Ngoại ngữ',
          slug: 'language',
          icon: '🌍',
          desc: 'Anh – Nhật – Hàn',
        },
      ],

      /* ===== FEATURED / POPULAR BOOKS ===== */
      featuredBooks: [
        {
          id: 1,
          title: 'Clean Code',
          author: 'Robert C. Martin',
          price: 199000,
          image: 'https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL.jpg',
        },
        {
          id: 2,
          title: 'You Don’t Know JS',
          author: 'Kyle Simpson',
          price: 179000,
          image: 'https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg',
        },
        {
          id: 3,
          title: 'Design of Everyday Things',
          author: 'Don Norman',
          price: 189000,
          image: 'https://cdn.bookey.app/20200329135906185/20201017173000155.jpg',
        },
        {
          id: 4,
          title: 'Atomic Habits',
          author: 'James Clear',
          price: 159000,
          image: 'https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg',
        },
      ],

      /* ===== NEW BOOKS ===== */
      newBooks: [
        {
          id: 101,
          title: 'Clean Code (Bản cập nhật)',
          image: 'https://elpythonista.com/wp-content/uploads/2020/10/Clean_Code-portada-1024x576.jpg',
          shortDesc: 'Nguyên tắc viết code sạch cho lập trình viên hiện đại.',
        },
        {
          id: 102,
          title: 'Atomic Habits',
          image: 'https://cdn2.penguin.com.au/covers/original/9781473565425.jpg',
          shortDesc: 'Thay đổi thói quen nhỏ để đạt kết quả lớn.',
        },
        {
          id: 103,
          title: 'Deep Work',
          image: 'https://i0.wp.com/readingraphics.com/wp-content/uploads/2019/02/Deep-Work-Book-Summary-Cover-2.png?w=2480&ssl=1',
          shortDesc: 'Tập trung sâu để đạt hiệu suất vượt trội.',
        },
        {
          id: 104,
          title: 'Design Thinking',
          image: 'https://m.media-amazon.com/images/I/41bQYSSE1bL.jpg',
          shortDesc: 'Tư duy thiết kế dành cho người làm sáng tạo.',
        },
      ],

      reviewPosts: [
        {
          id: 1,
          title: 'Review Clean Code – Có đáng đọc?',
          slug: 'review-clean-code',
          excerpt: 'Cuốn sách kinh điển cho lập trình viên về code sạch...',
          image: 'https://elpythonista.com/wp-content/uploads/2020/10/Clean_Code-portada-1024x576.jpg',
        },
        {
          id: 2,
          title: 'Atomic Habits – Thay đổi cuộc sống',
          slug: 'atomic-habits-review',
          excerpt: 'Những thói quen nhỏ tạo nên thành công lớn...',
          image: 'https://cdn2.penguin.com.au/covers/original/9781473565425.jpg',
        },
        {
          id: 3,
          title: 'Deep Work – Tập trung trong kỷ nguyên số',
          slug: 'deep-work-review',
          excerpt: 'Làm thế nào để làm việc sâu giữa vô vàn xao nhãng?',
          image: 'https://i0.wp.com/readingraphics.com/wp-content/uploads/2019/02/Deep-Work-Book-Summary-Cover-2.png?w=2480&ssl=1',
        },
      ],
      bestSellers: [
        {
          id: 1,
          title: 'Atomic Habits',
          author: 'James Clear',
          price: 159000,
          image: 'https://cdn2.penguin.com.au/covers/original/9781473565425.jpg',
          affiliateLink: '#',
        },
        {
          id: 2,
          title: 'Clean Code',
          author: 'Robert C. Martin',
          price: 199000,
          image: 'https://elpythonista.com/wp-content/uploads/2020/10/Clean_Code-portada-1024x576.jpg',
          affiliateLink: '#',
        },
        {
          id: 3,
          title: 'Deep Work',
          author: 'Cal Newport',
          price: 179000,
          image: 'https://i0.wp.com/readingraphics.com/wp-content/uploads/2019/02/Deep-Work-Book-Summary-Cover-2.png?w=2480&ssl=1',
          affiliateLink: '#',
        },
        {
          id: 4,
          title: 'Design Thinking',
          author: 'Tim Brown',
          price: 189000,
          image: 'https://m.media-amazon.com/images/I/41bQYSSE1bL.jpg',
          affiliateLink: '#',
        },
      ],
    }
  },

  methods: {
    formatPrice(price) {
      return price.toLocaleString('vi-VN') + ' ₫'
    },
  },
}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #0d6efd, #4f8dfd);
  padding: 90px 0;
}

.category-card .icon {
  font-size: 40px;
}

.cta-section {
  background: linear-gradient(135deg, #0d6efd, #4f8dfd);
}

<style scoped > .book-card {
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.book-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

.card-img-top {
  height: 280px;
  object-fit: cover;
}
</style>
