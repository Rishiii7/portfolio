import { FaHome } from "react-icons/fa"
import { FaAws, FaDocker, FaNodeJs, FaReact } from "react-icons/fa6"
import { AWSIcon, BootstrapIcon, CSSIcon, DockerIcon, GoogleCloudIcon, HTMLIcon, MySQLIcon, NextJSIcon, NodeJSIcon, OpenAIIcon, PostgressIcon, PrismaIcon, PythonIcon, ReactIcon, TypescriptIcon } from "./components/icons"
const cardTechWidht = "40";
const cardTechHeight = "40";
export const MainTechnologies = [
    "React",
    "Python",
    "Javascript",
    "TypeScript",
    "AWS"
]

export const navItmes = [
    {
        name: "Home",
        link: "/",
        icon: <FaHome />
    }
]

export const Technologies = [
    
]

export const projects = [
    {
        title: "Inspire AI",
        description: "AI SaaS platform using Next.js, React.js, and the OpenAI ChatGPT model to enhance productivity with features for code creation, chats, and video/music generation, integrating a chat system for customer support and Stripe for managing pricing tiers.",
        image: "",
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
        image: "",
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
        title: "Crime Data Analysis",
        description: "A web application that analyzes and visualizes crime data across the United States, empowering users to make informed safety decisions and allowing anonymous sharing of crime-related experiences to promote community-driven awareness and enhance public safety.",
        image: "",
        githubLink : "https://github.com/Rishiii7/Crime-Data-Analysis",
        tech: [
            <HTMLIcon width="40" height="40"/>,
            <CSSIcon width="40" height="40"/>,
            <PythonIcon width="40" height="40"/>,
            <BootstrapIcon width="40" height="40"/>,
            <MySQLIcon width="40" height="40"/>,
            
        ]
    },
    {
        title: "ExpenseLens",
        description: "ExpenseLens is an expense tracking app deployed on GCP using Kubernetes, Terraform, and Helm, aimed at reducing costs and enhancing CI/CD efficiency, while providing valuable data analysis to inform strategic decision-making.",
        image: "",
        githubLink : "https://github.com/Rishiii7/ExpenseLens",
        tech: [
            <ReactIcon width="40" height="40"/>,
            <PythonIcon width="40" height="40"/>,
            <GoogleCloudIcon width="40" height="40"/>,
            <PostgressIcon width="40" height="40"/>,
            <DockerIcon width="40" height="40"/>,
        ]
    },
]