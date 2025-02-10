import { Show } from 'solid-js';
import type { Image } from '@/types/branding';
import "./Banner.css";

interface Props {
  title?: string;
  backgroundImage?: Image;
};

export default function Banner( props: Readonly<Props> ) {
  const { title, backgroundImage } = props;

  if (!title) return;

  return (
    <div class="banner content-grid">
      <h1>{title}</h1>
      {/* weird image/background colour section */}
      <Show when={backgroundImage}>
        <div class="banner__image">
          <img src={backgroundImage?.src} alt={backgroundImage?.alt} />
        </div>
      </Show>
    </div>
  )
};
