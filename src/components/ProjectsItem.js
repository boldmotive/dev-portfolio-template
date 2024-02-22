// ProjectItem.js
import React from 'react';
import { 
    ProjectsWindowDisplay, 
    ProjectsWindowImage, 
    ProjectsWindowHeader, 
    ProjectsWindowInfo, 
    ProjectsWindowButtons 
} from '../styles/ProjectsStyle';

const ProjectsItem = ({ item }) => (

  <ProjectsWindowDisplay>
    <ProjectsWindowImage key={item.id}> {/* Assuming each item has an id */}
      <a href={item.visit} target="_blank" rel="noreferrer">
        <img src={item.imgSrc} alt={item.title} loading="lazy" />
      </a>
    </ProjectsWindowImage>

   

    {/* Remaining project item structure */}
        {/* Header Section */}
        <ProjectsWindowHeader>
            <h1>{item.title}</h1>
            {" "}<br/>
            <strong><p>{item.desc}</p></strong>
            <br/>
            {item.info}
            <br/><br/>
        </ProjectsWindowHeader>
        
        {/* Skills Section */}
        <ProjectsWindowInfo>
            <h2 style={{ padding: '10%' }}>{item.skillsHeader}</h2>
            {item.skills}<br/><br/>
        </ProjectsWindowInfo>

        
        {/* Buttons Section */}
        <ProjectsWindowButtons>
            <a href={item.code} target="_blank" rel="noreferrer">
                <button style={{ padding: '5%' }}>{item.buttonOne}</button>
            </a>
            <a href={item.visit} target="_blank" rel="noreferrer">
                <button style={{ padding: '5%' }}>{item.buttonTwo}</button>
            </a>
        </ProjectsWindowButtons>
        

  </ProjectsWindowDisplay>
);

export default ProjectsItem;