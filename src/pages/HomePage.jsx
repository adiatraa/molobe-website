import React from 'react'
import MainLayout from '../layout/MainLayout.jsx'

function HomePage() {
    return (
        <MainLayout>
            <div>
                <div className="top-section">
                    <div className="left-section">
                        <div className="film-short">
                            <h3>ACTION</h3>
                            <p>2017</p>
                            <p>ENGLAND</p>
                            <p>1hr 2min</p>
                        </div>
                        <div className="film-info">
                            <h1>Thunder Stuuff</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                        </div>
                        <button>Watch Now</button>
                        <button>Add to Watchlist</button>
                    </div>
                    <div className="right-section">
                        {/* Slider Sweeper JS */}
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default HomePage