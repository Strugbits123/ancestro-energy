'use client'

import Modal from "../ui/Modal";

const VideoTestimonial = ({ open, setOpen }) => {

    return (<>
        <Modal isOpen={open} onClose={() => { setOpen(false) }}>
            <img src={'/assets/video-testimonial.gif'} />
        </Modal>
    </>)
}

export default VideoTestimonial;
