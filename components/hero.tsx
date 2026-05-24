"use client";
import { FaDownload } from "react-icons/fa";
import Spotlight from "@/components/ui/spotlight";
import TextGenerateEffect from "@/components/ui/text-generate-effect";
import TailwindcssButton from "@/components/ui/tailwindcss-button";
import { CometCard } from "@/components/ui/comet-card";

const Hero = () => {
    return (
        <div className="pb-20 pt-20">
            <div className="absolute inset-x-0 top-0 h-screen w-full overflow-hidden pointer-events-none">
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

            <div className="flex flex-col md:flex-row items-center justify-center gap-10 my-20 z-10 relative">
                <CometCard className="flex-shrink-0">
                    <button
                        type="button"
                        className="flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:p-4"
                        aria-label="View invite F7RA"
                        style={{
                            transformStyle: "preserve-3d",
                            transform: "none",
                            opacity: 1,
                        }}
                    >
                        <div className="mx-2 flex-1">
                            <div className="relative mt-2 aspect-[3/4] w-full">
                                <img
                                    loading="lazy"
                                    className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                                    alt="Blake Yang"
                                    src="/common/avatar.png"
                                    style={{
                                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                                        opacity: 1,
                                    }}
                                />
                            </div>
                        </div>
                        <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
                            <div className="text-xs">Blake (Hsien-Yu) Yang</div>
                            <div className="text-xs text-gray-300 opacity-50">#Taiwan</div>
                        </div>
                    </button>
                </CometCard>

                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h1 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        Build boldly, stay grounded.
                    </h1>

                    <TextGenerateEffect
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                        words={`Hi! Welcome to my portfolio~ I'm Blake Yang!`}
                    />
                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        I&apos;m a software engineer from Taiwan.
                    </p>

                    <a href="/resume.pdf" download="Blake_Resume.pdf">
                        <TailwindcssButton
                            title="Download My Resume"
                            icon={<FaDownload />}
                            position="right"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
