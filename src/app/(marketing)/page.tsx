import SmoothScrolling from "@/components/smooth-scrolling";

import { Hero } from "./sections/hero/hero";
import { Testimonials } from "./sections/testimonials/testimonials";
import { Experience } from "./sections/experience/experience";
import { AnimatePresence } from "motion/react";

export default function Home() {
  return (
    <AnimatePresence>
      <SmoothScrolling>
        <Hero />
        <Testimonials />
        <Experience />
      </SmoothScrolling>
    </AnimatePresence>
  );
}
