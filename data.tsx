import { FaHome } from "react-icons/fa";
import { AWSIcon, BootstrapIcon, CSSIcon, DockerIcon, GithubIcon, GmailIcon, GoIcon, GoogleCloudIcon, GrfanaIcon, HTMLIcon, JavascriptIcon, JenkinsIcon, LinkedlnIcon, MySQLIcon, NextJSIcon, NodeJSIcon, OpenAIIcon, PostgressIcon, PrismaIcon, PrometheusIcon, PythonIcon, ReactIcon, RedisIcon, ReduxIcon, SlackIcon, TailwindCSSIcon, TerraformIcon, TypescriptIcon } from './components/icons';
import { FaGithub } from "react-icons/fa6";

export const MainTechnologies = [
    "React",
    "Python",
    "Javascript",
    "Java",
    "AWS"
]

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
];

export const technicalSkills = [
    <ReactIcon width="100" height="100"/>,
    <NextJSIcon width="100" height="100"/>,
    <NodeJSIcon width="100" height="100"/>,
    <PythonIcon width="100" height="100"/>,
    <TypescriptIcon width="100" height="100"/>,
    <JavascriptIcon width="100" height="100"/>,
    <DockerIcon width="100" height="100"/>,
    <AWSIcon width="100" height="100"/>,
    <JenkinsIcon width="100" height="100"/>,
    <GoIcon width="100" height="100"/>,
    <RedisIcon width="100" height="100"/>,
    <TerraformIcon width="100" height="100"/>,
    <TailwindCSSIcon width="100" height="100"/>,
    <HTMLIcon width="100" height="100"/>,
    <CSSIcon width="100" height="100"/>,
    <ReduxIcon width="100" height="100"/>,
    <PrismaIcon width="100" height="100"/>,
    <PostgressIcon width="100" height="100"/>,
    <MySQLIcon width="100" height="100"/>,
    <GithubIcon width="100" height="100"/>,
    <GrfanaIcon width="100" height="100"/>,
    <PrometheusIcon width="100" height="100"/>,
    <OpenAIIcon width="100" height="100"/>,
    <SlackIcon width="100" height="100"/>,
    <GoogleCloudIcon width="100" height="100"/>,
    
]

export const projects = [
    {
        title: "Inspire AI",
        description: "AI SaaS platform using Next.js, React.js, and the OpenAI ChatGPT model to enhance productivity with features for code creation, chats, and video/music generation, integrating a chat system for customer support and Stripe for managing pricing tiers.",
        image: "/img1.png",
        githubLink : "https://ai-saa-s-platform-brown.vercel.app/",
        tech: [
            <ReactIcon width="40" height="40"/>,
            <NodeJSIcon  width="40" height="40"/>,
            <NextJSIcon  width="40" height="40"/>, 
            <PrismaIcon  width="40" height="40"/>, 
            <OpenAIIcon  width="40" height="40"/>, 
            <TypescriptIcon  width="40" height="40"/>, 
        ]
    },
    {
        title: "Streamflix Application",
        description: "A scalable Netflix clone deployed on AWS EC2 using Docker, with automated CI/CD, continuous code quality and security checks, and real-time monitoring for enhanced operational visibility and proactive management",
        image: "/img2.png",
        githubLink : "https://github.com/Rishiii7/Netflix-CICD",
        tech: [
            <ReactIcon width="40" height="40"/>,
            <NodeJSIcon  width="40" height="40"/>, 
            <TypescriptIcon  width="40" height="40"/>, 
            <AWSIcon  width="40" height="40"/>, 
            <DockerIcon  width="40" height="40"/> 
        ]
    },
    {
        title: "ExpenseLens",
        description: "ExpenseLens is an expense tracking app deployed on GCP using Kubernetes, Terraform, and Helm, aimed at reducing costs and enhancing CI/CD efficiency, while providing valuable data analysis to inform strategic decision-making.",
        image: "/img3.png",
        githubLink : "https://github.com/Rishiii7/ExpenseLens",
        tech: [
            <ReactIcon width="40" height="40"/>,
            <PythonIcon width="40" height="40"/>,
            <GoogleCloudIcon width="40" height="40"/>,
            <PostgressIcon width="40" height="40"/>,
            <DockerIcon width="40" height="40"/>,
        ]
    },
    {
        title: "Crime Data Analysis",
        description: "A web application that analyzes and visualizes crime data across the United States, empowering users to make informed safety decisions and allowing anonymous sharing of crime-related experiences to promote community-driven awareness and enhance public safety.",
        image: "/img4.png",
        githubLink : "https://github.com/Rishiii7/Crime-Data-Analysis",
        tech: [
            <HTMLIcon width="40" height="40"/>,
            <CSSIcon width="40" height="40"/>,
            <PythonIcon width="40" height="40"/>,
            <BootstrapIcon width="40" height="40"/>,
            <MySQLIcon width="40" height="40"/>,
            
        ]
    },
    
]

export const workExperience = [
    {
        companyName: "Credence",
        designation: "Software Engineer",
        thumbnail: "/exp1.svg",
        description: "Designed, developed, and maintained front-end and back-end components of web applications, ensuring high performance, reliability, and user satisfaction, and created over 15 custom React components for the UI library while managing application state efficiently.",
    },
    {
        companyName: "Rule4",
        thumbnail: "/exp2.svg",
        description: "Developed an AI-driven cybersecurity application using Microsoft Teams transcripts and a Llama2 model for threat detection. Implemented a secure, low-latency Slack bot interface and deployed the application on Kubernetes and Docker for high availability and scalability.",
        designation: "Backend Engineer",
    },
    {
        companyName: "ASANTe",
        thumbnail: "/exp3.svg",
        description: "Improved AWS security and efficiency by developing IAM roles, reduced data breaches by 10%, and enhanced system manageability. It also boosted service responsiveness with Golang microservices and effectively communicated technical proposals to stakeholders.",
        designation: "Software Engineer",
    },
    {
        companyName: "Solfir",
        thumbnail: "/exp4.svg",
        description: "Led back-end development to enhance user engagement, performance, and security. Created responsive web apps with React.js and used AWS EC2 and Load Balancer for scalability. It increased user engagement, reduced load times by 20%, improved security, and streamlined development.",
        designation: "Software Developer",
    },
]

export const socialMedia = [
    {
        icon: <LinkedlnIcon  width="50" height="50"/>,
        link: "https://www.linkedin.com/in/rishikesh-solapure/",
    },
    {
        icon: <FaGithub className="w-10 h-10"/>,
        link: "https://github.com/Rishiii7",
    },
]