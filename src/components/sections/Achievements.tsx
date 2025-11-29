"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Medal, Star } from "lucide-react";
import { Section } from "@/components/ui";
import { achievements } from "@/data/portfolio";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  trophy: Trophy,
  award: Award,
  medal: Medal,
  star: Star,
};

export function Achievements() {
  return (
    <Section
      id="achievements"
      title="Achievements"
      subtitle="Recognition and accomplishments"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => {
          const Icon = iconMap[achievement.icon || "trophy"] || Trophy;
          return (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-800 transition-colors group flex items-center gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                  <Icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
