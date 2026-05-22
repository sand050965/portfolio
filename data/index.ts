export const navItems = [
    { name: "About", link: "#about" },
    { name: "Experience", link: "#work-experience" },
    { name: "Projects", link: "#projects" },
    { name: "Tech Stacks", link: "#tech-stacks" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "3+ years of work-experience in software engineering",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm based in Seattle, WA 🇺🇸",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "Soft Skills",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Let's Connect!",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
        link: "https://www.linkedin.com/in/blake-yang-0a91aa228/"
    },

    {
        id: 5,
        title: "Built 30+ end-to-end projects.",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Interested in working together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const workExperience = [
    {
        title: "Software Dev. Engineer Intern",
        company: "Amazon Web Services (AWS)",
        time: "May 2026 - Aug 2026",
        location: "Seattle, WA",
        img: "/work-experience/aws.gif",
        alt: "AWS",
        content: ["Billing Computing Service Team"]
    },
    {
        title: "Software Engineer",
        company: "Tryandco",
        time: "Jun 2023 - Dec 2024",
        location: "Taipei, Taiwan",
        img: "/work-experience/tryandco.png",
        alt: "Tryandco",
        content: [
            "Developed backend solutions for 25+ projects using PHP (Laravel), MySQL, and Vue.js to build full-stack CMS platforms, resulting in a 45% improvement in clients’ workflow efficiency, demonstrating entrepreneurial spirit.",
            "Migrated 20+ EC2 workloads to AWS Lambda and leveraged unit-testing to improve system scalability and reduce infrastructure costs, achieving $2,000 in annual cost savings.",
            "Implemented 40+ serverless workflows using AWS Lambda, seamlessly integrating REST APIs and rigorously testing with Postman, supporting up to 1,000 concurrent requests without downtime and improving 45% operational efficiency.",
            "Leveraged load balancing with AWS ALB and caching with ElastiCache for Redis to handle high traffic requests efficiently, improving system throughput by up to 40% and reducing database load by 37%."
        ]
    },
    {
        title: "Backend Engineer Trainee",
        company: "WeHelp",
        time: "Sep 2022 - Mar 2023",
        location: "Taipei, Taiwan",
        img: "/work-experience/wehelp.png",
        alt: "WeHelp",
        content: [
            "Selected as one of 300 participants nationwide for an immersive training program with an emphasis on Full Stack Web Development.",
            "Crafted a Python (Flask) full-stack e-commerce platform, containerized it using Docker, and seamlessly deployed it on AWS using EC2 with NGINX as a reverse proxy to enhance scalability, reliability, and performance.",
            "Reducing 55% deployment time and enhancing release reliability and efficiency by 40%, by integrating GitHub Actions, AWS CodeDeploy, and Jenkins with unit tests into CI/CD pipelines to automate deployment processes.",
        ]
    },
    {
        title: "Backend Engineer",
        company: "Cathay Life Insurance Co., Ltd.",
        time: "Apr 2021 - Sep 2022",
        location: "Taipei, Taiwan",
        img: "/work-experience/cathay.webp",
        alt: "Cathay Life",
        content: [
            "Utilized Java (Spring Boot) and MySQL to build REST APIs for the internal system with integration testing, enhancing system performance by 30%.",
            "Programmed and deployed Java-based data migration batch jobs in an Agile environment, reducing transfer time for 10 million+ records of critical business data by 55%.",
            "Refactored legacy Java code into modular, unit-testable classes and redesigned the MySQL database schema, achieving 65% higher query performance for new modules to improve system reliability and enabled robust business intelligence reporting",
        ]
    },
];

export const projects = [
    {
        id: 1,
        title: "Chatflow",
        description: "Architectured and load-tested a distributed real-time chat system.",
        img: "/projects/chatflow.jpeg",
        iconLists: ["/tech-stacks/Java.svg", "/tech-stacks/Spring Boot.svg", "/tech-stacks/Gradle.svg", "/tech-stacks/PostgreSQL.svg", "/tech-stacks/Redis.svg", "/tech-stacks/Docker.svg", "/tech-stacks/GitHub.svg", "/tech-stacks/AWS.svg"],
        link: "https://github.com/sand050965/chatflow",
    },
    {
        id: 2,
        title: "PipelineForge",
        description: "Developed a distributed CI/CD pipeline execution system.",
        img: "/projects/pipeline-forge.jpeg",
        iconLists: ["/tech-stacks/Java.svg", "/tech-stacks/Spring Boot.svg", "/tech-stacks/Gradle.svg", "/tech-stacks/PostgreSQL.svg", "/tech-stacks/Redis.svg", "/tech-stacks/Docker.svg", "/tech-stacks/Kubernetes.svg", "/tech-stacks/Helm.svg", "/tech-stacks/GitHub.svg", "/tech-stacks/GitHub Actions.svg"],
        link: "https://github.com/sand050965/pipeline-forge",
    },
    {
        id: 3,
        title: "Mini Room",
        description: "Crafted a full-stack real-time video conferencing system that supports multi-user video calls and instant messaging.",
        img: "/projects/mini-room.gif",
        iconLists: ["/tech-stacks/Node.js.svg", "/tech-stacks/Express.svg", "/tech-stacks/Socket.io.svg" , "/tech-stacks/MySQL.svg", "/tech-stacks/Docker.svg", "/tech-stacks/GitHub.svg", "/tech-stacks/GitHub Actions.svg", "/tech-stacks/Jenkins.svg", "/tech-stacks/AWS.svg"],
        link: "https://github.com/sand050965/mini-room",
    },
    {
        id: 4,
        title: "Hand Tracking Canvas",
        description: "Developed a desktop drawing application enabling touchless drawing via real-time hand gesture recognition.",
        img: "/projects/hand-tracking-canvas.gif",
        iconLists: ["/tech-stacks/Python.svg", "/tech-stacks/OpenCV.svg", "/tech-stacks/MediaPipe.svg", "/tech-stacks/Flask.svg", "/tech-stacks/Docker.svg", "/tech-stacks/GitHub.svg", "/tech-stacks/GitHub Actions.svg", "/tech-stacks/Jenkins.svg", "/tech-stacks/AWS.svg"],
        link: "https://github.com/sand050965/hand-tracking-canvas",
    },
    {
        id: 5,
        title: "Taipei Day Trip",
        description: "Built an e-commerce tourism platform enabling users to discover attractions, plan itineraries, and book one-day tours in Taipei with integrated booking and payment features.",
        img: "/projects/taipei-day-trip.gif",
        iconLists: ["/tech-stacks/Python.svg", "/tech-stacks/Flask.svg", "/tech-stacks/MySQL.svg", "/tech-stacks/Docker.svg", "/tech-stacks/AWS.svg"],
        link: "https://github.com/sand050965/taipei-day-trip",
    },
];

export const techStacks = [
    {
        title: "Languages",
        items: [
            {name: "Java", img: "/tech-stacks/Java.svg"},
            {name: "Python", img: "/tech-stacks/Python.svg"},
            {name: "Node.js", img: "/tech-stacks/Node.js.svg"},
            {name: "PHP", img: "/tech-stacks/PHP.svg"},
            {name: "JavaScript", img: "/tech-stacks/JavaScript.svg"},
            {name: "TypeScript", img: "/tech-stacks/TypeScript.svg"},
            {name: "HTML", img: "/tech-stacks/HTML.svg"},
            {name: "CSS", img: "/tech-stacks/CSS.svg"},
        ]
    },
    {
        title: "Frameworks",
        items: [
            {name: "Spring Boot", img: "/tech-stacks/spring-boot.svg"},
            {name: "Flask", img: "/tech-stacks/Flask.svg"},
            {name: "Laravel", img: "/tech-stacks/Laravel.svg"},
            {name: "Express.js", img: "/tech-stacks/Express.js.svg"},
            {name: "React", img: "/tech-stacks/React.svg"},
            {name: "Next.js", img: "/tech-stacks/Next.js.svg"},
            {name: "Vue.js", img: "/tech-stacks/Vue.js.svg"},
            {name: "Nuxt", img: "/tech-stacks/Nuxt JS.svg"},
            {name: "Tailwind CSS", img: "/tech-stacks/Tailwind CSS.svg"},
        ]
    },
    {
        title: "Database (SQL & NoSQL)",
        items: [
            {name: "MySQL", img: "/tech-stacks/MySQL.svg"},
            {name: "PostgreSQL", img: "/tech-stacks/PostgreSQL.svg"},
            {name: "SQLite", img: "/tech-stacks/SQLite.svg"},
            {name: "MongoDB", img: "/tech-stacks/MongoDB.svg"},
            {name: "Redis", img: "/tech-stacks/Redis.svg"},
        ]
    },
    {
        title: "Cloud & Infrastructure",
        items: [
            {name: "Amazon Web Services (AWS)", img: "/tech-stacks/AWS.svg"},
            {name: "Cloudflare", img: "/tech-stacks/CloudFlare.svg"},
            {name: "Vercel", img: "/tech-stacks/Vercel.svg"},
        ]
    },
    {
        title: "Developer Tools",
        items: [
            {name: "Gradle", img: "/tech-stacks/Gradle.svg"},
            {name: "Apache Maven", img: "/tech-stacks/Apache Maven.svg"},
            {name: "Linux", img: "/tech-stacks/Linux.svg"},
            {name: "Git", img: "/tech-stacks/Git.svg"},
            {name: "GitHub", img: "/tech-stacks/GitHub.svg"},
            {name: "Jenkins", img: "/tech-stacks/Jenkins.svg"},
            {name: "RabbitMQ", img: "/tech-stacks/RabbitMQ.svg"},
            {name: "Docker", img: "/tech-stacks/Docker.svg"},
            {name: "Kubernetes", img: "/tech-stacks/Kubernetes.svg"},
            {name: "Helm", img: "/tech-stacks/Helm.svg"},
            {name: "NGINX", img: "/tech-stacks/NGINX.svg"},
            {name: "Grafana", img: "/tech-stacks/Grafana.svg"},
            {name: "Postman", img: "/tech-stacks/Postman.svg"},
        ]
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/social-media/GitHub.svg",
        link: "https://github.com/sand050965"
    },
    {
        id: 2,
        img: "/social-media/Instagram.svg",
        link: "https://www.instagram.com/"
    },
    {
        id: 3,
        img: "/social-media/LinkedIn.svg",
        link: "https://www.linkedin.com/in/blake-yang-0a91aa228/"
    },
];
