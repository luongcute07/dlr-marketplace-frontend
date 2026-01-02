<template>
  <div class="container my-5">
    <h2 class="fw-bold mb-4">Thanh toán</h2>

    <div class="row">
      <!-- LEFT -->
      <div class="col-md-8">
        <!-- DOCUMENT INFO -->
        <div class="card mb-4 shadow-sm">
          <div class="card-header fw-bold">
            Thông tin tài liệu
          </div>
          <div class="card-body d-flex">
            <img
              :src="document.thumbnail"
              class="rounded me-3"
              width="120"
            />
            <div>
              <h5 class="fw-bold">{{ document.title }}</h5>
              <p class="text-muted mb-1">
                Tác giả: {{ document.author }}
              </p>
              <p class="text-danger fw-bold">
                {{ document.price.toLocaleString() }} đ
              </p>
            </div>
          </div>
        </div>

        <!-- USER INFO -->
        <div class="card shadow-sm">
          <div class="card-header fw-bold">
            Thông tin người mua
          </div>
          <div class="card-body">
            <div class="mb-3">
              <label class="form-label">Họ và tên</label>
              <input
                type="text"
                class="form-control"
                v-model="user.name"
                disabled
              />
            </div>

            <div class="mb-3">
              <label class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                v-model="user.email"
                disabled
              />
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="col-md-4">
        <div class="card shadow-sm">
          <div class="card-header fw-bold">
            Thanh toán
          </div>
          <div class="card-body">
            <!-- PAYMENT METHOD -->
            <div class="mb-3">
              <label class="form-label fw-semibold">
                Phương thức thanh toán
              </label>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="momo"
                  v-model="paymentMethod"
                />
                <label class="form-check-label">
                  Ví MoMo
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="bank"
                  v-model="paymentMethod"
                />
                <label class="form-check-label">
                  Chuyển khoản ngân hàng
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="balance"
                  v-model="paymentMethod"
                />
                <label class="form-check-label">
                  Số dư tài khoản
                </label>
              </div>
            </div>

            <hr />

            <!-- TOTAL -->
            <div class="d-flex justify-content-between mb-2">
              <span>Tạm tính</span>
              <span>{{ document.price.toLocaleString() }} đ</span>
            </div>

            <div class="d-flex justify-content-between fw-bold mb-3">
              <span>Tổng cộng</span>
              <span class="text-danger">
                {{ document.price.toLocaleString() }} đ
              </span>
            </div>

            <button
              class="btn btn-primary w-100"
              :disabled="!paymentMethod"
              @click="confirmPayment"
            >
              Xác nhận thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Checkout",
  data() {
    return {
      document: {
        id: 1,
        title: "Tổng hợp đề cương Lập trình Web",
        author: "DLR Team",
        price: 49000,
        thumbnail:
          "https://via.placeholder.com/300x400?text=Document",
      },
      user: {
        name: "Dương Công Lượng",
        email: "luongdc@example.com",
      },
      paymentMethod: "",
    };
  },
  methods: {
    confirmPayment() {
      alert(
        `Thanh toán thành công bằng phương thức: ${this.paymentMethod}`
      );

      // Sau này:
      // 1. Gọi API tạo đơn hàng
      // 2. Redirect sang trang thành công
      // this.$router.push('/payment-success')
    },
  },
};
</script>
<style scoped>
.card-header {
  background-color: #f8f9fa;
}
</style>
