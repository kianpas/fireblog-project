import Vue from "vue";
import Vuex from "vuex";
import { firestore, auth } from "../firebase/firebaseInit";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      {
        blogId: "stc1",
        blogTitle: "Blog Card #1",
        blogCoverPhoto: "stock-1",
        blogDate: "May 1, 2021",
        blogHTML: "This is stc1",
      },
      {
        blogId: "stc2",
        blogTitle: "Blog Card #2",
        blogCoverPhoto: "stock-2",
        blogDate: "May 1, 2021",
        blogHTML: "This is stc2",
      },
      {
        blogId: "stc3",
        blogTitle: "Blog Card #3",
        blogCoverPhoto: "stock-3",
        blogDate: "May 1, 2021",
        blogHTML: "This is stc3",
      },
      {
        blogId: "stc4",
        blogTitle: "Blog Card #4",
        blogCoverPhoto: "stock-4",
        blogDate: "May 1, 2021",
        blogHTML: "This is stc4",
      },
    ],
    blogPosts: [],
    postLoaded: null,
    blogHTML: "Write your blog here...",
    blogTitle: "Wirte your blog title here...",
    blogPhotoName: "",
    blogPhotoFileURL: null,
    blogPhotoPreview: null,
    editPost: null,
    user: null,
    profileId: null,
    profileAdmin: null,
    profileEmail: null,
    profileName: null,
    profileUsername: null,
    profileInitials: null,
  },
  getters: {
    blogPostsFeed(state) {
      return state.blogPosts.slice(0, 2);
    },
    blogPostsCards(state) {
      return state.blogPosts.slice(2, 6);
    },
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
    },
    updateUser(state, payload) {
      state.user = payload;
    },
    setProfileInfo(state, payload) {
      state.profileId = payload.id;
      state.profileEmail = payload.data().email;
      state.profileName = payload.data().name;
      state.profileUsername = payload.data().username;
    },
    setProfileInitials(state) {
      state.profileInitials = state.profileName.match(/(\b\S)?/g).join("");
    },
    changeName(state, payload) {
      state.profileName = payload;
    },
    changeUserName(state, payload) {
      state.profileUsername = payload;
    },
    // changeEmail(state, payload) {
    //   state.profileEmail = payload;
    // },
    updateBlogTitle(state, payload) {
      state.blogTitle = payload;
    },
    newBlogPost(state, payload) {
      state.blogHTML = payload;
    },
    fileNameChange(state, payload) {
      state.blogPhotoName = payload;
    },
    createFileURL(state, payload) {
      state.blogPhotoFileURL = payload;
    },
    openPhotoPreview(state) {
      state.blogPhotoPreview = !state.blogPhotoPreview;
    },
    filterBlogPost(state, payload) {
      state.blogPosts = state.blogPosts.filter(
        (post) => post.blogID !== payload
      );
    },
  },
  actions: {
    async getCurrentUser({ commit }) {
      const dataBase = await firestore
        .collection("users")
        .doc(auth.currentUser.uid);

      const dbResult = await dataBase.get();
      commit("setProfileInfo", dbResult);
      commit("setProfileInitials");
    },
    async updateUserSettings({ commit, state }) {
      const dataBase = await firestore.collection("users").doc(state.profileId);
      await dataBase.update({
        name: state.profileName,
        username: state.profileUsername,
      });
      commit("setProfileInitials");
    },
    async getPost({ state }) {
      const dataBase = await firestore
        .collection("")
        .orderBy("date", "desc")
        .doc();
      const dbResult = await dataBase.get();
      //중복체크
      dbResult.forEach((doc) => {
        if (!state.blogPosts.some((post) => post.blogId === doc.id)) {
          const data = {
            blogId: doc.data().blogId,
            blogHTML: doc.data().blogHTML,
            blogCoverPhoto: doc.data().blogCoverPhoto,
            blogTitle: doc.data().blogTitle,
            blogDate: doc.data().date,
            blogCoverPhotoName: doc.data().blogCoverPhotoName,
          };
          state.blogPosts.push(data);
        }
      });
      state.postLoaded = true;
    },
    async updatePost({ commit, dispatch }, payload) {
      commit("filterBlogPost", payload);
      await dispatch("getPost");
    },
    async deletePost({ commit }, payload) {
      const getPost = await firestore.collection("blogPost").doc(payload);
      await getPost.delete();
      commit("filteredBlogPost", payload);
    },
  },

  modules: {},
});
