import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { experience } from "@/data";

export default function Experience() {
    return (
        <div className="py-20" id="projects">
            <h1 className="heading">
                My {' '}
                <span className="text-purple">Work Experience</span>
            </h1>
            <Timeline data={experience}/>
        </div>
    );
}
