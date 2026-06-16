import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// Sample case study data - replace with your actual content
const caseStudies: Record<string, any> = {
  "grosvenor-casino": {
    id: "grosvenor-casino",
    title: "Grosvenor Casino: UX/UI Redesign",
    subtitle: "Senior Product Designer at Rank Interactive",
    description: "Complete redesign of the casino platform with focus on user experience and compliance.",
    tags: ["UX/UI", "Gambling", "Compliance", "Mobile-First"],
    year: "2024–Present",
    client: "Rank Interactive (Grosvenor Casino)",
    role: "Senior Product Designer",
    technologies: ["Figma", "User Research", "Prototyping", "Usability Testing"],
    challenges: [
      "Legacy system with outdated UX patterns",
      "Strict compliance requirements (UKGC)",
      "Need to improve user retention and satisfaction",
      "Complex user journeys for betting and gaming",
    ],
    solutions: [
      "Conducted extensive user research and stakeholder interviews",
      "Redesigned information architecture for better navigation",
      "Implemented mobile-first responsive design",
      "Created comprehensive design system for consistency",
      "Developed compliance-ready UI patterns",
    ],
    results: [
      "25% increase in user satisfaction scores",
      "15% reduction in support tickets",
      "Improved compliance audit scores",
      "Enhanced mobile conversion rates",
    ],
  },
  "kepler-assessment": {
    id: "kepler-assessment",
    title: "Global Skills Assessment Platform",
    subtitle: "UX/UI for Kepler + Co",
    description: "Developed UI/UX patterns for a robust design system serving global users.",
    tags: ["UX/UI", "Design System", "Data-Driven", "EdTech"],
    year: "2022–2024",
    client: "Kepler + Co",
    role: "Product Designer",
    technologies: ["Figma", "Design Systems", "User Testing", "Data Analysis"],
    challenges: [
      "Diverse global user base with varying needs",
      "Complex assessment workflows",
      "Need for scalable design patterns",
      "Integration with multiple learning management systems",
    ],
    solutions: [
      "Developed modular design system with global accessibility",
      "Created adaptive UX patterns for different user types",
      "Implemented data-driven design decisions",
      "Established comprehensive documentation and guidelines",
    ],
    results: [
      "30% improvement in user completion rates",
      "Reduced onboarding time by 40%",
      "Increased user satisfaction across all regions",
      "Scalable system adopted by multiple products",
    ],
  },
  "ibumdlali-app": {
    id: "ibumdlali-app",
    title: "Ib'umdlali: Gamified Financial Literacy",
    subtitle: "UX/UI for One Point Four Consulting",
    description: "Gamified financial literacy app that won Gold for UX and Interface Design.",
    tags: ["UX/UI", "Gamification", "Mobile App", "Award-Winning"],
    year: "2017–2022",
    client: "One Point Four Consulting",
    role: "Lead UX/UI Designer",
    technologies: ["Figma", "Prototyping", "Usability Testing", "Animation"],
    challenges: [
      "Making financial education engaging for young adults",
      "Balancing education with entertainment",
      "Designing for low-bandwidth environments",
      "Creating accessible gamification elements",
    ],
    solutions: [
      "Developed gamified learning journeys with rewards",
      "Created intuitive financial simulation tools",
      "Designed offline-first experience with sync capabilities",
      "Implemented progressive difficulty levels",
    ],
    results: [
      "Gold Award: UX, Interface & Navigation",
      "Bronze Award: Apps & Innovative Solutions",
      "Finalist: MTN App of the Year",
      "50,000+ active users in first year",
    ],
  },
  "wesbank-systems": {
    id: "wesbank-systems",
    title: "WesBank: Marketing Website & Internal Systems",
    subtitle: "UX/UI for One Point Four Consulting",
    description: "Complete UX/UI overhaul for marketing website and internal banking systems.",
    tags: ["UX/UI", "Fintech", "Internal Platforms", "Marketing"],
    year: "2017–2022",
    client: "WesBank",
    role: "UX/UI Designer",
    technologies: ["Figma", "Wireframing", "Prototyping", "Stakeholder Management"],
    challenges: [
      "Legacy systems with inconsistent UX",
      "Complex internal workflows",
      "Need to unify marketing and internal experiences",
      "Multiple user roles and permissions",
    ],
    solutions: [
      "Conducted comprehensive UX audit of existing systems",
      "Redesigned information architecture for better findability",
      "Created unified design language across all platforms",
      "Developed role-based UX patterns",
    ],
    results: [
      "40% reduction in user errors",
      "35% improvement in task completion times",
      "Increased user adoption of internal tools",
      "Consistent brand experience across all touchpoints",
    ],
  },
};

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const caseStudy = caseStudies[params.id];

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Link */}
      <div className="mb-8">
        <Link href="/case-studies" className="text-blue-600 hover:text-blue-700 flex items-center">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Case Studies
        </Link>
      </div>

      {/* Hero */}
      <section className="mb-12">
        <div className="flex flex-wrap gap-2 mb-6">
          {caseStudy.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          {caseStudy.title}
        </h1>
        <h2 className="text-xl sm:text-2xl text-gray-600 mb-4">
          {caseStudy.subtitle}
        </h2>
        <p className="text-lg text-gray-700 mb-8">{caseStudy.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
          <div>
            <span className="font-semibold text-gray-900">Client: </span>
            {caseStudy.client}
          </div>
          <div>
            <span className="font-semibold text-gray-900">Role: </span>
            {caseStudy.role}
          </div>
          <div>
            <span className="font-semibold text-gray-900">Year: </span>
            {caseStudy.year}
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="mb-12">
        <div className="w-full aspect-video bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
          {caseStudy.id === "ibumdlali-app" ? (
            <Image
              src="/assets/images/case-studies/ibumdlali.jpg"
              alt={caseStudy.title}
              width={800}
              height={600}
              className="object-cover w-full h-full"
              priority
            />
          ) : (
            <span className="text-gray-400">{caseStudy.title} Hero Image</span>
          )}
        </div>
      </section>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed">
            This case study explores the complete redesign and implementation of {caseStudy.title}. 
            The project focused on {caseStudy.description.toLowerCase()} while addressing 
            specific user needs and business objectives.
          </p>
        </div>
      </section>

      {/* Challenges */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Challenges</h2>
        <ul className="space-y-3">
          {caseStudy.challenges.map((challenge: string, index: number) => (
            <li
              key={index}
              className="flex items-start gap-3"
            >
              <svg
                className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700">{challenge}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Solutions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Solutions</h2>
        <ul className="space-y-3">
          {caseStudy.solutions.map((solution: string, index: number) => (
            <li
              key={index}
              className="flex items-start gap-3"
            >
              <svg
                className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700">{solution}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Results */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Results</h2>
        <ul className="space-y-3">
          {caseStudy.results.map((result: string, index: number) => (
            <li
              key={index}
              className="flex items-start gap-3"
            >
              <svg
                className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700">{result}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Technologies */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Technologies & Tools</h2>
        <div className="flex flex-wrap gap-3">
          {caseStudy.technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Interested in similar work?
        </h2>
        <p className="text-gray-600 mb-8">
          Let&apos;s discuss how we can apply these approaches to your project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn btn--primary">
            Get In Touch
          </Link>
          <Link href="/case-studies" className="btn btn--secondary">
            View All Case Studies
          </Link>
        </div>
      </section>
    </div>
  );
}
