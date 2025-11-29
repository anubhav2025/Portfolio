"use client";

import { motion } from "framer-motion";
import { Code2, Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  linkedin: Linkedin,
  github: Github,
  code: Code2,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
            &lt;AP /&gt;
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {personalInfo.socialLinks.map((link) => {
              const Icon = socialIcons[link.icon] || Code2;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              &copy; {currentYear} {personalInfo.name}
            </p>
            {/* <p className="text-gray-400 dark:text-gray-600 text-xs mt-1">
              Built with Next.js & Tailwind CSS
            </p> */}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
