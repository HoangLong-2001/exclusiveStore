import AddressBook from "../components/AddressBook";
import EditProfile from "../components/EditProfile";
import LayoutDefault from "../layouts/LayoutDefault";
import About from "../pages/About";
import AllProducts from "../pages/AllProducts";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyAccount from "../pages/MyAccount";
import Order from "../pages/Order";
import Private from "../pages/Private";
import ProductDetail from "../pages/ProductDetail";
import Register from "../pages/Register";
export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "private",
        element: <Private />,
        children: [
          {
            path: "info",
            element: <MyAccount />,
            children: [
              {
                index: true,
                element: <EditProfile />,
              },
              {
                path: "addressBook",
                element: <AddressBook />,
              },
            ],
          },
          {
            path: "cart",
            element: <Cart />,
          },
          ,
          {
            path: "order",
            element: <Order />,
          },
        ],
      },
      {
        path: ":productId",
        element: <ProductDetail />,
      },
      {
        path: "allProducts",
        element: <AllProducts />,
      },
    ],
  },
];
