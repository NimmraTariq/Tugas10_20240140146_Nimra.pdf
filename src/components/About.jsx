function About() {
  const skills = [
    "HTML & CSS",
    "JavaScript",
    "React",
    "C#",
    "PHP & MySQL",
    "Cisco Networking",
  ];

  return (
    <section id="about" className="px-4 py-16 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
      <p className="text-gray-600 mb-6">
        I'm an Information Technology student who enjoys learning new things
        in web development, networking, and databases. This page is one of my
        college assignments, built with React, Vite, and Tailwind CSS.
      </p>

      <h3 className="font-semibold text-gray-800 mb-2">Skills</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-indigo-100 text-indigo-700 text-sm px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default About;
