"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "../../assets/Logo.jpeg"

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="flex lg:flex-row flex-col gap-[100px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="place-self-center text-left sm:w-3/5 w-4/5 justify-self-start"
        >
          <h1 className="text-white mb-4 text-5xl xl:text-5xl lg:leading-normal font-extrabold flex flex-col gap-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <div className="h-[100px] sm:h-auto">
              <TypeAnimation
                sequence={[
                  "Aniket Dhiman",
                  1000,
                  "Frontend Developer",
                  1000,
                  "Backend Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            A Full-stack developer specializing in building optimized, scalable
            webites. Proficient in front-end and back-end
            technologies, with expertise in developing responsive,
            high-performance web applications that enhance user experience and
            system efficiency.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-400 to-secondary-600 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1018w4IPjTpxq3oCSbUsUu1DdeAvswnZW/view?usp=sharing"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-400 to-secondary-600 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download Resume
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=" mt-4 lg:mt-0"
        >
          <div className=" bg-transparent hidden lg:flex w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] relative">
            <Image
              src={Logo}
              alt="hero image"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 aspect-square object-cover"
              width={350}
              height={350}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
