const Awards = () => {
  return (
    <div className="p-6 rounded-xl w-full secondary-bg secondary-text">
      <h1 className="text-2xl">⭐ Awards</h1>
      <ul>
        <li className="mt-2 text-sm">
          🏆 Winner for Best use of Google Cloud (MLH&apos;s Hero Hacks 2)
          <br />
          <span className="text-xs">
            I managed the deployment to Google Cloud.
          </span>
        </li>
        <li className="mt-2 text-sm">
          🏆 Winner for Design (MLH&apos;s Hack or Treat 2)
          <br />
          <span className="text-xs">
            I worked on the front-end using React, UI/UX design and idea
            development.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Awards;
