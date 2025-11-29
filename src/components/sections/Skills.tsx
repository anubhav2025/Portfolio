"use client";

import { motion } from "framer-motion";
import { Section, Badge } from "@/components/ui";
import { skillCategories } from "@/data/portfolio";
import { Code, Globe, Database, Server, BookOpen } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Languages: Code,
  "Web Technologies": Globe,
  Databases: Database,
  "DevOps & Tools": Server,
  Foundations: BookOpen,
};

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Technologies and tools I work with"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => {
          const Icon = iconMap[category.name] || Code;
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-800 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                  <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {category.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="primary">{skill}</Badge>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
