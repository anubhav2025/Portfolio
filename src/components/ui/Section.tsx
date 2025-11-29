"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
}

export function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  fullHeight = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 px-4 md:px-8 ${fullHeight ? "min-h-screen flex flex-col justify-center" : ""} ${className}`}
    >
      <div className="max-w-6xl mx-auto w-full">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-14 text-center"
          >
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent mb-3">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                {subtitle}
              </p>
            )}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full"
            />
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
