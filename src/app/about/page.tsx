import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h1>
            <p className="text-xl text-gray-600">
              Get to know me and my journey
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Profile Image */}
            <div className="lg:col-span-1">
              <div className="relative aspect-square w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Profile Photo</span>
                </div>
                {/* Replace with your actual profile photo */}
                {/* <Image
                  src="/assets/images/profile.jpg"
                  alt="Profile Photo"
                  fill
                  className="object-cover"
                  priority
                /> */}
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Hello! I'm [Your Name]
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I'm a passionate [Your Profession, e.g., Web Developer, Designer, Engineer] 
                  with [X] years of experience creating digital experiences that make a difference. 
                  My journey in [your field] began when [brief origin story].
                </p>
                <p>
                  Throughout my career, I've had the opportunity to work with 
                  [mention notable companies, clients, or projects]. Each experience has 
                  taught me valuable lessons and helped me grow both technically and creatively.
                </p>
                <p>
                  What drives me is the challenge of solving complex problems with elegant solutions. 
                  I believe that great design and solid engineering go hand in hand, and I strive to 
                  deliver both in every project I undertake.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              My Journey
            </h2>

            <div className="space-y-8">
              {/* Experience Item */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                    <span className="text-primary-600 font-bold text-xl">2020</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    [Company/Role]
                  </h3>
                  <p className="text-gray-500 mb-2">
                    [Job Title] • [Company Name]
                  </p>
                  <p className="text-gray-600">
                    [Brief description of your role and achievements. What did you do? 
                    What impact did you have?]
                  </p>
                </div>
              </div>

              {/* Experience Item */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                    <span className="text-primary-600 font-bold text-xl">2018</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    [Previous Company/Role]
                  </h3>
                  <p className="text-gray-500 mb-2">
                    [Job Title] • [Company Name]
                  </p>
                  <p className="text-gray-600">
                    [Brief description of your role and achievements.]
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <span className="text-secondary-600 font-bold text-xl">🎓</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    [Your Education]
                  </h3>
                  <p className="text-gray-500 mb-2">
                    [Degree] • [Institution]
                  </p>
                  <p className="text-gray-600">
                    [Brief description of your education and any relevant coursework or achievements.]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Skills & Tools
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Technical Skills */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Technical Skills
                </h3>
                <ul className="space-y-2">
                  {[
                    "JavaScript (ES6+)",
                    "TypeScript",
                    "React & Next.js",
                    "Node.js & Express",
                    "HTML5 & CSS3",
                    "Tailwind CSS",
                    "Git & GitHub",
                    "RESTful APIs",
                    "GraphQL",
                    "Database Design (SQL/NoSQL)",
                  ].map((skill, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools & Platforms */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Tools & Platforms
                </h3>
                <ul className="space-y-2">
                  {[
                    "VS Code",
                    "Figma",
                    "Adobe Creative Suite",
                    "Vercel / Netlify",
                    "AWS / Firebase",
                    "Docker",
                    "Postman",
                    "Notion",
                    "Trello / Jira",
                    "Slack / Discord",
                  ].map((tool, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Download */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want to know more?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Download my full resume to see my complete work history and skills.
          </p>
          <Link
            href="/assets/pdfs/resume.pdf"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
            download
          >
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
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Resume (PDF)
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
