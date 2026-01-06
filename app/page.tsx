export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center px-6">
      <header className="w-full max-w-4xl py-12 flex flex-col md:flex-row items-center md:items-start">
        <div className="flex-1">
          <h1 className="text-5xl font-bold">Piyush Jaiswal</h1>
          <p className="text-2xl mt-4">Backend Engineer</p>
          <p className="text-lg mt-4 max-w-2xl leading-relaxed">
            Backend engineer focused on building reliable, production-grade
            systems. I care about clarity, ownership, and long-term
            maintainability.
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:ml-12">
          <div className="w-32 h-32 bg-gray-800 rounded-full"></div>
        </div>
      </header>
      <section className="w-full max-w-4xl py-12 border-t border-gray-700">
        <h2 className="text-3xl font-semibold">Key Info</h2>
        <div className="mt-6 flex flex-col md:flex-row md:space-x-12">
          <p>Years of Experience: 5+</p>
          <p>Primary Focus: Backend Systems</p>
          <p>Currently Working On: Personal Safe Space</p>
        </div>
      </section>
      <section className="w-full max-w-4xl py-12 border-t border-gray-700">
        <h2 className="text-3xl font-semibold">Focus Areas</h2>
        <div className="mt-6 flex flex-wrap gap-4">
          <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded">
            Backend APIs
          </span>
          <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded">
            SQL & Data Modeling
          </span>
          <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded">
            Authentication & Authorization
          </span>
          <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded">
            System Design Basics
          </span>
          <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded">
            Debugging & Reliability
          </span>
          <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded">
            Docker (basic)
          </span>
        </div>
      </section>
      <section className="w-full max-w-4xl py-12 border-t border-gray-700">
        <h2 className="text-3xl font-semibold">Work</h2>
        <div className="mt-6 space-y-6">
          <div className="p-6 bg-gray-800 rounded">
            <h3 className="text-xl font-semibold">Current Job</h3>
            <p className="mt-2">Company: Example Corp</p>
            <p>Role: Backend Engineer</p>
            <ul className="list-disc list-inside mt-2">
              <li>Designing and maintaining scalable backend systems</li>
              <li>Ensuring high availability and reliability</li>
              <li>Collaborating with cross-functional teams</li>
            </ul>
            <p className="mt-2">Tech Stack: Node.js, TypeScript, PostgreSQL</p>
          </div>
          <div className="p-6 bg-gray-800 rounded">
            <h3 className="text-xl font-semibold">
              Personal Project – Personal Safe Space
            </h3>
            <p className="mt-2">
              A backend-first project aimed at creating a secure and private
              space for users to store sensitive information.
            </p>
            <p>Status: In progress</p>
          </div>
        </div>
      </section>
      <section className="w-full max-w-4xl py-12 border-t border-gray-700">
        <h2 className="text-3xl font-semibold">About</h2>
        <p className="mt-4 max-w-2xl leading-relaxed">
          I am a backend engineer with 5+ years of experience in building
          reliable and scalable systems. My focus is on backend development,
          systems design, and taking ownership of end-to-end solutions. I am
          optimizing for depth, reliability, and continuous learning in my
          engineering journey.
        </p>
      </section>
      <footer className="w-full max-w-4xl py-12 border-t border-gray-700 text-center">
        <p>
          Contact:{" "}
          <a
            href="mailto:piyush@example.com"
            className="text-blue-500 hover:underline"
          >
            Email
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/piyush"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://twitter.com/piyush"
            className="text-blue-500 hover:underline"
          >
            X
          </a>
        </p>
      </footer>
    </main>
  );
}
