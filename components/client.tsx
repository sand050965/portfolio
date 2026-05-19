import React from 'react';
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/data";

const Client = () => {
    return (
        <div className="py-20" id="projects">
            <h1 className="heading">
                Kind Words from {' '}
                <span className="text-purple">Satisfied Clients</span>
            </h1>

            <div className="flex flex-col items-center max-lg:mt-10">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    );
};

export default Client;