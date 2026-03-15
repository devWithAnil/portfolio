import Image from "next/image"
import { FaReact, FaNodeJs } from "react-icons/fa"
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si"

const stats = [
    { label: "Years of Experience", value: "6+" },
    { label: "Projects Delivered", value: "30+" },
    { label: "Happy Clients", value: "20+" },
    { label: "Technologies", value: "10+" },
]

const techStack = [
    { icon: <FaReact />, label: "React" },
    { icon: <SiNextdotjs />, label: "Next.js" },
    { icon: <FaNodeJs />, label: "Node.js" },
    { icon: <SiTypescript />, label: "TypeScript" },
    { icon: <SiTailwindcss />, label: "Tailwind" },
]

const About = () => {
    return (
        <div className="pt-16 pb-16">
            <div className="w-[90%] sm:w-[80%] lg:w-[70%] mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left — Laptop Illustration */}
                    <div className="flex items-center justify-center">
                        <div className="relative w-full max-w-sm">
                            <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl">
                                <rect x="40" y="10" width="320" height="210" rx="12" fill="var(--color-background-offset)" stroke="var(--color-border)" strokeWidth="2"/>
                                <rect x="52" y="22" width="296" height="186" rx="6" fill="var(--color-background)"/>
                                <rect x="70" y="42" width="80" height="8" rx="4" fill="var(--color-accent)" opacity="0.8"/>
                                <rect x="70" y="58" width="140" height="7" rx="3" fill="var(--color-text-offset)" opacity="0.4"/>
                                <rect x="70" y="72" width="110" height="7" rx="3" fill="var(--color-text-offset)" opacity="0.4"/>
                                <rect x="85" y="86" width="160" height="7" rx="3" fill="var(--color-primary)" opacity="0.6"/>
                                <rect x="85" y="100" width="120" height="7" rx="3" fill="var(--color-accent)" opacity="0.5"/>
                                <rect x="85" y="114" width="180" height="7" rx="3" fill="var(--color-text-offset)" opacity="0.4"/>
                                <rect x="70" y="128" width="90" height="7" rx="3" fill="var(--color-text-offset)" opacity="0.4"/>
                                <rect x="70" y="142" width="150" height="7" rx="3" fill="var(--color-primary)" opacity="0.6"/>
                                <rect x="85" y="156" width="130" height="7" rx="3" fill="var(--color-accent)" opacity="0.5"/>
                                <rect x="85" y="170" width="100" height="7" rx="3" fill="var(--color-text-offset)" opacity="0.4"/>
                                <rect x="185" y="170" width="8" height="7" rx="1" fill="var(--color-accent)" opacity="0.9"/>
                                <rect x="10" y="222" width="380" height="18" rx="4" fill="var(--color-background-offset)" stroke="var(--color-border)" strokeWidth="2"/>
                                <rect x="155" y="226" width="90" height="10" rx="3" fill="var(--color-border)" opacity="0.6"/>
                            </svg>

                            {/* Floating tech badges */}
                            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[var(--color-primary)] rounded-2xl flex items-center justify-center shadow-lg rotate-6">
                                <SiNextdotjs className="text-white w-8 h-8" />
                            </div>
                            <div className="absolute -bottom-2 -left-4 w-14 h-14 bg-[var(--color-accent)] rounded-2xl flex items-center justify-center shadow-lg -rotate-6">
                                <FaReact className="text-white w-7 h-7" />
                            </div>
                        </div>
                    </div>

                    {/* Right — Content */}
                    <div>
                        <div className="flex items-center space-x-4 mb-6">
                            <Image
                                src="/images/anil_yadav.jpeg"
                                alt="Anil Yadav"
                                width={64}
                                height={64}
                                className="rounded-full border-2 border-[var(--color-accent)]"
                            />
                            <div>
                                <h2 className="text-xl font-bold text-[var(--color-text)]">Anil Yadav</h2>
                                <p className="text-sm text-[var(--color-accent)] font-medium">SDE III · Lead Engineer · UI/UX Designer</p>
                            </div>
                        </div>

                        <p className="text-[var(--color-text-offset)] text-base leading-relaxed mb-4">
                            Hi! I&apos;m Anil, a passionate Full-Stack Developer and UI/UX Designer based in Gurugram, India. With over 6 years of experience building products that are fast, accessible, and beautiful, I bridge the gap between design and engineering.
                        </p>
                        <p className="text-[var(--color-text-offset)] text-base leading-relaxed mb-8">
                            I graduated from NIT Patna with a Bachelor&apos;s in Computer Science and have since worked across the stack — from crafting pixel-perfect interfaces with React and Next.js to architecting scalable backend systems with Node.js. I love turning ideas into impactful digital experiences.
                        </p>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            {techStack.map(({ icon, label }) => (
                                <div key={label} className="flex items-center space-x-2 px-3 py-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-background-offset)] text-sm font-medium text-[var(--color-text-offset)]">
                                    <span className="text-[var(--color-accent)]">{icon}</span>
                                    <span>{label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map(({ label, value }) => (
                                <div key={label} className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-background-offset)] text-center">
                                    <p className="text-2xl font-bold text-[var(--color-accent)]">{value}</p>
                                    <p className="text-xs text-[var(--color-text-offset)] mt-1">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
