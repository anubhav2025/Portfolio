"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Users } from "lucide-react";
import { Section } from "@/components/ui";

const whatIDo = [
  {
    icon: Rocket,
    title: "Build Scalable Systems",
    description:
      "Designing and implementing microservices, APIs, and distributed systems that handle real-world scale.",
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Creating end-to-end web applications using modern frameworks like React, Node.js, and Spring Boot.",
  },
  {
    icon: Users,
    title: "Security Integration",
    description:
      "Integrating security tools and building features that help organizations manage vulnerabilities.",
  },
];

export function About() {
  return (
    <Section id="about" title="What I Do" subtitle="My areas of expertise">
      <div className="grid md:grid-cols-3 gap-6">
        {whatIDo.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-800 transition-colors group"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
              <item.icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {item.title}
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
