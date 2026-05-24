import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import TailwindcssButton from "@/components/ui/tailwindcss-button";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

const Footer = () => {
    return (
        <footer
            className="relative w-full pt-20 pb-10 overflow-hidden"
            id="contact"
        >
            <BackgroundRippleEffect />

            <div className="relative z-10 max-w-7xl mx-auto sm:px-10 px-5">
                <div className="flex flex-col items-center">
                    <h1 className="heading lg:max-w-[45vw]">
                        Interested in having a <span className="text-purple">cofee chat</span> with me?
                    </h1>
                    <p className="text-white-200 md:mt-10 my-5 text-center">
                        Feel free to reach out to me.
                    </p>
                    <a href="mailto:sand050965@gmail.com">
                        <TailwindcssButton
                            title="Let's get in touch"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </div>

                <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                    <p className="md:text-base text-sm md:font-normal font-light">
                        Copyright © 2026 Blake Yang
                    </p>

                    <div className="flex items-center md:gap-3 gap-6">
                        {socialMedia.map((info) => (
                            <div
                                key={info.id}
                                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                            >
                                <img src={info.img} alt="icons" width={20} height={20} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
