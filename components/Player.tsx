import React from 'react';
import Image from 'next/image';
import { PlayIcon } from '@heroicons/react/solid';
import { VolumeOffIcon, VolumeUpIcon } from '@heroicons/react/outline';


const Player = () => {
    return (
        <div className="text-white h-24 bg-gradient-to-b from-black to-gray-900 px-10 justify-center grid grid-cols-3 items-center">
            <div className="flex items-center gap-5">
                <div className="w-12 h-12 relative">
                    <Image src="https://protara.ru/image/catalog/cat-icons/white.jpg" alt="pic"
                        layout="fill" />
                </div>

                <div className="">
                    <h3 className="font-bold">Testname</h3>
                    <span className="">testname</span>
                </div>
            </div>


            <button className="justify-self-center hover:scale-105 transition-all">
                <PlayIcon className="h-16 w-16" />
            </button>


            <div className="flex items-center gap-3 justify-end">
                <VolumeOffIcon className="h-7 w-7" />
                <input type="range" id="" max={100} min={0} />
            </div>
        </div>
    );
};

export default Player;