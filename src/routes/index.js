import Home from "~/pages/Home";
import Follow from "~/pages/Follow";
import ProductDetail from "~/pages/ProductDetail";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/follow", component: Follow },
  { path: "/product-detail/:id", component: ProductDetail },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
