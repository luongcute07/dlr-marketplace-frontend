<template>
  <div class="documents-page">
    <!-- HEADER -->
    <section class="page-header">
      <div class="container">
        <h2 class="fw-bold mb-2">Tài liệu mới</h2>
        <p class="text-muted mb-0">
          Khám phá những tài liệu học tập mới nhất được cập nhật liên tục
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
              <img
                :src="doc.thumbnail"
                class="card-img-top"
                alt="document"
              />
              <div class="card-body d-flex flex-column">
                <h6 class="fw-bold">{{ doc.title }}</h6>
                <p class="text-muted small mb-2">
                  {{ doc.category }}
                </p>
                <div class="mt-auto">
                  <p class="fw-bold text-primary mb-2">
                    {{ formatPrice(doc.price) }}
                  </p>
                  <router-link
                    to="/document-detail"
                    class="btn btn-outline-primary w-100"
                  >
                    Xem chi tiết
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- LOAD MORE -->
        <div class="text-center mt-5">
          <button class="btn btn-primary px-4">
            Xem thêm tài liệu
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "NewDocuments",
  data() {
    return {
      documents: [
        {
          id: 1,
          title: "ReactJS từ cơ bản đến nâng cao",
          category: "Lập trình",
          price: 99000,
          thumbnail: "https://via.placeholder.com/300x200",
        },
        {
          id: 2,
          title: "Ôn tập SQL cho sinh viên IT",
          category: "Cơ sở dữ liệu",
          price: 79000,
          thumbnail: "https://via.placeholder.com/300x200",
        },
        {
          id: 3,
          title: "HTML & CSS thực hành",
          category: "Frontend",
          price: 49000,
          thumbnail: "https://via.placeholder.com/300x200",
        },
        {
          id: 4,
          title: "Tư duy giải thuật cơ bản",
          category: "Thuật toán",
          price: 89000,
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

.document-card img {
  height: 180px;
  object-fit: cover;
}
</style>
