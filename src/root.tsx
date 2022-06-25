// @refresh reload
import { Routes, Meta, Links, Scripts } from "solid-start/root";
import { ErrorBoundary } from "solid-start/error-boundary";
import { children, Suspense } from "solid-js";
import { isServer, resolveSSRNode, ssr } from "solid-js/web";

function App() {
  return (
    <ErrorBoundary>
      <div>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes />
      </Suspense>
    </ErrorBoundary>
  );
}

function Document(props) {
  let head = children(() => props.head);
  let body = children(() => props.body);
  if (isServer) {
    return `<html lang="en">
        <head>${resolveSSRNode(head)}</head>
        <body>${resolveSSRNode(body)}</body>
      </html>`;
  } else {
    return <>{body}</>;
  }
}

export default function Root() {
  if (process.env.RENDER_MODE === "ssr") {
    return (
      <Document
        head={
          <>
            <meta charset="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <Meta />
            <Links />
          </>
        }
        body={
          <>
            <App />
            <Scripts />
          </>
        }
      />
    );
  } else {
    return <App />;
  }
}
