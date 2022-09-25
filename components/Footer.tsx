const socials = [
  { title: "Email", url: "mailto:timtb@hey.com" },
  { title: "Github", url: "https://github.com/timtbdev" },
];
const copyright = "Last updated September 26, 2022";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-50 dark:bg-slate-900">
        <div className="mx-auto max-w-full overflow-hidden border-t border-gray-200 py-12 px-4 dark:border-slate-200/5 sm:px-6 lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            {socials.map(({ title, url }) => (
              <div key={title} className="px-5 py-2">
                <a
                  href={url}
                  target="_blank"
                  className="text-base text-slate-700 underline transition duration-500 ease-in-out hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-400"
                >
                  {title}
                </a>
              </div>
            ))}
          </nav>
          <p className="mt-8 text-center text-base font-light text-slate-500 dark:text-slate-400">
            {copyright}
          </p>
        </div>
      </footer>
    </>
  );
}
