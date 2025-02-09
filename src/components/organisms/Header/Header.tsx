import { A } from "@solidjs/router";
import Navigation from "@/components/molecules/Navigation";

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
      <A href="/" class="logo">Kurtis Rogers</A>
      <Navigation />
      {props.children}
    </header>
  )
}
