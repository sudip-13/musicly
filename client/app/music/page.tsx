"use client"
import Tooltip from '@mui/material/Tooltip';
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import WebMusicPlayer from "@/components/webmusicplayer";
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';


const MusicPage: React.FC = () => {

    return (
        <>

            <div className="relative min-h-screen max-w-screen md:flex md:flex-row z-20 bg-slate-950 font-Montserrat">
                <div className="pt-20 p-5 md:pt-28">
                    <div className="flex flex-col gap-7 md:w-[55vw] md:overflow-x-auto">
                        <section className="flex flex-row justify-between text-white text-xl items-center">
                            <h1>Recent Songs</h1>
                            <section className="flex gap-10 flex-row items-center">
                                <TextField className='w-60' color='secondary' id="standard-basic" label="Enter song name" variant="standard" />
                                <Tooltip title="search">
                                    <IconButton color="secondary" aria-label="search-icon">
                                        <SearchIcon fontSize="medium" />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="upload songs">
                                    <IconButton color="secondary" aria-label="upload">
                                        <CloudUploadIcon fontSize="medium" />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="favorite songs">
                                    <IconButton color="secondary" aria-label="favorite">
                                        <FavoriteIcon fontSize="medium" />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="create new playlist">
                                    <IconButton color="secondary" aria-label="add">
                                        <AddIcon fontSize="medium" />
                                    </IconButton>
                                </Tooltip>
                            </section>
                        </section>
                        <section className="flex flex-col w-full md:w-auto ">
                            <div className="flex flex-row gap-3 w-full hover:bg-slate-800 md:px-10 md:py-3 cursor-pointer rounded-sm">
                                <img
                                    className="w-12 h-12 rounded-full"
                                    src="https://imgv3.fotor.com/images/blog-richtext-image/born-to-die-music-album-cover.png"
                                    alt="album cover"
                                />
                                <div className="text-slate-500 w-full overflow-hidden">
                                    <p className="whitespace-nowrap">
                                        Bol do na zara slowrd+reverbed lofi
                                    </p>
                                    <p className="justify-between flex flex-row">
                                        <span className="space-x-2">
                                            <span>Artist :</span>
                                            <span>Arijit Singh</span>
                                        </span>
                                        <span className="text-blue-500">2:30</span>
                                    </p>
                                </div>
                            </div>
                            <div className="border border-slate-800"></div>
                        </section>
                    </div>
                </div>
                <div>
                    <WebMusicPlayer musicLink={"https://dj4x.in/upload_file/18/1810/Main%20Agar%20-%20Lofi%20Song%20(Slowed%20Reverb)%20Atif%20Aslam%20-%20Tubelight.mp3"} />
                </div>
            </div>
        </>
    );
};

export default MusicPage;
