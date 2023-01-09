<template>
  <div class="reset-password">
    <BaseModal
      v-if="modalActive"
      v-on:close-modal="closeModal"
      :modalMessage="modalMessage"
    />
    <BaseLoading v-if="loading" />
    <div class="form-wrap">
      <form class="reset">
        <p class="login-register">
          Back to
          <router-link class="router-link" to="/login">Login</router-link>
        </p>
        <h2>Reset Password</h2>
        <p>Forgot your password? Enter your email to reset it</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <BaseIcon class="icon" imgSrc="envelope-regular.svg" />
          </div>
        </div>
        <button @click.prevent="resetPassword">Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import BaseIcon from "../ui/BaseIcon.vue";
import BaseModal from "../ui/BaseModal.vue";
import BaseLoading from "../ui/BaseLoading.vue";
import { auth } from "../../firebase/firebaseInit";

export default {
  components: {
    BaseIcon,
    BaseModal,
    BaseLoading,
  },
  data() {
    return {
      email: null,
      modalActive: false,
      modalMessage: "",
      loading: null,
    };
  },
  methods: {
    resetPassword() {
      this.loading = true;
      auth
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.modalMessage =
            "If your account exists, you will receive a reset a email";
          this.loading = false;
          this.modalActive = true;
        })
        .catch((err) => {
          this.modalMessage = err.message;
          this.loading = false;
          this.modalActive = true;
        });
    },
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>
