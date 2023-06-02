import { FaLinkedin, FaGithub, FaFigma } from 'react-icons/fa';
import Logo from './Logo.jsx'

export default function Footer({ theme }) {
    return (

        <footer className="p-4 bg-dark-blue sm:p-6 dark:bg-gray-900 flex justify-center mt-auto">
            <nav className='flex-col md:flex-row justify-center'>
                <ul className='text-center flex'>
                    <li text-lg>
                        <Logo />
                    </li>

                    <li text-lg className='text-white'>
                        <a href="#about" className="text-accent">Home</a>
                    </li>
                    <li text-lg className='text-white'>
                        <a href="#portfolio">
                            Portfolio</a>
                    </li>
                    <li text-lg className='text-white'>
                        <a href="#contact" >
                            Contact Me</a>
                    </li>
                </ul>

                <FaFigma />

            </nav>
        </footer>
    )
}

