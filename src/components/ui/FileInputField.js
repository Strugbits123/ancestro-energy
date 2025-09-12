'use client'

import { useRef, useState } from "react";

const FileInputField = ({ placeholder, label }) => {
    const fileInputRef = useRef(null);
    const [fileName, setFileName] = useState("");

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file) setFileName(file.name);
    };

    return (<div className="mt-5">
        <div className="text-white text-sm font-bold text-start mb-3 uppercase ">{label}</div>
        <div className="w-full max-w-md mx-auto mb-4">
            <div
                className="flex items-center gap-0 justif-start cursor-pointer"
                onClick={handleClick}
            >
                {/* Upload button */}
                <button
                    type="button"
                    className="p-2 text-white font-bold rounded-lg uppercase text-xs bg-gradient-to-r from-white/15 via-white/20 to-white/25"
                >
                    Upload
                </button>

                {/* File name / placeholder */}
                <div className="flex-1 text-white uppercase text-[12px]">
                    {fileName || (placeholder || "")}
                </div>


            </div>

            <div className="border-b border-b-white/30 w-full px-8 py-2" />

            {/* Hidden file input */}
            <input
                type="file"
                accept=".pdf,.jpeg"
                ref={fileInputRef}
                onChange={handleChange}
                className="hidden"
            />
        </div>
    </div>
    );
};

export default FileInputField;
