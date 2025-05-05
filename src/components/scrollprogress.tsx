"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps, useScroll } from "motion/react";
import React from "react";
interface ScrollProgressProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
  customProp?: string; // 添加一个自定义属性
  anotherProp?: number; // 添加另一个自定义属性
}
export const ScrollProgress = React.forwardRef<
  HTMLDivElement,
  ScrollProgressProps
>(({ className, ...props }, ref) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-[.5rem] origin-left bg-gradient-to-r from-[var(--chart-1)]  to-[var(--chart-2)]",
        className
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  );
});

ScrollProgress.displayName = "ScrollProgress";
