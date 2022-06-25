import { render, hydrate } from "solid-js/web";
import { StartClient } from "solid-start/entry-client";

if (process.env.RENDER_MODE === "ssr") {
  hydrate(() => <StartClient />, document.body);
} else {
  render(() => <StartClient />, document.body);
}
