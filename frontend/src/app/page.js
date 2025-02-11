import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center bg-neutral-950 relative antialiased">
        <div className="max-w-4xl text-center px-4">
          <h1 className="text-4xl md:text-7xl text-white font-sans font-extrabold tracking-tight">
            Find Emails Easily
          </h1>
          <p className="text-neutral-300 max-w-2xl mx-auto my-6 text-lg md:text-xl leading-relaxed font-medium">
            Discover emails from websites, web data, and more in seconds.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              className="px-8 py-6  bg-white text-black  text-lg font-semibold rounded-lg 
            shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Button>
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </>
  );
}
