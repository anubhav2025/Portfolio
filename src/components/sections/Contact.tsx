"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code } from "lucide-react";
import { Section, Button } from "@/components/ui";
import { personalInfo } from "@/data/portfolio";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  linkedin: Linkedin,
  github: Github,
  code: Code,
};

export function Contact() {
  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Let's connect and discuss opportunities"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-800 transition-colors"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                  <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                  <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <p className="text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {personalInfo.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="text-gray-900 dark:text-white">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Connect with me
              </p>
              <div className="flex items-center gap-3">
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
                      className="w-10 h-10 rounded-xl bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      aria-label={link.name}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-800 transition-colors flex flex-col justify-center text-center"
          >
            <div className="mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Let&apos;s Work Together
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8">
                I&apos;m always interested in hearing about new opportunities and exciting projects.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>
            <Button
              href={`mailto:${personalInfo.email}`}
              variant="primary"
              size="lg"
              external
              className="w-full"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Button>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
