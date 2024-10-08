"use client";
 
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
    githubLink: string;
    tech: React.ReactNode[];
    key?: string;
}

export const ProjectCard = ({
    title,
    description,
    image,
    githubLink,
    tech,
    key
}: ProjectCardProps) => {
  return (
    <CardContainer 
      className="inter-var w-full"
      key={key}
    >
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white flex justify-between w-full items-center"
        >

            { title }
            <Link  href={githubLink}>
                <FaGithub 
                    className="h-6 w-6"
                />
            </Link>
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          { description }
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-center items-center mt-4">
            {
                tech.map( (tech, id) => (
                    <CardItem
                        key={`${tech}-${id}`}
                        translateZ={40}
                        className="px-1.5 sm:px-4 py-2 rounded-xl text-xs font-bold"
                    >
                        {tech}
                    </CardItem>
                ))
            }
          
        </div>
      </CardBody>
    </CardContainer>
  )
}
