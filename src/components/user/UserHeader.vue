<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
    <div class="container">
      <!-- LOGO -->
      <router-link to="/" class="navbar-brand fw-bold text-primary d-flex align-items-center">
        <i class="bi bi-book-half fs-4 me-2"></i>
        LearnBooks
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

      <!-- CONTENT -->
      <div class="collapse navbar-collapse" id="navbarContent">
        <!-- MENU -->
        <ul class="navbar-nav ms-3 mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              <i class="bi bi-house me-1"></i> Trang chủ
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/about" class="nav-link">
              <i class="bi bi-info-circle me-1"></i> Giới thiệu
            </router-link>
          </li>

          <!-- REVIEW SÁCH (thay Sách mới) -->
          <li class="nav-item">
            <router-link to="/review-list" class="nav-link">
              <i class="bi bi-star me-1"></i> Review sách
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/popular-books" class="nav-link">
              <i class="bi bi-fire me-1"></i> Bán chạy
            </router-link>
          </li>

          <!-- CATEGORY -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              <i class="bi bi-grid me-1"></i> Danh mục
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/category/programming">
                  💻 Lập trình
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/category/design">
                  🎨 Thiết kế
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/category/marketing">
                  📈 Marketing
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/category/language">
                  🌍 Ngoại ngữ
                </router-link>
              </li>
            </ul>
          </li>
        </ul>

        <!-- SEARCH -->
        <form class="d-flex mx-lg-4 my-3 my-lg-0 flex-grow-1">
          <input
            class="form-control rounded-pill px-4"
            type="search"
            placeholder="Tìm sách, tác giả, kỹ năng..."
          />
        </form>

        <!-- RIGHT -->
        <div class="d-flex align-items-center">
          <!-- CHƯA LOGIN -->
          <template v-if="!isAuthenticated">
            <router-link to="/login" class="btn btn-outline-primary me-2">
              Đăng nhập
            </router-link>
            <router-link to="/register" class="btn btn-primary">
              Đăng ký
            </router-link>
          </template>

          <!-- ĐÃ LOGIN -->
          <template v-else>
            <router-link
              to="/favorites"
              class="btn btn-outline-secondary me-2"
              title="Sách yêu thích"
            >
              ❤️
            </router-link>

            <div class="dropdown">
              <button
                class="btn btn-outline-primary dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                {{ user.name }}
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li>
                  <router-link class="dropdown-item" to="/profile">
                    Hồ sơ cá nhân
                  </router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/favorites">
                    Sách yêu thích
                  </router-link>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <button
                    class="dropdown-item text-danger"
                    @click="logout"
                  >
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
  name: 'UserHeader',
  data() {
    return {
      isAuthenticated: false, // demo
      user: {
        name: 'Dương Công Lượng',
      },
    }
  },
  methods: {
    logout() {
      this.isAuthenticated = false
      alert('Đã đăng xuất (demo)')
    },
  },
}
</script>
