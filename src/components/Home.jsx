import React from 'react';

import Accordion from './ExpandCollapse';
import { popularQuestions, topics } from '../assets/data/index';
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className="max-w-[800px] w-full p-4">
                <h4 className="text-lg">Hot Topics</h4>
                <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                    {topics.map((topic, index) => (
                        <NavLink 
                            to={`/detail_topics/${topic.id}`} 
                            key={index} 
                            className="bg-white py-4 px-6 flex justify-between"
                        >
                            <div className="flex gap-3">
                                <i className={`fa-solid ${topic.iconClass} text-sm ${topic.colorTheme}`}></i>
                                <p>{topic.title}</p>
                            </div>
                            <i className="fa-solid fa-chevron-right text-gray-500 text-xs"></i>
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className="max-w-[800px] w-full p-4">
                <h4 className="text-lg">Popular Questions</h4>
                <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                    {popularQuestions.map((popularQuestion, index) => (
                        <Accordion key={index} title={popularQuestion.q} content={popularQuestion.a} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;
