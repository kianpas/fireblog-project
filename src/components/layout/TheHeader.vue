<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" to="/">Firebase Blog</router-link>
      </div>
      <div class="nav-links">
        <ul v-show="!mobile">
          <router-link class="link" to="/">Home</router-link>
          <router-link class="link" to="/blogs">Blog</router-link>
          <router-link class="link" to="/createPost">Create Post</router-link>
          <router-link class="link" to="/login" v-show="!user"
            >Login/Register</router-link
          >
        </ul>
        <div
          v-if="user"
          :class="{ 'mobile-user-menu': mobile }"
          @click="toggleProfileMenu"
          class="profile"
          ref="profile"
          v-show="!mobile"
        >
          <span>{{ this.$store.state.profileInitials }}</span>
          <div v-show="profileMenu" class="profile-menu">
            <div class="info">
              <p class="initials">{{ this.$store.state.profileInitials }}</p>
              <div class="right">
                <p>
                  {{ this.$store.state.profileName }}
                </p>
                <p>{{ this.$store.state.profileUsername }}</p>
                <p>{{ this.$store.state.profileEmail }}</p>
              </div>
            </div>
            <div class="options">
              <div class="option">
                <router-link class="option" to="/profile">
                  <BaseIcon class="icon" imgSrc="user-alt-light.svg" />
                  <p>Profile</p>
                </router-link>
              </div>
              <div class="option">
                <router-link class="option" to="/admin">
                  <BaseIcon class="icon" imgSrc="user-crown-light.svg" />
                  <p>Admin</p>
                </router-link>
              </div>
              <div @click="signOut" class="option">
                <BaseIcon class="icon" imgSrc="sign-out-alt-regular.svg" />
                <p>Sign Out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <BaseIcon
      class="menu-icon"
      v-show="mobile"
      @click.native="toggleMobileNav"
      imgSrc="bars-regular.svg"
    />
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/blogs">Blog</router-link>
        <router-link class="link" to="/createPost">Create Post</router-link>
        <router-link class="link" to="/login" v-show="!user"
          >Login/Register</router-link
        >
      </ul>
    </transition>
  </header>
</template>

<script>
import BaseIcon from "../ui/BaseIcon.vue";
import { auth } from "../../firebase/firebaseInit";
export default {
  components: {
    BaseIcon,
  },
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      profileMenu: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 771) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    toggleProfileMenu(e) {
      //ref profile??? ????????? ??????
      if (e.target === this.$refs.profile) {
        this.profileMenu = !this.profileMenu;
      }
    },
    signOut() {
      auth.signOut();
      window.location.href("/");
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style scoped>
header {
  background-color: #fff;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;
}

header .link {
  font-weight: 500;
  padding: 0 8px;
  transition: 0.3s color ease;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

header .link:hover {
  color: #1eb9b8;
}

.link-light {
  color: #fff;
}

nav {
  display: flex;
  padding: 25px 0;
}
nav .branding {
  display: flex;
  align-items: center;
}

nav .branding .header {
  font-weight: 600;
  font-size: 24px;
  color: #000;
  text-decoration: none;
}

nav .nav-links {
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
}

nav .nav-links ul {
  margin-right: 32px;
}

nav .nav-links ul .link {
  margin-right: 32px;
}

nav .nav-links ul .link:last-child {
  margin-right: 0;
}

nav .nav-links .profile {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: #303030;
}

nav .nav-links .profile span {
  pointer-events: none;
}

nav .nav-links .profile .profile-menu {
  position: absolute;
  top: 60px;
  right: 0;
  width: 250px;
  background-color: #303030;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

nav .nav-links .profile .profile-menu .info {
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #fff;
}

nav .nav-links .profile .profile-menu .info .initials {
  position: initial;
  width: 40px;
  height: 40px;
  background-color: #fff;
  color: #303030;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

nav .nav-links .profile .profile-menu .info .right {
  flex: 1;
  margin-left: 24px;
}

nav .nav-links .profile .profile-menu .info .right p:nth-child(1) {
  font-size: 14px;
}

nav .nav-links .profile .profile-menu .info .right p:nth-child(2),
nav .nav-links .profile .profile-menu .info .right p:nth-child(3) {
  font-size: 12px;
}

.options {
  padding: 15px;
}

.options .option {
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.options .option p {
  font-size: 14px;
  margin-left: 12px;
}

.options .option:last-child {
  margin-bottom: 0px;
}

.mobile-nav {
  padding: 20px;
  width: 70%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  background-color: #303030;
  top: 0;
  left: 0;
}

.mobile-nav .link {
  padding: 15px 0;
  color: #fff;
}

.mobile-nav-enter {
  transform: translateX(-250px);
}

.mobile-nav-enter-active {
  transition: all 0.5s ease-out;
}
.mobile-nav-leave-active {
  transition: all 0.5s ease;
}

.mobile-nav-enter-to {
  transform: translateX(0);
}

.mobile-nav-leave-to {
  transform: translateX(-250px);
}
</style>
