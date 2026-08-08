"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { ChevronRight } from "lucide-react";

export default function Skills() {
  const categories = Object.keys(portfolioData.skills);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I use to build robust software solutions.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          {categories.map((category, idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-primary/40 transition-all flex flex-col md:flex-row md:items-center gap-6 shadow-lg hover:shadow-primary/5"
            >
              <div className="md:w-1/4 flex-shrink-0">
                <h3 className="text-lg md:text-xl font-bold text-white capitalize flex items-center gap-2 group-hover:text-primary transition-colors">
                  <ChevronRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity -ml-7 absolute hidden md:block" />
                  {category === 'ai' ? 'AI & Automation' : category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 md:w-3/4">
                {portfolioData.skills[category].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm font-medium text-gray-300 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
