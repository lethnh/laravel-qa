<template>
  <div class="h-100">
    <the-site-header></the-site-header>
    <sidebar-menu :menu="menu" :width="'240px'"></sidebar-menu>
    <router-view class="main-content"></router-view>
    <the-site-footer></the-site-footer>
  </div>
</template>
<script>
//App.vue
import { SidebarMenu } from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
import TheSiteHeader from "./partials/Header";
import TheSiteFooter from "./partials/Footer";
export default {
  components: {
    SidebarMenu,
    TheSiteHeader,
    TheSiteFooter
  },
  data() {
    return {
      menu: [
        // {
        //   header: true,
        //   hiddenOnCollapse: true
        // },
        {
          href: "/",
          title: "Người dùng",
          icon: "fa fa-user"
        },
        {
          href: "/",
          title: "Danh mục",
          icon: "fa fa-bookmark"
        },
        {
          title: "Sản phẩm",
          icon: "fa fa-box",
          child: [
            {
              href: "",
              title: "Danh sách sản phẩm"
            }
          ]
        },
        {
          title: "Đơn hàng",
          icon: "fa fa-shipping-fast",
          child: [
            {
              href: "/charts/sublink",
              title: "Danh sách đơn hàng"
            }
          ]
        }
      ]
    };
  }
};
</script>