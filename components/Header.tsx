import { Popover, Transition } from "@headlessui/react";
import DarkMode from "../components/DarkMode";
import { useRouter } from "next/router";
import { useRef } from "react";
import {
  Bars3BottomLeftIcon as MenuIcon,
  XMarkIcon as XIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";
import Link from "next/link";

const profile = {
  name: "Tim",
  job: "Android Developer",
  imageUrl: "/profile.jpg",
  imageDescription: "Profile picture",
};

export default function Navigation() {
  const { pathname } = useRouter();
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;

  return (
    <Popover
      as="nav"
      className="bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] supports-backdrop-blur:bg-white/60 sticky top-0 
      z-40 w-full 
      flex-none border-b border-slate-900/10 bg-opacity-40 
      opacity-100
      backdrop-blur-xl 
      backdrop-filter 
      transition-colors duration-500 dark:border-b dark:border-slate-100/5"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex justify-between py-2 md:justify-start">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <div className="inline-flex items-center px-4">
                  <span className="sr-only">{profile.imageDescription}</span>
                  <img
                    src={profile.imageUrl}
                    className="h-12 w-12 flex-shrink-0 rounded-full"
                  />
                  <div className="ml-2">
                    <div className="font-semibold leading-6 text-slate-700 dark:text-slate-200">
                      {profile.name}
                    </div>
                    <div className="font-base text-sm leading-6 text-slate-500 dark:text-slate-400">
                      {profile.job}
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden items-center justify-end md:inline-flex md:flex-1 lg:w-0">
                <DarkMode />
              </div>
            </div>
          </div>
        </>
      )}
    </Popover>
  );
}
