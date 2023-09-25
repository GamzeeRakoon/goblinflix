"use client";
import React, { useEffect, useState } from "react";
import axios from "../functions/axios";
import "./Grid.css";
import Image from "next/image";
import TrailerModal from "./TrailerModal";
import { getTrailerUrl } from "../functions/movieUtils";

const base_url = "https://image.tmdb.org/t/p/original/";

interface RowProps {
  fetchUrl: string;
  title: string;
}

interface Movie {
  id: number;
  poster_path: string;
  name: string;
  backdrop_path: string;
  title: string;
}

function Grid({ title, fetchUrl }: RowProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const openModal = () => {
    document.body.classList.add("row_lock");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    document.body.classList.remove("row_lock");
    setIsModalOpen(false);
    setTrailerUrl("");
  };

  const handleClick = async (movie: Movie) => {
    if (trailerUrl) {
      closeModal();
    } else {
      const trailerUrl = await getTrailerUrl(movie?.title);
      if (trailerUrl) {
        setTrailerUrl(trailerUrl);
        openModal();
      } else {
        closeModal();
      }
    }
  };

  return (
    <div className="grid">
      <h2 className="grid__title">{title}</h2>

      <div className="grid__container">
        {movies.map((movie) => (
          <Image
            key={movie.id}
            onClick={() => handleClick(movie)}
            width={500}
            height={500}
            className={`grid__poster`}
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {isModalOpen && (
        <TrailerModal trailerUrl={trailerUrl} onClose={closeModal} />
      )}
    </div>
  );
}

export default Grid;
