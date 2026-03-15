import ServiceCard from './service-card'

const Services = () => {
  return (
    <div className='pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-[var(--color-text)]'>
            Collaborate with brand <br /> and agencies to create <br /> impactful results
        </h1>
        <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center'>
            <div>
                <ServiceCard 
                    icon="/images/s1.png"
                    name= "UI and UX"
                    description="Crafting user-centered designs that are intuitive, accessible, and visually delightful"
                />
            </div>
            <div>
                <ServiceCard 
                    icon="/images/s2.png"
                    name= "Web and Mobile App"
                    description="Building responsive, high-performance web and mobile applications for seamless experiences"
                />
            </div>
            <div>
                <ServiceCard 
                    icon="/images/s3.png"
                    name= "Design & Creative"
                    description="Delivering bold, creative visuals and branding that capture attention and tell your story"
                />
            </div>
            <div>
                <ServiceCard 
                    icon="/images/s4.png"
                    name= "Development"
                    description="Writing clean, scalable code to bring your ideas to life with speed and reliability"
                />
            </div>

        </div>
    </div>
  )
}

export default Services