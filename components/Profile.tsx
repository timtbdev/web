import DarkMode from "../components/DarkMode";
import Image from "next/future/image";

export default function Profile() {
  return (
    <>
      <>
        <div className="bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.03] h-[10.5rem] place-items-center bg-top dark:border-t dark:border-slate-100/5 dark:bg-[url('/background_dark.svg')] dark:bg-[center_top_-1px] dark:[mask-image:linear-gradient(0deg,transparent,black)]"></div>
        <div className="relative -top-20 place-items-center">
          <div className="">
            <span className="sr-only">a waving hand</span>
            <Image
              className=" z-0 mx-auto flex"
              src="/hand.png"
              alt="a waving hand"
              width={80}
              height={80}
            />
          </div>
          <h2 className="mt-4 text-center text-2xl font-extrabold leading-8 tracking-tight text-slate-900 dark:text-slate-300 sm:text-3xl">
            Oh Hello there
          </h2>
          <h2 className="mx-auto mt-4 max-w-3xl px-4 text-center text-2xl font-bold text-slate-600 dark:text-slate-500">
            I am{" "}
            <span className="text-slate-900 underline decoration-sky-900 decoration-solid underline-offset-8 dark:text-slate-400">
              Tim
            </span>
            , an{" "}
            <span className="text-slate-900 underline decoration-green-900 decoration-solid underline-offset-8 dark:text-slate-400">
              Android
            </span>{" "}
            developer based in{" "}
            <span className="text-slate-900 underline decoration-red-900 decoration-solid underline-offset-8 dark:text-slate-400">
              San-Francisco
            </span>
            .
          </h2>
          <span className="md:hidden">
            <DarkMode />
          </span>
        </div>
      </>
    </>
  );
}
