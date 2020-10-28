import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeComponent from "../views/Home.vue";
import CreateComponent from "@/components/decision/Create.vue";
import EditComponent from "@/components/decision/Edit.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: HomeComponent
  },
  { path: "/create", name: "Create", component: CreateComponent },
  { path: "/edit/:id", name: "Edit", component: EditComponent }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
