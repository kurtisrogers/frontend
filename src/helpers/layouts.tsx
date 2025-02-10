import { For } from 'solid-js';
import Header from "@/components/organisms/Header/Header"
import Footer from "@/components/organisms/Footer/Footer"

import { Dynamic } from 'solid-js/web';

type ComponentBlock = {
  component: any;
  [key: string]: any;
}

interface Props {
  components: ComponentBlock[];
  children: any;
}

export const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <main id='main-content'>
        <For each={props.components} fallback={<div>Loading...</div>}>
          {(item) => <Dynamic {...item} />}
        </For>
        {props.children}
      </main>
      <Footer />
    </>
  );
};