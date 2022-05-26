import React, { FC } from 'react';
import Image from 'next/image';
import logo from "../assets/logo.png"


interface IAuthLogoProps {
    title: string
}

const AuthLogo: FC<IAuthLogoProps> = ({ title }) => {


    return (
        <div className="flex items-center justify-center gap-3 border-b border-gray-300 py-5">
            <div className="relative w-16 h-16">
                <Image src={logo} alt="logo" layout="fill" objectFit="cover" />
            </div>
            <h1 className="font-bold text-4xl">
                {title}
            </h1>
        </div>
    );
};

export default AuthLogo;