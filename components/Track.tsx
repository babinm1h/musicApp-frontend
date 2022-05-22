import React from 'react';
import Image from 'next/image';
import { PlayIcon } from '@heroicons/react/solid';

const Track = () => {
    return (
        <li className="flex hover:bg-gray-900 p-4 rounded-lg items-center transition-all cursor-auto gap-3">

            <button className="hover:scale-105 transition-all">
                <PlayIcon className="w-10 h-10" />
            </button>

            <div className="flex gap-3 flex-grow">
                <div className="w-12 h-12 relative">
                    <Image src="https://protara.ru/image/catalog/cat-icons/white.jpg" alt="pic"
                        layout="fill" />
                </div>


                <div className="flex flex-col justify-start">
                    <p className="font-bold w-52 truncate inline-block">QUE ISSO FFA</p>
                    <p className="text-gray-400 cursor-pointer inline-block self-start hover:underline">
                        noname
                    </p>
                </div>
            </div>


            <div className="flex justify-end">
                <span className=" text-gray-400">7:47</span>
            </div>
        </li>
    );
};

export default Track;