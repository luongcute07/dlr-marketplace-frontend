<template>
  <div class="auth-page d-flex align-items-center justify-content-center">
    <div class="card auth-card shadow-sm">
      <div class="card-body p-4">
        <!-- TITLE -->
        <div class="text-center mb-4">
          <h4 class="fw-bold text-primary">Quên mật khẩu</h4>
          <p class="text-muted mb-0">
            Nhập email để nhận liên kết đặt lại mật khẩu
          </p>
        </div>

        <!-- FORM -->
        <form @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              placeholder="example@gmail.com"
              v-model="email"
              required
            />
          </div>

          <button type="submit" class="btn btn-primary w-100">
            Gửi liên kết đặt lại mật khẩu
          </button>
        </form>

        <!-- BACK TO LOGIN -->
        <div class="text-center mt-3">
          <router-link to="/login" class="fw-semibold">
            ← Quay lại đăng nhập
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForgotPassword",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log("Forgot password email:", this.email);

      alert("Đã gửi email đặt lại mật khẩu (demo)");
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
