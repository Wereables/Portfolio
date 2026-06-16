import Link from "next/link";
import Image from "next/image";
import { getProjects } from "@/lib/projects";

export default function Projects() {
  const projects = getProjects();

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My Projects
            </h1>
            <p className="text-xl text-gray-600">
              Explore my work and dive into detailed case studies
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Filter Tags */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              <button className="px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-full">
                All
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200">
                Web Development
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200">
                Design
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200">
                Mobile
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200">
                Open Source
              </button>
            </div>

            {/* Projects List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <article
                  key={project.slug}
                  className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden group"
                >
                  <div className="aspect-video bg-gray-200 relative">
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        priority={index < 3}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center justify-center px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-medium rounded-md hover:bg-white transition-colors"
                      >
                        View Case Study
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
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
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
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">
                        {project.year}
                      </span>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="text-primary-600 font-medium hover:text-primary-700"
                      >
                        Read more →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Interested in working together?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects and opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
