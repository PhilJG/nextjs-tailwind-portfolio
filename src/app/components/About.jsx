"use client"

export default function About({ theme }) {
    return (
        <section className="grid grid-cols-2 container gap-10 ">
            <div className={`${theme === 'dark' ? 'bg-dark-about-image bg-top' : 'bg-light-about-image bg-left-center'} bg-center bg-no-repeat rounded-2xl`}>

            </div>
            <div>
                <hr className="border" />
                <h1 id="about" className="font-serif font-semibold text-600">About Me</h1>
                <p>

                    I am a 32-year-old self-taught web developer and former clean-tech founder based in Victoria BC. Beginning in
                    March 2020 during the COVID lockdowns, I have been teaching myself how to code and have been at it ever since.
                    <br />
                    <br />
                    With my background in graphic design and branding, I found frontend development to be closely tied to my
                    experience and interests.
                    <br />
                    <br />
                    As I've grown as a developer, I have sought out wisdom and experience from programmers who have raised my
                    standards for what's expected of any web application.

                </p>
                <a href="/portfolio.html">
                    <button>Go to Portfolio</button>
                </a>
                {/* <h2 className="font-serif font-semibold text-600">What I'm working with</h2>
                <div>
                    <ul className="flex">
                        <li><img src="./images/icons/logo-html.svg" alt="HTML5" /></li>
                        <li><img src="/logo-css3.svg" alt="CSS3" /></li>
                        <li><img src="./images/icons/logo-javascript.svg" alt="Javascript" /></li>
                    </ul>
                    <ul className="flex">
                        <li><img src="./images/icons/logo-npm.svg" alt="NPM" /></li>
                        <li><img src="./images/icons/logo-linux.svg" alt="Linux" /></li>
                        <li><img src="./images/icons/logo-sass.svg" alt="SASS" /></li>
                    </ul>
                    <ul className="flex">
                        <li><img src="./images/icons/logo-adobe.svg" alt="Adobe Suite" /></li>
                        <li><img src="./images/icons/logo-figma.svg" alt="Figma" /></li>
                        <li><img src="./images/icons/logo-inkscape.svg" alt="Inkscape" /></li>
                    </ul>
                </div> */}
                <hr className="border" />
            </div>
        </section>
    );
};

