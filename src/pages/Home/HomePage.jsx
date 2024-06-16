import React from 'react'
import MainLayout from '../../layout/MainLayout.jsx'
import styles from '../Home/Home.module.css'
import ButtonWatchNow from '../../components/ButtonWatchNow.jsx'
import ButtonHWatchlist from '../../components/ButtonHWatchlist.jsx'

function HomePage() {
    return (
        <MainLayout>
            <div className="hidden lg lg:block">
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
                            <p className="text-base ml-24 mb-10">The series revolves around a woman who has dreams of becoming an entrepreneur like Steve Jobs, and her love triangle between a man who is secretly her first love and another man who is pretending to be her first love. </p>
                        </div>
                        <div className="flex ml-24 gap-6">
                            <ButtonWatchNow></ButtonWatchNow>
                            <ButtonHWatchlist></ButtonHWatchlist>
                        </div>
                    </div>
                    <div className={styles.rightSide}>
                        {/* Slider Sweeper JS */}
                        
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default HomePage