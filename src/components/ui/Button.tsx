"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
  download?: boolean;
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
  download = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500";

  const variants = {
    primary:
      "bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30",
    secondary:
      "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700",
    outline:
      "border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-500 hover:text-primary-600 dark:hover:border-primary-400 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const MotionWrapper = ({ children }: { children: ReactNode }) => (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );

  if (href) {
    if (external) {
      return (
        <MotionWrapper>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses}
            download={download}
          >
            {children}
          </a>
        </MotionWrapper>
      );
    }
    return (
      <MotionWrapper>
        <Link href={href} className={buttonClasses} download={download}>
          {children}
        </Link>
      </MotionWrapper>
    );
  }

  return (
    <MotionWrapper>
      <button onClick={onClick} className={buttonClasses}>
        {children}
      </button>
    </MotionWrapper>
  );
}
