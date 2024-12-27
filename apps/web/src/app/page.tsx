import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import RecentWork from "../components/home/RecentWork";

export default function Home() {
  return (
    <>
      <h1 className="text-red-500">
        Hi there!
      </h1>
      <Header />
      <main>
        <Hero />
        <RecentWork />
      </main>
    </>
  );
}
