import { A } from "@solidjs/router";
import { For, createResource } from "solid-js";
import { GET } from "@/helpers/requests";

// faking a request for the navigation items which are already statically set
const [ items ] = createResource(() => GET('https://api.chucknorris.io/jokes/random'), {initialValue: [{ text: 'loading', link: '/' }]});

export default function Navigation() {
  return (
    <nav class="site-navigation">
      <ul>
        <For each={items()}>
          {(item, index) => {
            const { link, text } = item;

            return (
              <li>
                <A href={link} activeClass="current">{text}</A>
              </li>
            )
          }}
        </For>
      </ul>
    </nav>
  )
}
