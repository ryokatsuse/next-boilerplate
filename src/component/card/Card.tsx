import { VFC } from 'react';

export const Card: VFC = () => {
  return (
    <div className="flex overflow-hidden relative flex-col justify-center py-6 min-h-screen bg-gray-50 sm:py-12">
      <div className="[mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] absolute inset-0 bg-center"></div>
      <div className="relative px-6 pt-10 pb-8 bg-white ring-1 ring-gray-900/5 shadow-xl sm:px-10 sm:mx-auto sm:max-w-lg sm:rounded-lg">
        <div className="mx-auto max-w-md">
          <div className="divide-y divide-gray-300/50">
            <div className="py-8 space-y-6 text-base leading-7 text-gray-600">
              <p>
                An advanced online playground for Tailwind CSS, including support for things like:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg
                    className="flex-none w-6 h-6 fill-sky-100 stroke-sky-500 stroke-2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                  </svg>
                  <p className="ml-4">
                    Customizing your
                    <code className="text-sm font-bold text-gray-900">tailwind.config.js</code> file
                  </p>
                </li>
                <li className="flex items-center">
                  <svg
                    className="flex-none w-6 h-6 fill-sky-100 stroke-sky-500 stroke-2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                  </svg>
                  <p className="ml-4">
                    Extracting classNamees with
                    <code className="text-sm font-bold text-gray-900">@apply</code>
                  </p>
                </li>
                <li className="flex items-center">
                  <svg
                    className="flex-none w-6 h-6 fill-sky-100 stroke-sky-500 stroke-2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                  </svg>
                  <p className="ml-4">Code completion with instant preview</p>
                </li>
              </ul>
              <p>
                Perfect for learning how the framework works, prototyping a new idea, or creating a
                demo to share online.
              </p>
            </div>
            <div className="pt-8 text-base font-semibold leading-7">
              <p className="text-gray-900">Want to dig deeper into Tailwind?</p>
              <p>
                <a href="https://tailwindcss.com/docs" className="text-sky-500 hover:text-sky-600">
                  Read the docs &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
