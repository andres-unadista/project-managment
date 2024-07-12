import React from 'react'
//import { Context } from '../context/Context'
import image from '../assets/project_managment.jpg'
import image2 from '../assets/project_finance.jpg'
export const Home = () => {

  //const contextShare = useContext(Context);

  return (
    <div>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
          <img src={image} className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">Total Proyectos:</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
          <img src={image2} className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">Proyectos Finalizados: </h5>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}