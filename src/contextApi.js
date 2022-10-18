import React, { createContext, useContext } from 'react'
const userContext = createContext();
const user = {
    id:12,
    name: "Sajjadul islam",
    image: 
  }
function contextApi({children}) {
  return (
    <userContext.Provider value={user}>
        {children}
    </userContext.Provider>
  )
}

export default contextApi