"use client";

import { motion } from "framer-motion";
import { Star, ArrowUpRight, Globe } from "lucide-react";
import type { Repo } from "@/lib/github";

export default function ProjectCard({ repo, index }: { repo: Repo; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/60"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg">{repo.name}</h3>
        {repo.featured && (
          <span className="rounded-full bg-accent/15 px-2 py-0.5 text-xs text-accent">
            Featured
          </span>
        )}
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {repo.description || "No description yet."}
      </p>

      <div className="mt-6 flex items-center justify-between text-sm text-muted">
        <div className="flex items-center gap-4">
          {repo.language && (
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              {repo.language}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Star size={14} /> {repo.stargazers_count}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="transition-colors hover:text-accent"
            >
              <Globe size={18} />
            </a>
          )}
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View repository"
            className="transition-colors hover:text-accent"
          >
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}