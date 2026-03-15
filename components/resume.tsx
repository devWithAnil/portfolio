import ResumeCard from '@/components/resume-card';
import { BiBadge } from 'react-icons/bi';
import { BsDatabase } from 'react-icons/bs';
import { FaCodepen, FaReact } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className='pt-20 pb-16'>
        <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
            <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-2">Career</p>
                <h1 className='text-3xl sm:text-4xl font-bold text-[var(--color-text)]'>
                    My Work <span className='text-[var(--color-accent)]'>Experience</span>
                </h1>
                <div className='mt-10'>
                    <ResumeCard
                        Icon={FaCodepen}
                        role="SDE III"
                        description="Architected scalable systems and led technical decision-making, while mentoring junior developers and driving engineering best practices across the organization."
                    />
                    <ResumeCard
                        Icon={FaReact}
                        role="Lead Engineer"
                        description="Led cross-functional engineering teams to deliver high-quality software products, overseeing the full development lifecycle from planning to production deployment."
                    />
                    <ResumeCard
                        Icon={BsDatabase}
                        role="Full-Stack Developer"
                        description="Built end-to-end web applications using modern frontend and backend technologies, handling everything from UI development to database design and API integration."
                    />
                </div>
            </div>
            <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-2">Qualifications</p>
                <h1 className='text-3xl sm:text-4xl font-bold text-[var(--color-text)]'>
                    My <span className='text-[var(--color-accent)]'>Education</span>
                </h1>
                <div className='mt-10'>
                    <ResumeCard
                        Icon={BiBadge}
                        role="National Institute of Technology (NIT) Patna"
                        date='Jul 2014 - Jun 2018'
                        description="Studied at one of India's premier technical institutions, gaining a strong foundation in engineering principles, mathematics, and applied computer science."
                    />
                    <ResumeCard
                        Icon={FaReact}
                        role="Bachelor in Computer Science"
                        date='Jul 2014 - Jun 2018'
                        description="Completed a four-year undergraduate program covering core topics including algorithms, data structures, software engineering, operating systems, and systems design."
                    />
                    <ResumeCard
                        Icon={BsDatabase}
                        role="Django Certification"
                        date='Dec 2012 - Feb 2013'
                        description="Earned a professional certification in the Django web framework, covering RESTful API development, ORM, authentication systems, and full-stack web application architecture."
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume
