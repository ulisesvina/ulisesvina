import About from "@/components/Main/About";
import Awards from "@/components/Main/Awards";
import Fitness from "@/components/Main/Fitness";
import Music from "@/components/Main/Music";
import Projects from "@/components/Main/Projects";

export default function Home({ music, sortedRepos }) {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <About />
      <Music music={music} />
      <Fitness />
      <Awards />
      <Projects repos={sortedRepos} />
    </div>
  );
}