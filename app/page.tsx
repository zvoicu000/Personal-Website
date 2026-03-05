import { SiNextdotjs, SiReact, SiPython, SiStreamlit, SiOpenai, SiGooglegemini, SiPlotly, SiC, SiGithub } from "react-icons/si";
import { FaMicrochip, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const tagIcons: Record<string, React.ReactElement> = {
  "Next.js": <SiNextdotjs className="inline mr-1 align-middle" style={{ color: "#000" }} size={14} />,
  "React": <SiReact className="inline mr-1 align-middle" style={{ color: "#61DAFB" }} size={14} />,
  "Python": <SiPython className="inline mr-1 align-middle" style={{ color: "#3776AB" }} size={14} />,
  "Streamlit": <SiStreamlit className="inline mr-1 align-middle" style={{ color: "#FF4B4B" }} size={14} />,
  "Azure OpenAI": <SiOpenai className="inline mr-1 align-middle" style={{ color: "#0078D4" }} size={14} />,
  "Gemini": <SiGooglegemini className="inline mr-1 align-middle" style={{ color: "#4285F4" }} size={14} />,
  "Plotly": <SiPlotly className="inline mr-1 align-middle" style={{ color: "#3F4F75" }} size={14} />,
  "C": <SiC className="inline mr-1 align-middle" style={{ color: "#A8B9CC" }} size={14} />,
  "Assembly": <FaMicrochip className="inline mr-1 align-middle" style={{ color: "#6E4C13" }} size={14} />,
};

const projects = [
  {
    name: "PulseCare",
    description: "PulseCare is a full-featured hospital management system designed to streamline operations for healthcare institutions.",
    url: "https://pulse-care-theta.vercel.app",
    tags: ["Next.js", "React"],
  },
  {
    name: "QueryCraft",
    description: "QueryCraft is a powerful Streamlit-based data exploration and visualization tool that leverages LLMs (Large Language Models) including Azure OpenAI and Google Gemini to help users generate, validate, and analyze SQL queries on SQLite and PostgreSQL databases. It provides interactive charts, advanced statistics, and data quality assessments, all in a modern, user-friendly interface.",
    url: "https://github.com/zvoicu000/QueryCraft",
    tags: ["Python", "Streamlit","Azure OpenAI","Gemini","Plotly"],
  },
  {
    name: "OS-from-scratch",
    description: "A custom-built operating system developed from scratch in C for x86 architecture.",
    url: "https://github.com/zvoicu000/OS-from-scratch",
    tags: ["C", "Assembly"],
  },
];

const links = [
  { label: "GitHub", url: "https://github.com/zvoicu000", icon: <SiGithub size={16} /> },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/bogdan-andrei-voicu/", icon: <FaLinkedin size={16} style={{ color: "#0A66C2" }} /> },
  { label: "Email", url: "mailto:bogdanvoicu115@gmail.com", icon: <MdEmail size={16} style={{ color: "#EA4335" }} /> },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-10 border-b border-zinc-100 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
        <nav className="mx-auto flex max-w-2xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          <span className="font-semibold tracking-tight text-base sm:text-lg">Personal Website</span>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            <a href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">About</a>
            <a href="#projects" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Projects</a>
            <a href="#footer-contact" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-2xl px-3 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-24 space-y-16 sm:space-y-24">
        {/* Hero / About */}
        <section id="about" className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Hey, I&apos;m <span className="text-zinc-500">Voicu Bogdan-Andrei</span> 👋</h1>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            I&apos;m a computer engineer who loves building useful things.
            I enjoy working across the full stack, from polished UIs to
            performant back-end services.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Open to new opportunities and collaborations.
          </p>
        </section>
       {/* Projects */}
        <section id="projects" className="space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Projects</h2>
          <div className="grid gap-4">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl border border-zinc-100 bg-zinc-50 p-4 sm:p-5 transition-all hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="font-medium group-hover:underline text-base sm:text-lg">{project.name}</h3>
                  <span className="text-xs text-zinc-400">↗</span>
                </div>
                <p className="mt-1 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 rounded-md bg-zinc-100 px-2 py-0.5 text-[10px] sm:text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {tagIcons[tag] || null}
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        
      </main>

      <footer className="border-t border-zinc-100 dark:border-zinc-800" id="footer-contact">
        <div className="mx-auto max-w-2xl px-6 py-6 flex flex-col items-center gap-4">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-2">Contact</h2>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-zinc-200 px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800"
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-sm text-zinc-400 dark:text-zinc-600 mt-2">
            © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
