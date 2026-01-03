<template>
  <footer class="footer bg-dark text-light pt-5">
    <div class="container">
      <div class="row">
        <!-- BRAND -->
        <div class="col-lg-4 col-md-6 mb-4">
          <h5 class="fw-bold text-primary">LearnBooks</h5>
          <p class="mt-3">
            LearnBooks là website giới thiệu và đánh giá sách chọn lọc dành cho
            sinh viên, người đi làm và những ai yêu thích việc học tập suốt đời.
            Chúng tôi giúp bạn tìm được cuốn sách phù hợp một cách nhanh chóng
            và đáng tin cậy.
          </p>
        </div>

        <!-- QUICK LINKS -->
        <div class="col-lg-2 col-md-6 mb-4">
          <h6 class="fw-bold">Khám phá</h6>
          <ul class="list-unstyled mt-3">
            <li>
              <router-link to="/" class="footer-link">
                Trang chủ
              </router-link>
            </li>
            <li>
              <router-link to="/books/new" class="footer-link">
                Sách mới
              </router-link>
            </li>
            <li>
              <router-link to="/books/popular" class="footer-link">
                Sách bán chạy
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="footer-link">
                Giới thiệu
              </router-link>
            </li>
          </ul>
        </div>

        <!-- CATEGORIES -->
        <div class="col-lg-3 col-md-6 mb-4">
          <h6 class="fw-bold">Danh mục sách</h6>
          <ul class="list-unstyled mt-3">
            <li>
              <router-link to="/category/programming" class="footer-link">
                Lập trình
              </router-link>
            </li>
            <li>
              <router-link to="/category/design" class="footer-link">
                Thiết kế
              </router-link>
            </li>
            <li>
              <router-link to="/category/marketing" class="footer-link">
                Marketing
              </router-link>
            </li>
            <li>
              <router-link to="/category/language" class="footer-link">
                Ngoại ngữ
              </router-link>
            </li>
          </ul>
        </div>

        <!-- CONTACT & DISCLAIMER -->
        <div class="col-lg-3 col-md-6 mb-4">
          <h6 class="fw-bold">Liên hệ</h6>
          <div class="mt-3 ">
            <p class="mb-2">
              <i class="bi bi-envelope me-2"></i>
              contact@learnbooks.vn
            </p>

            <p class="mb-3 small">
              <strong>Lưu ý:</strong> Một số liên kết trên website có thể là
              liên kết tiếp thị liên kết (affiliate). Khi bạn mua sách thông qua
              các liên kết này, chúng tôi có thể nhận được hoa hồng mà không làm
              tăng chi phí của bạn.
            </p>

            <!-- SOCIAL -->
            <div class="d-flex gap-3">
              <a href="#" class="social-icon" title="Facebook">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="#" class="social-icon" title="YouTube">
                <i class="bi bi-youtube"></i>
              </a>
              <a href="#" class="social-icon" title="TikTok">
                <i class="bi bi-tiktok"></i>
              </a>
              <a href="#" class="social-icon" title="GitHub">
                <i class="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr class="border-secondary my-4" />

      <!-- COPYRIGHT -->
      <div class="text-center pb-3">
        <small class="fs-5">
          © 2026 LearnBooks. All rights reserved.
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
