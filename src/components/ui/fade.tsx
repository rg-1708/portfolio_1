import React from "react";

interface FadeProps {
  opacity?: number;
}

export const Fade = ({ opacity }: FadeProps) => {
  return (
    <div
      className={
        "absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
      }
      style={{ opacity: opacity }}
    />
  );
};
