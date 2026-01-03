<template>
  <div class="container py-5">
    <div class="row">
      <!-- Image -->
      <div class="col-md-4" data-aos="fade-right">
        <img
          :src="book.image"
          class="img-fluid rounded shadow"
          :alt="book.title"
        />
      </div>

      <!-- Info -->
      <div class="col-md-8" data-aos="fade-left">
        <h2 class="fw-bold">{{ book.title }}</h2>
        <p class="text-muted">{{ book.author }}</p>

        <p class="mt-3">
          {{ book.description }}
        </p>

        <!-- Highlights -->
        <ul>
          <li v-for="(point, index) in book.highlights" :key="index">
            {{ point }}
          </li>
        </ul>

        <!-- Affiliate Buttons -->
        <div class="mt-4">
          <a
            :href="book.affiliateLink"
            target="_blank"
            class="btn btn-danger me-2"
          >
            🛒 Mua trên Shopee
          </a>
          <a
            :href="book.affiliateLink"
            target="_blank"
            class="btn btn-success"
          >
            📘 Mua trên Tiki
          </a>
        </div>
      </div>
    </div>

    <!-- Review Section -->
    <hr class="my-5" />

    <section data-aos="fade-up">
      <h4 class="fw-bold">📌 Đánh giá chi tiết</h4>
      <p>
        Cuốn sách này phù hợp với sinh viên, người mới bắt đầu và cả những ai
        muốn nâng cao tư duy chuyên môn. Nội dung dễ hiểu, có ví dụ thực tế
        và áp dụng được ngay.
      </p>

      <h5>👍 Ưu điểm</h5>
      <ul>
        <li>Nội dung thực tế</li>
        <li>Dễ áp dụng</li>
        <li>Được nhiều chuyên gia khuyên đọc</li>
      </ul>

      <h5>👎 Nhược điểm</h5>
      <ul>
        <li>Một số chương hơi dài</li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router"

const route = useRoute()

const book = {
  id: route.params.id,
  title: "Clean Code",
  author: "Robert C. Martin",
  image: "https://via.placeholder.com/400x550",
  description:
    "Clean Code là cuốn sách kinh điển giúp lập trình viên viết code rõ ràng, dễ đọc và dễ bảo trì.",
  highlights: [
    "Nguyên tắc viết code sạch",
    "Ví dụ thực tế",
    "Phù hợp cho sinh viên & dev junior"
  ],
  affiliateLink: "https://shopee.vn/your-affiliate-link"
}
</script>
