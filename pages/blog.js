const Blog = ({ data }) => {
  console.log(data);
  return (
    <div className="container">
      <p className="text-3xl mb-10">Blog</p>
      {data.map((article, index) => (
        <div key={index} className="w-full border border-solid border-gray-600 rounded p-4 m-5">
          <h3 className="text-xl">{article.title}</h3>
          <p className="text-sm mb-2">{article.description}</p>
          <a className="text-indigo-600" href={article.url} target="_blank" rel="noreferrer">
            Read more...
          </a>
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
