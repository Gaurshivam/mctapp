import React from 'react';
import { useSateProvider } from '../Constext/CustomProvider';
import { useEffect } from 'react';
import axios from 'axios'

const Player = () => {
    const [{token,dispatch}] = useSateProvider();
    useEffect(()=>{
        const getPlayListData = async () =>{
            const response = await axios.get('https://api.spotify.com/v1/me/playlists',{
                headers:{
                    Authorization:"Bearer "+token,
                    "Content-Type":"application/json",
                }
            })
            const {items} = response.data;
            const playlists = items.map((name,id)=>{
                return {name,id}})
                console.log(playlists)
        };
        getPlayListData();
    },[token,dispatch])
  return (
    <div>
      
    </div>
  );
}

export default Player;
