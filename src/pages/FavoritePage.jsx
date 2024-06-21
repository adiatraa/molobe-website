import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MainLayout from '../layout/MainLayout.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';
import { Dialog, Disclosure, Transition } from '@headlessui/react';
import { XMarkIcon, ChevronDownIcon, PlusIcon } from '@heroicons/react/20/solid';
import CardMovie from '../components/CardMovie.jsx';

const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: '3d', label: '3D' },
      { value: 'fantasy', label: 'Fantasy' },
      { value: 'action', label: 'Action' },
      { value: 'history', label: 'History' },
      { value: 'adventure', label: 'Adventure' },
      { value: 'horror', label: 'Horror' },
      { value: 'animation', label: 'Animation' },
      { value: 'mystery', label: 'Mystery' },
      { value: 'biography', label: 'Biography' },
      { value: 'romance', label: 'Romance' },
      { value: 'comedy', label: 'Comedy' },
      { value: 'scifi', label: 'Sci-fi' },
      { value: 'crime', label: 'Crime' },
      { value: 'sport', label: 'Sport' },
      { value: 'anime', label: 'Anime' },
      { value: 'drama', label: 'Drama' },
      { value: 'family', label: 'Family' },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function FavoritePage() {
  const [pages, setPages] = useState([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [dataMovie, setDataMovie] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('search');

  useEffect(() => {
    setPages([{ name: 'Movies', href: '/movies', current: true }]);
  }, []);

  useEffect(() => {
    async function fetchMovie() {
      const endpoint = query
        ? `https://api.themoviedb.org/3/search/movie?api_key=c702b378e1e83ded899503993457e2b2&query=${query}`
        : 'https://api.themoviedb.org/3/discover/movie?api_key=c702b378e1e83ded899503993457e2b2';
      const response = await fetch(endpoint);
      const responseJson = await response.json();
      setDataMovie(responseJson);
      console.log(responseJson, `<< Response Movie API ${new Date()}`);
    }
    fetchMovie();
  }, [query]);

  useEffect(() => {
    const clearSearchQuery = () => {
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.delete('search');
      navigate(newUrl.pathname + newUrl.search);
    };

    clearSearchQuery();
  }, [navigate]);

  return (
    <MainLayout>
      <Breadcrumb pages={pages} />
      <div className="bg-black text-white min-h-screen">
        <Transition show={mobileFiltersOpen}>
          <Dialog className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-75" />
            </Transition.Child>
            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-gray-900 py-4 pb-6 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-white">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <form className="mt-4">
                    {filters.map((section) => (
                      <Disclosure as="div" key={section.name} className="border-t border-gray-700 pb-4 pt-4">
                        {({ open }) => (
                          <fieldset>
                            <legend className="w-full px-2">
                              <Disclosure.Button className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                                <span className="text-sm font-medium text-white">{section.name}</span>
                                <span className="ml-6 flex h-7 items-center">
                                  <ChevronDownIcon
                                    className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform')}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </legend>
                            <Disclosure.Panel className="px-4 pb-2 pt-4">
                              <div className="grid grid-cols-2 gap-4">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`${section.id}-${optionIdx}-mobile`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      className="h-4 w-4 rounded border-gray-300 text-[#1977F1] focus:ring-[#1977F1]"
                                    />
                                    <label htmlFor={`${section.id}-${optionIdx}-mobile`} className="ml-3 text-sm text-gray-500">
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </fieldset>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
        <div className="flex  items-center mx-4 mt-12 lg:ml-24 lg:gap-[245px]">
          <p className="font-semibold text-lg">Filter Option</p>
          <p className="font-semibold text-lg">Movies</p>
        </div>
        <main className="mx-4 max-w-full px-4 sm:px-6 lg:mx-[55px] lg:max-w-[2000px] lg:px-8">
          <div className="pt-7 flex flex-col lg:flex-row lg:gap-x-8 xl:gap-x-8 min-h-screen">
            <aside className="lg:w-1/6 bg-[#151515] p-4 lg:p-[40px] rounded-lg h-full">
              <h2 className="sr-only">Filters</h2>
              <button
                type="button"
                className="inline-flex items-center lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="text-sm font-medium text-gray-400">Filters</span>
                <PlusIcon className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              </button>
              <div className="hidden lg:block">
                <form className="space-y-10 divide-y divide-gray-700">
                  {filters.map((section, sectionIdx) => (
                    <div key={section.name} className={sectionIdx === 0 ? null : 'pt-10'}>
                      <fieldset>
                        <legend className="block text-sm font-medium text-white">{"Filter by " + section.name}</legend>
                        <div className="grid grid-cols-2 gap-4 pt-6">
                          {section.options.map((option, optionIdx) => (
                            <div key={option.value} className="flex items-center">
                              <input
                                id={`${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                defaultValue={option.value}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-[#1977F1] focus:ring-[#1977F1]"
                              />
                              <label htmlFor={`${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-400">
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </fieldset>
                    </div>
                  ))}
                </form>
              </div>
            </aside>
            <div className="mt-6 lg:w-5/6 lg:mt-0 xl:w-5/6 space-y-6">
              {dataMovie?.results?.length > 0 ? (
                dataMovie.results.map((movie, index) => (
                  <CardMovie key={index} movie={movie} />
                ))
              ) : (
                <p className="text-white">No Movies Found</p>
              )}
            </div>
          </div>
        </main>
      </div>
    </MainLayout>
  );
}

export default FavoritePage;
