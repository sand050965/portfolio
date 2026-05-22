import Hero from "@/components/hero";
import FloatingNav from "@/components/ui/floating-navbar";
import Grid from "@/components/grid";
import Project from "@/components/project";
import TechStack from "@/components/tech-stack";
import WorkExperience from "@/components/work-experience";
import Footer from "@/components/footer";
import { navItems } from "@/data";

export default function Home() {
    return (
        <main
            className="relative bg-black-100 w-full min-h-[50vh] flex justify-center flex-col overflow-hidden mx-auto">
            <div className="max-w-7xl w-full mx-auto sm:px-10 px-5">
                <FloatingNav navItems={navItems}/>
                <Hero/>
                <Grid/>
                <WorkExperience/>
                <Project/>
                <TechStack/>
            </div>
            <Footer/>
        </main>
    );
}
