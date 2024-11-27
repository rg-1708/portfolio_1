import React from "react";

export const Gradient = () => {
  return (
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--gradient-color)/0.5)_20%,hsl(var(--gradient-color)/0.3)_40%,hsl(var(--gradient-color)/0.1)_70%,transparent_100%)] opacity-50" />
  );
};
