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
                    rounded-full flex items-center justify-around p-2 text-sm rounded-md transition-colors duration-200 hover:bg-white/10
                    ${isSelected ? 'bg-yellow-400 font-bold' : 'text-white'}
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
        <div className="bg-gradient-to-r from-white/5 via-white/10 to-white/20 rounded-xl px-[35px] py-[30px] text-white max-w-sm mx-auto mt-5">
            {/* Navigation */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="uppercase text-lg font-bold font-lato tracking-[2px]">{monthYear}</h2>

                <div className="flex gap-3">
                    <button
                        type="button"
                        onClick={goToPrevMonth}
                        className="text-white hover:bg-white/10 p-2 rounded-md text-xl font-bold"
                    >
                        ‹
                    </button>
                    <button
                        type="button"
                        onClick={goToNextMonth}
                        className="text-white hover:bg-white/10 p-2 rounded-md text-xl font-bold"
                    >
                        ›
                    </button>
                </div>
            </div>
            <div className="border-b border-b-white/10 w-full px-8 py-2" />

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
            <h4 className="text-md font-[500] font-lato tracking-[2px] mr-10 mt-3">TIME FOR MEETING</h4>
            <div className="ml-3 flex items-center gap-4 bg-gradient-to-r from-white/5 via-white/10 to-white/20 w-fit p-2 rounded-lg mt-2 border border-white/30 backdrop-blur-lg">
                <ClockIcon height={25} width={25} color="white"/>
                <div className="text-lg text-white font-[500] font-lato">8:30 AM</div>
            </div>
        </div>
    );
}

export default FormCalendar;