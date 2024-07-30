import Image from "next/image";

import Hero from "@/components/Hero";
import { RecentProjects } from "@/components/recent-projects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Technologies } from "@/components/technologies";

export default function Home() {
    return (
      <>
      <main className="bg-black-100 text-white flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
         
        <div className="max-w-7xl w-full">
          <FloatingNav 
              navItems={navItems}
          />
          <Hero />
          <Experience />
          <Technologies />
          <RecentProjects />
          <Footer />
        </div>
      </main>
      </>
    );
}
