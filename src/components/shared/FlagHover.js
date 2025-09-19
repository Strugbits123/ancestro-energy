"use client"
import { useState } from "react";
import CaseStudy from "./SolarCaseStudy";

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
                    className="z-60"
                    style={{
                        top: position.y,
                        left: position.x,
                        position: "fixed",
                    }}
                >
                    <CaseStudy content={content} />
                </div>
            )}
        </div>
    );
};

export default FlagHover;