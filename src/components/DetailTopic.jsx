import React from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { popularQuestions, topics } from '../assets/data';
import Accordion from './Accordion';

const DetailTopic = () => {
    const { idTopic } = useParams();

    const currentTopic = topics.filter((topic) => topic.id === idTopic)[0];

    return (
        <div className="bg-white w-full max-w-5xl mt-2 lg:mt-8 flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-2/6 bg-white">
                <NavLink to="/" className="flex items-center gap-4 py-4 px-6">
                    <i class="fa-solid fa-arrow-left"></i> <p className="text-lg font-medium">Pusat Bantuan</p>
                </NavLink>
                <div className="mt-2">
                    {topics.map((topic, index) => {
                        if (topic.id === idTopic) return;

                        return (
                            <NavLink to={`/detail_topics/${topic.id}`} key={index} className="py-4 px-6 flex gap-3">
                                <i className={`fa-solid ${topic.iconClass} text-sm ${topic.colorTheme}`}></i>
                                <p>{topic.title}</p>
                            </NavLink>
                        );
                    })}
                </div>
            </div>
            <div className="bg-white w-full lg:w-4/6 border-l-[2px] border-slate-200 py-4 px-6">
                <p>
                    <span className="text-blue-600">PUSAT BANTUAN</span> / {currentTopic.title.toUpperCase()}
                </p>
                <div className="mt-6 rounded-md overflow-hidden border">
                    {currentTopic.questions.map((question, index) => (
                        <Accordion key={index} title={question.question} content={question.answer} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DetailTopic;
