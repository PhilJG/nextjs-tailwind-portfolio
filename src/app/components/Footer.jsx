import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Logo from './Logo.jsx'

export default function Footer() {
    return (

        <footer className="p-4 bg-dark-blue sm:p-6 dark:bg-gray-800 flex justify-center">
            <nav className='flex-col justify-center'>
                <ul className='text-center'>
                    <li>
                        {/* <Logo /> */}
                    </li>

                    <li className='text-white'>
                        <a href="./index.html" className="text-accent">Home</a>
                    </li>
                    <li className='text-white'>
                        <a href="./portfolio.html">
                            Portfolio</a>
                    </li>
                    <li className='text-white'>
                        <a href="./contact.html" >
                            Contact Me</a>
                    </li>
                </ul>
                <ul className='flex'>
                    <li>
                        <a className='text-white' href="https://github.com/PhilJG">
                            <FaGithub size={40} />
                        </a>
                    </li>
                    <li>
                        <a className='text-white' href="https://www.linkedin.com/in/phil-j-gray/">
                            <FaLinkedin size={40} />
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

