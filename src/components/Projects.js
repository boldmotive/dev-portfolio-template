import React from 'react';
import { 
  ProjectsMainContainer,
  Footer
} from '../styles/ProjectsStyle';
import CodeRain from './CodeRain';
import ProjectItem from './ProjectsItem';
import { ProjectsData } from './ProjectsData';

const Projects = () => {
  return (
    <>
    
    <CodeRain />
    <ProjectsMainContainer>
      {ProjectsData.projects.map((item) => <ProjectItem key={item.id} item={item} />)}
      <Footer />
    </ProjectsMainContainer>
    </>
  )
};

export default Projects;
