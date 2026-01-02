<template>
  <div class="container my-5">
    <h2 class="fw-bold mb-4">Đơn hàng của tôi</h2>

    <div v-if="orders.length === 0" class="text-center text-muted py-5">
      <i class="bi bi-inbox display-4"></i>
      <p class="mt-3">Bạn chưa mua tài liệu nào</p>
    </div>

    <div v-else class="table-responsive">
      <table class="table align-middle">
        <thead class="table-light">
          <tr>
            <th>Mã đơn</th>
            <th>Tài liệu</th>
            <th>Ngày mua</th>
            <th>Giá</th>
            <th>Trạng thái</th>
            <th class="text-end">Hành động</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>#{{ order.code }}</td>
            <td>
              <strong>{{ order.document }}</strong>
            </td>
            <td>{{ order.date }}</td>
            <td class="text-danger fw-bold">
              {{ order.price.toLocaleString() }} đ
            </td>
            <td>
              <span class="badge bg-success">
                {{ order.status }}
              </span>
            </td>
            <td class="text-end">
              <button class="btn btn-sm btn-outline-primary">
                Tải tài liệu
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyOrders",
  data() {
    return {
      orders: [
        {
          id: 1,
          code: "DLR20260101",
          document: "Tổng hợp đề cương Lập trình Web",
          date: "01/01/2026",
          price: 49000,
          status: "Hoàn thành",
        },
        {
          id: 2,
          code: "DLR20251215",
          document: "Tài liệu SQL cho người mới",
          date: "15/12/2025",
          price: 39000,
          status: "Hoàn thành",
        },
      ],
    };
  },
};
</script>
