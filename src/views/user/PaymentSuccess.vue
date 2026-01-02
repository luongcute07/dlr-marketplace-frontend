<template>
  <div class="container my-5 text-center">
    <div class="card shadow-sm p-5">
      <div class="mb-4">
        <i class="bi bi-check-circle-fill text-success display-1"></i>
      </div>

      <h2 class="fw-bold text-success mb-3">
        Thanh toán thành công!
      </h2>

      <p class="text-muted fs-5 mb-4">
        Cảm ơn bạn đã mua tài liệu tại DLR Marketplace.  
        Bạn có thể tải tài liệu ngay trong mục <strong>Đơn hàng của tôi</strong>.
      </p>

      <!-- ORDER INFO -->
      <div class="bg-light rounded p-4 mb-4 text-start mx-auto" style="max-width: 500px;">
        <p class="mb-1">
          <strong>Mã đơn hàng:</strong> #DLR20260101
        </p>
        <p class="mb-1">
          <strong>Tài liệu:</strong> Tổng hợp đề cương Lập trình Web
        </p>
        <p class="mb-1">
          <strong>Thanh toán:</strong> Ví MoMo
        </p>
        <p class="mb-0">
          <strong>Tổng tiền:</strong>
          <span class="text-danger fw-bold">49.000 đ</span>
        </p>
      </div>

      <!-- ACTION -->
      <div class="d-flex justify-content-center gap-3">
        <router-link to="/my-orders" class="btn btn-primary">
          Xem đơn hàng
        </router-link>
        <router-link to="/documents" class="btn btn-outline-secondary">
          Tiếp tục mua
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentSuccess",
};
</script>
