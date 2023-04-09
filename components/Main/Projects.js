const Projects = ({ sortedRepos }) => {
  return (
    <div className="lg:col-span-2 p-6 rounded-xl w-full secondary-bg secondary-text">
      <h1 className="text-2xl mb-4">💻 Projects</h1>
      <ul className="grid lg:grid-cols-2 gap-2">
        {sortedRepos.map((repo) => (
          <li
            key={repo.id}
            className="p-4 h-full rounded-xl tertiary-bg tertiary-text"
            style={{ display: "grid", gridTemplateColumns: "1fr auto" }}
          >
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p className="text-md">{repo.name}</p>
                <span className="text-xs">
                  {repo.stargazers_count} ⭐, {repo.forks_count} 🍴
                </span>
              </div>
              <p className="text-sm" style={{ gridColumn: "1 / span 2" }}>
                {repo.description}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
