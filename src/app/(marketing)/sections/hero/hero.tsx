"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";

import { Mail, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { Spotlight } from "@/components/ui/Spotlight";
import { Gradient } from "./gradient";
import { SparklesCore } from "@/components/ui/sparkles";
import { LinkPreview } from "@/components/ui/link-preview";

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
    <div className="relative w-full overflow-hidden bg-brand-background">
      <Gradient />
      <Container className="relative flex items-center justify-center">
        <Spotlight
          className="-top-40 hidden md:block md:left-60 md:-top-20 !opacity-50"
          fill="white"
        />
        <SparklesCore
          background="transparent"
          minSize={0.3}
          maxSize={1}
          particleDensity={10}
          className="mx-auto w-full h-full absolute  top-0
        max-w-[380px] sm:max-w-[580px] lg:max-w-[760px]"
          particleColor="#FEFEFE"
        />

        <div className="flex flex-col items-center justify-center gap-8 py-20 lg:py-40">
          <LinkPreview
            url="https://www.linkedin.com/in/ramil-gojayev-188108206/"
            className="font-bold"
          >
            <div>
              <Button
                variant="ghost"
                size="sm"
                className="gap-4 text-neutral-300/80"
              >
                My Linkedin Profile <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </LinkPreview>
          <div className="flex flex-col gap-4">
            <h1 className="max-w-2xl text-5xl tracking-tight text-center md:text-7xl font-regular font-cal text-neutral-200">
              <span className="">Hello, I'm Joe</span>
              <span className="relative flex justify-center w-full overflow-hidden text-center md:pb-4 md:pt-1">
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

            <p className="max-w-2xl text-lg leading-normal tracking-tighter text-center md:text-xl text-neutral-300/80">
              I'm a web developer, frontend developer, and UI/UX designer with
              over 10 years of experience. I specialize in building websites and
              web applications that are fast, accessible, and user-friendly.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <Button size="lg" className="gap-4" variant="outline">
              Let's chat <Mail className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="sketch" className="gap-4">
              Download resume <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
