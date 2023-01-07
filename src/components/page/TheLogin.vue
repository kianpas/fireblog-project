<template>
  <div class="form-wrap">
    <form class="login">
      <p class="login-register">
        Don't have an account?
        <router-link class="router-link" to="/register"></router-link>
      </p>
      <h2>Login to FireBlogs</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="Email" v-model="email" />
          <BaseIcon class="icon" imgSrc="envelope-regular.svg" />
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password" />
          <BaseIcon class="icon" imgSrc="lock-alt-solid.svg" />
        </div>
      </div>
      <button>Sign In</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>
<script>
import BaseIcon from "../ui/BaseIcon.vue";
export default {
  components: {
    BaseIcon,
  },
  data() {
    return {
      email: null,
      password: null,
    };
  },
};
</script>

<style>
.form-wrap {
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  width: 90%;
}
.login-register {
  margin-bottom: 32px;
}
.router-link {
  color: #000;
}
form {
  padding: 0 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
}
h2 {
  text-align: center;
  font-size: 32px;
  color: #303030;
  margin-bottom: 40px;
}
.inputs {
  width: 100%;
  max-width: 350px;
}
.input {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
}
input {
  width: 100%;
  border: none;
  background-color: #f2f7f6;
  padding: 4px 4px 4px 30px;
  height: 50px;
}
input:focus {
  outline: none;
}

.forgot-password {
  text-decoration: none;
  color: #000;
  cursor: pointer;
  font-size: 14px;
  margin: 16px 0 32px;
  border-bottom: 1px solid transparent;
  transition: 0.5s ease all;
}
.forgot-password:hover {
  border-color: #303030;
}

.angle {
  display: none;
  position: absolute;
  background-color: #fff;
  transform: rotateZ(3deg);
  width: 60px;
  right: -30px;
  height: 101%;
}

.background {
  display: none;
  flex: 2;
  background-size: cover;
  background-image: url("../../assets/background.png");
  width: 100%;
  height: 100%;
}

@media (min-width: 900px) {
  .form-wrap {
    width: 100%;
  }

  form {
    padding: 0 50px;
  }

  h2 {
    font-size: 40px;
  }

  .angle {
    display: initial;
  }

  .background {
    display: initial;
  }
}
</style>
