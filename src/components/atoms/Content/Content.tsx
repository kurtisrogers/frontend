import { handleColourClasses } from "@/helpers/colours";
import type { Branding } from "@/types/branding";

interface Props {
  content: any;
  children: any;
  gridLayout?: "wide" | "full";
  backgroundColor?: Branding["colors"];
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
