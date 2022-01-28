import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Offers from "./pages/Offers/Offers";
import ProductPage from "./pages/ProductPage/ProductPage";
import Products from "./pages/Products/Products";

const router = [
  {
    Component: Home,
    path: "/",
    key: "Home",
  },
  {
    Component: About,
    path: "/about",
    key: "about",
    nested : {
        path:'offers',
        Component : Offers,
        key : 'AboutOffers'
    }
  },
  {
    Component: ProductPage,
    path: "/products/:id/*",
    key: "ProductDetails",
    nested : {
        path:'offers',
        Component : Offers,
        key : 'Offers'
    }

  },
  {
    Component: Products,
    path: "/products",
    key: "products",
  },
];

export { router };
