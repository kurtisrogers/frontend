import { A } from "@solidjs/router";
import Navigation from "@/components/molecules/Navigation/Navigation";
import "./Header.css";

type Item = {
  link: string;
  text: string;
}

type Props = {
  menuItems?: Item[];
  children?: any;
}

export default function Header( props: Readonly<Props> ) {
  return (
    <header>
      <A href="#main-content" class="button content-skipper">Skip to main content</A>
      <div class="content">
        <A href="/" class="logo text-white"><strong>K</strong>urtis <strong>R</strong>ogers</A>
        <div>
          <Navigation />
          {props.children}
        </div>
      </div>
    </header>
  )
}
