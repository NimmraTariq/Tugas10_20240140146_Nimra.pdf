function ProjectCard({ title, description, tech }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
