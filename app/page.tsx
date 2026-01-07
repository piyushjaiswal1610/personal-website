import { Hero } from "./components";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <footer className="text-center text-gray-500 py-4 w-full absolute bottom-0">
        © 2026 piyushjaiswal.com
      </footer>
    </main>
  );
}
