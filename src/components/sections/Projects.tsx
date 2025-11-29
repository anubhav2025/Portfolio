"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  GitBranch,
  Folder,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { Section, Badge } from "@/components/ui";
import { projects } from "@/data/portfolio";

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedSkills, setExpandedSkills] = useState(false);
  const [direction, setDirection] = useState(0);

  const currentProject = projects[currentIndex];

  const goToNext = () => {
    setDirection(1);
    setExpandedSkills(false);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setExpandedSkills(false);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setExpandedSkills(false);
    setCurrentIndex(index);
  };

  const hasMoreSkills = currentProject.technologies.length > 3;
  const displayedSkills = expandedSkills
    ? currentProject.technologies
    : currentProject.technologies.slice(0, 3);
  const remainingCount = currentProject.technologies.length - 3;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Some of my recent work"
    >
      <div className="relative max-w-4xl mx-auto">
        {/* Navigation Buttons */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-10">
          <motion.button
            onClick={goToPrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-10">
          <motion.button
            onClick={goToNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Project Card */}
        <div className="overflow-hidden px-4">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentProject.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-800 transition-colors p-6 md:p-8"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                    <Folder className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      {currentProject.title}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mt-1">
                      {currentProject.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {currentProject.githubUrl && (
                    <motion.a
                      href={currentProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 transition-colors"
                      aria-label="View on GitHub"
                    >
                      <GitBranch className="w-5 h-5" />
                    </motion.a>
                  )}
                  {currentProject.liveUrl && (
                    <motion.a
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                  Key Highlights
                </h4>
                <ul className="space-y-3">
                  {currentProject.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                    >
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 mt-2" />
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-600">
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                  Technologies
                </h4>
                <div className="flex flex-wrap items-center gap-2">
                  <AnimatePresence mode="popLayout">
                    {displayedSkills.map((tech, i) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <Badge variant="primary" className="text-sm px-4 py-1.5">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {hasMoreSkills && !expandedSkills && (
                    <motion.button
                      onClick={() => setExpandedSkills(true)}
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors px-3 py-1.5 rounded-full border border-primary-200 dark:border-primary-800 hover:bg-primary-50 dark:hover:bg-primary-900/20"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      +{remainingCount} more
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  )}

                  {hasMoreSkills && expandedSkills && (
                    <motion.button
                      onClick={() => setExpandedSkills(false)}
                      className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      show less
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {projects.map((project, index) => (
            <motion.button
              key={project.id}
              onClick={() => goToProject(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 h-3 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
                  : "w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Project Counter */}
        <div className="text-center mt-4">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {currentIndex + 1} / {projects.length}
          </span>
        </div>
      </div>
    </Section>
  );
}
