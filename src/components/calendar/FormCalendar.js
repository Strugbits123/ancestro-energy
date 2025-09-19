'use client'
import ClockIcon from "@/public/icons/clock";
import { useState } from "react";

const FormCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const today = new Date();

    const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const lastDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const goToPrevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    };

    const goToNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    };

    const days = [];

    for (let i = 0; i < startingDayOfWeek; i++) {
        days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        const isToday = date.toDateString() === today.toDateString();
        const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();

        days.push(
            <button
                type="button"
                key={day}
                onClick={() => setSelectedDate(date)}
                className={`
                    rounded-xl flex items-center justify-around p-1 text-sm rounded-md transition-colors duration-200 hover:bg-white/10
                    ${isSelected ? 'bg-yellow-400 font-bold text-black' : 'text-white'}
                    ${isToday && !isSelected ? 'bg-white/20' : ''}
                `}
            >
                {day}
            </button>
        );
    }

    const monthYear = currentMonth.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
    });

    const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    return (
        <div className="border border-white/20 bg-gradient-to-r from-white/40 via-white/30 to-white/10 rounded-2xl px-[35px] pt-[15px] pb-[20px] text-white max-w-sm mx-auto mt-5">
            {/* Navigation */}
            <div className="flex items-center justify-start mb-4 gap-2 ">
                <h2 className="uppercase text-lg font-bold font-lato tracking-[2px]">{monthYear}</h2>

                <div className="flex gap-0">
                    <button
                        type="button"
                        onClick={goToPrevMonth}
                        className="text-white hover:bg-white/10 p-2 rounded-md text-2xl font-bold"
                    >
                        ‹
                    </button>
                    <button
                        type="button"
                        onClick={goToNextMonth}
                        className="text-white hover:bg-white/10 p-2 rounded-md text-2xl font-bold"
                    >
                        ›
                    </button>
                </div>
            </div>
            <div className="border-t border-t-white/10 w-full px-8 py-2" />

            {/* Weekday headers */}
            <div className="grid grid-cols-7 gap-1 mb-2">
                {weekdays.map(day => (
                    <div key={day} className="text-center text-sm font-medium p-2">
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1">
                {days}
            </div>
            <div className="border-b border-b-white/10 w-full px-8 py-2" />
            <h4 className="text-md font-[500] font-lato tracking-[2px] mr-8 mt-2">TIME FOR MEETING</h4>
            <div className="ml-3 flex items-center gap-4 bg-gradient-to-r from-white/5 via-white/10 to-white/20 w-fit px-2 py-1 rounded-xl mt-2 border-2 border-white/30 backdrop-blur-lg">
                <ClockIcon height={25} width={25} color="white"/>
                <div className="text-lg text-white font-[500] font-lato">8:30 AM</div>
            </div>
        </div>
    );
}

export default FormCalendar;