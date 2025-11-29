"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Calendar,
  Shield,
  Plus,
  RefreshCw,
  Filter,
  GitBranch,
  Target,
} from "lucide-react";
import { Section, Badge } from "@/components/ui";
import { experience } from "@/data/portfolio";

const timelineIcons = [
  { icon: Shield, color: "from-blue-500 to-cyan-500" },
  { icon: Plus, color: "from-green-500 to-emerald-500" },
  { icon: RefreshCw, color: "from-purple-500 to-violet-500" },
  { icon: Filter, color: "from-orange-500 to-amber-500" },
  { icon: GitBranch, color: "from-pink-500 to-rose-500" },
  { icon: Target, color: "from-red-500 to-orange-500" },
];

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="My professional journey"
    >
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-800 transition-colors"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start gap-4 mb-8">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                  <Briefcase className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {exp.position}
                    </h3>
                    <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-700 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 via-purple-300 to-pink-300 dark:from-primary-600 dark:via-purple-600 dark:to-pink-600 rounded-full" style={{ transform: "translateX(-50%)" }} />

              <div className="space-y-4">
                {exp.description.map((item, i) => {
                  const iconData = timelineIcons[i % timelineIcons.length];
                  const IconComponent = iconData.icon;

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                      className="flex items-center gap-4 group"
                    >
                      {/* Timeline node */}
                      <div className="relative z-10 flex-shrink-0">
                        <div
                          className={`w-8 h-8 rounded-full bg-gradient-to-br ${iconData.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200`}
                        >
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="p-4 rounded-xl bg-white dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 hover:border-primary-200 dark:hover:border-primary-700 transition-colors">
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                            {item}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Technologies */}
            {exp.technologies && (
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                  Technologies Used
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="primary">{tech}</Badge>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
