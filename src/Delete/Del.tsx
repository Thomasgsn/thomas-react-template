import { FaReact } from "react-icons/fa";
import { CgDarkMode } from "react-icons/cg";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiVite } from "react-icons/si";
export const Del = () => {
  return (
    <div className="flex justify-center">
      <div className=" flex gap-20 w-[80vw] md:w-[60vw]">
        <div className="hidden lg:block bg-right w-[35rem] h-[35rem] bg-[url('/image.webp')] bg-cover rounded-md drop-shadow-2xl dark:drop-shadow-xl" />
        <div className="flex flex-col gap-10">
          <div>
            <p className="text-2xl">With this template, you can</p>
            <p className="text-6xl font-semibold leading-[110%]">
              Build interactive apps{" "}
              <span className="bg-gradient-to-r from-blue-300 to-blue-600 dark:from-purple-200  dark:to-violet-400 bg-clip-text text-transparent dark:text-transparent">
                faster
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-300 dark:from-violet-400 dark:to-purple-200 bg-clip-text text-transparent dark:text-transparent">
                easier
              </span>{" "}
              🔥
            </p>
          </div>
          <div>
            <p className="text-xl">
              Made by{" "}
              <span className="transition-all hover:tracking-wider text-blue-500 dark:text-violet-300">
                Thomas
              </span>
              .
            </p>
          </div>
          <div className="flex items-center gap-4">
            <RiTailwindCssFill
              size={32}
              className="icon hover:animate-bounce"
            />
            <CgDarkMode size={32} className="icon hover:animate-spin-slow" />
            <SiVite size={32} className="icon hover:animate-bounce" />
            <FaReact size={32} className="icon hover:animate-spin-slow" />
            <SiTypescript size={30} className="icon hover:animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
};
