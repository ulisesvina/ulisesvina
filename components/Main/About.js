import { useEffect, useState } from "react";

const About = () => {
  const [age, setAge] = useState(16);

  const calcAge = () =>
    ((new Date() - new Date("2006-08-09")) / 31557600000).toFixed(9);

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(calcAge());
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 rounded-xl w-full secondary-bg secondary-text">
      <h1 className="text-2xl">❓ About</h1>
      <p>
        I&apos;m Ulises, a developer from Mexico 🇲🇽 who is currently{" "}
        <span className="code">{age}</span>{" "}
        years old. I&apos;ve been programming since the age of 9 and am
        proficient in plenty of languages and tools. I&apos;m a student at the
        National Autonomous University of Mexico (UNAM).
      </p>
      <button className="mt-4 p-2 rounded-md bg-primary tertiary-text tertiary-bg w-full">
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Download my resume
        </a>
      </button>
    </div>
  );
};

export default About;
