const Blog = ({ data }) => {
  return (
    <div className="container">
      <p className="text-3xl mb-10">Blog</p>
      {data.map((article, index) => (
        <div
          key={index}
          className="w-full secondary-bg secondary-text rounded p-4 my-5"
        >
          <h3 className="text-xl">{article.title}</h3>
          <p className="text-sm mb-2">{article.description}</p>
          <button className="hover:underline mt-4 p-2 rounded-md bg-primary tertiary-text tertiary-bg w-full">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more...
            </a>
          </button>
        </div>
      ))}
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
