import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import MovieRow from "../components/MovieRow";

const Home = () => {
  const movies = [
    {
      title: "The Revenge",
      rating: "⭐ 8.5",
      image: "https://via.placeholder.com/200x300?text=Movie+1"
    },
    {
      title: "Thaai Kizhavi",
      rating: "⭐ 7.8",
      image: "https://via.placeholder.com/200x300?text=Movie+2"
    },
    {
      title: "Village Story",
      rating: "⭐ 8.2",
      image: "https://via.placeholder.com/200x300?text=Movie+3"
    },
    {
      title: "Action King",
      rating: "⭐ 9.0",
      image: "https://via.placeholder.com/200x300?text=Movie+4"
    },
    {
      title: "Vengeance",
      rating: "⭐ 8.9",
      image: "https://via.placeholder.com/200x300?text=Movie+5"
    }
  ];

  return (
    <>
      <Navbar />
      <Banner />
      <MovieRow title="Recommended Movies" movies={movies} />
    </>
  );
};

export default Home;