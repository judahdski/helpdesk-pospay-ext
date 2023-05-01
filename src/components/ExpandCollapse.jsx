import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className={`flex justify-between items-center w-full py-4 px-6 ${isOpen ? 'bg-cyan-50' : 'bg-white'}`} onClick={toggleAccordion}>
                <p className={`text-lg ${isOpen ? 'text-blue-400' : ''}`}>{title}</p>
                <div className="flex items-center justify-center">
                    <i className={`fa-solid fa-chevron-down ${isOpen ? 'rotate-180' : ''} transition text-gray-500 text-xs`} />
                </div>
            </button>
            <div className={`px-6 py-4 bg-white ${isOpen ? '' : 'hidden'} transition`}>
                <p className="text-gray-600">{content}</p>
            </div>
        </>
    );
};

export default Accordion;
