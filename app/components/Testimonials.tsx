export default function Testimonials() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-blue-400">Testimonials</h2>
      <div className="mt-8 space-y-8">
        <blockquote className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <p className="text-gray-300">"Piyush is an exceptional developer who delivers high-quality work."</p>
          <footer className="mt-4 text-sm text-gray-500">- Client A</footer>
        </blockquote>
        <blockquote className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <p className="text-gray-300">"Working with Piyush was a fantastic experience."</p>
          <footer className="mt-4 text-sm text-gray-500">- Client B</footer>
        </blockquote>
      </div>
    </section>
  );
}