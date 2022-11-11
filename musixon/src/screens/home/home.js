import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import First from "../first/first";
import Library from "../library/library";
import Feed from "../feed/feed";
import Favorites from "../favorites/favorites";
import Trending from "../trending/trending";
import Player from "../player/player";
// import Navbar from '../../components/navbar/navbar';
import Login from '../../components/login/login'
import Register from '../../components/registration/Register'
import Error from '../error';
import Logout from '../logout/logout';
import ContactUs from '../contactUs/contactUs';

export default function Home() {
  
  return (
    <div>
      {/* <Navbar /> */}


      <Router>
        <Routes>
        <Route path ="/" element = {<First />} />
        <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/library" element={<Library />} />

          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/er404" element={<Error />} />
         
          <Route path="/logout" element={<Logout />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>

  );
}
// settingScreen // file storing component
// SettingScreen // component 