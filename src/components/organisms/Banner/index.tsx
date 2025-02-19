import { JSX, Show } from 'solid-js';
import type { Image } from '@/types/branding';
import "./style.css";

import type { gridLayoutOptions } from '@/types/grid';

interface Props {
  title?: string;
  backgroundImage?: Image;
  gridLayout?: gridLayoutOptions;
  children?: JSX.Element[];
};

export default function Banner( props: Readonly<Props> ) {
  const { title, backgroundImage, gridLayout, children } = props;

  if (!title) return;

  return (
    <div class={`content-grid ${gridLayout ?? ''}`}>
      <div class={`banner`}>
        <div class="banner__content">
          <h1>{title}</h1>
          {children}
        </div>
        {/* weird image/background colour section - not fully made my mind up */}
        <Show when={backgroundImage}>
          <div class="banner__image">
            <picture>
              {/* TODO: create a picture component which accepts an array of responsive images */}
              <img src={backgroundImage?.src} alt={backgroundImage?.alt} />
            </picture>
          </div>
        </Show>
      </div>
    </div>
  )
};
