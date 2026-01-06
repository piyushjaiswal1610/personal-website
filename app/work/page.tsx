export default function Work() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-100 text-gray-900">
      <h1 className="text-5xl font-bold mt-12">Work</h1>
      <section className="mt-12 max-w-3xl">
        <h2 className="text-3xl font-semibold">Current Job</h2>
        <p className="mt-4">Company: Example Corp</p>
        <p>Role: Backend Engineer</p>
        <ul className="list-disc list-inside mt-4">
          <li>Designing and maintaining scalable backend systems</li>
          <li>Ensuring high availability and reliability</li>
          <li>Collaborating with cross-functional teams</li>
        </ul>
        <p className="mt-4">Tech Stack: Node.js, TypeScript, PostgreSQL</p>
      </section>
      <section className="mt-12 max-w-3xl">
        <h2 className="text-3xl font-semibold">Personal Project – Personal Safe Space</h2>
        <p className="mt-4">A backend-first project aimed at creating a secure and private space for users to store sensitive information.</p>
        <p>Status: In progress</p>
      </section>
    </main>
  );
}