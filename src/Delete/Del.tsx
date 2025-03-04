export const Del = () => {
  return (
    <div className="flex justify-center h-screen">
      <div className="flex gap-20 w-[80vw] md:w-[60vw]">
        <div className="hidden lg:block bg-right w-[35rem] h-[35rem] bg-[url('/image.webp')] bg-cover rounded-md drop-shadow-2xl dark:drop-shadow-xl" />
        <div className="flex flex-col gap-10">
          <div>
            <p className="text-2xl">With this template, you can</p>
            <p className="text-6xl font-semibold leading-[110%]">
              Build interactive apps{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 dark:from-purple-400 dark:to-purple-500 bg-clip-text text-transparent dark:text-transparent">
                faster
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-purple-500 dark:to-purple-400 bg-clip-text text-transparent dark:text-transparent">
                easier
              </span>{" "}
              🔥
            </p>
          </div>
          <div>
            <p className="text-xl">
              Made by{" "}
              <span className="transition-all hover:tracking-wider text-blue-500 dark:text-purple-400">
                Thomas
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
