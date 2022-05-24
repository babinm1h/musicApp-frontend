import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { shuffle } from "lodash"
import { ChevronDownIcon, MenuAlt2Icon } from '@heroicons/react/outline';
import Track from './Track';
import { useAppSelector } from '../hooks/useAppSelector';
import { SERVER_URL } from '../API';
import { useRouter } from 'next/router';
import Header from './Header';


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
    const { active } = useAppSelector(state => state.player)

    const router = useRouter()

    const onAuthorClick = () => {
        router.push(`/author/` + active?.author._id)
    }

    useEffect(() => {
        setBgcolor(shuffle(colors).pop()!)
    }, [])




    return (
        <>
            <div className="flex-grow text-white flex flex-col h-screen overflow-hidden">

                <section className={`w-full bg-gradient-to-b to-black ${bgcolor} h-[400px] sm:p-5 p-2`}>
                    <Header/>

                    {active && <div className="mt-5 flex items-center gap-5">
                        <div className="h-[130px] w-[130px] border border-white relative">
                            <Image src={SERVER_URL + "/" + active.img} objectFit="cover"
                                layout="fill" alt="activeTrack" />
                        </div>

                        <div className="flex flex-col">
                            <h1 className="font-bold text-3xl">
                                {active.name}
                            </h1>
                            <h2 className="text-lg text-primaryGreen" onClick={onAuthorClick}>
                                {active.author.name}
                            </h2>
                        </div>
                    </div>}
                </section>


                <section className="h-full p-5 overflow-y-scroll scrollbar-hide">
                    <ul className="flex flex-col">
                        {tracks.length > 0
                            ? tracks.map(t => <Track key={t._id} item={t} />)
                            : ""}
                    </ul>
                </section>
            </div>
        </>
    );
};

export default HomeContent;

