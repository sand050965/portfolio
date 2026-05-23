import React from 'react';
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { techStacks } from "@/data";

const TechStack = () => {
    return (
        <div className="py-20" id="testimonials">
            <h1 className="heading">
                I&apos;m Proficient In These {' '}
                <span className="text-purple">Tech Stacks</span>
            </h1>

            <div className="flex flex-col items-center max-lg:mt-10">
                <InfiniteMovingCards
                    items={techStacks}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    );
};

export default TechStack;