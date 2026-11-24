"use client";

import { motion } from "framer-motion";

const highlights = [
  { label: "Focus", value: "Fullstack Development and AI" },
  { label: "Interests", value: "Machine Learning, Web Development" },
  { label: "Based in", value: "Addis Ababa, Ethiopia" },
  { label: "Goal", value: "To become a leading software engineer specializing in fullstack development and AI" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm uppercase tracking-widest text-accent">About</p>
        <h2 className="mt-2 font-display text-4xl font-bold">
          My journey in tech
        </h2>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted">
          I am a passionate software engineer with a strong focus on fullstack development and AI. My journey in tech has been driven by a desire to create innovative solutions and contribute to the ever-evolving world of technology. I have honed my skills in various programming languages, frameworks, and tools, allowing me to build robust applications and explore the exciting field of artificial intelligence.</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <p className="text-sm text-muted">{item.label}</p>
              <p className="mt-2 font-display text-lg">{item.value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}