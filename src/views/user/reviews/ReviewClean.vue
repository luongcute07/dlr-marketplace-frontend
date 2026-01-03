<template>
  <article class="review-page container py-5">
    <!-- BREADCRUMB -->
    <nav class="mb-4">
      <router-link to="/">Trang chủ</router-link>
      <span class="mx-2">/</span>
      <router-link to="/review">Review sách</router-link>
      <span class="mx-2">/</span>
      <strong>Clean Code</strong>
    </nav>

    <!-- TITLE -->
    <header class="mb-4">
      <h1 class="fw-bold">
        Review sách Clean Code – Cẩm nang viết code sạch mọi lập trình viên nên đọc
      </h1>
      <p class="text-muted">
        Tác giả: Robert C. Martin · Thể loại: Lập trình · Cập nhật 2026
      </p>
    </header>

    <!-- FEATURE IMAGE -->
    <img
      src="https://elpythonista.com/wp-content/uploads/2020/10/Clean_Code-portada-1024x576.jpg"
      alt="Review sách Clean Code"
      class="img-fluid rounded shadow-sm mb-5"
    />

    <!-- CONTENT -->
    <section class="content">
      <h2>Clean Code là gì?</h2>
      <p>
        <strong>Clean Code</strong> là cuốn sách kinh điển của Robert C. Martin (Uncle Bob),
        tập trung vào cách viết code dễ đọc, dễ hiểu và dễ bảo trì.
      </p>

      <h2>Vì sao lập trình viên nên đọc Clean Code?</h2>
      <ul>
        <li>Viết code dễ đọc cho người khác</li>
        <li>Giảm bug và chi phí bảo trì</li>
        <li>Nâng cao tư duy lập trình chuyên nghiệp</li>
      </ul>

      <h2>Nội dung chính nổi bật</h2>
      <h3>1. Đặt tên biến & hàm</h3>
      <p>
        Tên phải nói lên ý nghĩa. Một cái tên tốt giúp bạn không cần comment.
      </p>

      <h3>2. Hàm ngắn – làm một việc</h3>
      <p>
        Hàm càng ngắn, code càng sạch và dễ test.
      </p>

      <h3>3. Comment không phải lúc nào cũng tốt</h3>
      <p>
        Clean Code khuyến khích viết code rõ ràng thay vì giải thích bằng comment.
      </p>

      <h2>Ai nên đọc sách này?</h2>
      <p>
        Sinh viên IT, lập trình viên mới đi làm, freelancer và fullstack developer.
      </p>

      <h2>Ưu & nhược điểm</h2>
      <div class="row">
        <div class="col-md-6">
          <h4>✅ Ưu điểm</h4>
          <ul>
            <li>Giá trị lâu dài</li>
            <li>Áp dụng cho mọi ngôn ngữ</li>
          </ul>
        </div>
        <div class="col-md-6">
          <h4>⚠️ Nhược điểm</h4>
          <ul>
            <li>Dùng Java làm ví dụ</li>
            <li>Cần đọc chậm để hiểu sâu</li>
          </ul>
        </div>
      </div>

      <!-- AFFILIATE CTA -->
      <div class="cta-box mt-5 text-center">
        <h3 class="fw-bold mb-3">👉 Mua sách Clean Code</h3>
        <p>
          Sở hữu ngay cuốn sách giúp bạn viết code sạch suốt sự nghiệp lập trình.
        </p>
        <a
          href="#"
          target="_blank"
          rel="nofollow sponsored"
          class="btn btn-primary btn-lg"
        >
          Mua trên Amazon / Tiki
        </a>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'ReviewCleanCode'
}
</script>

<style scoped>
.review-page {
  max-width: 900px;
}

.content h2 {
  margin-top: 2.5rem;
  font-weight: 700;
}

.content h3 {
  margin-top: 1.5rem;
  font-weight: 600;
}

.cta-box {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 12px;
}
</style>
