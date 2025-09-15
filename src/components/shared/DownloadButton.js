"use client";

import { useState } from "react";
import Modal from "@/src/components/ui/Modal";
import SunButton from "@/src/components/ui/SunButton";
import FreeDownloadForm from "../forms/FreeDownloadForm";

export default function DownloadButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <SunButton
                onClick={() => setIsModalOpen(true)}
                className="mt-5 mb-10 px-4 py-3 bg-gradient-to-r from-white/10 via-white/20 to-white/30 border border-white/30 backdrop-blur-lg"
            >
                <div className="flex flex-row items-center gap-2">
                    <img
                        src="/icons/download-btn.png"
                        alt="Download"
                        className="w-5 h-5 object-contain"
                    />
                    <span className="text-lg font-medium text-white tracking-[2px]">
                        DOWNLOAD FREE REPORT
                    </span>
                </div>
            </SunButton>
            <FreeDownloadForm setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
        </>
    );
}
