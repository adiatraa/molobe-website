import React from 'react'
import MainLayout from '../../layout/MainLayout.jsx'
import styles from '../Home/Home.module.css'
import ButtonWatchNow from '../../components/ButtonWatchNow.jsx'

function HomePage() {
    return (
        <MainLayout>
            <div className="hidden lg lg:block">
                <div className={styles.heroSection}>
                    <div className={styles.leftSide}>
                        <div className="flex gap-7 mb-6 ml-24">
                            <h3 className="text-[#1977F1] font-semibold">ACTION</h3>
                            <p>2017</p>
                            <p>ENGLAND</p>
                            <p>1hr 2min</p>
                        </div>
                        <div>
                            <h1 className="text-[81px] mb-10 ml-24">THUNDER STUNT</h1>
                            <p className="text-base ml-24 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                        </div>
                        <div className="flex ml-24">
                            <ButtonWatchNow></ButtonWatchNow>
                        </div>
                    </div>
                    <div className="right-side">
                        {/* Slider Sweeper JS */}
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default HomePage