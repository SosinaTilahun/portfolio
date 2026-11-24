"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Download } from "lucide-react";
import { siteConfig } from "@/data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  const initials = siteConfig.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#E8EAF0 1px, transparent 1px), linear-gradient(90deg, #E8EAF0 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />

      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.12 }}
        className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 pt-24 text-center"
      >
        {siteConfig.photo ? (
          <motion.div
            variants={fadeUp}
            className="relative mb-8 h-32 w-32 overflow-hidden rounded-full border border-border shadow-[0_0_60px_-10px_rgba(139,124,255,0.5)]"
          >
            <Image
              src={siteConfig.photo}
              alt={siteConfig.name}
              fill
              sizes="128px"
              priority
              className="object-cover"
            />
          </motion.div>
        ) : (
          <motion.div
            variants={fadeUp}
            className="mb-8 flex h-32 w-32 items-center justify-center rounded-full border border-border bg-card font-display text-4xl text-accent shadow-[0_0_60px_-10px_rgba(139,124,255,0.5)]"
          >
            {initials}
          </motion.div>
        )}

        <motion.p
          variants={fadeUp}
          className="mb-4 rounded-full border border-border bg-card px-4 py-1 text-sm text-muted"
        >
          Open to remote opportunities
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-display text-5xl font-bold tracking-tight sm:text-7xl"
        >
          Hi, I am <span className="text-accent">{siteConfig.name}</span>
        </motion.h1>

        <motion.h2
          variants={fadeUp}
          className="mt-4 font-display text-xl text-muted sm:text-2xl"
        >
          {siteConfig.title}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted"
        >
          {siteConfig.intro}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-transform hover:scale-105"
          >
            View Projects <ArrowDown size={16} />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition-colors hover:border-accent"
          >
            Contact Me <Mail size={16} />
          </a>

          {siteConfig.cv ? (
            <a
              href={siteConfig.cv}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition-colors hover:border-accent"
              >
              Download CV <Download size={16} />
            </a>
          ) : (
            <button
              type="button"
              disabled
              title="CV coming soon"
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium opacity-50"
            >
              Download CV <Download size={16} />
            </button>
          )}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8 flex gap-6 text-sm">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}