import React, { useState, useEffect } from 'react';

// import data
// projects images
import Project1 from '../../assets/projects/p1.webp';
import Project2 from '../../assets/projects/p2.webp';
import Project3 from '../../assets/projects/p3.webp';
import Project4 from '../../assets/projects/p4.webp';
import Project5 from '../../assets/projects/p5.webp';
import Project6 from '../../assets/projects/p6.webp';

// projects
const projectsData = [
    {
      id: '1',
      image: Project1,
      name: 'project name 1',
      category: 'JavaScript',
    },
    {
      id: '2',
      image: Project2,
      name: 'project name 2',
      category: 'Reactjs',
    },
    {
      id: '3',
      image: Project3,
      name: 'project name 3',
      category: 'JavaScript',
    },
    {
      id: '4',
      image: Project4,
      name: 'project name 4',
      category: 'APIs',
    },
    {
      id: '5',
      image: Project5,
      name: 'project name 5',
      category: 'Reactjs',
    },
    {
      id: '6',
      image: Project6,
      name: 'project name 6',
      category: 'Reactjs',
    },
  ];
  
  // projects
  const projectsNav = [
    {
      name: 'all',
    },
    {
      name: 'JavaScript',
    },
    {
      name: 'Reactjs',
    },
    {
      name: 'APIs',
    },
  ];


// import components
import Project from './Project.jsx';

const Projects = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    // get projects based on item
    if (item.name === 'all') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      {/* projects nav */}
      <nav className='mb-12 max-w-xl mx-auto'>
        <ul className='flex flex-col md:flex-row justify-evenly items-center text-white'>
          {projectsNav.map((item, index) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index ? 'active' : ''
                } cursor-pointer capitalize m-4`}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>
      {/* projects */}
      <section className='grid gap-y-12 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-x-6'>
        {projects.map((item) => {
          return <Project item={item} key={item.id} />;
        })}
      </section>
    </div>
  );
};

export default Projects;
