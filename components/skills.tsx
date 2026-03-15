'use client';

import { SiJavascript, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si"
import Tilt from 'react-parallax-tilt';

const skills = [
    {
        name: 'JavaScript',
        icon: <SiJavascript />,
        percentage: 89
    },
    {
        name: 'React.js',
        icon: <SiReact />,
        percentage: 92
    },
    {
        name: 'Next.js',
        icon: <SiNextdotjs />,
        percentage: 90
    },
    {
        name: 'Node.js',
        icon: <SiNodedotjs />,
        percentage: 88
    },
    {
        name: 'Tailwaind CSS',
        icon: <SiTailwindcss />,
        percentage: 94
    },
    {
        name: 'TypeScript',
        icon: <SiTypescript />,
        percentage: 86
    }
]

const Skills = () => {
  return (
    <div className="pt-16 pb-16">
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-[var(--color-text)]'>
            My <span className="text-[var(--color-accent)]">Skills</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-6 mt-16">
            {skills.map(skill => {
                return <Tilt key={skill.name} scale={1.5} transitionSpeed={400} >
                    <div className="bg-[var(--color-background-offset)] border border-[var(--color-border)] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105">
                        <div className="text-5xl mb-4 text-[var(--color-accent)]">
                            {skill.icon}
                        </div>
                        <p className="font-semibold text-2xl text-[var(--color-text)]">{skill.percentage}%</p>
                        <p className="text-[var(--color-primary)] mt-1">{skill.name}</p>
                    </div>
                </Tilt>
            })}
        </div>
    </div>
  )
}

export default Skills