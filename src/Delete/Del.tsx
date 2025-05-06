export const Del = () => {
  return (
    <div className="h-[94vh] flex items-center">
      <div className="flex gap-20">
        <div className="hidden lg:block lg:flex-2 bg-right w-[35rem] h-[35rem] bg-[url('/image.webp')] bg-cover rounded-xl ">
          <div className="bg-linear-[0deg,transparent_40%,var(--color-primary-light)_96%] dark:bg-linear-[0deg,transparent_50%,var(--color-primary-dark)] size-full" />
        </div>
        <div className="flex flex-col gap-6 flex-3">
          <div>
            <p className="text-2xl">With this template, you can</p>
            <p className="text-6xl font-semibold leading-[110%]">
              Build interactive apps{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 dark:from-purple-300 dark:to-purple-500 bg-clip-text text-transparent dark:text-transparent">
                faster
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-purple-500 dark:to-purple-300 bg-clip-text text-transparent dark:text-transparent">
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
          <div className="mt-4 space-y-4">
            <p className="span-highlight font-medium">Some <span>perfect components</span> are already here!</p>
            <ul className="[&_a]:hover:opacity-75">
              <li>
                <a href="#form">Form</a>
              </li>
              <li>
                <a href="#modal">Customizable modal</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
