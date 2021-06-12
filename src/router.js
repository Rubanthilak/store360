import {
  createRouter,
  createWebHistory
} from "vue-router";

import Home from "./components/Pages/Home.vue";
import Profile from "./components/Pages/Profile.vue";
import Settings from "./components/Pages/Settings.vue";

import ItemsView from "./components/Pages/Item/ItemsView.vue";
import ItemsAddView from "./components/Pages/Item/ItemsAddView.vue";
import ItemsListView from "./components/Pages/Item/ItemsListView.vue";

import CustomerView from "./components/Pages/Customer/CustomerView.vue";
import CustomerListView from "./components/Pages/Customer/CustomerListView.vue";
import CustomerDetailsView from "./components/Pages/Customer/CustomerDetailsView.vue";

import SalesView from "./components/Pages/Sale/SalesView.vue";
import SalesListView from "./components/Pages/Sale/SalesListView.vue";
import SalesDetailsView from "./components/Pages/Sale/SalesDetailsView.vue";
import SalesPrintView from "./components/Pages/Sale/SalesPrintView.vue";



const routes = [{
    path: "/",
    component: Home
  },
  {
    path: "/items",
    component: ItemsView,
    children: [{
        path: "",
        component: ItemsListView
      },
      {
        path: "add",
        component: ItemsAddView
      },
    ],
  },
  {
    path: "/customers",
    component: CustomerView,
    children: [{
        path: "",
        component: CustomerListView
      },
      {
        path: ":id",
        component: CustomerDetailsView
      }
    ]
  },
  {
    path: "/sales",
    component: SalesView,
    children: [
      {
        path: "",
        component: SalesListView
      },
      {
        path: ":id",
        component: SalesDetailsView
      },
      {
        path: ":id/print",
        component: SalesPrintView
      }
    ]
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/settings",
    component: Settings
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "is-active",
  routes,
});

export default router;