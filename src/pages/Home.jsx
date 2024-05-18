import Title from '../components/Title/Title';
import css from '../components/Title/Title.module.css'
/* import React from 'react';
import css from './Home.module.css'; */


export default function Home() {
    return (
        <>
            <Title />
            <p className={css.subtitle}>It is your favorite personal contacts app!</p>
        </>
    );
}