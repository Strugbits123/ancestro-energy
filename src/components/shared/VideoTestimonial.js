'use client'

import { useState } from "react";
import Modal from "../ui/Modal";

const VideoTestimonial = () => {

    const [open, setOpen] = useState(false);

    return (<>
        <div onClick={() => setOpen(true)} className="flex justify-between w-full ">
            <div className="text-white text-md font-lato leading-loose mt-2">VIDEO TESTIMONIAL<strong className="ml-2 text-xl">→</strong></div>
            <img className='w-15 h-15' src={'/images/customer-card.png'} />
        </div>
        <Modal isOpen={open} onClose={() => { setOpen(false) }}>
            <img src={'/assets/video-testimonial.gif'} />
        </Modal>
    </>)
}

export default VideoTestimonial;
