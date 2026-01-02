<template>
  <div class="card h-100 shadow-sm">
    <img
      :src="document.thumbnail"
      class="card-img-top"
      alt="thumbnail"
      style="height:180px; object-fit:cover"
    />

    <div class="card-body d-flex flex-column">
      <h6 class="fw-bold mb-2">{{ document.title }}</h6>

      <p class="text-muted small flex-grow-1">
        {{ document.description }}
      </p>

      <div class="d-flex justify-content-between align-items-center">
        <span class="text-danger fw-bold">
          {{ document.price.toLocaleString() }} đ
        </span>

        <router-link
          :to="`/documents/${document.id}`"
          class="btn btn-sm btn-primary"
        >
          Xem chi tiết
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DocumentCard",
  props: {
    document: Object,
  },
};
</script>
