import React, { useState, useEffect } from 'react';
import MainLayout from '../../layout/MainLayout.jsx'
import styles from '../Movies/Movies.module.css';
import Breadcrumb from '../../components/Breadcrumb.jsx';

function MoviesPage() {
    const [pages, setPages] = useState([]);

    useEffect(() => {
        // Anda dapat mengganti ini sesuai dengan logika halaman Anda
        setPages([
            { name: 'Movies', href: '/movies', current: true },
        ]);
    }, []);

    return (
        <MainLayout>
            <Breadcrumb pages={pages} />
        </MainLayout>
    )
}

export default MoviesPage