import React, { useState, useEffect } from "react";

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch(
        "https://api.github.com/users/ulisesvina/repos"
      );
      const data = await response.json();
      setRepos(data);
    };

    fetchRepos();
  }, []);

  const sortedRepos = repos
    .sort((a, b) => {
      const aStarsAndForks = a.stargazers_count + a.forks_count;
      const bStarsAndForks = b.stargazers_count + b.forks_count;
      return bStarsAndForks - aStarsAndForks;
    })
    .slice(0, 6);

  return (
    <div className="lg:col-span-2 p-6 rounded-xl w-full secondary-bg secondary-text">
      <h1 className="text-2xl mb-4">💻 Projects</h1>
      <ul className="grid lg:grid-cols-2 gap-2">
        {sortedRepos.map((repo) => (
          <li
            key={repo.id}
            className="p-4 h-full rounded-xl tertiary-bg tertiary-text"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
          >
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <p className="text-md" style={{ gridColumn: "1 / span 1" }}>
                {repo.name}
              </p>
              <p
                className="text-md text-right"
                style={{ gridColumn: "2 / span 1" }}
              >
                <span className="text-xs">
                  {repo.stargazers_count} ⭐, {repo.forks_count} 🍴
                </span>
              </p>
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
