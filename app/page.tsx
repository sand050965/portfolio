import Hero from "@/components/hero";
import FloatingNav from "@/components/ui/floating-navbar";
import Grid from "@/components/grid";
import Project from "@/components/project";
import TechStack from "@/components/tech-stack";
import Experience from "@/components/experience";
import { navItems } from "@/data";

export default function Home() {
    return (
        <main
            className="relative bg-black-100 w-full min-h-[50vh] flex justify-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={navItems}/>
                <Hero/>
                <Grid/>
                <Experience/>
                <Project/>
                <TechStack/>
            </div>
        </main>
    );
}
