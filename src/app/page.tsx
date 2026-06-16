import Link from "next/link";
import Image from "next/image";
import { getProjects } from "@/lib/projects";

export default function Home() {
  const projects = getProjects();
  const featuredProjects = projects.slice(0, 3);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-primary-600">[Your Name]</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              I build digital experiences that solve problems and create value. 
              Welcome to my portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                About Me
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My Skills
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "JavaScript", icon: "🟨" },
              { name: "TypeScript", icon: "🟦" },
              { name: "React", icon: "⚛️" },
              { name: "Next.js", icon: "⬜" },
              { name: "Node.js", icon: "🟩" },
              { name: "HTML5", icon: "🟥" },
              { name: "CSS3", icon: "🟦" },
              { name: "Tailwind", icon: "🌪️" },
              { name: "Git", icon: "🟠" },
              { name: "GitHub", icon: "⚫" },
              { name: "Figma", icon: "🟣" },
              { name: "VS Code", icon: "🟦" },
            ].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
              >
                <span className="text-3xl mb-2">{skill.icon}</span>
                <span className="text-sm font-medium text-gray-700">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A selection of my recent work and case studies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <article
                key={project.slug}
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="aspect-video bg-gray-200 relative">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      priority={false}
                    />
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                  >
                    Read Case Study
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
