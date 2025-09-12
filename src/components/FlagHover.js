"use client"
import { useState } from "react";

const FlagHover = ({ content }) => {
    const [show, setShow] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseEnter = (e) => {
        const rect = e.target.getBoundingClientRect();
        setPosition({
            x: rect.right,
            y: rect.top - 200,
        });
        setShow(true);
    };

    const handleMouseLeave = () => {
        setShow(false);
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative inline-block w-25 h-10 mt-3"
        >
            <img
                src={content.src}
                alt={content.alt}
                className="w-20 h-13 rounded-sm object-cover shadow"
            />

            {show && (
                <div
                    className="flex flex-col items-center justify-center absolute z-50  shadow-lg h-fit max-w-[350px] rounded p-4 text-sm w-fit bg-gradient-to-r from-white/10 via-white/20 to-white/30 border border-white/30 backdrop-blur-lg rounded-[20px]"
                    style={{
                        top: position.y,
                        left: position.x,
                        position: "fixed",
                    }}
                >
                    <img className="h-[45%] w-full" src={'/images/solar-panel-case-study.png'} />

                    <div className="mt-2 flex w-full justify-start items-center gap-2">
                        <h1 className="font-lato text-white text-2xl font-bold">{`${content.alt.toUpperCase()}`} </h1>
                        <p className="font-lato text-white text-[10px] mt-2">{`${content.study.category}`} </p>
                    </div>
                    <div className="flex flex-wrap gap-[5px]">
                        {content.study.investmentData.map((data, i) => (
                            <div key={i} className="font-lato text-[8px] text-white p-2 bg-gradient-to-r from-white/10 via-white/20 to-white/30 border border-white/30 backdrop-blur-lg rounded-full">
                                {data.toUpperCase()}
                            </div>
                        ))}
                    </div>
                    <div className="px-1 pb-2 pt-1 mt-2 font-lato text-white text-[12px] text-start">
                        {content.study.description}
                    </div>
                    <div className="flex justify-between w-full mb-3">
                        <div className="text-white font-lato text-md">VIDEO TESTIMONIAL<strong className="ml-2 text-xl">→</strong></div>
                        <img className='w-8 h-8' src={'/images/customer-card.png'} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default FlagHover;