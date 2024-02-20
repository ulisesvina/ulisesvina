import { useEffect } from "react";

const custom500 = () => {
  useEffect(() => {
    location.href = "/";
  }, []);

  return (
    <div className="pt-10">
      <h1 className="text-6xl font-bold">Error 500</h1>
    </div>
  );
};

export default custom500;
