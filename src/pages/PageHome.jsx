import Header from "@/components/Header";
import MoviesList from "@/modules/MoviesList";
import MovieModal from "@/components/MovieModal";

const PageHome = () => {
  console.log("Home Page");

  return (
    <div className={"root min-h-full flex flex-col static z-0"}>
      <Header />
      <MovieModal />
      <main className="main-container flex flex-grow items-center justify-center p-10 relative z-0">
        <div className="page page-home w-full">
          <MoviesList />
        </div>
      </main>
    </div>
  );
};

export default PageHome;
