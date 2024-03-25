import React from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import greenMilePoster from "./assets/green-mile-poster.jpg";
import pursuitOfHappinessPoster from "./assets/pursuit-of-happiness-poster.jpg";
import lifeIsBeautifulPoster from "./assets/life-is-beautiful-poster.jpg";

function App() {
  const movies = [
    {
      id: 1,
      title: "The Green Mile",
      synopsis:
        "A tale set on death row, where gentle giant John Coffey possesses the mysterious power to heal people's ailments.",
      rating: 9.3,
      image: greenMilePoster,
    },
    {
      id: 2,
      title: "The Pursuit of Happines",
      synopsis:
        "The Pursuit of Happyness tells the story of a struggling salesman who never gave up trying to find true happiness for himself and his son.",
      rating: 9.2,
      image: pursuitOfHappinessPoster,
    },
    {
      id: 3,
      title: "Life is Beautiful",
      synopsis:
        "When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor and imagination to protect his son from the dangers around their camp.",
      rating: 9.5,
      image: lifeIsBeautifulPoster,
    },
  ];

  return (
    <div className="App">
      <h1>Movie App</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
