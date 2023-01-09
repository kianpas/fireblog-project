<template>
  <div class="profile">
    <BaseModal
      v-if="modalActive"
      :modalMessage="modalMessage"
      v-on:close-modal="closeModal"
    />
    <div class="container">
      <h2>Account Settings</h2>
      <div class="profile-info">
        <div class="initials">{{ $store.state.profileInitials }}</div>
        <div class="admin-badge">
          <BaseIcon class="profile-icon" imgSrc="user-crown-light.svg" />
          <span>admin</span>
        </div>
        <div class="input">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" />
        </div>
        <div class="input">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div class="input">
          <label for="email">Email:</label>
          <input disabled type="text" id="email" v-model="email" />
        </div>
        <button @click="updateProfile">Save Changes</button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from "../ui/BaseIcon.vue";
import BaseModal from "../ui/BaseModal.vue";

export default {
  components: {
    BaseIcon,
    BaseModal,
  },
  data() {
    return {
      modalMessage: "Changes were saved!",
      modalActive: null,
    };
  },
  methods: {
    updateProfile() {
      this.$store.dispatch("updateUserSettings");
      this.modalActive = !this.modalActive;
    },
    closeModal() {
      this.modalActive = !this.modalActive;
    },
  },
  computed: {
    name: {
      get() {
        return this.$store.state.profileName;
      },
      set(payload) {
        this.$store.commit("changeName", payload);
      },
    },
    username: {
      get() {
        return this.$store.state.profileUsername;
      },
      set(payload) {
        this.$store.commit("changeUserName", payload);
      },
    },
    email: {
      get() {
        return this.$store.state.profileEmail;
      },
      //   set(payload) {
      //     this.$store.commit("changeEmail", payload);
      //   },
    },
  },
};
</script>

<style scoped>
.profile .container {
  max-width: 1000px;
  padding: 60px 25px;
}

.profile .container h2 {
  text-align: center;
  margin-bottom: 16px;
  font-weight: 300;
  font-size: 32px;
}

.container .profile-info {
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 32px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 32px auto;
}

.initials {
  position: initial;
  width: 80px;
  height: 80px;
  font-size: 32px;
  background-color: #303030;
  color: #fff;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.admin-badge {
  display: flex;
  align-self: center;
  color: #fff;
  font-size: 14px;
  padding: 8px 24px;
  border-radius: 8px;
  background-color: #303030;
  margin: 16px 0;
  text-align: center;
  text-transform: capitalize;
}
.input {
  margin: 16px 0;
}

label {
  font-size: 14px;
  display: block;
  padding-bottom: 6px;
}

input {
  width: 100%;
  border: none;
  background-color: #f2f7f6;
  padding: 8px;
  height: 50px;
}

input:focus {
  outline: none;
}

button {
  align-self: center;
}
</style>
