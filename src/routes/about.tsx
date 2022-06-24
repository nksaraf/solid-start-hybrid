import { useRouteData } from "solid-app-router";
import { createResource, Show } from "solid-js";
import Counter from "~/components/Counter";
import "./index.css";

export function routeData() {
  return createResource(async () => "About");
}

export default function Home() {
  const [data] = useRouteData();
  return (
    <main>
      <Show when={data()}>
        <h1>{data()}</h1>
      </Show>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://solidjs.com" target="_blank">
          solidjs.com
        </a>{" "}
        to learn how to build Solid apps.
      </p>
    </main>
  );
}
