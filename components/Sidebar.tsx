import Link from 'next/link';
import React from 'react';
import { HomeIcon, MusicNoteIcon, SearchIcon } from "@heroicons/react/outline"
import { useRouter } from 'next/router';

const Sidebar = () => {
    const router = useRouter()


    return (
        <>
            <div className="sm:block w-[200px] hidden h-full overflow-y-scroll scrollbar-hide">
                <nav className="flex flex-col p-5 gap-5">
                    <button className="navItem" onClick={() => router.push("/")}>
                        <HomeIcon className="w-5 h-5" />
                        <span>Home</span>
                    </button>

                    <button className="navItem">
                        <SearchIcon className="w-5 h-5" />
                        <span>Search</span>
                    </button>

                    <button className="navItem">
                        <MusicNoteIcon className="w-5 h-5" />
                        <span>Your Playlist</span>
                    </button>
                </nav>
            </div>
        </>
    );
};

export default Sidebar;