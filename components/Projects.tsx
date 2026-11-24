import { Suspense } from "react";
import { getRepos } from "@/lib/github";
import ProjectCard from "@/components/ProjectCard";

async function ProjectGrid() {
  let repos;
  try {
    repos = await getRepos();
  } catch {
    return (
      <p className="rounded-2xl border border-border bg-card p-6 text-muted">
        Could not load projects right now. Please try again later.
      </p>
    );
  }

  if (repos.length === 0) {
    return (
      <p className="rounded-2xl border border-border bg-card p-6 text-muted">
        No public projects yet. Check back soon.
      </p>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo, i) => (
        <ProjectCard key={repo.id} repo={repo} index={i} />
      ))}
    </div>
  );
}

function GridSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3].map((n) => (
        <div
          key={n}
          className="h-44 animate-pulse rounded-2xl border border-border bg-card"
        />
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <p className="text-sm uppercase tracking-widest text-accent">Projects</p>
      <h2 className="mt-2 font-display text-4xl font-bold">Things I have built</h2>
      <div className="mt-10">
        <Suspense fallback={<GridSkeleton />}>
          <ProjectGrid />
        </Suspense>
      </div>
    </section>
  );
}