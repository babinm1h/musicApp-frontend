import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Sidebar from '../components/Sidebar';
import MainLayout from '../components/MainLayout';
import HomeContent from '../components/HomeContent';
import Player from '../components/Player';
import { wrapper, AppStore } from '../redux/store';
import { fetchTracks } from '../redux/thunks/tracks';

const index = () => {
  return (
    <MainLayout>
      <HomeContent />
    </MainLayout>
  );
};

export default index;




export const getServerSideProps = wrapper.getServerSideProps(
  (store: AppStore) => async (context: any) => {
    try {
      const dispatch = store.dispatch;
      await dispatch(fetchTracks())

      return { props: {} }

    } catch (err) {
      console.log(err);
      return { props: {} }
    }
  }
)