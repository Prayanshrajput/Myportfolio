"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Mail, MapPin, Loader2 } from "lucide-react";

const FLOW_URL = "https://flow.sokt.io/func/scriFwIfvcac";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status.state === "sending") return;

    setStatus({ state: "sending", message: "" });

    try {
      const res = await fetch(FLOW_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: `Portfolio contact from ${form.name || "Anonymous"}`,
          body: form.message,
          email: form.email,
        }),
      });

      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);

      setForm({ name: "", email: "", message: "" });
      setStatus({ state: "success", message: "Thanks! Your message is on its way." });
    } catch (err) {
      setStatus({ state: "error", message: "Something went wrong. Please email me directly." });
    }
  };

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
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                <input name="name" value={form.name} onChange={handleChange} required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input name="email" value={form.email} onChange={handleChange} required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" disabled={status.state === "sending"} className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-blue-600 transition-colors shadow-[0_0_20px_-5px_rgba(59,130,246,0.6)] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                {status.state === "sending" && <Loader2 className="w-5 h-5 animate-spin" />}
                {status.state === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status.message && (
                <p className={`text-sm text-center ${status.state === "success" ? "text-green-400" : "text-red-400"}`}>
                  {status.message}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
