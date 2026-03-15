import type { Metadata } from "next";
import About from "@/components/about";

export const metadata: Metadata = {
    title: "About Me",
    description:
        "Learn more about Anil Yadav — SDE III, Full-Stack Developer, and UI/UX Designer based in Gurugram, India. NIT Patna graduate with 6+ years of experience building scalable web products.",
};

const AboutPage = () => {
    return (
        <main className="min-h-screen pt-10">
            <About />
        </main>
    );
};

export default AboutPage;
