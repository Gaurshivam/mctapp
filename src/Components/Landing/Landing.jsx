import React from 'react';
import './Landing.css'

const Landing = () => {
  const handleClick = async () => {
    const client_id = "b10ac7cc459d474e961a6603c15da715";
    const redirect_uri = "https://spotify-clone-api.netlify.app/";
    const api_uri = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ];
    window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
  return (
    <div className='Landing'>
      <img className='LandingImg' 
      src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png' 
      alt='Spotify' />
      <button className='LandingBtn' onClick={handleClick}>Connecting</button>
    </div>
  );
}

export default Landing;
