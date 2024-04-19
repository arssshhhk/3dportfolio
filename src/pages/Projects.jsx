import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Se{""}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          rvices
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
      
        <li><b>Full Stack Web Development:</b> Specialized in the MERN stack (MongoDB, Express.js, React.js, Node.js), proficient in both frontend and backend development.</li>
        <li><b>Frontend Development:</b> Created interactive user interfaces using HTML, CSS, and JavaScript, ensuring responsive and user-friendly designs.</li>
        <li><b>Backend Development:</b> Developed efficient backend systems, including database management, server-side logic, and API integration.</li>
        <li><b>Technical Problem Solving:</b> Identified and resolved technical issues, debugged code, and optimized performance to ensure smooth functioning of web applications.</li>
        <li><b>Collaboration:</b> Worked closely with cross-functional teams, including designers, developers, and project managers, to meet project requirements and deliver high-quality solutions.</li>
        <li><b>Continuous Learning:</b> Stayed updated with the latest web development technologies and frameworks, actively engaged in self-study and participated in online courses to enhance skills and knowledge.</li>

      </p>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;