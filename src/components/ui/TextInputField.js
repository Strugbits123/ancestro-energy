'use client'

import { useState } from "react";

const TextInputField = ({ label, arr, i }) => {
    const [value, setValue] = useState("");

    const [main, note] = label.split("(");

    return (
        <div className="relative w-full">
            {/* placeholder */}
            {!value && (
                <span className="absolute left-1 top-2 text-left text-sm text-white uppercase pointer-events-none transition-opacity duration-200 peer-focus:opacity-0">
                    {main.trim()}{" "}
                    {note && (
                        <span className="text-left italic text-white/90 uppercase text-[9px]">({note}</span>
                    )}
                </span>
            )}

            {/* Input */}
            <input
                type={
                    label === "EMAIL" ? "email" : label === "PHONE NUMBER" ? "tel" : "text"
                }
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={`peer w-full px-1 py-2 text-sm font-lato bg-transparent border-b border-white/30 text-white placeholder-white placeholder:uppercase focus:outline-none focus:ring-0 focus:border-white ${i === arr.length - 1 ? 'last:mb-1' : ''}`}

            />
        </div>
    );
}

export default TextInputField;
