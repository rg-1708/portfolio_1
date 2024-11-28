"use client";

import React from "react";
import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { data } from "./data";
import { motion } from "motion/react";
import { Circle } from "lucide-react";

export const Experience = () => {
  return (
    <div className="w-full pb-20 lg:pb-40">
      <Container className="flex flex-col items-start gap-4 py-20 lg:py-40">
        <div>
          <Badge>Experience</Badge>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl tracking-tighter md:text-5xl lg:max-w-xl font-regular font-cal">
            My experience
          </h2>
          <p className="max-w-xl text-lg leading-relaxed tracking-tight lg:max-w-xl text-muted-foreground">
            I have been working as a developer for over 10 years. I have worked
            on a variety of projects ranging from small websites to large scale
            applications. I have experience with a wide range of technologies
            and languages. I am always looking to learn new things and improve
            my skills.
          </p>
        </div>
        <div className="flex flex-col w-full gap-10 pt-12">
          <div className="cool-grid">
            {data.map((item, index) => (
              <div className="mx-3 md:mx-0" key={`${item.title}-${index}`}>
                <motion.div
                  viewport={{ amount: 1 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.25, delay: 0.025 * index }}
                  className="flex flex-col justify-center p-4 space-y-4 md:p-6"
                >
                  <item.icon className="w-4 h-4 mt-2 text-primary shrink-0" />
                  <span className="text-sm font-medium text-neutral-400">
                    {item.date}
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="text-xl font-semibold">{item.title}</p>
                    <p className="text-base text-muted-foreground">
                      At {item.company}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
