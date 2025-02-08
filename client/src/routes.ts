import { HomePage } from "containers";

export const URLS = {
  HOME_PAGE: "/",
  ROOT: "/",
};

export default [
  // Home Page
  {
    Component: HomePage,
    name: "Home",
    path: URLS.HOME_PAGE,
  },
];
