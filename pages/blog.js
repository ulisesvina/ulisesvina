import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Blog = ({ data }) => {
  return (
    <div className="container">
      <h1 className="text-md uppercase font-bold text-primary-text">Blog</h1>
      <div className="grid lg:grid-cols-2 gap-2 mt-3">
        {data.map((article, index) => (
          <div
            key={index}
            className="flex flex-col align-middle w-full bg-secondary text-secondary-text rounded-xl p-4 h-full"
          >
            <h3 className="text-xl">{article.title}</h3>
            <p className="text-sm mb-2 h-full">{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <button className="hover:underline mt-4 p-2 rounded-md bg-tertiary text-tertiary-text hover:bg-primary hover:text-primary-text w-full">
                <span>
                  Read more <FaRegArrowAltCircleRight className="inline" />
                </span>
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const data = await fetch(
    "https://dev.to/api/articles?username=ulisesvina"
  ).then((res) => res.json());

  return { props: { data } };
};

export default Blog;
