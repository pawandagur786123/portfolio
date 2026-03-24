import Link from "next/link";

const projects = [
  {
    id: "01",
    title: "Job Tracker",
    description:
      "Job application tracking API with full CRUD, status pipeline, and skill matching.",
    stack: ["NestJS", "TypeScript", "Prisma", "MySQL", "Docker", "Kubernetes"],
    github: "https://github.com/pawandagur786123/Job-tracker",
    color: "bg-blue",
    textColor: "text-light-blue",
  },
  {
    id: "02",
    title: "SAM Lambda",
    description:
      "Serverless ticket availability API on AWS with auto-seeding and DynamoDB persistence.",
    stack: ["Python", "AWS Lambda", "DynamoDB", "SAM", "API Gateway"],
    github: "https://github.com/pawandagur786123/sam-lambda",
    color: "bg-green",
    textColor: "text-white",
  },
  {
    id: "03",
    title: "NODE-ALB",
    description:
      "Application load balancer with round-robin routing, sticky sessions, and health checks.",
    stack: ["Node.js", "Express", "http-proxy", "axios"],
    github: "https://github.com/pawandagur786123/NODE-ALB",
    color: "bg-beige",
    textColor: "text-brown",
  },
  {
    id: "04",
    title: "Portfolio",
    description:
      "This site — built with Next.js 15, Tailwind CSS v4, and deployed on Vercel.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/pawandagur786123/Portfolio",
    color: "bg-yellow",
    textColor: "text-black",
  },
  {
    id: "05",
    title: "Django Backend",
    description:
      "REST API backend with Django, featuring authentication and relational data models.",
    stack: ["Python", "Django", "REST Framework", "PostgreSQL"],
    github: "https://github.com/pawandagur786123/django-Backend",
    color: "bg-black",
    textColor: "text-white",
  },
  {
    id: "06",
    title: "Blog",
    description:
      "Next.js blog with dynamic routing, server-side rendering, and markdown support.",
    stack: ["Next.js", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/pawandagur786123/Blog",
    color: "bg-light-blue",
    textColor: "text-blue",
  },
];

const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  Backend: ["Node.js", "NestJS", "Python", "Django", "REST APIs"],
  Database: ["PostgreSQL", "MySQL", "DynamoDB", "Prisma ORM"],
  "Cloud & DevOps": ["AWS Lambda", "SAM", "Docker", "Kubernetes", "Vercel"],
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-5 bg-white border-b">
        <span className="body-text font-semibold">Pawan Dagur</span>
        <div className="flex items-center gap-6">
          <a href="#projects" className="body-text text-black hover:text-blue transition-colors">Work</a>
          <a href="#skills" className="body-text text-black hover:text-blue transition-colors">Skills</a>
          <a href="#contact" className="body-text text-black hover:text-blue transition-colors">Contact</a>
          <a
            href="https://github.com/pawandagur786123"
            target="_blank"
            rel="noopener noreferrer"
            className="body-text text-blue font-semibold hover:underline"
          >
            GitHub ↗
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-8 pt-40 pb-20 border-b">
        <div className="max-w-5xl">
          <p className="small-caps text-blue mb-4">Full Stack Developer</p>
          <h1 className="font-bricolage text-[80px] md:text-[120px] font-extrabold leading-none tracking-tight text-black mb-8">
            Pawan<br />
            <span className="text-green">Dagur</span>
          </h1>
          <p className="body-large text-black max-w-xl mb-10">
            I build scalable web applications, REST APIs, and cloud-native services.
            Comfortable across the full stack — from React frontends to AWS serverless backends.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue text-white body-text rounded-full hover:bg-black transition-colors"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-black body-text rounded-full hover:bg-black hover:text-white transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 py-20">
        <p className="small-caps text-black mb-10">Selected Projects</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${project.color} rounded-2xl p-8 flex flex-col gap-4 hover:scale-[1.02] transition-transform`}
            >
              <div className="flex justify-between items-start">
                <span className={`label-text ${project.textColor} opacity-60`}>
                  {project.id}
                </span>
                <span className={`body-text ${project.textColor} opacity-60`}>↗</span>
              </div>
              <h3 className={`font-bricolage text-3xl font-extrabold ${project.textColor}`}>
                {project.title}
              </h3>
              <p className={`body-text ${project.textColor} opacity-80 flex-1`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full border ${project.textColor} border-current opacity-60`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/pawandagur786123"
            target="_blank"
            rel="noopener noreferrer"
            className="body-text text-blue font-semibold hover:underline"
          >
            View all repos on GitHub ↗
          </a>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-beige px-8 py-20">
        <p className="small-caps text-black mb-10">Tech Stack</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <p className="label-text text-brown mb-4">{category}</p>
              <ul className="flex flex-col gap-2">
                {items.map((skill) => (
                  <li key={skill} className="body-text text-black flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green inline-block" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="px-8 py-20 border-t max-w-3xl">
        <p className="small-caps text-black mb-6">About</p>
        <p className="body-large text-black mb-4">
          Full Stack Developer with experience building production-grade applications
          across the entire stack. I enjoy working close to the infrastructure — whether
          that's designing a Prisma schema, wiring up a NestJS API, or deploying
          serverless functions on AWS.
        </p>
        <p className="body-large text-black">
          Currently open to full stack developer roles. I care about clean code,
          good architecture, and shipping things that actually work.
        </p>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-blue mx-8 mb-20 rounded-3xl py-20 px-10 flex flex-col items-center gap-6 text-center"
      >
        <p className="small-caps text-light-blue">Let's work together</p>
        <h2 className="font-bricolage text-[60px] md:text-[80px] font-extrabold text-white leading-none">
          Get in touch
        </h2>
        <p className="body-text text-light-blue max-w-md">
          Open to full stack developer roles. Feel free to reach out via email or connect on LinkedIn.
        </p>
        <div className="flex gap-4 flex-wrap justify-center mt-4">
          <a
            href="mailto:pawandagur786@gmail.com"
            className="px-6 py-3 bg-white text-blue body-text font-semibold rounded-full hover:bg-light-blue transition-colors"
          >
            Email me
          </a>
          <a
            href="www.linkedin.com/in/pawan-dagur-53a3b7130"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white text-white body-text rounded-full hover:bg-white hover:text-blue transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/pawandagur786123"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white text-white body-text rounded-full hover:bg-white hover:text-blue transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-10 flex justify-between items-center border-t">
        <span className="body-text text-black">© 2026 Pawan Dagur</span>
        <div className="flex items-center gap-6">
          <a href="#projects" className="body-text text-black hover:text-blue transition-colors">Work</a>
          <a href="#skills" className="body-text text-black hover:text-blue transition-colors">Skills</a>
          <a href="#contact" className="body-text text-black hover:text-blue transition-colors">Contact</a>
        </div>
      </footer>
    </main>
  );
}
