import React, { useEffect, useState } from "react";
import { useStateValue } from "../../stateprovider/StateProvider";
import { IoMdClose } from "react-icons/io";

import { motion } from "framer-motion";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { actionType } from "../../stateprovider/reducer";
import "./player.css";



const Player = () => {
  
  const [{ allSongs, songIndex, isSongPlaying }, dispatch] =
    useStateValue();

  const closeMusicPlayer = () => {
    if (isSongPlaying) {
      dispatch({
        type: actionType.SET_SONG_PLAYING,
        isSongPlaying: false,
      });
    }
  };

  

  const nextTrack = () => {
    if (songIndex > allSongs.length) {
      dispatch({
        type: actionType.SET_SONG,
        songIndex: 0,
      });
    } else {
      dispatch({
        type: actionType.SET_SONG,
        songIndex: songIndex + 1,
      });
    }
  };

  const previousTrack = () => {
    if (songIndex === 0) {
      dispatch({
        type: actionType.SET_SONG,
        songIndex: 0,
      });
    } else {
      dispatch({
        type: actionType.SET_SONG,
        songIndex: songIndex - 1,
      });
    }
  };

  useEffect(() => {
    if (songIndex > allSongs.length) {
      dispatch({
        type: actionType.SET_SONG,
        songIndex: 0,
      });
    }
  }, [songIndex]);

  return (
    <div className="">
      <div  className={`gap-3 p-4 `}>
        <img
          src={allSongs[songIndex]?.imageURL}
          className="w-40 h-20 object-cover rounded-md"
          alt=""
        />
        <div className="my-2">
          <p className="my-1 textcolor">
            {`${
              allSongs[songIndex]?.name.length > 20
                ? allSongs[songIndex]?.name.slice(0, 20)
                : allSongs[songIndex]?.name
            }`}{" "}
           
          </p>
          <p className="textcolor">
            {allSongs[songIndex]?.artist}{" "}
            <span className="textcolor ">
              ({allSongs[songIndex]?.category})
            </span>
          </p>
         
        </div>
        <div className="button">
          <AudioPlayer
            src={allSongs[songIndex]?.songUrl}
            onPlay={() => console.log("is playing")}
            autoPlay={true}
            showSkipControls={true}
            onClickNext={nextTrack}
            onClickPrevious={previousTrack}
          
            className="button"/>
        </div>
        <div className="h-full flex items-center justify-center flex-col gap-3">
          <motion.i whileTap={{ scale: 0.8 }} onClick={closeMusicPlayer}>
            <IoMdClose className="cursor-pointer textcolor" />
          </motion.i>
          
        </div>
      </div> 
    </div>
  );
};



export default Player;