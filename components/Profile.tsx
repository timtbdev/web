import DarkMode from "../components/DarkMode";

const profile = {
  greeting: "Oh Hello there,",
  bio: "I'm Tim, an Android developer based in San Francisco.",
  handIcon: "/hand.png",
  handIconDescription: "A waving hand",
};

export default function Profile() {
  return (
    <>
      <>
        <div className="bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.03] h-[10.5rem] place-items-center bg-top dark:border-t dark:border-slate-100/5 dark:bg-[url('/background_dark.svg')] dark:bg-[center_top_-1px] dark:[mask-image:linear-gradient(0deg,transparent,black)]"></div>
        <div className="relative -top-20 place-items-center">
          <div className="">
            <span className="sr-only">{profile.handIconDescription}</span>
            <img
              src={profile.handIcon}
              className="z-0 mx-auto flex h-20 w-20"
            />
          </div>
          <h2 className="mt-4 text-center text-2xl font-extrabold leading-8 tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            {profile.greeting}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl px-4 text-center text-lg text-slate-600 dark:text-slate-400">
            {profile.bio}
          </p>
          <span className="md:hidden">
            <DarkMode />
          </span>
        </div>
      </>
    </>
  );
}
