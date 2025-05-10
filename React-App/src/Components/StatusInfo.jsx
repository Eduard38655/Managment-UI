import React, { useContext } from "react";
import Styles from "../Components_Styles/Status.module.css";
import { MiContexto } from "../Context/Context.jsx";

function Status_Button() {
  const { Data, SetData } = useContext(MiContexto);
  const { Reset, SetReset } = useContext(MiContexto);
  const {test,Settest}=useContext(MiContexto)

  function ShowAll() {
    SetData(Reset);
  }

  function Inactive_Items() {
    SetReset(test)
    const Inactive = Reset.filter((item) => item.isActive === false);
    SetData(Inactive);
  }

  
  
  function Activate_Items() {
    SetReset(test)
    const Active = Reset.filter((item) => item.isActive === true);
    SetData(Active);
  }

  return (
    <>
    
      <div className={Styles.Div_status}>
        <h2>Extensions List</h2>
        <div>
          <button onClick={ShowAll}>All</button>
          <button onClick={Activate_Items}>Active</button>
          <button onClick={Inactive_Items}>Inactive</button>
        </div>
      </div>
    </>
  );
}

export default Status_Button;
