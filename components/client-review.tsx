'use client';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ClientReviewCard from './client-review-card';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const ClientReview = () => {
    return (
        <div className="pt-16 pb-16">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-2">Testimonials</p>
            <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-[var(--color-text)]">
                Kind words from satisfied <br /> <span className="text-[var(--color-accent)]">clients</span>
            </h1>
            <div className="mt-16 w-[90%] sm:w-[70%] mx-auto">
                <Carousel responsive={responsive}>
                    <ClientReviewCard
                        image='/images/c1.png'
                        name="Priya Sharma"
                        role="CEO, 360 Wellness"
                        review="Anil transformed our e-commerce vision into a stunning, user-friendly platform. Our customer engagement improved drastically after launch. A truly talented developer!"
                    />
                    <ClientReviewCard
                        image='/images/c2.png'
                        name="Rahul Mehta"
                        role="Founder, GEMSPY"
                        review="The branding and UI/UX work for GEMSPY was outstanding. Anil understood our product deeply and delivered a design that makes gemstone discovery feel intuitive and beautiful."
                    />
                    <ClientReviewCard
                        image='/images/c3.png'
                        name="Ananya Singh"
                        role="Principal, GD Goenka School"
                        review="Our school's new website has received overwhelming praise from parents and students alike. Anil delivered a clean, modern design that perfectly reflects our institution's values."
                    />
                    <ClientReviewCard
                        image='/images/c4.png'
                        name="Vikram Nair"
                        role="Product Manager, Abhyasa"
                        review="Working with Anil on Abhyasa was a fantastic experience. He grasped the concept immediately and crafted an app experience that feels both meaningful and delightful to use daily."
                    />
                    <ClientReviewCard
                        image='/images/c5.png'
                        name="Neha Gupta"
                        role="CTO, Fintech Startup"
                        review="Anil's technical expertise and eye for detail are truly impressive. He consistently delivers work that goes beyond expectations — both in quality and on time."
                    />
                </Carousel>
            </div>
        </div>
    )
}

export default ClientReview
