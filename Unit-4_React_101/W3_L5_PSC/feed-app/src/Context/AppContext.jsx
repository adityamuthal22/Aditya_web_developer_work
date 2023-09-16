import React from 'react'

export const AppContext = React.createContext();

 export default function AppContextProvider ({Children}){
 
    return  <AppContext.Provider value={[]}>
        {Children}

    </AppContext.Provider>
  
}

