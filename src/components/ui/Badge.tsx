"use client";

import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "primary",
  className = "",
}: BadgeProps) {
  const variants = {
    primary:
      "bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800",
    secondary:
      "bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700",
    outline:
      "border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-primary-300 dark:hover:border-primary-700",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
