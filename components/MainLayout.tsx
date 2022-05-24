import Head from 'next/head';
import React, { FC } from 'react';
import Sidebar from './Sidebar';

interface IMainLayoutProps {
    children: React.ReactNode
}

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
    return (
        <>
            <Head>
                <title>App</title>
                <meta name="description" content={`Music app. Everyone can listen and upload music!`} />
                <meta name="robots" content="index, follow" />
                <meta name="keywords"
                    content={"music, tracks, artists, listen music, best music,"} />
            </Head>

            <main className="w-full flex-grow flex flex-col h-screen overflow-hidden">
                <div className="flex overflow-hidden flex-grow">
                    <Sidebar />
                    {children}
                </div>
            </main>
        </>
    );
};

export default MainLayout;