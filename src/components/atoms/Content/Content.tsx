import { handleColourClasses } from "@/helpers/colours";
import type { Branding } from "@/types/branding";
import "./Content.css";

interface Props {
  content: any;
  children: any;
  gridLayout?: "wide" | "full";
  backgroundColor?: Branding["colors"];
  [key: string]: any;
}

export default function Content( props: Readonly<Props> ) {
  const { content, children, gridLayout, backgroundColor } = props;

  const colourClasses = handleColourClasses(backgroundColor, 'background');

  return (
    <section class={`${gridLayout ?? ''} content-grid ${colourClasses}`}>
      {content}
      {children}
    </section>
  )
}
