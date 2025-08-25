// main.jsx
import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Home from "./Pages/Home.jsx";
import "./index.css";

import Lenis from "@studio-freight/lenis";

function AppWrapper() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: .5,   // scrolling speed
      easing: (t) => t, // default easing
      smooth: true,    // smooth scroll enabled
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <div
>
  <Home />
</div>
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);
