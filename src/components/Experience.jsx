"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-black/20 border-t border-white/5 overflow-hidden">
      {/* Background abstract element */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My career journey and the impact I've made in building scalable systems.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[16px] md:left-8 top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary via-accent to-transparent"></div>

          <div className="space-y-12">
            {portfolioData.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Glowing Dot */}
                <div className="absolute left-[13px] md:left-[29px] top-6 w-[8px] h-[8px] rounded-full bg-white shadow-[0_0_10px_3px_rgba(59,130,246,0.8)] z-10"></div>
                <div className="absolute left-[9px] md:left-[25px] top-[20px] w-[16px] h-[16px] rounded-full bg-primary/30 animate-ping z-0"></div>

                <div className="glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
                    <div>
                      <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-primary" />
                        {exp.role}
                      </h3>
                      <h4 className="text-lg text-gray-400 mt-1 font-medium">{exp.company}</h4>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm font-medium text-accent bg-accent/10 px-4 py-2 rounded-full w-fit">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                  </div>
                  
                  <ul className="space-y-4">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-gray-300 text-sm md:text-base flex items-start gap-3 group">
                        <span className="text-primary mt-1 opacity-50 group-hover:opacity-100 transition-opacity">▹</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
