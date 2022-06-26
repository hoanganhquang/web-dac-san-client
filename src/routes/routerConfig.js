import {
  Admin,
  AuthPage,
  DetailPage,
  ErrorPage,
  HomePage,
} from "../components";
import Cart from "../components/Cart/Cart";
import ProfilePage from "../components/MyAccount/ProfilePage/ProfilePage";

export const routes = [
  // public
  { path: "/", component: HomePage },
  { path: "/products/:id", component: DetailPage },
  // private
  { path: "/cart", component: Cart, isLoggedin: false },
  { path: "/profile-page/*", component: ProfilePage, isLoggedin: false },
  // restrict
  { path: "/auth", component: AuthPage, restricted: true },
  // admin
  { path: "/admin/*", component: Admin, admin: false },
  // error
  { path: "/*", component: ErrorPage },
];
