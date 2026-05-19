"use client";
import { FaDownload } from "react-icons/fa";
import { cn } from "@/lib/utils";
import Spotlight from "@/components/ui/spotlight";
import TextGenerateEffect from "@/components/ui/text-generate-effect";
import TailwindcssButton from "@/components/ui/tailwindcss-button";

const Hero = () => {
    return (
        <div className="pb-20 pt-36">
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight
                    className="top-28 left-80 h-[80vh] w-[50vw]"
                    fill="blue"
                />
            </div>

            <div
                className="flex h-screen w-full items-center justify-center dark:bg-black-100 absolute top-0 left-0">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:80px_80px]",
                        "[background-image:linear-gradient(to_right,rgba(228,228,231,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.4)_1px,transparent_1px)]",
                        "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.3)_1px,transparent_1px)]",
                    )}
                />
                <div
                    className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"/>
            </div>

            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h1 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        I&apos;m currently studying MSCS at NEU.
                    </h1>

                    <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl"
                                        words={`Hi! Welcome to my portfolio. I'm Blake Yang ~`}/>
                    <p className="text-center md:tracking-wider mb-4 text-sm md-text-lg lg:text-2xl">
                        I&apos;m a software engineer from Taiwan.
                    </p>

                    <a href="/public/resume.pdf" download="Blake_Resume.pdf">
                        <TailwindcssButton
                            title="Download My CV"
                            icon={<FaDownload/>}
                            position="right"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;
