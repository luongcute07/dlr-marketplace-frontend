<template>
  <div class="documents-page">
    <!-- HEADER -->
    <section class="page-header">
      <div class="container">
        <h2 class="fw-bold mb-2">Tài liệu bán chạy</h2>
        <p class="text-muted mb-0">
          Những tài liệu được nhiều người tin dùng và lựa chọn nhất
        </p>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="py-5">
      <div class="container">
        <div class="row g-4">
          <div
            v-for="doc in documents"
            :key="doc.id"
            class="col-lg-3 col-md-4 col-sm-6"
          >
            <div class="card h-100 shadow-sm document-card">
              <div class="badge bg-danger position-absolute m-2">
                Bán chạy
              </div>
              <img
                :src="doc.thumbnail"
                class="card-img-top"
                alt="document"
              />
              <div class="card-body d-flex flex-column">
                <h6 class="fw-bold">{{ doc.title }}</h6>

                <div class="text-warning small mb-1">
                  ⭐ {{ doc.rating }} | {{ doc.sold }} lượt mua
                </div>

                <p class="text-muted small mb-2">
                  {{ doc.category }}
                </p>

                <div class="mt-auto">
                  <p class="fw-bold text-primary mb-2">
                    {{ formatPrice(doc.price) }}
                  </p>
                  <router-link
                    :to="`/documents/${doc.id}`"
                    class="btn btn-primary w-100"
                  >
                    Mua ngay
                  </router-link>
                </div>
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
  name: "PopularDocuments",
  data() {
    return {
      documents: [
        {
          id: 10,
          title: "Fullstack Web Roadmap 2025",
          category: "Lập trình",
          price: 129000,
          rating: 4.9,
          sold: 520,
          thumbnail: "https://via.placeholder.com/300x200",
        },
        {
          id: 11,
          title: "Luyện SQL phỏng vấn",
          category: "Database",
          price: 89000,
          rating: 4.8,
          sold: 410,
          thumbnail: "https://via.placeholder.com/300x200",
        },
        {
          id: 12,
          title: "JavaScript nâng cao",
          category: "Frontend",
          price: 99000,
          rating: 4.7,
          sold: 360,
          thumbnail: "https://via.placeholder.com/300x200",
        },
        {
          id: 13,
          title: "Thuật toán & cấu trúc dữ liệu",
          category: "CS Core",
          price: 149000,
          rating: 4.9,
          sold: 610,
          thumbnail: "https://via.placeholder.com/300x200",
        },
      ],
    };
  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString("vi-VN") + "₫";
    },
  },
};
</script>

<style scoped>
.page-header {
  background: #f8f9fa;
  padding: 40px 0;
}

.document-card {
  position: relative;
}

.document-card img {
  height: 180px;
  object-fit: cover;
}
</style>
