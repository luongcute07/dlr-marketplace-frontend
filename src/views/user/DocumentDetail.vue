<template>
  <div class="container my-5">
    <div class="row">
      <!-- LEFT: THUMBNAIL -->
      <div class="col-md-4 mb-4">
        <img
          :src="document.thumbnail"
          class="img-fluid rounded shadow-sm"
          alt="Document Thumbnail"
        />
      </div>

      <!-- RIGHT: INFO -->
      <div class="col-md-8">
        <h2 class="fw-bold">{{ document.title }}</h2>

        <p class="text-muted mb-2">
          Danh mục:
          <span class="badge bg-secondary">{{ document.category }}</span>
        </p>

        <div class="d-flex align-items-center mb-3">
          <span class="text-warning me-2">
            ★ {{ document.rating }}
          </span>
          <span class="text-muted">
            ({{ document.sold }} lượt mua)
          </span>
        </div>

        <h3 class="text-danger fw-bold mb-3">
          {{ document.price.toLocaleString() }} đ
        </h3>

        <p class="mb-4">
          {{ document.shortDescription }}
        </p>

        <!-- ACTIONS -->
        <div class="d-flex gap-3 mb-4">
          <button class="btn btn-primary px-4" @click="buyNow">
            Mua ngay
          </button>
          <button class="btn btn-outline-secondary px-4" @click="addToCart">
            Thêm vào giỏ
          </button>
        </div>

        <ul class="list-unstyled text-muted">
          <li>📄 Định dạng: PDF</li>
          <li>📚 Số trang: {{ document.pages }}</li>
          <li>👤 Tác giả: {{ document.author }}</li>
          <li>🕒 Cập nhật: {{ document.updatedAt }}</li>
        </ul>
      </div>
    </div>

    <!-- DESCRIPTION -->
    <div class="mt-5">
      <h4 class="fw-bold mb-3">Mô tả chi tiết</h4>
      <p class="text-muted">
        {{ document.description }}
      </p>
    </div>

    <!-- PREVIEW -->
    <div class="mt-5">
      <h4 class="fw-bold mb-3">Xem trước nội dung</h4>
      <div class="preview-box p-3 rounded">
        <p class="text-muted mb-0">
          {{ document.preview }}
        </p>
      </div>
    </div>

    <!-- RELATED -->
    <div class="mt-5">
      <h4 class="fw-bold mb-4">Tài liệu liên quan</h4>
      <div class="row">
        <div
          class="col-md-3 mb-4"
          v-for="item in relatedDocuments"
          :key="item.id"
        >
          <div class="card h-100 shadow-sm">
            <img :src="item.thumbnail" class="card-img-top" />
            <div class="card-body">
              <h6 class="card-title">{{ item.title }}</h6>
              <p class="text-danger fw-bold mb-0">
                {{ item.price.toLocaleString() }} đ
              </p>
            </div>
            <div class="card-footer bg-white border-0">
              <router-link
                :to="`/documents/${item.id}`"
                class="btn btn-sm btn-outline-primary w-100"
              >
                Xem chi tiết
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DocumentDetail",
  data() {
    return {
      document: {
        id: 1,
        title: "Tổng hợp đề cương Lập trình Web",
        category: "Lập trình",
        price: 49000,
        rating: 4.8,
        sold: 132,
        pages: 120,
        author: "DLR Team",
        updatedAt: "01/01/2026",
        thumbnail:
          "https://via.placeholder.com/400x500?text=Document+Preview",
        shortDescription:
          "Tài liệu tổng hợp kiến thức HTML, CSS, JavaScript và Framework.",
        description:
          "Tài liệu bao gồm toàn bộ kiến thức nền tảng và nâng cao về lập trình web, phù hợp cho sinh viên CNTT và người mới bắt đầu.",
        preview:
          "Chương 1: Giới thiệu Web\nChương 2: HTML cơ bản\nChương 3: CSS Layout...",
      },
      relatedDocuments: [
        {
          id: 2,
          title: "ReactJS từ cơ bản đến nâng cao",
          price: 69000,
          thumbnail:
            "https://via.placeholder.com/300x200?text=ReactJS",
        },
        {
          id: 3,
          title: "NodeJS & Express thực hành",
          price: 59000,
          thumbnail:
            "https://via.placeholder.com/300x200?text=NodeJS",
        },
        {
          id: 4,
          title: "SQL cho người mới bắt đầu",
          price: 39000,
          thumbnail:
            "https://via.placeholder.com/300x200?text=SQL",
        },
      ],
    };
  },
  methods: {
    buyNow() {
      alert("Mua ngay (demo)");
    },
    addToCart() {
      alert("Đã thêm vào giỏ hàng (demo)");
    },
  },
};
</script>
<style scoped>
.preview-box {
  background-color: #f8f9fa;
  border-left: 4px solid #0d6efd;
  white-space: pre-line;
}
</style>
