import React, { useEffect, useState, useContext } from "react";
import Header from "@/components/Header";
import MoviesList from "@/modules/MoviesList";
import AuthContext from "@/modules/AuthContext";
import useMovieStore from "@/store/app-store";
import LoadingIcons from "react-loading-icons";
import MovieModal from "@/components/MovieModal";

const PageHome = () => {
  const { movies, fetchMovies } = useMovieStore();
  const [loading, setLoading] = useState(false);

  const user = useContext(AuthContext);
  const userId = user.user.uid;

  useEffect(() => {
    setLoading(true);
    fetchMovies(userId);
    setLoading(false);
  }, [user]);

  return (
    <div className={"root min-h-full flex flex-col static z-0"}>
      <Header />
      <MovieModal />
      <main className="main-container flex flex-grow items-center justify-center p-10 relative z-0">
        <div className={"page page-home w-full" + (loading ? " page-loading" : "")}>
          {loading && (
            <div className="flex flex-col h-full items-center justify-center gap-4">
              <LoadingIcons.Oval strokeWidth={4} height={"4em"} width={"4em"} />
              <div>Loading movies...</div>
            </div>
          )}
          {!loading && movies && movies.length === 0 && (
            <div className="flex items-center justify-center p-8">No movies in the database.</div>
          )}
          {!loading && movies.length > 0 && <MoviesList movies={movies} />}
        </div>
      </main>
    </div>
  );
};

export default PageHome;
