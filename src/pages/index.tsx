import { VFC } from 'react';
import Layout from '../component/layout/layout';

const Index: VFC = () => {
  return (
    <Layout>
      <div className="flex">Hello World</div>
      <div className="min-h-screen bg-gray-50 py-6 flex flex-col justify-center relative overflow-hidden sm:py-12">
        <img
          src="/img/beams.jpg"
          alt=""
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none"
          width="1308"
        />
        <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10">
          <div className="max-w-md mx-auto">
            <img src="/img/logo.svg" className="h-6" alt="Tailwind Play" />
            <div className="divide-y divide-gray-300/50">
              <div className="py-8 text-base leading-7 space-y-6 text-gray-600">
                <p>
                  An advanced online playground for Tailwind CSS, including support for things like:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg
                      className="w-6 h-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="11" />
                      <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                    </svg>
                    <p className="ml-4">
                      Customizing your
                      <code className="text-sm font-bold text-gray-900">
                        tailwind.config.js
                      </code>{' '}
                      file
                    </p>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-6 h-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
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
                      className="w-6 h-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
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
                  Perfect for learning how the framework works, prototyping a new idea, or creating
                  a demo to share online.
                </p>
              </div>
              <div className="pt-8 text-base leading-7 font-semibold">
                <p className="text-gray-900">Want to dig deeper into Tailwind?</p>
                <p>
                  <a
                    href="https://tailwindcss.com/docs"
                    className="text-sky-500 hover:text-sky-600"
                  >
                    Read the docs &rarr;
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
