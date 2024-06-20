import React, { useState, useEffect } from 'react';
import MainLayout from '../../layout/MainLayout.jsx';
import styles from '../Movies/Movies.module.css';
import Breadcrumb from '../../components/Breadcrumb.jsx';
import { EyeIcon, StarIcon } from '@heroicons/react/20/solid';
import ButtonWatchNow from '../../components/ButtonWatchNow.jsx';
import ButtonWatchlist from '../../components/ButtonWatchlist.jsx';
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Transition,
    TransitionChild,
} from '@headlessui/react';
import { XMarkIcon, ChevronDownIcon, PlusIcon } from '@heroicons/react/20/solid';

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
                {/* Mobile filter dialog */}
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

                                    {/* Filters */}
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
                    <div className="pt-7 flex flex-col lg:flex-row lg:gap-x-8 xl:gap-x-8">
                        <aside className="lg:w-1/6 bg-[#151515] p-[40px] rounded-lg">
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

                        <div className="mt-6 lg:w-3/4 lg:mt-0 xl:w-3/4">
                            {/* Product Content */}
                            <div className="bg-[#202020] p-6 rounded-lg">
                                <div className="card flex">
                                    <div className="h-[210px] w-[150px] bg-white rounded-2xl"></div>
                                    <div className="card-content ml-8 flex-1">
                                        <p className="font-bold text-xl">Terrible Madness</p>
                                        <div className={styles.filmStatus}>
                                            <p>2018</p>
                                            <p>ENGLAND</p>
                                            <p>1hr 2min</p>
                                            <EyeIcon className="h-6 w-6 ml-4" />
                                            <p>473k viewers</p>
                                        </div>
                                        <div className="filmDescription w-full lg:w-[85%] mt-4">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                                        </div>
                                        <div className={styles.filmGenre}>
                                            <p>DRAMA</p>
                                        </div>
                                    </div>
                                    <div className="cardButton flex justify-center items-center gap-6 mr-10">
                                        <ButtonWatchlist />
                                        <ButtonWatchNow />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </MainLayout>
    );
}

export default MoviesPage;
