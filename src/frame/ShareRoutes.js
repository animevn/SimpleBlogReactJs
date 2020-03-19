import React, {createContext, useState} from "react";

export const ShareRoute = createContext(null);

export const ShareRouteProvider = ({children})=>{
  const [route, setRoute] = useState({home:"", about:"", contact:""});
  return (
    <ShareRoute.Provider value={{route, setRoute}}>
      {children}
    </ShareRoute.Provider>
  )
};