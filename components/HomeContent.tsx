import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { shuffle } from "lodash"
import { ChevronDownIcon, MenuAlt2Icon } from '@heroicons/react/outline';
import Track from './Track';
import { AppStore, wrapper } from '../redux/store';
import { fetchTracks } from '../redux/thunks/tracks';
import { useAppSelector } from '../hooks/useAppSelector';


const colors = [
    "from-primaryGreen",
    "from-red-500",
    "from-yellow-600",
    "from-purple-500",
    "from-pink-500",
    "from-blue-500",
    "from-orange-500"
]

const HomeContent = () => {
    const [bgcolor, setBgcolor] = useState<string | null>(null)
    const { tracks, totalCount } = useAppSelector(state => state.tracks)

    useEffect(() => {
        setBgcolor(shuffle(colors).pop()!)
    }, [])



    return (
        <>
            <div className="flex-grow text-white flex flex-col h-screen overflow-hidden">

                <section className={`w-full bg-gradient-to-b to-black ${bgcolor} h-96 sm:p-5 p-2`}>
                    <header className="flex justify-between sm:justify-end items-center">
                        <MenuAlt2Icon className="w-10 h-10 text-white sm:hidden" />

                        <div className="inline-flex items-center gap-3 bg-black bg-opacity-60 py-1 px-3 rounded-full justify-end cursor-pointer" >
                            <div className="h-10 w-10 relative rounded-[50%]">
                                <Image src="https://dpclinic.ru/upload/iblock/6ce/6ce2d48158f804ec94c075513884abcf.jpg" alt="user" className="rounded-[50%]" layout="fill" />
                            </div>
                            <p className="font-bold">username user</p>
                            <ChevronDownIcon className="h-5 w-5" />
                        </div>
                    </header >

                    <div className="mt-10 flex items-center gap-5">
                        <div className="h-[150px] w-[150px] border border-white">
                        </div>

                        <div className="flex flex-col">
                            <h1 className="font-bold text-2xl">Test name</h1>
                            <h2 className="text-lg text-primaryGreen">Some name</h2>
                        </div>
                    </div>
                </section>


                <section className="h-full p-5 overflow-y-scroll scrollbar-hide">
                    <ul className="flex flex-col">
                        {tracks.length > 0
                            ? tracks.map(t => <Track key={t._id} />)
                            : ""}
                    </ul>
                </section>
            </div>
        </>
    );
};

export default HomeContent;


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