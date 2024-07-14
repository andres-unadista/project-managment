import React, { useEffect } from 'react'

export const Logout = (props) => {

  useEffect(() => {
        //console.log(props);
    props.statusSession(false);
    localStorage.removeItem("statusSession");
    localStorage.removeItem("jwt");
    localStorage.removeItem("id_project");
    localStorage.removeItem("project");
    
    
    window.location.href = '/login';

  }, [props]);
       
  return (
    <div>Logout</div>
  )
}
