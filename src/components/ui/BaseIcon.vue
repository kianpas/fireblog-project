<template>
  <div :class="className">
    <img :src="require(`../../assets/Icons/${img}`)" alt="icon" />
  </div>
</template>

<script>
export default {
  props: ["imgSrc", "className"],
  data() {
    return {
      img: this.imgSrc,
    };
  },
};
</script>

<style scoped>
.menu-icon {
  cursor: pointer;
  position: absolute;
  top: 32px;
  right: 25px;
  height: 25px;
  width: auto;
}

.menu-icon img {
  height: 25px;
  width: auto;
}

.svg-icon {
  width: 24px;
  height: auto;
}

.svg-icon img {
  height: 25px;
  width: auto;
}

.arrow {
  padding: 0px !important;
  margin-left: 8px;
  height: 20px;
  width: auto;
}

.arrow img {
  width: 12px;
  height: 20px;
}

.edit,
.delete {
  pointer-events: none;
  height: 15px;
  width: auto;
}

.edit img {
  width: 20px;
  height: 20px;
}

.delete img {
  width: 20px;
  height: 20px;
}

.icon {
  width: 12px;
  position: absolute;
  left: 6px;
}
.profile-icon {
  width: 14px;
  height: auto;
  margin-right: 8px;
}

.close-icon {
  width: 24px;
  height: auto;
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  top: 15px;
  right: 15px;
  color: #303030;
}
</style>
