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



export const saveNewSong = async (data) => {
  try {
    const res = axios.post(`${baseURL}api/songs/save`, { ...data });
    return (await res).data.song;
  } catch (error) {
    return null;
  }
};

export const deleteSongById = async (id) => {
  try {
    const res = axios.delete(`${baseURL}api/songs/delete/${id}`);
    return res;
  } catch (error) {
    return null;
  }
};
