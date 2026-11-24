import { githubUsername, featuredRepos, hiddenRepos } from "@/data/projects";

export type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  featured: boolean;
};

export async function getRepos(): Promise<Repo[]> {
  const url =
    "https://api.github.com/users/" +
    githubUsername +
    "/repos?per_page=100&sort=updated";

  const res = await fetch(url, {
    headers: { Accept: "application/vnd.github+json" },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("GitHub request failed: " + res.status);
  }

  const data: Repo[] = await res.json();

  const repos = data
    .filter(
      (r) =>
        !r.fork &&
        r.name !== githubUsername &&
        !hiddenRepos.includes(r.name)
    )
    .map((r) => ({ ...r, featured: featuredRepos.includes(r.name) }));

  return [
    ...featuredRepos
      .map((name) => repos.find((r) => r.name === name))
      .filter((r): r is Repo => Boolean(r)),
    ...repos.filter((r) => !r.featured),
  ];
}