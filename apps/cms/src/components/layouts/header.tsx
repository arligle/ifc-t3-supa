"use client";

import type { ReactNode } from "react";
import { createContext } from "react";

import { cn } from "@acme/utils";

import { useScroll } from "../use-scroll";
import { MaxWidthWrapper } from "./max-width-wrapper";

export type HeaderTheme = "light" | "dark";

export const HeaderContext = createContext<{ theme: HeaderTheme }>({
  theme: "light",
});
interface HeaderProps {
  theme?: HeaderTheme;
  children: ReactNode;
}
export function Header({ theme = "light", children }: HeaderProps) {
  const scrolled = useScroll(80);

  return (
    <HeaderContext.Provider value={{ theme }}>
      <div
        className={cn(
          "sticky inset-x-0 top-0 z-30 w-full transition-all duration-500",
          theme === "dark" && "dark",
        )}
      >
        <div
          className={cn(
            "-z-1 absolute inset-0 border-transparent transition-all duration-500",
            {
              " border-b border-black/10 bg-white/50  backdrop-blur-lg dark:border-white/10 dark:bg-black/50":
                scrolled,
            },
          )}
        />
        <MaxWidthWrapper className="relative">{children}</MaxWidthWrapper>
      </div>
    </HeaderContext.Provider>
  );
}
