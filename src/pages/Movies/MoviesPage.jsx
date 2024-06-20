import React, { useState, useEffect } from 'react';
import MainLayout from '../../layout/MainLayout.jsx';
import styles from '../Movies/Movies.module.css';
import Breadcrumb from '../../components/Breadcrumb.jsx';
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Transition, TransitionChild } from '@headlessui/react';
import { XMarkIcon, ChevronDownIcon, PlusIcon } from '@heroicons/react/20/solid';
import CardMovie from '../../components/CardMovie.jsx';

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

const movies = [
    {
        title: "Terrible Madness",
        year: "2018",
        country: "ENGLAND",
        duration: "1hr 2min",
        viewers: "473k",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        genre: "DRAMA",
        imageUrl: "https://via.placeholder.com/150x210"
    },
    {
        title: "Mystery Night",
        year: "2020",
        country: "USA",
        duration: "1hr 45min",
        viewers: "1M",
        description: "An intriguing mystery unfolds as a detective seeks to uncover the truth behind a series of strange events.",
        genre: "MYSTERY",
        imageUrl: "https://via.placeholder.com/150x210"
    },
    {
        title: "Fantasy Adventure",
        year: "2019",
        country: "FRANCE",
        duration: "2hr 10min",
        viewers: "850k",
        description: "Join the hero on an epic quest through magical lands and discover the power of friendship and bravery.",
        genre: "FANTASY",
        imageUrl: "https://via.placeholder.com/150x210"
    },
    {
        title: "Sci-fi Dreams",
        year: "2021",
        country: "JAPAN",
        duration: "1hr 30min",
        viewers: "620k",
        description: "A futuristic tale of advanced technology, space exploration, and the search for new worlds.",
        genre: "SCI-FI",
        imageUrl: "https://via.placeholder.com/150x210"
    },
    {
        title: "Comedy Night",
        year: "2017",
        country: "CANADA",
        duration: "1hr 20min",
        viewers: "500k",
        description: "A hilarious comedy that will have you laughing from start to finish with its witty humor and quirky characters.",
        genre: "COMEDY",
        imageUrl: "https://via.placeholder.com/150x210"
    }
];

function MoviesPage() {
    const [pages, setPages] = useState([]);
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    useEffect(() => {
        setPages([
            { name: 'Movies', href: '/movies', current: true },
        ]);
    }, []);

    return (
        <MainLayout>
            <Breadcrumb pages={pages} />
            <div className="bg-black text-white min-h-screen">
                <Transition show={mobileFiltersOpen}>
                    <Dialog className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                        <TransitionChild
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-75" />
                        </TransitionChild>
                        <div className="fixed inset-0 z-40 flex">
                            <TransitionChild
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-gray-900 py-4 pb-6 shadow-xl">
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
                                                            <DisclosureButton className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                                                                <span className="text-sm font-medium text-white">{section.name}</span>
                                                                <span className="ml-6 flex h-7 items-center">
                                                                    <ChevronDownIcon
                                                                        className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform')}
                                                                        aria-hidden="true"
                                                                    />
                                                                </span>
                                                            </DisclosureButton>
                                                        </legend>
                                                        <DisclosurePanel className="px-4 pb-2 pt-4">
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
                                                                        <label
                                                                            htmlFor={`${section.id}-${optionIdx}-mobile`}
                                                                            className="ml-3 text-sm text-gray-500"
                                                                        >
                                                                            {option.label}
                                                                        </label>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </DisclosurePanel>
                                                    </fieldset>
                                                )}
                                            </Disclosure>
                                        ))}
                                    </form>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </Dialog>
                </Transition>
                <div className="flex gap-[245px]">
                    <p className="ml-24 mt-12 font-semibold text-lg">Filter Option</p>
                    <p className="mt-12 font-semibold text-lg">Movies</p>
                </div>
                <main className="ml-[55px] max-w-[2000px] px-4 sm:px-6 lg:max-w-[2000px] lg:px-8">
                    <div className="pt-7 flex flex-col lg:flex-row lg:gap-x-8 xl:gap-x-8 min-h-screen"> {/* Add min-h-screen to the flex container */}
                        <aside className="lg:w-1/6 bg-[#151515] p-[40px] rounded-lg h-full"> {/* Ensure full height with h-full */}
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
                        <div className="mt-6 lg:w-3/4 lg:mt-0 xl:w-3/4 space-y-6"> {/* Added space-y-6 to add gap between cards */}
                            {movies.map((movie, index) => (
                                <CardMovie key={index} movie={movie} />
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </MainLayout>
    );
}

export default MoviesPage;
