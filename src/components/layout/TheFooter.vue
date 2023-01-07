<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <router-link class="header" to="/">Firebase Blog</router-link>
          <ul>
            <li>
              <a href="#">
                <BaseIcon class="svg-icon" imgSrc="youtube-brands.svg" />
              </a>
            </li>
            <li>
              <a href="#"
                ><BaseIcon class="svg-icon" imgSrc="twitter-brands.svg"
              /></a>
            </li>
            <li>
              <a href="#"
                ><BaseIcon class="svg-icon" imgSrc="instagram-brands.svg"
              /></a>
            </li>
            <li>
              <a href="#"
                ><BaseIcon class="svg-icon" imgSrc="linkedin-brands.svg"
              /></a>
            </li>
          </ul>
        </div>
        <div class="col-2">
          <ul>
            <router-link class="link" to="/">Home</router-link>
            <router-link class="link" to="#">Blogs</router-link>
            <router-link class="link" to="#">Create Post</router-link>
            <router-link class="link" to="#">Login In / Register</router-link>
          </ul>
        </div>
      </div>
      <div class="right">
        <p>Copyright 2021 All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
import BaseIcon from "../ui/BaseIcon.vue";
export default {
  components: {
    BaseIcon,
  },
};
</script>

<style scoped>
footer {
  margin-top: auto;
  padding: 100px 25px;
  background-color: #303030;
}

footer .container {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

div {
  display: flex;
  flex: 1;
}

.container .left {
  gap: 32px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  text-align: center;
  font-size: 24px;
  color: #fff;
  margin-bottom: 16px;
  text-decoration: none;
  font-weight: 600;
}

ul {
  gap: 16px;
  list-style: none;
  display: flex;
}

.col-1,
.col-2 {
  gap: 32px;
  display: flex;
  flex: 1;
}

.col-1 {
  flex-direction: column;
}

.col-1 h2 {
  text-align: center;
}

.col-2 ul {
  height: 100%;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}

.col-2 .link {
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
}

.right {
  gap: 32px;
  color: #fff;
  align-items: center;
  flex-direction: column;
}

p {
  margin-top: auto;
}

@media (min-width: 800px) {
  footer .container {
    flex-direction: row;
    gap: 0px;
  }

  .container .left {
    flex-direction: row;
    align-items: initial;
    gap: 0;
  }

  .col-1,
  .col-2 {
    gap: 0;
  }

  .header {
    text-align: initial;
  }

  .col-2 ul {
    flex-direction: column;
  }

  .right {
    align-items: flex-end;
    gap: 0;
  }
}
</style>
