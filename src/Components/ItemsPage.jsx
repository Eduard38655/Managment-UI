import React, { useContext, useState } from "react";
import Styles from "../Components_Styles/ItemsPage.module.css";
import { MiContexto } from "../Context/Context.jsx";

function ItemsPage() {
  const { Data, SetData, Reset, SetReset, test, Settest } = useContext(MiContexto);
  const [ItemID, SetItemID] = useState("");

  function valor(Producto) {
    const Nuevo_Valor = Data.filter((item) => item.name !== Producto);
    SetData(Nuevo_Valor);
    SetReset(Nuevo_Valor);
  }

  function start(index, valor, valorname) {
    const n1 = test.filter((item) => item.name === valorname);
    const n2 = test.filter((item) => item.name !== valorname);

    

    // Alternar el valor de isActive
    const updatedItem = { ...n1[0], isActive: !n1[0].isActive };

    // Combinar los elementos actualizados
    const updatedList = [updatedItem, ...n2];

    // Actualizar estados
    Settest(updatedList);
    SetData(updatedList);
    SetReset(updatedList);

   
  }

  return (
    <div className={Styles.Div_Items}>
        <div className={Styles.DivContainer}>  
      {Data.map((item, index) => (
        <div key={index} className={Styles.Div_Details}>
          <div className={Styles.Div_IMG}>
            <img src={item.logo} alt="" />
            <p>
              <span>{item.name}</span>
              <br />
              {item.description}
            </p>
            
          </div>
          <div className={Styles.Div_Options}>
            <button onClick={() => valor(item.name)}>Remove</button>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id={`input${index}`}
                onChange={() => start(index, item.isActive, item.name)}
                checked={item.isActive}
              />
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
  
}

export default ItemsPage;
