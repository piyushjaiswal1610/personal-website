export default function Projects() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-blue-400">Projects</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold text-purple-400">Project 1</h3>
          <p className="mt-2 text-gray-300">A web app for task management.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold text-purple-400">Project 2</h3>
          <p className="mt-2 text-gray-300">A portfolio website for showcasing work.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold text-purple-400">Project 3</h3>
          <p className="mt-2 text-gray-300">An e-commerce platform for small businesses.</p>
        </div>
      </div>
    </section>
  );
}