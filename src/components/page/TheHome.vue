<template>
  <div class="home">
    <BlogPost v-if="!user" :post="welcomeScreen" />
    <BlogPost
      v-for="(post, index) in sampleBlogPost"
      :post="post"
      :key="index"
    />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard
            v-for="(post, index) in sampleBlogCards"
            :post="post"
            :key="index"
          />
        </div>
      </div>
    </div>
    <div v-if="!user" class="updates">
      <div class="container">
        <h2>never miss a post. Register for your free account today!</h2>
        <router-link class="router-button" to="#"
          >Register for FirebaseBlog
          <BaseIcon type="arrow" imgSrc="arrow-right-light.svg"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../blogs/BlogPost.vue";
import BlogCard from "../blogs/BlogCard.vue";
import BaseIcon from "../ui/BaseIcon.vue";
export default {
  components: {
    BlogPost,
    BlogCard,
    BaseIcon,
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "This is a sample Title1",
          blogHtml: "This is a sample Blog post Title",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "This is a sample Title2",
          blogHtml: "This is a sample Blog post Title",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
    };
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style scoped>
.blog-card-wrap h3 {
  font-weight: 300;
  font-size: 28px;
  margin-bottom: 32px;
}

.updates .container {
  padding: 100px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.updates .router-button {
  display: flex;
  font-size: 14px;
  text-decoration: none;
}

h2 {
  font-weight: 300;
  font-size: 32px;
  max-width: 425px;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
}

@media (min-width: 800px) {
  .updates .container {
    padding: 125px 25px;
    flex-direction: row;
  }
  .updates .router-button {
    margin-left: auto;
  }
  h2 {
    text-align: initial;
    font-size: 40px;
  }
}
</style>
