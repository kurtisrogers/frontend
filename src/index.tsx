/* @refresh reload */
import { For, render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import { Navigation as NavData } from "@/data/routes"

import "css/global.css";

const root = document.getElementById('root');

/**
 * TODO: use node to traverse all files in /pages dir to make this more useful
 */

render(
  () => <Router>
      <For each={NavData()}>
        {(item, index) => {
          return <Route path={item.path} component={item.component} />
        }}
      </For>
    </Router>, root!
);