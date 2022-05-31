import React from 'react';

import { Brand, Cta, Navbar } from './components';
import { Blog, Features, Footer, Header, Possibility, WhatPortfolio } from './containers';

import './App.css';

const App = () => (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <Brand />
        <WhatPortfolio />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
    </div>
);

export default App;