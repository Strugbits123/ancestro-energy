
'use client'
import { useState, useRef } from 'react';

const CarouselComponent = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const carouselRef = useRef(null);

    const slides = [
        {
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            name: 'Michael  Grants',
            img: '/images/carousel-avatar.png',
            desc: 'CEO of Apples and Oranges',
            stars: 5,
        },
    ];

    const scrollToSlide = (index) => {
        setActiveSlide(index);
        const carousel = carouselRef.current;
        if (carousel) {
            const slideWidth = carousel.children[0].offsetWidth;
            const gap = 24;
            carousel.scrollTo({
                left: index * (slideWidth + gap),
                behavior: 'smooth'
            });
        }
    };


    return (
        <div className="w-full overflow-hidden">

            <ul
                ref={carouselRef}
                className="mt-20 flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide w-screen -ml-8 px-8"
            >
                {slides.flatMap(item => Array(6).fill(item)).map((slide, index) => (
                    <li
                        key={index}
                        className="flex flex-col border border-gray-200 max-w-[168px] h-[256px] min-w-[80%] bg-black/80 md:min-w-[45%] lg:min-w-[35%] snap-center relative overflow-hidden rounded-lg"
                    >

                        <div className="w-full p-4 text-white transition-transform duration-500">
                            {slide.title}
                        </div>
                        <div className='flex'>
                            <div className='flex'>
                                <img src={slide.img} />
                                <div className='flex-col'>
                                    <h4>{slide.name}</h4>
                                    <span>{slide.desc}</span>
                                </div>
                            </div>
                            <div className='flex'>
                                {Array().fill(slide.stars).map(() => (
                                    <div className='w-3 h-2 text-gray-300' />
                                ))}
                            </div>
                        </div>

                        <div className='text-white'>Read More</div>
                    </li>
                ))}
            </ul>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-4">
                {slides.flatMap(item => Array(6).fill(item)).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${activeSlide === index ? 'bg-yellow-500' : 'bg-gray-600'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CarouselComponent;

