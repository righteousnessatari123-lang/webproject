import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import App from "./App";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import Confirmation from "./pages/Confirmation";
import EnterNewPassword from "./pages/EnterNewPassword";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Minicart from "./components/MiniCart";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },

  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    path: "/signin",
    element: <SignIn />,
  },

  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },

  {
    path: "/confirmation",
    element: <Confirmation />,
  },

  {
    path: "/new-password",
    element: <EnterNewPassword />,
  },

  {
    path: "/shop",
    element: <Shop />,
  },

  {
    path: "/products",
    element: <Product />,
  },

  {
    path: "/minicart",
    element: <Minicart />,
  },

  {
    path: "/cart",
    element: <Cart />,
  },

  {
    path: "/checkout",
    element: <Checkout />,
  },
]);

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);