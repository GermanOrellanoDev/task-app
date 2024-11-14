import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import TodoApp from "./components/TodoApp";
import { Layout } from "./components/Layout/Layout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <TodoApp />
    </Layout>
  </StrictMode>
);
