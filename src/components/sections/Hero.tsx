"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Code, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui";
import { personalInfo, education } from "@/data/portfolio";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  linkedin: Linkedin,
  github: Github,
  code: Code,
};

// Font configurations for the typewriter effect - using coding/tech fonts
const fontStyles = [
  { fontFamily: "var(--font-jetbrains), monospace", fontWeight: "700" },
  { fontFamily: "var(--font-fira-code), monospace", fontWeight: "600" },
  { fontFamily: "var(--font-source-code), monospace", fontWeight: "700" },
  { fontFamily: "var(--font-space-mono), monospace", fontWeight: "700" },
  { fontFamily: "var(--font-ibm-plex), monospace", fontWeight: "600" },
];

function TypewriterName({ name }: { name: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [fontIndex, setFontIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseDelay = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (charIndex < name.length) {
          setDisplayedText(name.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseDelay);
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setDisplayedText(name.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Switch font and start typing again
          setIsDeleting(false);
          setFontIndex((prev) => (prev + 1) % fontStyles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, name]);

  const currentFont = fontStyles[fontIndex];

  return (
    <span className="inline-flex items-center">
      <span
        style={{
          fontFamily: currentFont.fontFamily,
          fontWeight: currentFont.fontWeight,
          fontStyle: (currentFont as { fontStyle?: string }).fontStyle || "normal",
          letterSpacing: "-0.02em",
          transition: "font-family 0.3s ease",
        }}
      >
        {displayedText}
      </span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-[3px] h-[0.9em] bg-primary-500 ml-1"
      />
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden px-4 md:px-8 pt-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 min-h-[1.2em] tracking-tight"
          >
            <TypewriterName name={personalInfo.name} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4"
          >
            {personalInfo.title}
          </motion.p>

          {/* Education Badge */}
          {education[0] && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45 }}
              className="flex items-center justify-center gap-2 mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 border border-purple-200 dark:border-purple-800">
                <GraduationCap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {education[0].degree} {education[0].field}
                </span>
                <span className="text-gray-400 dark:text-gray-500">•</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {education[0].institution.split(" ").slice(-2).join(" ")}
                </span>
              </div>
            </motion.div>
          )}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button href="#contact" variant="primary" size="lg">
              Get in Touch
            </Button>
            <Button
              href={personalInfo.resumeUrl}
              variant="outline"
              size="lg"
              external
              download
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center gap-4 pb-20 md:pb-0"
          >
            {personalInfo.socialLinks.map((link) => {
              const Icon = iconMap[link.icon] || Code;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - only visible on desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex"
      >
        <motion.a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
}
