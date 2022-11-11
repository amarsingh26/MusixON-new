import React from "react";

import { useState } from "react";
import "./song.css";
import { motion } from "framer-motion";

import { useEffect } from "react";
import { actionType } from "../../stateprovider/reducer";
import {  getAllSongsFreq } from "../../api";
import { useStateValue } from "../../stateprovider/StateProvider";
import { updateFreq} from "../../api";
import Player from "./player";


const SongsComponent = () => {
    const [songFilter, setSongFiter] = useState("");
    const [{ allSongs }, dispatch] = useStateValue();
    const [{ isSongPlaying }] = useStateValue();

    useEffect(() => {

        if (!allSongs) {
            getAllSongsFreq().then((data) => {
                // console.log(data.data);
                dispatch({
                    type: actionType.SET_ALL_SONGS,
                    allSongs: data.data,
                });
            });
        }
    }, []);
    return (
       
                <div className=" first" >
                    <div class='firstsecond'>
                        <input type="text" placeholder="search here ..." value={songFilter} onChange={(e) => setSongFiter(e.target.value)} />
                    </div>

                    {/* main container */}
                    <div class='second' className="b ">
                        <div class='secondfirst' >
                            {/* <p>
                                <span>count : </span>
                                {allSongs?.length}
                            </p> */}
                        </div>
                        <SongContainer data={allSongs} />
                    </div>
                    {isSongPlaying && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            className={``} 
                        >
                            <Player />
                        </motion.div>
                    )}
                </div>
            
    )
}
export const SongContainer = ({ data }) => {
    return (
        <div className=" songcontainer">

            {
                data && data.map((song, i) => (
                    <SongCard key={song._id} data={song} index={i} />
                ))
            }
        </div>
    );


};
export const SongCard = ({ data, index }) => {


// console.log(index);
    const [{  songIndex , isSongPlaying }, dispatch] = useStateValue();

    const addSongToContext = (data1) => {
        if (!isSongPlaying) {
            dispatch({
                type: actionType.SET_SONG_PLAYING,
                isSongPlaying: true,
             
            })
            // console.log(data1);;
            updateFreq(data._id);   
            
        }
        if (songIndex !== index) {
            dispatch({
                type: actionType.SET_SONG_INDEX,
                songIndex : index,
            })
            // console.log(data._id)
            updateFreq(data._id);  ; 
        }
    };


    return (
        <motion.div
            whileTap={{ scale: 0.8 }}
            initial={{ opacity: 0, translateX: -50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className=" px-2 py-4 cursor-pointer "
            onClick={addSongToContext}
        >

            <motion.div className=" overflow-hidden songcard"
             whileHover={{scale: 1.10}}>
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={data.imageURL}
                    alt=""
                    className="image"
                />
         
            <p className=" my-2">{index+1+": "}
                {data.name.length > 25 ? `${data.name.slice(0, 25)}` : data.name}
                <div className=" my-1">{data.artist}</div>
            </p>
            </motion.div>


        </motion.div>
    );
};

export default SongsComponent