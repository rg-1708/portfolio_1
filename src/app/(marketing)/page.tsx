import SmoothScrolling from "@/components/smooth-scrolling";
import { Hero } from "./sections/hero/hero";
import { Testimonials } from "./sections/testimonials/testimonials";

export default function Home() {
  return (
    <SmoothScrolling>
      <Hero />
      <Testimonials />
    </SmoothScrolling>
  );
}
