
import { SecondaryButton } from '../Button'
import { FaGithub } from 'react-icons/fa';

const Project = ({ project, frameCol }) => {
    return (
        <section className='grid lg:gap-16 gap-1 lg:grid-cols-2  sm:lg:grid-cols-1 grid-rows-1'>
            <div className={frameCol}>
                <h1 className="font-serif font-semibold text-4xl py-3">{project.title}</h1>
                <iframe src={project.iframeSrc} title={project.title} className='aspect-video w-full rounded 
                border-solid border-2 p-5 border-cyan dark:border-yellow-500 '></iframe>
            </div>
            <div >
                <p className='text-xl sm:pt-16 pt-4'>{project.description}</p>
                <div className="flex">
                    <a href={project.projectLink}>
                        <SecondaryButton text={`View Project`} />
                    </a>
                    <a className="self-center pl-5" href={project.githubLink}>
                        <FaGithub size={40} />
                    </a>
                </div>
                <hr className="border lg:hidden" />

            </div>
        </section>
    );
};

export default Project