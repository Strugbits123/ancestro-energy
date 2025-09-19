'use client';
import { useState } from 'react';
import Modal from '../../ui/Modal';
import SunButton from '../../ui/SunButton';

export default function FreeDownloadForm({ isModalOpen, setIsModalOpen }) {
    return (
        <>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                width="443px"
                height="205px"
            >
                <div className="w-full h-full flex items-center justify-center border border-white/20 rounded-lg px-2 md:px-6 py-4 md:py-10">
                    <form className="w-full h-full">
                        <input
                            type="text"
                            placeholder="EMAIL"
                            className="w-full px-2 py-3 text-lg font-lato bg-transparent border-b border-white/30 text-white placeholder-white placeholder:uppercase focus:outline-none focus:ring-0 focus:border-white"
                        />
                        <SunButton
                            type="submit"
                            className="w-full flex justify-around mt-5 mb-10 px-16 py-5 bg-gradient-to-r from-white/10 via-white/20 to-white/30 border border-white/30 backdrop-blur-lg"
                        >
                            <div className="flex flex-row items-center gap-2">
                                <img
                                    src="/icons/download-btn.png"
                                    alt="Download"
                                    className="w-5 h-5 object-contain"
                                />
                                <span className="text-xl font-medium text-white tracking-[2px]">
                                    FREE DOWNLOAD
                                </span>
                            </div>
                        </SunButton>
                    </form>
                </div>
            </Modal>
        </>
    );
}
