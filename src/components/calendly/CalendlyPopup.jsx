"use client";
import React, { useState } from 'react';
import { PopupModal } from 'react-calendly';


const CalendlyPopup = ({ url }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <div>

            <button onClick={handleOpen} className="box-content px-10 mt-5 text-sm  font-ProximaNova-Bold bg-color-purple text-white hover:opacity-85 hover:text-white rounded-[50px]  w-[185px] h-[51px]  transform transition ease-in-out duration-400   disabled:text-white disabled:cursor-not-allowed disabled:opacity-25 disabled:bg-slate-700 disabled:border-slate-700 disabled:hover:text-white">
            Book an appointment
            </button>
            {isOpen && (
                <PopupModal
                    url={url}
                    rootElement={document.getElementById('root') || document.body}
                    onModalClose={handleClose}
                    open={isOpen}
                />
            )}
        </div>
    );
};

export default CalendlyPopup;