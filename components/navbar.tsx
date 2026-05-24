"use client";
import {
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
    Navbar as ResizableNavbar,
    NavbarButton,
    NavbarLogo,
    NavBody,
    NavItems,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { navItems } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";

const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <ResizableNavbar>
            <NavBody>
                <NavbarLogo />
                <div className="flex items-center gap-4"/>
                <NavItems items={navItems}/>
                <div className="flex items-center gap-4">
                    <NavbarButton variant="secondary" href="https://github.com/sand050965">
                        <img src="/icons/github.svg" alt="icons" width={25} height={25}/>
                    </NavbarButton>
                    <NavbarButton variant="primary" href="https://www.linkedin.com/in/blake-yang-0a91aa228/">
                        <div className="flex justify-center items-center gap-2">
                            <div>Let&apos;s Connect</div>
                            <FaLocationArrow/>
                        </div>
                    </NavbarButton>
                </div>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo/>
                    <MobileNavToggle
                        isOpen={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                </MobileNavHeader>

                <MobileNavMenu
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                >
                    {navItems.map((item, idx) => (
                        <a
                            key={`mobile-link-${idx}`}
                            href={item.link}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="relative text-neutral-600 dark:text-neutral-300"
                        >
                            <span className="block">{item.name}</span>
                        </a>
                    ))}
                    <div className="flex w-full flex-col gap-4">
                        <NavbarButton
                            onClick={() => setIsMobileMenuOpen(false)}
                            variant="primary"
                            className="w-full"
                        >
                            Login
                        </NavbarButton>
                        <NavbarButton
                            onClick={() => setIsMobileMenuOpen(false)}
                            variant="primary"
                            className="w-full"
                        >
                            Book a call
                        </NavbarButton>
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </ResizableNavbar>
    );
}

export default Navbar;
