import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
    return (
      <>
      <main className="bg-black-100 text-white flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
         
        <div className="max-w-7xl w-full">
          <Hero />
        </div>
      </main>
      </>
    );
}
