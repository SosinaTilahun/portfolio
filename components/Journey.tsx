"use client";

import { motion } from "framer-motion";
import { journey } from "@/data/journey";

export default function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-3xl px-6 py-28">
      <p className="text-sm uppercase tracking-widest text-accent">Journey</p>
      <h2 className="mt-2 font-display text-4xl font-bold">
        Learning milestones
      </h2>

      <div className="mt-12 border-l border-border pl-8">
        {journey.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative pb-12 last:pb-0"
          >
            <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full bg-accent shadow-[0_0_12px_rgba(139,124,255,0.8)]" />
            <p className="text-sm text-accent">{item.date}</p>
            <h3 className="mt-1 font-display text-lg">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}