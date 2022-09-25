import React, { useState } from "react";
import { FC } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import cx from "classnames";
import {
  ArrowLongLeftIcon as LeftArrowIcon,
  ArrowLongRightIcon as RightArrowIcon,
} from "@heroicons/react/24/outline";

interface Props {
  images: string[];
}

const Slider: FC<Props> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        {images.map((image) => (
          <div
            key={image}
            className="keen-slider__slide relative mx-auto w-9/12"
          >
            <span className="sr-only">Screenshot</span>
            <Image src={image} width="640px" height="840px" alt="Screenshot" />
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <>
          <nav className="flex items-center justify-between border-t border-slate-200 px-4 dark:border-slate-700 sm:px-0">
            <div className="mt-6 flex w-0 flex-1">
              <button
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
                className="group inline-flex h-9 items-center whitespace-nowrap rounded-full bg-slate-200 px-3 text-sm font-semibold text-slate-600 hover:bg-slate-300 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500"
              >
                <svg
                  className="mr-3 -rotate-180 overflow-visible text-slate-400 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
                Prev<span className="sr-only">Previous screenshot</span>
              </button>
            </div>
            <div className="-mt-px flex">
              <ol className="mt-6 flex items-center space-x-5">
                {[
                  ...Array(
                    instanceRef.current.track.details.slides.length
                  ).keys(),
                ].map((idx) => {
                  return (
                    <li key={idx}>
                      <button
                        key={idx}
                        onClick={() => {
                          instanceRef.current?.moveToIdx(idx);
                        }}
                        className="relative flex items-center justify-center"
                      >
                        <span
                          className="absolute flex h-5 w-5 p-px"
                          aria-hidden="true"
                        >
                          <span
                            className={cx("h-full w-full rounded-full", {
                              "bg-slate-300 transition duration-500 ease-in-out dark:bg-slate-600":
                                currentSlide === idx,
                              "bg-slate-100 dark:bg-transparent":
                                currentSlide != idx,
                            })}
                          ></span>
                        </span>
                        <span
                          className={cx(
                            "relative block h-2.5 w-2.5 rounded-full",
                            {
                              "bg-slate-400 transition duration-500 ease-in-out dark:bg-slate-400":
                                currentSlide === idx,
                              "bg-slate-300 dark:bg-slate-600":
                                currentSlide != idx,
                            }
                          )}
                          aria-hidden="true"
                        ></span>

                        <span className="sr-only">Screenshot {idx + 1}</span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
            <div className="mt-6 flex w-0 flex-1 justify-end">
              <button
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
                className="group inline-flex h-9 items-center whitespace-nowrap rounded-full bg-slate-200 px-3 text-sm font-semibold text-slate-600 hover:bg-slate-300 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500"
              >
                Next<span className="sr-only">Next screenshot</span>
                <svg
                  className="ml-3 overflow-visible text-slate-400 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </button>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default Slider;
