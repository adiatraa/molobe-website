import React from 'react';
import { PlayIcon } from '@heroicons/react/24/outline'

export default function ButtonWatchNow() {
    return (
        <>
            <button
                type="button"
                className="inline-flex items-center h-14 gap-x-6 rounded-md bg-[#1977f1c3] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1977F1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Watch Now
                <PlayIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
                
            </button>
        </>
    )
}
