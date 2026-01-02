<template>
  <div class="auth-page d-flex align-items-center justify-content-center">
    <div class="card auth-card shadow-sm">
      <div class="card-body p-4">
        <!-- TITLE -->
        <div class="text-center mb-4">
          <h4 class="fw-bold text-primary">Đăng ký</h4>
          <p class="text-muted mb-0">
            Tạo tài khoản để sử dụng DLR Marketplace
          </p>
        </div>

        <!-- FORM -->
        <form @submit.prevent="handleRegister">
          <!-- FULL NAME -->
          <div class="mb-3">
            <label class="form-label">Họ và tên</label>
            <input
              type="text"
              class="form-control"
              placeholder="Dương Công Lượng"
              v-model="form.name"
              required
            />
          </div>

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

          <!-- CONFIRM PASSWORD -->
          <div class="mb-3">
            <label class="form-label">Nhập lại mật khẩu</label>
            <input
              type="password"
              class="form-control"
              placeholder="••••••••"
              v-model="form.confirmPassword"
              required
            />
          </div>

          <!-- BUTTON -->
          <button type="submit" class="btn btn-primary w-100">
            Đăng ký
          </button>
        </form>

        <!-- LOGIN LINK -->
        <div class="text-center mt-3">
          <span class="text-muted">Đã có tài khoản?</span>
          <router-link to="/login" class="fw-semibold ms-1">
            Đăng nhập
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    handleRegister() {
      if (this.form.password !== this.form.confirmPassword) {
        alert("Mật khẩu không khớp");
        return;
      }

      console.log("Register data:", this.form);

      alert("Đăng ký thành công (demo)");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.auth-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa, #eef2f7);
}

.auth-card {
  width: 100%;
  max-width: 450px;
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
