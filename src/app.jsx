import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import "./app.css";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank"></a>
        <a href="https://preactjs.com" target="_blank"></a>
      </div>
      <h1>Frontend Development Engineer</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.jsx</code> Frontend Development Engineer
        </p>
      </div>
      <p>
        Check out{" "}
        <a
          href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
          target="_blank"
        >
          create-preact
        </a>
        , the official Preact + Vite starter
      </p>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  );
}
