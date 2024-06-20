import React from 'react';
import MainLayout from '../../layout/MainLayout.jsx';
import styles from '../Home/Home.module.css';
import ButtonWatchNow from '../../components/ButtonWatchNow.jsx';
import ButtonHWatchlist from '../../components/ButtonHWatchlist.jsx';
import ButtonWatchlist from '../../components/ButtonWatchlist.jsx';
import SliderHero from '../../components/SliderHero.jsx';
import { StarIcon } from '@heroicons/react/20/solid';
import subscribeImage from '../../assets/subscribe.png';

const subCategories = [
    { name: 'Action', href: '#' },
    { name: 'Comedy', href: '#' },
    { name: 'Drama', href: '#' },
    { name: 'Horror', href: '#' },
    { name: 'Romance', href: '#' },
    { name: 'Kids', href: '#' },
];

const reviews = [
    {
        id: 1,
        rating: 5,
        viewer: 457000,
    },
    {
        id: 2,
        rating: 5,
        viewer: 500000,
    },
];

const topMovies = [
    {
        number: 1,
        title: 'Start Up',
        year: 2020,
        country: 'KOREA',
        duration: '1hr 25min',
        reviewId: 1,
    },
    {
        number: 2,
        title: 'Welcome to Waikiki',
        year: 2018,
        country: 'KOREA',
        duration: '1hr 10min',
        reviewId: 2,
    },
    {
        number: 3,
        title: 'Queen of Tears',
        year: 2024,
        country: 'KOREA',
        duration: '1hr 10min',
        reviewId: 2,
    },
    {
        number: 4,
        title: 'Save Me',
        year: 2017,
        country: 'KOREA',
        duration: '1hr 10min',
        reviewId: 2,
    },
    {
        number: 5,
        title: 'Reply 1988',
        year: 2017,
        country: 'KOREA',
        duration: '1hr 10min',
        reviewId: 2,
    },
];

const navigation = [
    {
        name: 'Facebook',
        href: '#',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: 'Instagram',
        href: '#',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: 'X',
        href: '#',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
            </svg>
        ),
    },
    {
        name: 'GitHub',
        href: '#',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: 'YouTube',
        href: '#',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

function HomePage() {
    return (
        <MainLayout>
            <div className="lg:block hidden">
                <div className={styles.heroSection}>
                    <div className={styles.leftSide}>
                        <div className="flex gap-7 mb-6 ml-24">
                            <h3 className="text-[#1977F1] font-semibold">DRAMA</h3>
                            <p>2020</p>
                            <p>KOREA</p>
                            <p>1hr 25min</p>
                        </div>
                        <div>
                            <h1 className="text-[81px] mb-10 ml-24">Start Up</h1>
                            <p className="text-base ml-24 mb-10">
                                The series revolves around a woman who has dreams of becoming an entrepreneur like Steve Jobs, and her love triangle between a man who is secretly her first love and another man who is pretending to be her first love.
                            </p>
                        </div>
                        <div className="flex ml-24 gap-6">
                            <ButtonWatchNow />
                            <ButtonHWatchlist />
                        </div>
                    </div>
                    <div className={styles.rightSide}>
                        <SliderHero />
                    </div>
                </div>
                <div className="topMovies mt-24 ml-24">
                    <div className="flex flex-row min-[2000px]:space-x-[900px] lg:space-x-[550px]">
                        <div>
                            <h2 className="text-3xl">Top 5 Movies</h2>
                        </div>
                        <div className="flex gap-16">
                            <p className="font-medium text-white">All Genre</p>
                            <ul role="list" className="font-medium text-gray-900 flex gap-16 mr-10">
                                {subCategories.map((category) => (
                                    <li key={category.name}>
                                        <a href={category.href} className="text-white/50">
                                            {category.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="TmoviesContent gap-14 flex">
                        <div className={styles.poster}></div>
                        <div className="mt-14 flex min-[2000px]:gap-5 gap-3 flex-col">
                            {topMovies.map((movie, index) => {
                                const review = reviews.find((r) => r.id === movie.reviewId);
                                return (
                                    <div key={index} className={styles.card}>
                                        <div className={styles.cardContent}>
                                            <div className="cardTitles flex">
                                                <p className="mr-10">#{movie.number}</p>
                                                <p>{movie.title}</p>
                                            </div>
                                            <div className={styles.filmStatus}>
                                                <p>{movie.year}</p>
                                                <p>{movie.country}</p>
                                                <p>{movie.duration}</p>
                                            </div>
                                            <div className={styles.filmRate}>
                                                <div className="lg:flex lg:gap-x-8 ml-16">
                                                    <div className="flex items-center gap-4">
                                                        <div className="flex items-center">
                                                            {[0, 1, 2, 3, 4].map((rating) => (
                                                                <StarIcon
                                                                    key={rating}
                                                                    className={classNames(
                                                                        review.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                                                        'h-5 w-5 flex-shrink-0'
                                                                    )}
                                                                    aria-hidden="true"
                                                                />
                                                            ))}
                                                        </div>
                                                        <p className="ml-2 text-sm text-white">
                                                            {review.viewer / 1000 + "k viewers"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.cardWatchlist}>
                                            <ButtonWatchlist />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="subscribe mt-24">
                    <div className="bg-white">
                        <div
                            className="relative isolate flex flex-col gap-10 overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:px-24 xl:flex-row xl:items-center xl:py-32"
                            style={{ backgroundImage: `url(${subscribeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        >
                            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-red sm:text-4xl xl:max-w-none xl:flex-auto">
                                Subscribe our newsletter for newest movies updates
                            </h2>
                            <form className="w-full max-w-md">
                                <div className="flex gap-x-4">
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="min-w-0 flex-auto placeholder:text-gray-300 rounded-md border-0 bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                                        placeholder="Enter your email"
                                    />
                                    <button
                                        type="submit"
                                        className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                                <p className="mt-4 text-sm leading-6 text-gray-300">
                                    We care about your data. Read our{' '}
                                    <a href="#" className="font-semibold text-white hover:text-white">
                                        privacy&nbsp;policy
                                    </a>
                                    .
                                </p>
                            </form>

                        </div>
                    </div>
                </div>
                <footer className="bg-black">
                    <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                        <div className="flex justify-center space-x-6 md:order-2">
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                        <div className="mt-8 md:order-1 md:mt-0">
                            <p className="text-center text-xs leading-5 text-gray-500">
                                &copy; 2020 Cive, Inc. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>

            {/* Mobile View */}
            <div className="lg:hidden block">
                <div className="flex flex-col items-center px-4">
                    <div className="mt-20">
                        <h3 className="text-[#1977F1] font-semibold">DRAMA</h3>
                        <div className="flex gap-4 mt-2">
                            <p>2020</p>
                            <p>KOREA</p>
                            <p>1hr 25min</p>
                        </div>
                        <h1 className="text-4xl mt-6">Start Up</h1>
                        <p className="text-base mt-4 text-center">
                            The series revolves around a woman who has dreams of becoming an entrepreneur like Steve Jobs, and her love triangle between a man who is secretly her first love and another man who is pretending to be her first love.
                        </p>
                        <div className="flex gap-4 mt-6 justify-center">
                            <ButtonWatchNow />
                            <ButtonHWatchlist />
                        </div>
                    </div>
                    <div className="mt-8 w-full">
                        <SliderHero />
                    </div>
                </div>

                <div className="mt-16 px-4">
                    <h2 className="text-2xl text-center">Top 5 Movies</h2>
                    <div className="flex gap-4 mt-4 justify-center overflow-x-auto">
                        {subCategories.map((category) => (
                            <a key={category.name} href={category.href} className="text-white/50">
                                {category.name}
                            </a>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-col gap-6">
                        {topMovies.map((movie, index) => {
                            const review = reviews.find((r) => r.id === movie.reviewId);
                            return (
                                <div key={index} className="flex flex-col bg-gray-800 p-4 rounded-lg">
                                    <div className="flex gap-4 items-center">
                                        <p>#{movie.number}</p>
                                        <p>{movie.title}</p>
                                    </div>
                                    <div className="flex justify-between mt-2">
                                        <p>{movie.year}</p>
                                        <p>{movie.country}</p>
                                        <p>{movie.duration}</p>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        {[0, 1, 2, 3, 4].map((rating) => (
                                            <StarIcon
                                                key={rating}
                                                className={classNames(
                                                    review.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                                    'h-5 w-5 flex-shrink-0'
                                                )}
                                                aria-hidden="true"
                                            />
                                        ))}
                                        <p className="ml-2 text-sm text-white">
                                            {review.viewer / 1000 + "k viewers"}
                                        </p>
                                    </div>
                                    <div className="mt-2">
                                        <ButtonWatchlist />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-16 px-4">
                    <div
                        className="relative flex flex-col gap-10 overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl text-center"
                        style={{ backgroundImage: `url(${subscribeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <h2 className="text-2xl font-bold tracking-tight text-red sm:text-3xl">
                            Subscribe our newsletter for newest movies updates
                        </h2>
                        <form className="w-full max-w-md mx-auto">
                            <div className="flex flex-col gap-y-4">
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="min-w-0 flex-auto placeholder:text-gray-300 rounded-md border-0 bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                                    placeholder="Enter your email"
                                />
                                <button
                                    type="submit"
                                    className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Subscribe
                                </button>
                            </div>
                            <p className="mt-4 text-sm leading-6 text-gray-300">
                                We care about your data. Read our{' '}
                                <a href="#" className="font-semibold text-white hover:text-white">
                                    privacy&nbsp;policy
                                </a>
                                .
                            </p>
                        </form>
                    </div>
                </div>

                <footer className="bg-black mt-16">
                    <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col items-center">
                        <div className="flex justify-center space-x-6">
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                        <div className="mt-8">
                            <p className="text-center text-xs leading-5 text-gray-500">
                                &copy; 2020 Cive, Inc. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </MainLayout>
    );
}

export default HomePage;
