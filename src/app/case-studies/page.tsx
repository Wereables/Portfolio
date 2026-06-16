import Link from "next/link";
import Image from "next/image";

export default function CaseStudies() {
  // Sample case studies - you can replace with your actual projects
  const caseStudies = [
    {
      id: "grosvenor-casino",
      title: "Grosvenor Casino: UX/UI Redesign",
      subtitle: "Senior Product Designer at Rank Interactive",
      description: "Complete redesign of the casino platform with focus on user experience and compliance.",
      tags: ["UX/UI", "Gambling", "Compliance", "Mobile-First"],
      year: "2024–Present",
      image: "/assets/images/projects/kepler.png",
    },
    {
      id: "kepler-assessment",
      title: "Global Skills Assessment Platform",
      subtitle: "UX/UI for Kepler + Co",
      description: "Developed UI/UX patterns for a robust design system serving global users.",
      tags: ["UX/UI", "Design System", "Data-Driven", "EdTech"],
      year: "2022–2024",
      image: "/assets/images/projects/kepler.png",
    },
    {
      id: "ibumdlali-app",
      title: "Ib'umdlali: Gamified Financial Literacy",
      subtitle: "UX/UI for One Point Four Consulting",
      description: "Gamified financial literacy app that won Gold for UX and Interface Design.",
      tags: ["UX/UI", "Gamification", "Mobile App", "Award-Winning"],
      year: "2017–2022",
      image: "/assets/images/case-studies/ibumdlali-full.png",
    },
    {
      id: "wesbank-systems",
      title: "WesBank: Marketing Website & Internal Systems",
      subtitle: "UX/UI for One Point Four Consulting",
      description: "Complete UX/UI overhaul for marketing website and internal banking systems.",
      tags: ["UX/UI", "Fintech", "Internal Platforms", "Marketing"],
      year: "2017–2022",
      image: "/assets/images/projects/wesbank.png",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Case Studies
        </h1>
        <p className="text-xl text-gray-600">
          Detailed explorations of my design work and process
        </p>
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {caseStudies.map((study, index) => (
          <article
            key={study.id}
            className="process-card group"
          >
            <div className="process-card__image bg-gray-100 flex items-center justify-center aspect-video overflow-hidden">
              {study.id === "ibumdlali-app" ? (
                <Image
                  src={study.image}
                  alt={study.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                  priority={index === 2}
                />
              ) : study.id === "wesbank-systems" ? (
                <Image
                  src={study.image}
                  alt={study.title}
                  width={400}
                  height={300}
                  className="object-contain w-full h-full p-4"
                />
              ) : (
                <Image
                  src={study.image}
                  alt={study.title}
                  width={400}
                  height={300}
                  className="object-contain w-full h-full p-4"
                />
              )}
            </div>
            <div className="process-card__content">
              <div className="flex flex-wrap gap-2 mb-3">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="process-card__heading mb-2">{study.title}</h3>
              <h4 className="text-sm text-gray-500 mb-2">{study.subtitle}</h4>
              <p className="text-sm text-gray-600 mb-4">{study.description}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">{study.year}</span>
                <Link
                  href={`/case-studies/${study.id}`}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Read Case Study →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Interested in working together?
        </h2>
        <p className="text-gray-600 mb-8">
          I&apos;m always open to discussing new projects and opportunities.
        </p>
        <Link href="/contact" className="btn btn--primary">
          Get In Touch
        </Link>
      </div>
    </div>
  );
}
