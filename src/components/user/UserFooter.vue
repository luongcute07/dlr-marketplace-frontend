<template>
  <footer class="footer bg-dark text-light pt-5">
    <div class="container">
      <div class="row">
        <!-- BRAND -->
        <div class="col-lg-4 col-md-6 mb-4">
          <h5 class="fw-bold text-primary">DLR Marketplace</h5>
          <p class="mt-3 text-muted">
            Digital Learning Resource Marketplace – Nền tảng mua bán tài liệu học
            tập số dành cho sinh viên và người đi làm, giúp tiếp cận tri thức
            nhanh chóng, tiết kiệm và hiệu quả.
          </p>
        </div>

        <!-- QUICK LINKS -->
        <div class="col-lg-2 col-md-6 mb-4">
          <h6 class="fw-bold">Liên kết nhanh</h6>
          <ul class="list-unstyled mt-3">
            <li>
              <router-link to="/" class="footer-link">Trang chủ</router-link>
            </li>
            <li>
              <router-link to="/documents" class="footer-link">Tài liệu</router-link>
            </li>
            <li>
              <router-link to="/documents/new" class="footer-link">Tài liệu mới</router-link>
            </li>
            <li>
              <router-link to="/documents/popular" class="footer-link">Bán chạy</router-link>
            </li>
            <li>
              <router-link to="/about" class="footer-link">Giới thiệu</router-link>
            </li>
          </ul>
        </div>

        <!-- SUPPORT -->
        <div class="col-lg-3 col-md-6 mb-4">
          <h6 class="fw-bold">Hỗ trợ</h6>
          <ul class="list-unstyled mt-3">
            <li>
              <a href="#" class="footer-link">Câu hỏi thường gặp (FAQ)</a>
            </li>
            <li>
              <a href="#" class="footer-link">Hướng dẫn mua tài liệu</a>
            </li>
            <li>
              <a href="#" class="footer-link">Điều khoản sử dụng</a>
            </li>
            <li>
              <a href="#" class="footer-link">Chính sách bảo mật</a>
            </li>
          </ul>
        </div>

        <!-- CONTACT -->
        <div class="col-lg-3 col-md-6 mb-4">
          <h6 class="fw-bold">Liên hệ</h6>
          <div class="mt-3 text-muted">
            <p class="mb-2">
              <i class="bi bi-envelope me-2"></i>
              support@dlrmarketplace.com
            </p>
            <p class="mb-2">
              <i class="bi bi-telephone me-2"></i>
              0123 456 789
            </p>
            <p class="mb-3">
              <i class="bi bi-geo-alt me-2"></i>
              Việt Nam
            </p>

            <!-- SOCIAL -->
            <div class="d-flex gap-3">
              <a href="#" class="social-icon">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="bi bi-youtube"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="bi bi-tiktok"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr class="border-secondary my-4" />

      <!-- COPYRIGHT -->
      <div class="text-center pb-3">
        <small class="text-muted">
          © 2026 DLR Marketplace. All rights reserved.
        </small>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "UserFooter",
};
</script>

<style scoped>
.footer {
  font-size: 14px;
  width: 100%;
}

.footer-link {
  color: #adb5bd;
  text-decoration: none;
  display: block;
  margin-bottom: 8px;
  transition: all 0.2s ease;
}

.footer-link:hover {
  color: #ffffff;
  padding-left: 4px;
}

.social-icon {
  color: #adb5bd;
  font-size: 18px;
  transition: all 0.2s ease;
}

.social-icon:hover {
  color: #0d6efd;
  transform: translateY(-2px);
}
</style>
