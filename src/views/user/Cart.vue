<template>
  <div class="container my-5">
    <h2 class="fw-bold mb-4">Giỏ hàng của bạn</h2>

    <!-- EMPTY CART -->
    <div v-if="cartItems.length === 0" class="text-center py-5">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
        width="120"
        class="mb-3"
      />
      <h5 class="fw-bold">Giỏ hàng đang trống</h5>
      <p class="text-muted">
        Hãy khám phá tài liệu và thêm vào giỏ hàng của bạn
      </p>
      <router-link to="/documents" class="btn btn-primary mt-2">
        Khám phá tài liệu
      </router-link>
    </div>

    <!-- CART CONTENT -->
    <div v-else class="row g-4">
      <!-- LEFT -->
      <div class="col-lg-8">
        <div class="card shadow-sm">
          <div class="card-body">
            <div
              v-for="item in cartItems"
              :key="item.id"
              class="d-flex align-items-center border-bottom py-3"
            >
              <img
                :src="item.thumbnail"
                alt="thumb"
                class="rounded"
                style="width:90px;height:60px;object-fit:cover"
              />

              <div class="ms-3 flex-grow-1">
                <h6 class="fw-bold mb-1">{{ item.title }}</h6>
                <small class="text-muted">
                  {{ item.category }}
                </small>
              </div>

              <div class="text-end">
                <div class="fw-bold text-danger mb-1">
                  {{ formatPrice(item.price) }}
                </div>
                <button
                  class="btn btn-sm btn-outline-danger"
                  @click="removeItem(item.id)"
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="col-lg-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="fw-bold mb-3">Tóm tắt đơn hàng</h5>

            <div class="d-flex justify-content-between mb-2">
              <span>Số lượng tài liệu</span>
              <span>{{ cartItems.length }}</span>
            </div>

            <div class="d-flex justify-content-between mb-3">
              <span>Tạm tính</span>
              <span class="fw-bold">
                {{ formatPrice(totalPrice) }}
              </span>
            </div>

            <hr />

            <button
              class="btn btn-primary w-100"
              @click="goToCheckout"
            >
              Tiến hành thanh toán
            </button>

            <router-link
              to="/documents"
              class="btn btn-outline-secondary w-100 mt-2"
            >
              Tiếp tục mua sắm
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cart",
  data() {
    return {
      cartItems: [
        {
          id: 1,
          title: "Lập trình Web Fullstack",
          category: "Lập trình",
          price: 59000,
          thumbnail: "https://via.placeholder.com/300x200",
        },
        {
          id: 2,
          title: "Tiếng Nhật N5 tổng hợp",
          category: "Ngoại ngữ",
          price: 45000,
          thumbnail: "https://via.placeholder.com/300x200",
        },
      ],
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((sum, item) => sum + item.price, 0);
    },
  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString() + " đ";
    },
    removeItem(id) {
      this.cartItems = this.cartItems.filter(item => item.id !== id);
    },
    goToCheckout() {
      this.$router.push("/checkout");
    },
  },
};
</script>
<style scoped>
.card {
  border-radius: 12px;
}
</style>
