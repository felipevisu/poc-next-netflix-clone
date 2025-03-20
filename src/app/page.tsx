"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { searchMovies } from "@/api/searchMovies";
import { FeaturedContent } from "@/components/FeaturedContent";
import { Session } from "@/components/Session";
import { MovieList, PostersDict } from "@/types";
import { SearchBar } from "@/components/SearchBar";

export default function Home() {
  const [movies, setMovies] = useState<MovieList>([]);
  const [posters, setPosters] = useState<PostersDict>({});
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchMovies = async () => {
      const query = searchParams.get("query") || "";
      const { posters, movies } = await searchMovies(query);
      setMovies(movies);
      setPosters(posters);
    };

    fetchMovies();
  }, [searchParams]);

  return (
    <div>
      <FeaturedContent />

      <SearchBar />

      {movies.map((list) => (
        <Session
          key={list.movie.tmdbId}
          title={`People who liked ${list.movie.tmdbId} also liked:`}
          movies={list.topRelated}
          posters={posters}
        />
      ))}
    </div>
  );
}
