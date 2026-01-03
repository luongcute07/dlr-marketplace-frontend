<template>
  <div class="about-page">
    <!-- HERO -->
    <section class="about-hero text-white text-center">
      <div class="container">
        <h1 class="fw-bold mb-3">
          Giới thiệu LearnBooks – Website review & giới thiệu sách học tập chất lượng
        </h1>
        <p class="lead mb-0">
          Nền tảng chọn lọc sách hay cho lập trình, thiết kế, marketing & phát triển bản thân
        </p>
      </div>
    </section>

    <!-- INTRO -->
    <section class="py-5">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <h2 class="fw-bold mb-4">LearnBooks là gì?</h2>
            <p class="text-muted fs-5">
              <strong>LearnBooks</strong> là website chuyên
              <strong>giới thiệu & review sách học tập chất lượng</strong>
              dành cho sinh viên và người đi làm.
              <br /><br />
              Chúng tôi giúp bạn <strong>chọn đúng sách – học đúng trọng tâm</strong>
              trong các lĩnh vực như lập trình, thiết kế, marketing, ngoại ngữ
              và phát triển bản thân.
            </p>
          </div>

          <div class="col-lg-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
              alt="Sách học tập và phát triển bản thân"
              class="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE -->
    <section class="bg-light py-5">
      <div class="container">
        <h2 class="fw-bold text-center mb-5">
          Vì sao nên chọn LearnBooks?
        </h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card h-100 shadow-sm text-center">
              <div class="card-body">
                <i class="bi bi-book-half display-4 text-primary mb-3"></i>
                <h3 class="h5 fw-bold mb-3">Sách chọn lọc</h3>
                <p class="text-muted">
                  Chỉ giới thiệu những cuốn sách được đánh giá cao,
                  phù hợp cho học tập & phát triển kỹ năng.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100 shadow-sm text-center">
              <div class="card-body">
                <i class="bi bi-lightning-charge display-4 text-primary mb-3"></i>
                <h3 class="h5 fw-bold mb-3">Tiết kiệm thời gian</h3>
                <p class="text-muted">
                  Không cần đọc review lan man,
                  LearnBooks giúp bạn chọn sách đúng ngay từ đầu.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100 shadow-sm text-center">
              <div class="card-body">
                <i class="bi bi-link-45deg display-4 text-primary mb-3"></i>
                <h3 class="h5 fw-bold mb-3">Link mua uy tín</h3>
                <p class="text-muted">
                  Dẫn link mua sách từ các nền tảng uy tín
                  như Amazon, Shopee, Tiki.
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
        <h2 class="fw-bold text-center mb-5">
          LearnBooks hoạt động như thế nào?
        </h2>
        <div class="row text-center g-4">
          <div class="col-md-3" v-for="(step, i) in steps" :key="i">
            <div class="step-box shadow-sm">
              <i :class="step.icon" class="fs-1 text-primary"></i>
              <span class="step-number">{{ i + 1 }}</span>
              <p class="fw-semibold mt-3">{{ step.title }}</p>
              <p class="text-muted">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section text-white text-center py-5">
      <div class="container">
        <h2 class="fw-bold mb-3">
          Khám phá những cuốn sách hay nhất cho hành trình học tập của bạn
        </h2>
        <p class="mb-4">
          Review sách lập trình, thiết kế, marketing & phát triển bản thân
        </p>
        <router-link to="/" class="btn btn-light btn-lg fw-semibold">
          Xem sách nổi bật
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "About",
  mounted() {
    document.title =
      "Giới thiệu LearnBooks – Website review & giới thiệu sách học tập chất lượng";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "LearnBooks là website giới thiệu và review sách học tập chất lượng cho sinh viên và người đi làm: lập trình, thiết kế, marketing, phát triển bản thân."
      );
  },
  data() {
    return {
      steps: [
        {
          icon: "bi bi-search",
          title: "Tìm sách",
          desc: "Duyệt theo danh mục hoặc tìm kiếm",
        },
        {
          icon: "bi bi-star",
          title: "Đọc review",
          desc: "Xem đánh giá chi tiết",
        },
        {
          icon: "bi bi-link-45deg",
          title: "Mua sách",
          desc: "Chuyển sang nền tảng bán sách",
        },
        {
          icon: "bi bi-book",
          title: "Học tập",
          desc: "Áp dụng kiến thức vào thực tế",
        },
      ],
    };
  },
};
</script>
