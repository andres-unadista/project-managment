import React, {useEffect, useState} from 'react'
//import { Context } from '../context/Context'
import image from '../assets/project_managment.jpg'
import image2 from '../assets/project_finance.jpg'
import { project } from '../services/projectService';
export const Home = () => {

  //const contextShare = useContext(Context);
  const [ totalProjects, setTotalProjects ] = useState(0);
  const [ totalProjectsFinish, setTotalProjectsFinish ] = useState(0);
  useEffect(() => {

    const fetchProjects = async () => {
        
      const projectsData = await project(); // Llama al servicio para obtener los proyectos
      //console.log(projectsData.projects.length);
      setTotalProjects(projectsData.projects.length);
      setTotalProjectsFinish(projectsData.projects.filter((project)=>project.state==3).length);
    };

  fetchProjects();

  }, []);
  
  useEffect(() => {
  	var element = document.querySelector("footer");
	element.classList.add("footer-status");

   
    return () => {
      var element = document.querySelector("footer");
      element.classList.remove("footer-status");
    };
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
          <img src={image} className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">Total Proyectos: {totalProjects}</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
          <img src={image2} className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">Proyectos Finalizados: {totalProjectsFinish}</h5>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}