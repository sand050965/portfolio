import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";
import { Grid } from "lucide-react";

export default function Home() {
    return (
        <main
            className="relative bg-black-100 w-full min-h-[50vh] flex justify-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={[
                    { name: 'Home', link: '/', icon: <FaHome/> }
                ]}/>
                <Hero/>
                <Grid/>
            </div>
        </main>
    );
}
