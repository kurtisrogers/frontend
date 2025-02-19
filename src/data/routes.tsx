import { Layout } from "@/helpers/layouts";
import {Home as HomeContent, About as AboutContent} from "@/data/content";

// either build something custom and light OR
// look into: https://github.com/hannoeru/vite-plugin-pages?tab=readme-ov-file#solid-1

export const Navigation = (children?: any) => [
  {
    path: "/",
    component: () => <Layout components={HomeContent} />,
  },
  {
    path: "/about",
    component: () => <Layout components={AboutContent} />,
  },
  {
    path: "/about-us/:user",
    component: () => <Layout components={[]} />,
  },
  {
    path: "*",
    component: () => <Layout components={[]}>{children}</Layout>,
  },
];
