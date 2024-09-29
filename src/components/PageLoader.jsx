import LoadingIcons from "react-loading-icons";

const PageLoader = ({ text }) => {
  return (
    <div className="flex flex-col h-full items-center justify-center gap-4">
      <LoadingIcons.Oval strokeWidth={4} height={"4em"} width={"4em"} />
      <div>{text}</div>
    </div>
  );
};

export default PageLoader;
