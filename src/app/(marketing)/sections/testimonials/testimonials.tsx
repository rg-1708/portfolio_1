"use client";

import { useEffect, useState } from "react";
import { User } from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Container } from "@/components/container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { testimonials } from "./data";
import { useScroll, motion, useTransform } from "motion/react";

export const Testimonials = () => {
  const viewport_threshold = 0.15;
  const { scrollYProgress } = useScroll();
  const scroll_y_scale = useTransform(
    scrollYProgress,
    [0, viewport_threshold],
    [0.9, 1]
  );
  const scroll_y_opacity = useTransform(
    scrollYProgress,
    [0, viewport_threshold],
    [0.75, 1]
  );
  const scroll_y_translate = useTransform(
    scrollYProgress,
    [0, viewport_threshold],
    ["0", "-2rem"]
  );

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);
  }, [api, current]);

  return (
    <motion.div
      className="w-full py-20 lg:py-40"
      style={{ translateY: scroll_y_translate }}
    >
      <Container>
        <motion.div
          className="flex flex-col gap-10"
          style={{ scale: scroll_y_scale, opacity: scroll_y_opacity }}
        >
          <h2 className="text-3xl font-medium tracking-tighter text-left md:text-5xl lg:max-w-xl font-poppins">
            Here's what people are saying about me
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent className="h-60 md:h-96">
              {testimonials.map((testimonial, index) => (
                <CarouselItem className="lg:basis-1/2" key={index}>
                  <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-video flex justify-between flex-col border-2 pb-2.5">
                    <User className="w-8 h-8 stroke-1 shrink-0" />
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <h3 className="text-xl tracking-tight">
                          {testimonial.title}
                        </h3>
                        <p className="max-w-xs overflow-hidden text-base text-muted-foreground max-h-24 overflow-ellipsis line-clamp-4 md:max-h-none md:overflow-auto md:line-clamp-none">
                          {testimonial.content}
                        </p>
                      </div>
                      <p className="flex flex-row items-center gap-2 text-sm">
                        <span className="text-muted-foreground">By</span>
                        <Avatar className="w-6 h-6">
                          <AvatarImage src={testimonial.avatar} />
                          <AvatarFallback>
                            {testimonial.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span>{testimonial.author}</span>
                        <span className="text-muted-foreground">
                          • {testimonial.role}
                        </span>
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </Container>
    </motion.div>
  );
};
