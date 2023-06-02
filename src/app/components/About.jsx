"use client"


export default function About() {
    return (
        <section className="grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 sm:grid-cols-1 gap-16 pb-20" >
            <div className='bg-light-about-image md:grid-span-2 sm:grid-span-1 dark:bg-dark-about-image dark:bg-top  bg-left-center bg-center bg-no-repeat rounded-2xl'>
            </div>
            <div className="grid-span-1 sm:grid-span-2">
                <h1 id="about" className="font-serif font-semibold text-4xl">Hi, I&apos;m Phil</h1>
                <p className="text-xl pt-10">

                    I&apos;m a 32-year-old self-taught web developer and former clean-tech founder based in Victoria BC. Beginning in
                    March 2020 during the COVID lockdowns, I have been teaching myself how to code and have been at it ever since.
                </p>
                <br />
                <br />
                <p className="text-xl ">
                    With my background in graphic design and branding, I found frontend development to be closely tied to my
                    experience and interests.
                </p>
                <br />
                <br />
                <p className="text-xl pb-10">
                    As I&apos;ve grown as a developer, I have sought out wisdom and experience from programmers who have raised my
                    standards for what&apos;s expected of any web application.
                </p>



            </div >
        </section >
    );
};

