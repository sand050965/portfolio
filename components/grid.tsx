import React from 'react';
import { BentoGrid, BentoGridItem } from "@/components//ui/bento-grid";
import { gridItems } from "@/data";

const Grid = () => {
    return (
        <section id="about">
            <BentoGrid>
                {gridItems.map((
                    {
                        id,
                        title,
                        description,
                        className,
                        img,
                        imgClassName,
                        titleClassName,
                        spareImg,
                        link,
                    }) => (
                    <BentoGridItem
                        id={id}
                        key={id}
                        title={title}
                        description={description}
                        className={className}
                        img={img}
                        imgClassName={imgClassName}
                        titleClassName={titleClassName}
                        spareImg={spareImg}
                        link={link}
                    />
                ))}
            </BentoGrid>
        </section>
    );
};

export default Grid;
