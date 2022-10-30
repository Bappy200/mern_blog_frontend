import React, { createContext } from 'react'
import {userImage} from "./importImage"
export const UserContextApi = createContext({});
const user = {
    id:12,
    name: "Sajjadul islam",
    image: userImage,
    email: "sbappyi200@gmail.com",
    follow:200,
    about: "I like Problem solving reading and writting"
  }
function UserContext({children}) {
  return (
    <UserContextApi.Provider value={user}>
        {children}
    </UserContextApi.Provider>
  )
}

export default UserContext