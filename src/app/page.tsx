import SmoothScrolling from "@/components/smooth-scrolling";
import Image from "next/image";
import { Hero } from "./(marketing)/sections/hero/hero";

export default function Home() {
  return (
    <SmoothScrolling>
      <Hero />
    </SmoothScrolling>
  );
}
