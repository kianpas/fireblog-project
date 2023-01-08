import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const TheHome = () => import("./components/page/TheHome");
const TheBlogs = () => import("./components/page/TheBlogs");
const TheLogin = () => import("./components/page/TheLogin");
const TheRegister = () => import("./components/page/TheRegister");
const TheForgotPassword = () => import("./components/page/TheForgotPassword");

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
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | FireBlog`;
  next();
});

export default router;
