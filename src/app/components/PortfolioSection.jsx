import projectsData from '../api/projects.json'
import Project from './portfolio/Project'

const PortfolioSection = ({ frameCol, textCol }) => {
    return (
        <section className='grid py-16 gap-16'>
            {projectsData.projects.map((project, index) => (
                <div key={index}>
                    <Project
                        textCol={textCol}
                        frameCol={frameCol}
                        project={project}
                    />

                </div>
            ))}
        </section>
    );
};

export default PortfolioSection;
