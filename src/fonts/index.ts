import localFont from "next/font/local";

import { Inter, Poppins } from "next/font/google";

export const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  display: "swap",
});
export const poppinsFont = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  preload: true,
  display: "swap",
});

export const calFont = localFont({
  src: "./assets/CalSans-SemiBold.woff2",
  variable: "--font-cal",
  preload: true,
  display: "swap",
  weight: "600",
});
