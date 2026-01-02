<template>
  <div>
    <!-- ================= HERO SECTION ================= -->
    <section class="bg-primary text-white py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <h1 class="fw-bold display-5">
              Digital Learning Resource Marketplace
            </h1>
            <p class="mt-4 fs-5">
              Nền tảng mua bán tài liệu học tập số giúp sinh viên và người đi làm
              học nhanh hơn – đúng trọng tâm – tiết kiệm thời gian.
            </p>
            <div class="mt-4">
              <router-link to="/documents" class="btn btn-light btn-lg me-3">
                Khám phá tài liệu
              </router-link>
              <router-link to="/register" class="btn btn-outline-light btn-lg">
                Đăng ký miễn phí
              </router-link>
            </div>
          </div>

          <div class="col-md-6 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4149/4149658.png"
              class="img-fluid"
              style="max-height: 360px"
              alt="Learning"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ================= TARGET USERS ================= -->
    <section class="py-5">
      <div class="container text-center">
        <h2 class="fw-bold">Nền tảng dành cho ai?</h2>
        <p class="mt-3 text-muted">
          Digital Learning Resource Marketplace được xây dựng để phục vụ nhiều nhóm người học khác nhau
        </p>

        <div class="row mt-4">
          <div class="col-md-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h5 class="card-title">🎓 Sinh viên</h5>
                <p class="card-text">
                  Tìm kiếm tài liệu ôn tập, slide, đề cương, bài tập
                  giúp học hiệu quả và tiết kiệm thời gian.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h5 class="card-title">💼 Người đi làm</h5>
                <p class="card-text">
                  Cập nhật kiến thức chuyên môn, tài liệu ngắn gọn,
                  phục vụ cho công việc và phát triển kỹ năng.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h5 class="card-title">📚 Người học tự do</h5>
                <p class="card-text">
                  Học tập linh hoạt theo nhu cầu cá nhân,
                  truy cập tài liệu mọi lúc, mọi nơi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= FEATURES ================= -->
    <section class="bg-light py-5">
      <div class="container">
        <h2 class="fw-bold text-center">Tính năng nổi bật</h2>

        <div class="row mt-5">
          <div class="col-md-3 text-center">
            <i class="bi bi-file-earmark-pdf fs-1 text-primary"></i>
            <h5 class="mt-3">Tài liệu số</h5>
            <p>
              File PDF chất lượng cao, dễ đọc, dễ tải về và sử dụng lâu dài.
            </p>
          </div>

          <div class="col-md-3 text-center">
            <i class="bi bi-cart-check fs-1 text-primary"></i>
            <h5 class="mt-3">Mua nhanh</h5>
            <p>
              Quy trình mua tài liệu đơn giản, chỉ vài bước là có thể tải ngay.
            </p>
          </div>

          <div class="col-md-3 text-center">
            <i class="bi bi-shield-lock fs-1 text-primary"></i>
            <h5 class="mt-3">Bảo mật</h5>
            <p>
              Hệ thống xác thực đảm bảo chỉ người đã thanh toán mới truy cập tài liệu.
            </p>
          </div>

          <div class="col-md-3 text-center">
            <i class="bi bi-bar-chart fs-1 text-primary"></i>
            <h5 class="mt-3">Quản lý</h5>
            <p>
              Trang Admin hỗ trợ quản lý tài liệu, đơn hàng và doanh thu.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= HOW IT WORKS ================= -->
    <section class="py-5">
      <div class="container">
        <h2 class="fw-bold text-center">Quy trình mua tài liệu</h2>

        <div class="row mt-4 text-center">
          <div class="col-md-3">
            <h1 class="text-primary">1</h1>
            <p>Đăng ký / Đăng nhập tài khoản</p>
          </div>
          <div class="col-md-3">
            <h1 class="text-primary">2</h1>
            <p>Chọn tài liệu phù hợp nhu cầu</p>
          </div>
          <div class="col-md-3">
            <h1 class="text-primary">3</h1>
            <p>Thanh toán đơn hàng</p>
          </div>
          <div class="col-md-3">
            <h1 class="text-primary">4</h1>
            <p>Tải tài liệu và sử dụng</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= ABOUT PROJECT ================= -->
    <section class="bg-light py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <h2 class="fw-bold">Về dự án</h2>
            <p class="mt-3">
              Digital Learning Resource Marketplace là một ứng dụng web fullstack
              được xây dựng nhằm giải quyết nhu cầu mua và phân phối tài liệu học tập số.
            </p>
            <p>
              Dự án áp dụng các công nghệ hiện đại như VueJS, RESTful API,
              JWT Authentication và cơ sở dữ liệu có khả năng mở rộng.
            </p>
            <p>
              Đây không chỉ là một bài tập học thuật mà còn là nền tảng
              có thể triển khai thực tế và phát triển thành sản phẩm thương mại.
            </p>
          </div>

          <div class="col-md-6 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3406/3406973.png"
              class="img-fluid"
              style="max-height: 300px"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ================= CTA ================= -->
    <section class="py-5 text-center">
      <div class="container">
        <h2 class="fw-bold">Bắt đầu học tập hiệu quả ngay hôm nay</h2>
        <p class="mt-3">
          Tham gia nền tảng và truy cập kho tài liệu học tập số chất lượng cao.
        </p>
        <router-link to="/documents" class="btn btn-primary btn-lg mt-3">
          Truy cập kho tài liệu
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
