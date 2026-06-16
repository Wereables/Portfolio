import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero / About Me Section */}
      <AnimatedSection className="section-container mb-16 lg:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Hi there, I&apos;m Martin.
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-600 mb-6">
              Senior Product Designer
              <span className="text-blue-600 mx-2">|</span>
              UX/UI Specialist
              <span className="text-blue-600 mx-2">|</span>
              AI Design Consultant
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
              I&apos;m a digital creative and product designer with a Bachelor in Visual Communication and over 10 years of experience crafting exceptional digital experiences. Throughout my career, I&apos;ve been part of award-winning projects and collaborated with cross-functional teams across B2B and B2C environments, delivering solutions for websites, mobile apps, internal digital platforms, and SAAS products.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
              My design philosophy centers on blending informed choices with smart, user-centric design. I bring together business objectives and user needs to create solutions that not only look great but also drive measurable results. With specialized expertise in AI UX, agentic design patterns, and gambling industry compliance (UKGC), I help organizations navigate complex design challenges.
            </p>
            <Link
              href="#skills"
              className="btn btn--secondary inline-flex items-center gap-2"
            >
              View My Work
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </Link>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md aspect-square bg-gray-100 rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
              <Image
                src="/assets/images/avatar.png"
                alt="Martin Le Roux - Senior Product Designer"
                width={400}
                height={400}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection delay={0.2} className="section-container mb-16 lg:mb-24">
        <h2 className="section-heading">What I Bring to the Table</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Core Skills */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">🎨</span>
              Core Skills
            </h3>
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
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">🤖</span>
              Specialization
            </h3>
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
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">🛠️</span>
              Tools
            </h3>
            <ul className="space-y-2 mb-6">
              {["Figma", "Miro", "HTML/CSS"].map((tool) => (
                <li key={tool} className="skill-item">
                  <span className="skill-item__icon">✓</span>
                  <span className="skill-item__label">{tool}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">👥</span>
              Soft Skills
            </h3>
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

            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">🏢</span>
              Industries
            </h3>
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
      </AnimatedSection>

      {/* Processes Section */}
      <AnimatedSection delay={0.4} className="section-container mb-16 lg:mb-24">
        <h2 className="section-heading mb-12">My Design Process</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Process 01: Discover + Define */}
          <article className="process-card group">
            <div className="process-card__image bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center aspect-video">
              <span className="text-4xl text-blue-600">🔍</span>
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
          <article className="process-card group">
            <div className="process-card__image bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center aspect-video">
              <span className="text-4xl text-green-600">🎨</span>
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
      </AnimatedSection>

      {/* Career History Section */}
      <AnimatedSection delay={0.6} className="section-container mb-16 lg:mb-24">
        <h2 className="section-heading">My Journey</h2>
        
        <div className="space-y-6">
          {/* Current Role */}
          <article className="career-item bg-gray-50/50">
            <div className="career-item__header">
              <div>
                <h3 className="career-item__title">
                  Senior Product Designer at Rank Interactive (Grosvenor Casino)
                </h3>
                <p className="career-item__role">
                  UX/UI Design | Prototyping | User Research | Usability Testing | Documentation
                </p>
              </div>
              <span className="career-item__year">Dec 2024–Present</span>
            </div>
            <p className="career-item__description">
              As Senior Product Designer at Rank Interactive, I lead the UX/UI design for Grosvenor Casino, focusing on creating compliant, user-centric gaming experiences. I champion user-centric design principles, align strategic business goals with customer satisfaction metrics, facilitate cross-functional workshops, and streamline development processes to deliver high-quality digital products.
            </p>
          </article>

          {/* Kepler + Co */}
          <article className="career-item bg-gray-50/50">
            <div className="career-item__header">
              <div>
                <h3 className="career-item__title">Senior Product Designer at Kepler + Co</h3>
                <p className="career-item__role">
                  UX/UI Design for Global Skills Assessment & Learning Platform
                </p>
              </div>
              <span className="career-item__year">Feb 2022–July 2024</span>
            </div>
            <p className="career-item__description">
              At Kepler + Co, I developed comprehensive UI/UX patterns for a robust, scalable design system serving a global user base. My work involved making data-driven design decisions, conducting user research, and maintaining extensive documentation to support user testing and continuous improvement of the learning platform.
            </p>
          </article>

          {/* One Point Four Consulting */}
          <article className="career-item bg-gray-50/50">
            <div className="career-item__header">
              <div>
                <h3 className="career-item__title">Product Designer at One Point Four Consulting</h3>
                <p className="career-item__role">
                  UX/UI Design for Multiple Clients & Projects
                </p>
              </div>
              <span className="career-item__year">March 2017–March 2022</span>
            </div>
            <p className="career-item__description">
              During my tenure at One Point Four Consulting, I worked on diverse projects including Ib&apos;umdlali (a gamified financial literacy app), WesBank (marketing website and internal banking systems), and BankservAfrica (brand identity, marketing site, and internal platforms). My responsibilities included cross-functional collaboration, conducting user testing sessions, creating animations and illustrations, and delivering award-winning design solutions.
            </p>
            <p className="career-item__description">
              <strong className="text-green-600">Awards & Recognition:</strong> Ib&apos;umdlali - Gold Award for UX, Interface & Navigation; Bronze Award for Apps & Innovative Solutions; Finalist for MTN App of the Year.
            </p>
          </article>
        </div>
      </AnimatedSection>

      {/* Case Studies CTA */}
      <AnimatedSection delay={0.8} className="section-container mb-16 lg:mb-24">
        <h2 className="section-heading mb-6">Case Studies</h2>
        <p className="text-gray-600 mb-8">
          Explore detailed case studies of my work and design process.
        </p>
        <Link href="/case-studies" className="btn btn--primary inline-flex items-center gap-2">
          View Case Studies
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </AnimatedSection>
    </div>
  );
}
