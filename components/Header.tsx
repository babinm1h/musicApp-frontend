import { MenuAlt2Icon, ChevronDownIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <header className="flex justify-between sm:justify-end items-center">
            <MenuAlt2Icon className="w-10 h-10 text-white sm:hidden" />

            <div className="inline-flex items-center gap-3 bg-black bg-opacity-60 py-1 px-3 rounded-full justify-end cursor-pointer text-white" >
                <div className="h-10 w-10 relative rounded-[50%]">
                    <Image src="https://dpclinic.ru/upload/iblock/6ce/6ce2d48158f804ec94c075513884abcf.jpg" alt="user" className="rounded-[50%]" layout="fill" />
                </div>
                <p className="font-bold">username user</p>
                <ChevronDownIcon className="h-5 w-5" />
            </div>
        </header>
    );
};

export default Header;