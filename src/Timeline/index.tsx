import { motion } from 'framer-motion';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react';
import { FaLightbulb, FaLaptopCode, FaTrophy } from "react-icons/fa6";

export const hackathonPhases = [
    {
        date: 'Phase I',
        icon: <FaLightbulb className="text-yellow-500" />,
        title: 'Idea Submission',
        description: 'Participants submit innovative ideas for the hackathon.',
    },
    {
        date: 'Phase II',
        icon: <FaLaptopCode className="text-green-500" />,
        title: 'Prototype Presentation',
        description: 'Teams present a working prototype of their ideas.',
    },
    {
        date: 'Phase III',
        icon: <FaTrophy className="text-blue-500" />,
        title: 'Final Hackathon',
        description: 'Finale hackathon which will happen at the Sri Eshwar Campus.',
    },
];

const Timeline = () => {
    return (
        <section
            id="timeline"
            className="mx-auto text-center scroll-mt-[10rem] bg-gradient-to-br from-[#200148] via-[#6d065e] to-[#333] py-10"
        >
            <div className="text-white pb-[30px] text-[3rem] font-bold">TIMELINE</div>
            <VerticalTimeline lineColor="rgba(255,255,255,0.3)">
                {hackathonPhases.map((phase, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background: 'rgba(255, 255, 255, 0.1)',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                textAlign: 'left',
                                padding: '1.3rem',
                                color: 'white',
                            }}
                            date={phase.date}
                            icon={phase.icon}
                            iconStyle={{
                                background: '#510545FF',
                                fontSize: '1.5rem',
                                color: 'white',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                            }}
                        >
                            <h3 className="font-semibold capitalize text-lg text-white">
                                {phase.title}
                            </h3>
                            <p className="!mt-0 text-sm text-slate-400">{phase.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    );
};

export default Timeline;
