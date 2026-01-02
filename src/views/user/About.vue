<template>
  <div class="about-page">
    <!-- HERO -->
    <section class="about-hero text-white">
      <div class="container text-center">
        <h1 class="fw-bold mb-3">
          Digital Learning Resource Marketplace
        </h1>
        <p class="lead mb-0">
          Nền tảng mua bán tài liệu học tập số – Giải pháp học nhanh, đúng trọng tâm
        </p>
      </div>
    </section>

    <!-- INTRO -->
    <section class="py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10 text-center">
            <h2 class="fw-bold mb-4">DLR Marketplace là gì?</h2>
            <p class="text-muted fs-5">
              <strong>Digital Learning Resource Marketplace</strong> là nền tảng
              thương mại điện tử chuyên cung cấp các <strong>tài liệu học tập số (PDF)</strong>
              dành cho sinh viên và người đi làm.
              <br /><br />
              Thay vì mất hàng giờ tìm kiếm tài liệu rời rạc trên internet,
              người dùng có thể <strong>mua – tải – sử dụng</strong> các tài liệu
              đã được chọn lọc, biên soạn ngắn gọn và đúng trọng tâm chỉ trong vài phút.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE -->
    <section class="bg-light py-5">
      <div class="container">
        <h2 class="fw-bold text-center mb-5">Vì sao nên chọn DLR Marketplace?</h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card h-100 shadow-sm text-center">
              <div class="card-body">
                <h5 class="fw-bold mb-3">Tài liệu chọn lọc</h5>
                <p class="text-muted">
                  Tài liệu được phân loại rõ ràng theo môn học, kỹ năng và lĩnh vực,
                  giúp người học tiếp cận đúng nội dung mình cần.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100 shadow-sm text-center">
              <div class="card-body">
                <h5 class="fw-bold mb-3">Học nhanh – đúng trọng tâm</h5>
                <p class="text-muted">
                  Nội dung được biên soạn ngắn gọn, tập trung vào kiến thức cốt lõi,
                  phù hợp với sinh viên và người đi làm bận rộn.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100 shadow-sm text-center">
              <div class="card-body">
                <h5 class="fw-bold mb-3">Mua và tải ngay</h5>
                <p class="text-muted">
                  Quy trình mua đơn giản, thanh toán nhanh chóng,
                  tải tài liệu ngay sau khi hoàn tất giao dịch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section class="py-5">
      <div class="container">
        <h2 class="fw-bold text-center mb-5">Cách hoạt động</h2>
        <div class="row text-center g-4">
          <div class="col-md-3">
            <div class="step-box shadow-sm">
              <span class="step-number">1</span>
              <p class="fw-semibold mt-3">Tìm tài liệu</p>
              <p class="text-muted">
                Duyệt theo danh mục hoặc tìm kiếm theo từ khóa
              </p>
            </div>
          </div>

          <div class="col-md-3">
            <div class="step-box shadow-sm">
              <span class="step-number">2</span>
              <p class="fw-semibold mt-3">Mua tài liệu</p>
              <p class="text-muted">
                Thêm vào giỏ hàng và tiến hành thanh toán
              </p>
            </div>
          </div>

          <div class="col-md-3">
            <div class="step-box shadow-sm">
              <span class="step-number">3</span>
              <p class="fw-semibold mt-3">Thanh toán</p>
              <p class="text-muted">
                Thanh toán an toàn, minh bạch
              </p>
            </div>
          </div>

          <div class="col-md-3">
            <div class="step-box shadow-sm">
              <span class="step-number">4</span>
              <p class="fw-semibold mt-3">Tải & học</p>
              <p class="text-muted">
                Tải file PDF và sử dụng ngay
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TARGET USERS -->
    <section class="bg-light py-5">
      <div class="container">
        <h2 class="fw-bold text-center mb-5">Ai nên sử dụng DLR Marketplace?</h2>
        <div class="row g-4">
          <div class="col-md-6">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h5 class="fw-bold">Sinh viên</h5>
                <p class="text-muted">
                  Cần tài liệu học tập, ôn thi, làm đồ án và chuẩn bị đi thực tập.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h5 class="fw-bold">Người đi làm</h5>
                <p class="text-muted">
                  Muốn bổ sung kiến thức nhanh để nâng cao kỹ năng và hiệu suất công việc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section text-white text-center py-5">
      <div class="container">
        <h2 class="fw-bold mb-3">Học tập hiệu quả bắt đầu từ tài liệu đúng</h2>
        <p class="mb-4">
          Khám phá ngay kho tài liệu học tập số tại DLR Marketplace
        </p>
        <router-link to="/documents" class="btn btn-light btn-lg fw-semibold">
          Xem tài liệu ngay
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about-hero {
  background: linear-gradient(135deg, #0d6efd, #4f8dfd);
  padding: 80px 0;
}

.step-box {
  background: #ffffff;
  border-radius: 12px;
  padding: 25px;
}

.step-number {
  display: inline-block;
  width: 40px;
  height: 40px;
  background: #0d6efd;
  color: #fff;
  border-radius: 50%;
  line-height: 40px;
  font-weight: bold;
}

.cta-section {
  background: linear-gradient(135deg, #0d6efd, #4f8dfd);
}
</style>
