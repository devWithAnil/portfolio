import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation"
import ParticlesHero from "./particle-background";

const Hero = () => {
    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden flex-col">
            <ParticlesHero />
            <div className="relative z-10 flex flex-col items-center w-full px-6 max-w-4xl">
                {/* Blurred glow behind photo */}
                <div className="relative flex items-center justify-center">
                    <div className="absolute w-48 h-48 rounded-full bg-[var(--color-accent)] opacity-30 blur-3xl" />
                    <div className="absolute w-36 h-36 rounded-full bg-[var(--color-primary)] opacity-20 blur-2xl" />
                    <div className="relative z-10 w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] rounded-full overflow-hidden border-4 border-[var(--color-accent)] shadow-2xl">
                        <Image
                            src="/images/anil_yadav.jpeg"
                            alt="Anil Yadav"
                            fill
                            className="object-cover object-top"
                        />
                    </div>
                </div>
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide text-[var(--color-text)]">
                    Creating web products, <br />
                    brands,
                    <span className="text-[var(--color-accent)]"> and experiences.</span>
                </h1>
                <h2 className="mt-5 text-sm sm:text-xl md:text-2xl font-medium text-center text-[var(--color-text-offset)] flex flex-wrap justify-center items-center gap-x-1">
                    <span>Hi! I&apos;m Anil — A Passionate</span>
                    <span className="text-[var(--color-accent)] font-bold">
                        <TypeAnimation
                            sequence={['Developer | Designer | Builder']}
                            speed={1}
                            repeat={1}
                            wrapper="span"
                        />
                    </span>
                </h2>
                <p className="mt-4 text-xs sm:text-base text-center text-[var(--color-text-offset)] max-w-xl leading-relaxed">
                    Based in Gurugram, India — I craft scalable web applications, intuitive UI/UX, and end-to-end digital products that make an impact. 7+ years of experience across startups and enterprises.
                </p>
                <a href="/#works" className="mt-6 px-8 py-3 sm:px-10 sm:py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-base sm:text-lg font-medium text-white flex items-center">
                    <span>See my work</span>
                    <BsArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2"/>
                </a>
            </div>
        </div>
    )
}

export default Hero