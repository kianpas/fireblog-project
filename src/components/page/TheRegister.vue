<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register">
        Already have an account?
        <router-link class="router-link" to="/login">Login</router-link>
      </p>
      <h2>Create Your FireBlog Account</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="Name" v-model="name" />
          <BaseIcon class="icon" imgSrc="user-alt-light.svg" />
        </div>
        <!-- <div class="input">
          <input type="text" placeholder="Last Name" v-model="email" />
          <BaseIcon class="icon" imgSrc="user-alt-light.svg" />
        </div> -->
        <div class="input">
          <input type="text" placeholder="Username" v-model="username" />
          <BaseIcon class="icon" imgSrc="user-alt-light.svg" />
        </div>
        <div class="input">
          <input type="text" placeholder="Email" v-model="email" />
          <BaseIcon class="icon" imgSrc="envelope-regular.svg" />
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password" />
          <BaseIcon class="icon" imgSrc="lock-alt-solid.svg" />
        </div>
        <div class="error" v-show="error">{{ this.errorMsg }}</div>
      </div>
      <button @click.prevent="register">Sign Up</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>
<script>
import BaseIcon from "../ui/BaseIcon.vue";
import { firestore, auth } from "../../firebase/firebaseInit";
export default {
  components: {
    BaseIcon,
  },
  data() {
    return {
      name: "",
      username: "",
      email: "",
      password: "",
      error: null,
      errorMsg: "",
    };
  },
  methods: {
    async register() {
      if (
        this.email !== "" &&
        this.password !== "" &&
        this.name !== "" &&
        this.username !== ""
      ) {
        this.error = false;
        this.errorMsg = "";
        const createUser = await auth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );
        const result = await createUser;
        const dataBase = firestore.collection("users").doc(result.user.uid);
        await dataBase.set({
          name: this.name,
          username: this.username,
          email: this.email,
          password: this.password,
        });
        this.$router.push({ name: "Home" });
        return;
      }
      this.error = true;
      this.errorMsg = "Please fill out all the fields";
    },
  },
};
</script>
<style scoped>
.register h2 {
  max-width: 350px;
}
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
