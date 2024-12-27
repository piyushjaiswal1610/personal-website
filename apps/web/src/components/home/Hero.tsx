import SocialLinks from './SocialLinks';

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div
        >
          <h1 className="text-5xl font-bold mb-6">
            Building digital experiences with purpose
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            I craft performant and scalable solutions, focusing on user experience
            and technical excellence.
          </p>
          <SocialLinks />
        </div>

        <div
          className="relative"
        >
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 p-8">
            {/* Add your image or 3D model here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;