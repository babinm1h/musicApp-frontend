import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Sidebar from '../components/Sidebar';
import MainLayout from '../components/MainLayout';
import HomeContent from '../components/HomeContent';
import Player from '../components/Player';

const index = () => {
  return (
    <MainLayout>
      <div className="flex overflow-hidden flex-grow">
        <Sidebar />
        <HomeContent />
      </div>

      <Player />
    </MainLayout>
  );
};

export default index;