"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-black/40 border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-xl glass text-primary flex-shrink-0 border border-primary/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                <a href={`mailto:${portfolioData.email}`} className="text-gray-400 hover:text-primary transition-colors">
                  {portfolioData.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="p-4 rounded-xl glass text-accent flex-shrink-0 border border-accent/20 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                <a href={`tel:${portfolioData.phone.replace(/\s+/g, '')}`} className="text-gray-400 hover:text-accent transition-colors">
                  {portfolioData.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="p-4 rounded-xl glass text-blue-400 flex-shrink-0 border border-blue-400/20 shadow-[0_0_15px_rgba(96,165,250,0.2)]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Location</h3>
                <p className="text-gray-400">
                  {portfolioData.location}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 rounded-2xl border border-white/10"
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-blue-600 transition-colors shadow-[0_0_20px_-5px_rgba(59,130,246,0.6)]">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
