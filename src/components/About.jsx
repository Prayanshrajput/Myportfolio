"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Code2, Cpu, Database, Server } from "lucide-react";

export default function About() {
  const cards = [
    { icon: <Server className="w-8 h-8 text-primary" />, title: "Backend Architecture", desc: "Building scalable APIs and microservices." },
    { icon: <Cpu className="w-8 h-8 text-accent" />, title: "Agentic AI", desc: "Developing LLM integrations and AI agents." },
    { icon: <Code2 className="w-8 h-8 text-blue-400" />, title: "Workflow Automation", desc: "Creating logic and API-driven workflows." },
    { icon: <Database className="w-8 h-8 text-green-400" />, title: "Database Design", desc: "Optimizing schemas and queries." },
  ];

  return (
    <section id="about" className="py-24 relative border-t border-white/5 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-16">
            {portfolioData.summary}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group hover:-translate-y-2"
            >
              <div className="mb-6 p-4 rounded-xl bg-white/5 inline-block group-hover:bg-white/10 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
