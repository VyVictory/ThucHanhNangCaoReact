import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Hello } from "./components/Hello";
import Login  from "./components/Login";
import  Car  from "./components/Car";
import Home from "./home";
import Layout from "./layout";
import Products from "./components/products";
import Group from "./components/group";
import ProductDetail from "./components/productDetail";
import Logout from "./components/logout";
import Profile from "./components/profile";
export const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <Logout></Logout>,
  },
  {
    path: "/hello",
    element: <Layout><Hello /></Layout>,
  },
  {
    path: "/car",
    element: <Layout></Layout>, 
  },
  {
    path: "/products",
    element: <Layout><Products></Products></Layout>, 
  },
  {
    path: "/product/:id",
    element: <Layout><ProductDetail></ProductDetail></Layout>, 
  },
  {
    path: "/groups",
    element: <Layout><Group></Group></Layout>, 
  },
  {
    path: "/profile",
    element: <Layout><Profile></Profile></Layout>, 
  },
  {
    path: "/*",
    element: <h1>không tìm thấy trang này</h1>,
  },
]);