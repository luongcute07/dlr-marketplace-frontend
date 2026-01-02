<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
    <div class="container">
      <!-- LOGO -->
      <router-link to="/" class="navbar-brand fw-bold text-primary">
        DLR Marketplace
      </router-link>

      <!-- TOGGLE -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarContent">
        <!-- MENU -->
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Trang chủ</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">Giới thiệu</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/new-documents" class="nav-link">
              Tài liệu mới
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/popular-documents" class="nav-link">
              Bán chạy
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
            >
              Danh mục
            </a>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" to="/category/programming">Lập trình</router-link></li>
              <li><router-link class="dropdown-item" to="/category/design">Thiết kế</router-link></li>
              <li><router-link class="dropdown-item" to="/category/marketing">Marketing</router-link></li>
              <li><router-link class="dropdown-item" to="/category/language">Ngoại ngữ</router-link></li>
            </ul>
          </li>
        </ul>

        <!-- SEARCH -->
        <form class="d-flex ms-4 me-auto">
          <input
            class="form-control"
            type="search"
            placeholder="Tìm kiếm tài liệu, môn học..."
          />
        </form>

        <!-- RIGHT AREA (1 VỊ TRÍ DUY NHẤT) -->
        <div class="d-flex align-items-center">
          <!-- CHƯA ĐĂNG NHẬP -->
          <template v-if="!isAuthenticated">
            <router-link to="/login" class="btn btn-outline-primary me-2">
              Đăng nhập
            </router-link>
            <router-link to="/register" class="btn btn-primary">
              Đăng ký
            </router-link>
          </template>

          <!-- ĐÃ ĐĂNG NHẬP -->
          <template v-else>
            <!-- CART -->
            <router-link
              to="/cart"
              class="btn btn-outline-secondary position-relative me-2"
            >
              <i class="bi bi-cart"></i>
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              >
                {{ cartCount }}
              </span>
            </router-link>

            <!-- USER -->
            <div class="dropdown">
              <button
                class="btn btn-outline-primary dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                {{ user.name }}
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><router-link class="dropdown-item" to="/profile">Hồ sơ</router-link></li>
                <li><router-link class="dropdown-item" to="/orders">Đơn hàng</router-link></li>
                <li><router-link class="dropdown-item" to="/my-documents">Tài liệu đã mua</router-link></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <button class="dropdown-item text-danger" @click="logout">
                    Đăng xuất
                  </button>
                </li>
              </ul>
            </div>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "UserHeader",
  data() {
    return {
      isAuthenticated: false, // 🔑 đổi true / false để test
      cartCount: 2,
      user: {
        name: "Dương Công Lượng",
      },
    };
  },
  methods: {
    logout() {
      this.isAuthenticated = false;
      alert("Đã đăng xuất (demo)");
    },
  },
};
</script>
