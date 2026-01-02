<template>
  <div class="login-page d-flex align-items-center justify-content-center">
    <div class="card login-card shadow-sm">
      <div class="card-body p-4">
        <!-- TITLE -->
        <div class="text-center mb-4">
          <h4 class="fw-bold text-primary">Đăng nhập</h4>
          <p class="text-muted mb-0">
            Đăng nhập để truy cập tài liệu của bạn
          </p>
        </div>

        <!-- FORM -->
        <form @submit.prevent="handleLogin">
          <!-- EMAIL -->
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              placeholder="example@gmail.com"
              v-model="form.email"
              required
            />
          </div>

          <!-- PASSWORD -->
          <div class="mb-3">
            <label class="form-label">Mật khẩu</label>
            <input
              type="password"
              class="form-control"
              placeholder="••••••••"
              v-model="form.password"
              required
            />
          </div>

          <!-- OPTIONS -->
          <div class="d-flex justify-content-between align-items-center mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="remember"
                v-model="form.remember"
              />
              <label class="form-check-label" for="remember">
                Ghi nhớ đăng nhập
              </label>
            </div>

            <router-link to="/forgot-password" class="text-decoration-none">
              Quên mật khẩu?
            </router-link>
          </div>

          <!-- BUTTON -->
          <button type="submit" class="btn btn-primary w-100">
            Đăng nhập
          </button>
        </form>

        <!-- DIVIDER -->
        <div class="text-center my-3 text-muted">hoặc</div>

        <!-- REGISTER -->
        <div class="text-center">
          <span class="text-muted">Chưa có tài khoản?</span>
          <router-link to="/register" class="fw-semibold ms-1">
            Đăng ký ngay
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
        remember: false,
      },
    };
  },
  methods: {
    handleLogin() {
      // Demo – sau này thay bằng API
      console.log("Login data:", this.form);

      alert("Đăng nhập thành công (demo)");

      // Sau khi login → redirect
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa, #eef2f7);
}

.login-card {
  width: 100%;
  max-width: 420px;
  border-radius: 12px;
  border: none;
}

.form-control {
  height: 45px;
  border-radius: 8px;
}

.btn-primary {
  height: 45px;
  border-radius: 8px;
  font-weight: 600;
}
</style>
