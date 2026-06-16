import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero / About Me Section */}
      <section
        id="about"
        className="section-container mb-16 lg:mb-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Hi there, I&apos;m Martin.
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-600 mb-6">
              UX, UI, Product Design, Consultant
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
              I&apos;m a digital creative and product designer with a Bachelor in Visual Communication and 10 years of experience creating digital experiences. I&apos;ve been part of award-winning projects and worked with cross-functional teams in B2B and B2C environments for Websites, Apps, Internal Digital Platforms, and SAAS products. My design philosophy: Blend informed choices and smart design, bringing together business needs and user joy, while hitting those bottom-line goals.
            </p>
            <Link
              href="#skills"
              className="btn btn--secondary"
            >
              View My Work
            </Link>
          </div>
          
          {/* Placeholder Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Hero Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="section-container mb-16 lg:mb-24"
      >
        <h2 className="section-heading">What I Bring to the Table</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Core Skills */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Core Skills</h3>
            <ul className="space-y-2">
              {[
                "UX/UI",
                "IA",
                "Wireframing",
                "Prototyping",
                "Mobile-First Design",
                "User Testing",
                "Research",
                "Documentation",
              ].map((skill) => (
                <li key={skill} className="skill-item">
                  <span className="skill-item__icon">✓</span>
                  <span className="skill-item__label">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialization */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Specialization</h3>
            <ul className="space-y-2">
              {[
                "AI UX",
                "Agentic Prompts",
                "Heuristics",
                "Gambling Industry Compliance (UKGC)",
              ].map((skill) => (
                <li key={skill} className="skill-item">
                  <span className="skill-item__icon">✓</span>
                  <span className="skill-item__label">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Soft Skills */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Tools</h3>
            <ul className="space-y-2 mb-6">
              {["Figma", "Miro", "HTML/CSS"].map((tool) => (
                <li key={tool} className="skill-item">
                  <span className="skill-item__icon">✓</span>
                  <span className="skill-item__label">{tool}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-gray-900 mb-4">Soft Skills</h3>
            <ul className="space-y-2 mb-6">
              {[
                "Stakeholder Management",
                "Cross-Functional Collaboration",
                "Workshop Facilitation",
              ].map((skill) => (
                <li key={skill} className="skill-item">
                  <span className="skill-item__icon">✓</span>
                  <span className="skill-item__label">{skill}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-gray-900 mb-4">Industries</h3>
            <ul className="space-y-2">
              {["Gambling", "Fintech", "SAAS", "EdTech", "Internal Digital Platforms"].map(
                (industry) => (
                  <li key={industry} className="skill-item">
                    <span className="skill-item__icon">✓</span>
                    <span className="skill-item__label">{industry}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* Processes Section */}
      <section
        id="processes"
        className="section-container mb-16 lg:mb-24"
      >
        <h2 className="section-heading mb-12">Processes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Process 01: Discover + Define */}
          <article className="process-card">
            <div className="process-card__image bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400">Process 01 Image</span>
            </div>
            <div className="process-card__content">
              <h3 className="process-card__heading">1. Discover + Define</h3>
              <h4 className="process-card__subheading">
                Uncovering User Needs and Business Goals, Translating Insights into Actionable Strategies
              </h4>
              <ul className="process-card__description list-disc list-inside space-y-1 text-sm">
                <li>Stakeholder Interviews</li>
                <li>User Research</li>
                <li>Competitor Analysis</li>
                <li>Data-Driven Insights</li>
                <li>Persona Creation</li>
                <li>User Journeys</li>
                <li>Problem Definition</li>
                <li>Strategic Decision-Making</li>
              </ul>
            </div>
          </article>

          {/* Process 02: Design + Deliver */}
          <article className="process-card">
            <div className="process-card__image bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400">Process 02 Image</span>
            </div>
            <div className="process-card__content">
              <h3 className="process-card__heading">2. Design + Deliver</h3>
              <h4 className="process-card__subheading">
                Crafting Intuitive, Compliant Solutions, Ensuring Seamless Handover and Implementation
              </h4>
              <ul className="process-card__description list-disc list-inside space-y-1 text-sm">
                <li>Lo-Fi Wireframing</li>
                <li>Prototyping</li>
                <li>Usability Testing</li>
                <li>Rapid Iteration</li>
                <li>Gamified UX</li>
                <li>Developer Collaboration</li>
                <li>Design System Alignment</li>
                <li>QA</li>
                <li>User Testing</li>
                <li>Documentation</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* Career History Section */}
      <section
        id="career"
        className="section-container mb-16 lg:mb-24"
      >
        <h2 className="section-heading">My Journey</h2>
        
        <div className="space-y-4">
          {/* Current Role */}
          <article className="career-item">
            <div className="career-item__header">
              <div>
                <h3 className="career-item__title">
                  Senior Product Designer at Rank Interactive (Grosvenor Casino)
                </h3>
                <p className="career-item__role">
                  UX/UI, Prototyping, Research, User Testing, Documentation
                </p>
              </div>
              <span className="career-item__year">Dec 2024–Present</span>
            </div>
            <p className="career-item__description">
              Championed user-centric design, aligned strategic goals with customer satisfaction, led workshops, streamlined development.
            </p>
          </article>

          {/* Kepler + Co */}
          <article className="career-item">
            <div className="career-item__header">
              <div>
                <h3 className="career-item__title">Kepler + Co</h3>
                <p className="career-item__role">
                  UX/UI for a global skills assessment and learning platform
                </p>
              </div>
              <span className="career-item__year">Feb 2022–July 2024</span>
            </div>
            <p className="career-item__description">
              Developed UI/UX patterns for a robust design system, made data-driven decisions, and maintained documentation for user testing and research.
            </p>
          </article>

          {/* One Point Four Consulting */}
          <article className="career-item">
            <div className="career-item__header">
              <div>
                <h3 className="career-item__title">One Point Four Consulting</h3>
                <p className="career-item__role">
                  UX/UI for Ib&apos;umdlali, WesBank, BankservAfrica
                </p>
              </div>
              <span className="career-item__year">March 2017–March 2022</span>
            </div>
            <p className="career-item__description">
              Cross-functional collaboration, user testing, animation, illustration. 
              <strong>Awards:</strong> Ib&apos;umdlali - Gold: UX, Interface & Navigation; Bronze: Apps & Innovative Solutions; Finalist: MTN App of the Year.
            </p>
          </article>
        </div>
      </section>

      {/* Case Studies CTA */}
      <section className="section-container mb-16 lg:mb-24">
        <h2 className="section-heading mb-6">Case Studies</h2>
        <p className="text-gray-600 mb-8">
          Explore detailed case studies of my work and design process.
        </p>
        <Link href="/case-studies" className="btn btn--primary">
          View Case Studies
        </Link>
      </section>
    </div>
  );
}
