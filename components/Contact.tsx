"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";

const links = [
  { label: "Email", value: siteConfig.email, href: "mailto:" + siteConfig.email },
  { label: "GitHub", value: "View my code", href: siteConfig.github },
  { label: "LinkedIn", value: "Let us connect", href: siteConfig.linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 text-center sm:p-16"
      >
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[100px]" />

        <div className="relative">
          <p className="text-sm uppercase tracking-widest text-accent">
            Contact
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold">
            Let us work together
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            Have a project, question, or opportunity? My inbox is open.
          </p>

          <a
            href={"mailto:" + siteConfig.email}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-transform hover:scale-105"
          >
            <Mail size={16} /> Say hello
          </a>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-border bg-bg p-5 text-left transition-colors hover:border-accent/60"
              >
                <p className="flex items-center justify-between text-sm text-muted">
                  {link.label}
                  <ArrowUpRight
                    size={14}
                    className="transition-colors group-hover:text-accent"
                  />
                </p>
                <p className="mt-1 truncate text-sm">{link.value}</p>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}