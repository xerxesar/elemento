import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Layout from "@/views/LayoutView.vue";

const routerMap: RouteRecordRaw[] = [
  {
    path: "/redirect",
    component: Layout,
    children: [
      {
        path: "/redirect/:path*",
        component: () => import("@/views/RedirectView.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: Layout,
    children: [
      {
        path: "",
        name: "Login",
        meta: { title: "", icon: "account", noCache: true },
        component: () => import("@/views/LoginView.vue"),
      },
    ],
  },
  {
    path: "/404",
    component: () => import("@/views/Error404View.vue"),
  },
  {
    path: "/401",
    component: () => import("@/views/Error401View.vue"),
  },
  {
    path: "/dashboard",
    redirect: "/",
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        name: "Dashboard",
        meta: { title: "dashboard", icon: "account", noCache: true },
        component: () => import("@/views/DashboardView.vue"),
      },
    ],
  },
  { path: "/:pathMatch(.*)*", redirect: "/404" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [...routerMap],
});

export { router };
