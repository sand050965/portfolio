"use client";
import { useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { GrLinkedin } from "react-icons/gr";
import Lottie from "react-lottie";
import { cn } from "@/lib/utils";


import BackgroundGradientAnimation from "@/components/ui/gradient-bg";
import GridGlobe from "@/components/ui/grid-globe";
import animationData from "@/data/confetti.json";
import TailwindcssButton from "@/components/ui/tailwindcss-button";

export const BentoGrid = ({
                              className,
                              children,
                          }: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
                                  className,
                                  id,
                                  title,
                                  description,
                                  img,
                                  imgClassName,
                                  titleClassName,
                                  spareImg,
                              }: {
    className?: string;
    id: number;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    const leftLists = ["Collaboration", "Communication", "Customer Obsession"];
    const rightLists = ["Problem Solving", "Ownership", "Creativity"];

    const [copied, setCopied] = useState(false);
    const [playKey, setPlayKey] = useState(0);

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const handleCopy = () => {
        const text = "sand050965@gmail.com";
        navigator.clipboard.writeText(text);
        setCopied(true);
        setPlayKey((k) => k + 1);
    };

    useEffect(() => {
        if (copied) {
            const timer = setTimeout(() => setCopied(false), 2500);
            return () => clearTimeout(timer);
        }
    }, [copied]);

    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
        >
            <div className={`${id === 6 && "flex justify-center"} h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, "object-cover object-center ")}
                        />
                    )}
                </div>
                <div
                    className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
                    } `}
                >
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            className="object-cover object-center w-full h-full"
                        />
                    )}
                </div>
                {id === 6 && (
                    <BackgroundGradientAnimation>
                        <div
                            className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
                    </BackgroundGradientAnimation>
                )}

                <div
                    className={cn(
                        titleClassName,
                        "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
                        id === 4 && "flex-row md:flex-col items-center md:items-stretch justify-between md:justify-start gap-3"
                    )}
                >
                    <div className={cn(id === 4 && "flex flex-col md:contents")}>
                        <div
                            className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                            {description}
                        </div>
                        <div
                            className={cn(
                                "font-sans text-lg lg:text-3xl max-w-96 font-bold z-10",
                                id === 5 && "max-w-85"
                            )}
                        >
                            {title}
                        </div>
                    </div>

                    {id === 2 && <GridGlobe/>}

                    {id === 3 && (
                        <div className="flex gap-1 lg:gap-2 w-fit absolute -right-3">
                            <div className="flex flex-col gap-3 lg:gap-5">
                                <span className="py-4 px-3 lg:py-5 lg:px-4 rounded-lg text-center bg-[#10132E]"></span>
                                {leftLists.map((item, i) => (
                                    <span
                                        key={i}
                                        className="py-2 px-3 lg:py-3 lg:px-4 text-xs lg:text-sm opacity-50 rounded-lg text-center bg-[#10132E]"
                                    >
                                    {item}
                                  </span>
                                ))}
                            </div>
                            <div className="flex flex-col gap-3 lg:gap-5">
                                {rightLists.map((item, i) => (
                                    <span
                                        key={i}
                                        className="py-2 px-3 lg:py-3 lg:px-4 text-xs lg:text-sm opacity-50 rounded-lg text-center bg-[#10132E]"
                                    >
                                        {item}
                                    </span>
                                ))}
                                <span className="py-4 px-3 lg:py-5 lg:px-4 rounded-lg text-center bg-[#10132E]"></span>
                            </div>
                        </div>
                    )}

                    {id === 6 && (
                        <div className="mt-5 relative">
                            <div className="absolute -bottom-5 right-0">
                                {copied && (
                                    <Lottie
                                        key={playKey}
                                        options={defaultOptions}
                                        height={200}
                                        width={400}
                                    />
                                )}
                            </div>

                            <TailwindcssButton
                                title={copied ? "Copied!" : "Copy email"}
                                icon={<IoCopyOutline/>}
                                position="left"
                                handleClick={handleCopy}
                                otherClasses="!bg-[#161A31]"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
