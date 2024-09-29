import { useRouteError } from "react-router-dom";

const PageError = () => {
  const error = useRouteError();
  console.error("!!! Error Message !!! -> ", error);
  return (
    <div className="relative z-10 flex items-center justify-center h-screen flex-col page">
      <div className="container text-left">
        <h1 className="text-4xl mb-0 font-bold">Error:</h1>
        {error && error.message && <p>{error.message}</p>}
      </div>
    </div>
  );
};

export default PageError;
