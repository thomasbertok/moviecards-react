import React, { useEffect, useState, useContext } from "react";
import Header from "@/components/Header";
import MoviesList from "@/modules/MoviesList";
import useMovieStore from "@/store/movie-store";
import LoadingIcons from "react-loading-icons";
import MovieModal from "@/components/MovieModal";
import AuthContext from "@/context/auth/AuthContext";

const PageHome = () => {
  const { user } = useContext(AuthContext);
  const { movies, getMovies } = useMovieStore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movies && user) {
      setLoading(true);
      getMovies(user.uid);
      setLoading(false);
    }
  }, [movies, user]);

  return (
    <div className={"root min-h-full flex flex-col static z-0"}>
      <Header />
      <MovieModal />
      <main className="main-container flex flex-grow items-center justify-center p-10 relative z-0">
        <div className={"page page-home w-full" + (loading ? " page-loading" : "")}>
          {loading ||
            (movies === null && (
              <div className="flex flex-col h-full items-center justify-center gap-4">
                <LoadingIcons.Oval strokeWidth={4} height={"4em"} width={"4em"} />
                <div>Loading movies...</div>
              </div>
            ))}
          {/* {!loading && movies !== null && movies.length === 0 && (
            <div className="flex items-center justify-center p-8">No movies in the database.</div>
          )} */}
          {!loading && movies !== null && <MoviesList movies={movies} />}
        </div>
      </main>
    </div>
  );
};

export default PageHome;
