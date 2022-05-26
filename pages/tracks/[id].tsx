import { GetServerSideProps } from 'next';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MainLayout from '../../components/MainLayout';
import { useAppSelector } from '../../hooks/useAppSelector';
import { AppStore, wrapper } from '../../redux/store';
import { fetchOneTrack } from '../../redux/thunks/trackPage';


const TrackPage = () => {
    const dispatch = useDispatch()
    const { track } = useAppSelector(state => state.trackPage)


    return (
        <MainLayout>
            <div className="flex flex-col w-full h-full text-white">
                {track?.name}
            </div>
        </MainLayout>
    );
};

export default TrackPage;


export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
    (store: AppStore) => async (context) => {
        try {
            const dispatch = store.dispatch;
            await dispatch(fetchOneTrack(`1`))
            return { props: {} }

        } catch (err) {
            console.log(err);
            return { props: {} }
        }
    }
)