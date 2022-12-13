import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export const useSmoothScroll = () => {
  const lenis = new Lenis(
    {
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
    },
    []
  );

  useEffect(() => {
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
};
