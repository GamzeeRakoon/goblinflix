"use client";
import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";
import TrailerModal from "./TrailerModal";
import { getTrailerUrl } from "./movieUtils";

interface Movie {
  name: string;
  backdrop_path: string;
  title: string;
  overview: string;
}

function Banner() {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [trailerUrl, setTrailerUrl] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchPopularMovie);
      const randomMovie =
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ];
      setMovie(randomMovie);

      const movieTrailerUrl = await getTrailerUrl(randomMovie?.title);
      if (movieTrailerUrl) {
        setTrailerUrl(movieTrailerUrl);
      }
    }
    fetchData();
  }, []);

  function handleMoreInfoClick() {
    if (trailerUrl) {
      setIsModalOpen(true);
    }
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__container">
        <div className="banner__contents">
          <h1 className="banner__title">{movie?.title || movie?.name}</h1>
          <div className="banner__buttons">
            <button className="banner__button" onClick={handleMoreInfoClick}>
              Play
            </button>
            <button className="banner__button">My List</button>
          </div>
          <h1 className="banner__description">{movie?.overview}</h1>
        </div>
        <div className="banner--fadeBottom" />
      </div>
      {/* Render the modal when isModalOpen is true */}
      {isModalOpen && (
        <TrailerModal
          trailerUrl={trailerUrl}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </header>
  );
}

export default Banner;
