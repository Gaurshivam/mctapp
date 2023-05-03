import React, { useEffect } from "react";
import Spotify from "./Components/Spotify/Spotify"
import { reducerCases } from "./Components/Constext/Contants";
import { useStateProvider } from "./Components/Constext/StateProvider";
import Landing from './Components/Landing/Landing'
export default function App() {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      if (token) {
        dispatch({ type: reducerCases.SET_TOKEN, token });
      }
    }
    document.title = "Spotify";
  }, [dispatch, token]);
  return <div>{token ? <Spotify /> : <Landing />}</div>;
}