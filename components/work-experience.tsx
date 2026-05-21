import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { workExperience } from "@/data";

export default function WorkExperience() {
    return (
        <div className="py-20" id="experience">
            <h1 className="heading">
                My {' '}
                <span className="text-purple">Work Experience</span>
            </h1>
            <Timeline data={workExperience}/>
        </div>
    );
}
