import About from "@/components/Main/About";
import Awards from "@/components/Main/Awards";
import Fitness from "@/components/Main/Fitness";
import Music from "@/components/Main/Music";
import Projects from "@/components/Main/Projects";

export default function Home({ sortedRepos }) {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <About />
      <Music />
      <Fitness />
      <Awards />
      <Projects sortedRepos={sortedRepos}/>
    </div>
  );
}

export async function getServerSideProps() {
  const resRepos = await fetch("https://api.github.com/users/ulisesvina/repos"),
    repos = await resRepos.json(),
    sortedRepos = repos
      .sort((a, b) => {
        const aStarsAndForks = a.stargazers_count + a.forks_count;
        const bStarsAndForks = b.stargazers_count + b.forks_count;
        return bStarsAndForks - aStarsAndForks;
      })
      .slice(0, 6);

  return {
    props: {
      sortedRepos,
    },
  };
}
