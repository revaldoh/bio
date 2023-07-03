import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';

const ExperienceCard = ({ exp }) => (

  <VerticalTimelineElement
  contentStyle={{
    background: "#1d1836",
    color: "#fff",
  }}
  contentArrowStyle={{ borderRight: "7px solid  #232631" }}
  date={exp.date}
  iconStyle={{ background: exp.iconBg }}
  icon={
    <div className='flex justify-center items-center w-full h-full'>
      <img
        src={exp.icon}
        alt={exp.company_name}
        className='w-[60%] h-[60%] object-contain'
      />
    </div>
  }
>
  <div>
    <h3 className='text-white text-[24px] font-bold'>{exp.title}</h3>
    <p
      className='text-secondary text-[16px] font-semibold'
      style={{ margin: 0 }}
    >
      {exp.company_name}
    </p>
  </div>

  <ul className='mt-5 list-disc ml-5 space-y-2'>
    {exp.points.map((point, index) => (
      <li
        key={`experience-point-${index}`}
        className='text-white-100 text-[14px] pl-1 tracking-wider'
      >
        {point}
      </li>
    ))}
  </ul>
</VerticalTimelineElement>
);
const Experience = () => {
  return(
    <>
    <div className='w-full min-h-screen bg-gradient-to-b from-black to-gray-800 h-full'>
      <p className='text-center'>What I have done so far</p>
      <h2>Experience</h2>
      <VerticalTimeline>
        {experiences.map((experience,index)=>(
          <ExperienceCard key={`experience-${index}`} exp={experience}/>
        ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default Experience