import axios from "axios";

const baseURL = "http://localhost:5000/";


export const getAllSongs = async () => {
  try {
    const res = await axios.get(`${baseURL}api/songs/getAll`);
    return res.data;
  } catch (error) {
    return null;
  }
};
export const getAllSongsFreq = async () => {
  try {
    const res = await axios.get(`${baseURL}api/songs/getAllFreq`);
    return res.data;
  } catch (error) {
    return null;
  }
};




export const saveNewSong = async (data) => {
  try {
    const res = axios.post(`${baseURL}api/songs/save`, { ...data });
    return (await res).data.song;
  } catch (error) {
    return null;
  }
};
export const updateFreq= async(id) =>{
  // console.log(id);
  try{
    const config = {
      header: {
        'Content-Type': 'application/json'
      }
    }
    const res = await axios.put(`${baseURL}api/songs/updateFreq/${id}`,config);
    // return (await res).data;

  } catch (error) {
    return null;
  }}
