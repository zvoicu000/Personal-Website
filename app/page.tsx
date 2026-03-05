const projects = [
  {
    name: "Project One",
    description: "A brief description of what this project does and the tech stack used.",
    url: "#",
    tags: ["TypeScript", "React"],
  },
  {
    name: "Project Two",
    description: "A brief description of what this project does and the tech stack used.",
    url: "#",
    tags: ["Python", "FastAPI"],
  },
  {
    name: "Project Three",
    description: "A brief description of what this project does and the tech stack used.",
    url: "#",
    tags: ["Go", "PostgreSQL"],
  },
];

const links = [
  { label: "GitHub", url: "https://github.com" },
  { label: "LinkedIn", url: "https://linkedin.com" },
  { label: "Email", url: "mailto:you@example.com" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-10 border-b border-zinc-100 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
        <nav className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
          <span className="font-semibold tracking-tight">personalsite</span>
          <div className="flex gap-6 text-sm text-zinc-500 dark:text-zinc-400">
            <a href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">About</a>
            <a href="#projects" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-2xl px-6 pt-32 pb-24 space-y-24">
        {/* Hero / About */}
        <section id="about" className="space-y-5">
          <h1 className="text-4xl font-bold tracking-tight">Hey, I&apos;m <span className="text-zinc-500">Your Name</span> 👋</h1>
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            I&apos;m a software engineer who loves building useful things.
            I enjoy working across the full stack — from polished UIs to
            performant back-end services.
          </p>
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Currently based in <strong className="text-zinc-900 dark:text-zinc-100">Your City</strong>.
            Open to new opportunities and collaborations.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <div className="grid gap-4">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl border border-zinc-100 bg-zinc-50 p-5 transition-all hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium group-hover:underline">{project.name}</h3>
                  <span className="text-xs text-zinc-400">↗</span>
                </div>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Feel free to reach out — I&apos;m always happy to chat.
          </p>
          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-zinc-200 px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-100 dark:border-zinc-800">
        <p className="mx-auto max-w-2xl px-6 py-6 text-sm text-zinc-400 dark:text-zinc-600">
          © {new Date().getFullYear()} personalsite
        </p>
      </footer>
    </div>
  );
}
