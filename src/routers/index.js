import AddressBook from "../components/AddressBook";
import EditProfile from "../components/EditProfile";
import LayoutDefault from "../layouts/LayoutDefault";
import About from "../pages/About";
import AllProducts from "../pages/AllProducts";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import ForgotPassword from "../pages/ForgotPassword";
import Email from "../pages/ForgotPassword/Email";
import NewPassword from "../pages/ForgotPassword/NewPassword";
import Otp from "../pages/ForgotPassword/Otp";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyAccount from "../pages/MyAccount";
import Order from "../pages/Order";
import OrderSuccess from "../pages/Order/OrderSuccess";
import Private from "../pages/Private";
import ProductDetail from "../pages/ProductDetail";
import Register from "../pages/Register";
import Wishlist from "../pages/Wishlist";
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
          {
            path: "wishlist",
            element: <Wishlist />,
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
      {
        path: "forgotPassword",
        element: <ForgotPassword />,
        children: [
          {
            index:true,
            element: <Email />,
          },
          {
            path: "otp",
            element: <Otp />,
          },
          {
            path: "newPassword",
            element: <NewPassword />,
          },
        ],
      },
      {
        path:"success",
        element:<OrderSuccess/>
      }
    ],
  },
];
