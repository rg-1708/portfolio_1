"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";

import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { Spotlight } from "@/components/ui/Spotlight";
import { Gradient } from "./gradient";

export const Hero = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Web Developer", "Frontend Developer", "UI/UX Designer"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full bg-neutral-950 relative overflow-hidden">
      <Gradient />
      <Container className="relative">
        <Spotlight
          className="-top-40 hidden md:block md:left-60 md:-top-20 !opacity-50"
          fill="white"
        />
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button variant="ghost" size="sm" className="gap-4">
              Let's connect on LinkedIn
              <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tight text-center font-regular font-cal text-neutral-200">
              <span className="">Hello, I'm Joe</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-normal tracking-tighter text-neutral-300/80 max-w-2xl text-center">
              I'm a web developer, frontend developer, and UI/UX designer with
              over 10 years of experience. I specialize in building websites and
              web applications that are fast, accessible, and user-friendly.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <Button size="lg" className="gap-4" variant="outline">
              Schedule a consultation <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4">
              Download resume <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
