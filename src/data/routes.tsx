import Home from "@/pages/index";
import AboutUs from "@/pages/about-us";
import User from "@/pages/about-us/user";
import { Layout } from "@/helpers/layouts";

import {Home as HomeContent, About as AboutContent} from "@/data/content";

// either build something custom and light OR
// look into: https://github.com/hannoeru/vite-plugin-pages?tab=readme-ov-file#solid-1

export const Navigation = () => [
  {
    path: "/",
    component: () => <Layout components={HomeContent}><Home /></Layout>,
  },
  {
    path: "/hello-world",
    component: () => <h1>Something</h1>
  },
  {
    path: "/about-us",
    component: () => <Layout components={AboutContent}><AboutUs /></Layout>,
  },
  {
    // just testing stuff out with params
    path: "/about-us/:user",
    component: () => <Layout components={[]}><User /></Layout>,
  }
];
