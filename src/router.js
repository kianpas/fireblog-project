import Vue from "vue";
import VueRouter from "vue-router";
import { auth } from "./firebase/firebaseInit";

Vue.use(VueRouter);

const TheHome = () => import("./components/page/TheHome");
const TheBlogs = () => import("./components/page/TheBlogs");
const TheLogin = () => import("./components/page/TheLogin");
const TheRegister = () => import("./components/page/TheRegister");
const TheForgotPassword = () => import("./components/page/TheForgotPassword");
const TheCreatePost = () => import("./components/page/TheCreatePost");
const TheProfile = () => import("./components/page/TheProfile");
const ThePreview = () => import("./components/page/ThePreview");

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", name: "Home", component: TheHome, meta: { title: "Home" } },
    {
      path: "/blogs",
      name: "Blogs",
      component: TheBlogs,
      meta: { title: "Blogs" },
    },
    {
      path: "/login",
      name: "Login",
      component: TheLogin,
      meta: { title: "Login" },
    },
    {
      path: "/register",
      name: "Register",
      component: TheRegister,
      meta: { title: "Register" },
    },
    {
      path: "/forgotPassword",
      name: "ForgotPassword",
      component: TheForgotPassword,
      meta: { title: "ForgotPassword" },
    },
    {
      path: "/createPost",
      name: "CreatePost",
      component: TheCreatePost,
      meta: { title: "CreatePost" },
    },
    {
      path: "/profile",
      name: "Profile",
      component: TheProfile,
      meta: { title: "Profile" },
    },
    {
      path: "/preview",
      name: "Preview",
      component: ThePreview,
      meta: { title: "Preview" },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | FireBlog`;
  if (!auth.currentUser && (to.name == "Profile" || to.name == "CreatePost")) {
    next("/login");
  } else {
    next();
  }
});

export default router;
