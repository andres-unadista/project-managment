import React, { useContext } from 'react'
import ActivitiesList from './ActivitiesList'
//import { Context } from '../context/Context';

export const Activities = () => {

  //const {user} = useContext(Context);

  return (
    <div>
      <h1>Actividades</h1>
     < ActivitiesList /> {/* Lista las Actividades*/}
    </div>
  )
}
