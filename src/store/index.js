import Vue from "vue";
import Vuex from "vuex";
import { firestore, auth } from "../firebase/firebaseInit";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      {
        blogTitle: "Blog Card #1",
        blogCoverPhoto: "stock-1",
        blogDate: "May 1, 2021",
      },
      {
        blogTitle: "Blog Card #2",
        blogCoverPhoto: "stock-2",
        blogDate: "May 1, 2021",
      },
      {
        blogTitle: "Blog Card #3",
        blogCoverPhoto: "stock-3",
        blogDate: "May 1, 2021",
      },
      {
        blogTitle: "Blog Card #4",
        blogCoverPhoto: "stock-4",
        blogDate: "May 1, 2021",
      },
    ],
    editPost: null,
    user: null,
    profileId: null,
    profileAdmin: null,
    profileEmail: null,
    profileName: null,
    profileUsername: null,
    profileInitials: null,
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
    },
    updateUser(state, payload) {
      console.log(payload);
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
  },
  actions: {
    async getCurrentUser({ commit, state }) {
      const dataBase = await firestore
        .collection("users")
        .doc(auth.currentUser.uid);
      console.log(state);
      const dbResult = await dataBase.get();
      commit("setProfileInfo", dbResult);
      commit("setProfileInitials");
    },
  },
  modules: {},
});
