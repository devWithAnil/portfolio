import Image from "next/image"

const projects = [
    {
        image: "/images/p1.png",
        title: "Modern E-commerce Website for 360 Wellness",
        category: "Apps · UI/UX",
        description: "Designed and developed a full-featured e-commerce platform for a wellness brand, with a clean product catalog, seamless checkout flow, and a mobile-first responsive UI.",
    },
    {
        image: "/images/p2.png",
        title: "GEMSPY — Discover and Compare Gemstones",
        category: "Branding · UI/UX",
        description: "Built an elegant platform for gemstone enthusiasts to explore, compare, and purchase certified gemstones, with a rich visual identity and intuitive filtering experience.",
    },
    {
        image: "/images/p3.png",
        title: "Modern Website for GD Goenka School, Gurgaon",
        category: "Branding · UI/UX",
        description: "Redesigned the school's web presence with a modern, accessible layout, showcasing academics, events, and admissions — crafted to engage parents, students, and faculty.",
    },
    {
        image: "/images/p4.png",
        title: "Abhyasa — Transform Daily Habits into Meaningful Rituals",
        category: "Apps · UI/UX",
        description: "Crafted the UI/UX for a mindfulness and habit-tracking app that helps users build daily rituals with intention, featuring a calm aesthetic and an engaging onboarding experience.",
    },
]

const Projects = () => {
    return (
        <div className="pt-16 pb-16">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-2">Portfolio</p>
            <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-[var(--color-text)]">
                A small selection of <span className="text-[var(--color-accent)]">recent projects</span>
            </h1>

            <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-background-offset)] overflow-hidden hover:border-[var(--color-accent)] transition-all duration-300"
                    >
                        {/* Image */}
                        <div className="relative w-full h-[260px] overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-5">
                            {/* Category badge */}
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-background)] border border-[var(--color-accent)] text-[var(--color-accent)] mb-3">
                                {project.category}
                            </span>

                            <h2 className="text-lg sm:text-xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors duration-300 leading-snug">
                                {project.title}
                            </h2>

                            <p className="mt-2 text-sm text-[var(--color-text-offset)] leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
