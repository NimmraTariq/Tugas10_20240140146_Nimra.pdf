function Hero() {
  return (
    <section
      id="home"
      className="bg-indigo-50 px-4 py-16 text-center"
    >
      <div className="max-w-2xl mx-auto">
        <div className="w-28 h-28 rounded-full bg-indigo-200 mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-indigo-600">
          NT
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Hi, I'm Nimra Tariq 👋
        </h1>
        <p className="text-gray-600 mb-6">
          Information Technology student, learning React, Tailwind, and
          building small projects along the way.
        </p>
        <a
          href="#projects"
          className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          See My Projects
        </a>
      </div>
    </section>
  );
}

export default Hero;
