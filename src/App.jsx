/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Numfield from "./components/Numfield";
import Main from "./components/Main";
import Box from "./components/Box";
import Listanime from "./components/Listanime";
import Animedetail from "./components/Animedetail";
import { animesData } from "./constants";

export default function App() {
  const [animes, setAnimes] = useState(animesData);
  const [selectedAnime, setSelectedAnime] = useState(animes[0]);

  function handleSelectedAnime(id) {
    const newAnime = animes.filter((anime) => anime.mal_id === id);
    setSelectedAnime(newAnime[0]);
  }

  return (
    <>
      <Navbar>
        <Search>
          <Numfield animes={animes} />
        </Search>
      </Navbar>
      <Main>
        <Box>
          <Listanime animes={animes} onSelectedAnime={handleSelectedAnime} />
        </Box>
        <Box>
          <Animedetail selectedAnime={selectedAnime} />
        </Box>
      </Main>
    </>
  );
}
