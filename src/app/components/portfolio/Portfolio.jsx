import React from 'react';
import PortfolioSection from '../PortfolioSection';

export default function Portfolio() {
    return (
        <section className="grid grid-cols-1 " id="portfolio">

            <PortfolioSection textCol={`span-1`} frameCol={`span-2`} />

        </section>
    )
};