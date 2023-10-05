"use client";
import Image from "next/image";
import far from "@/public/png4.png";
import { TypeAnimation } from "react-type-animation";
const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I am
            </span>{" "}
            <br />
            <TypeAnimation
              sequence={[
                "Fardeen Ahamed",
                1000,
                "Front-End Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Hardworking and passionate job seeker with strong organizational
            skills eager to secure entry-level Frontend developer position.
            Ready to help team achieve company goals. Keenly focused on
            following good principles of developing an optimized and efficient
            UI application. Highly skilled in React Js, Next Js, JavaScript,
            CSS, and HTML.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download Resume
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center">
          <div className="rounded-full bg-[#313131] w-[250px] h-[250px] lg:h-[300px] lg:w-[300px] relative overflow-hidden mt-5">
            <Image
              src={far}
              alt="fardeen"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-40 left-1/2"
              quality={100}
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
