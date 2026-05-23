import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Grid from "@/components/grid";
import Project from "@/components/project";
import TechStack from "@/components/tech-stack";
import WorkExperience from "@/components/work-experience";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <main
            className="relative bg-black-100 w-full min-h-[50vh] flex justify-center flex-col mx-auto">
            <Navbar/>
            <div className="max-w-7xl w-full mx-auto sm:px-10 px-5 overflow-hidden">
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
