import { FC } from "react";
import dateFormat from "date-fns/format";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  releaseDate: string;
  icon: string;
  iconDescription: string;
  type: string;
  keywords: string[];
}

export interface Button {
  title: string;
  url: string;
}

const Header: FC<Props> = ({
  title,
  releaseDate,
  icon,
  iconDescription,
  type,
  keywords,
}) => {
  return (
    <>
      <div className="border-b border-slate-200 pb-6 dark:border-slate-700">
        <div className="sm:mt-10 sm:flex sm:items-center sm:justify-between">
          <div className="sm:flex sm:space-x-5">
            <a>
              <div className="mx-auto h-20 w-20 flex-shrink-0 rounded-full">
                <span className="sr-only">{iconDescription}</span>
                <Image
                  className=" mt-6 rounded-full"
                  src={icon}
                  layout="responsive"
                  width={80}
                  height={80}
                  alt={iconDescription}
                />
              </div>
            </a>

            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
              <p className="inline-flex text-sm font-medium text-slate-500 dark:text-slate-400">
                {type}
              </p>
              <a>
                <p className="text-xl font-bold text-slate-800 hover:underline dark:text-white sm:text-2xl">
                  {title}
                </p>
              </a>

              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {dateFormat(new Date(releaseDate), "MMMM yyyy")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 divide-x divide-slate-200 dark:divide-slate-700">
        {keywords.map((keyword) => (
          <div
            key={keyword}
            className="px-6 py-5 text-center text-xs font-medium"
          >
            <span
              key={keyword}
              className="inline-flex items-center px-3 py-0.5 text-sm text-slate-500 dark:text-slate-400"
            >
              {keyword}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Header;
