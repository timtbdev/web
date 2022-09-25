import { FC } from "react";
import List from "../../components/Project/Feature";
import Slider from "../../components/Project/Slider";
import Header from "../../components/Project/Header";

interface Props {
  item: Item;
  index?: number;
  divider?: boolean;
}

export interface Item {
  title: string;
  releaseDate: string;
  icon: string;
  iconDescription: string;
  type: string;
  author: string;
  keywords: string[];
  features: Feature[];
  images: string[];
  text: string;
}
export interface Button {
  title: string;
  url: string;
}
export interface Feature {
  title: string;
  description: string;
}

const Body: FC<Props> = ({ item, index }) => {
  return (
    <>
      <div
        key={index}
        className="relative mt-4 sm:mx-6 md:mx-10 lg:mx-12 lg:grid lg:grid-cols-2 lg:gap-4"
      >
        <div className="overflow-hidden">
          <h2 className="sr-only" id={item.title}>
            Project Overview
          </h2>
          <Header
            title={item.title}
            releaseDate={item.releaseDate}
            icon={item.icon}
            iconDescription={item.iconDescription}
            type={item.type}
            keywords={item.keywords}
          />

          <div className="relative mx-5 mt-6 text-slate-700 dark:text-slate-300 sm:mx-0 ">
            {item.text}
            <dl className="">
              <ul className="mt-10 space-y-10">
                {item.features.map((feature) => (
                  <li key={feature.title}>
                    <List
                      title={feature.title}
                      description={feature.description}
                    />
                  </li>
                ))}
              </ul>
            </dl>
          </div>
        </div>
        <div className="relative mt-10 lg:mt-0">
          <Slider images={item.images} />
        </div>
      </div>
    </>
  );
};

export default Body;
