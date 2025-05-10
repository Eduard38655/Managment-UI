 
import { createContext, useState } from 'react';

import Items_Valores from "../../BanckedControllers/Items_Details.js";

export const MiContexto = createContext();

const AppProvider = ({ children }) => {
  const [Data, SetData]=useState(Items_Valores)
  const [Reset, SetReset]=useState(Items_Valores)
  const [test,Settest]=useState(Items_Valores)

  return (
    <MiContexto.Provider value={{ 
      Data, SetData,
      Reset, SetReset,
      test,Settest
      }}>
      {children}
    </MiContexto.Provider>
  );
};

export default AppProvider;
