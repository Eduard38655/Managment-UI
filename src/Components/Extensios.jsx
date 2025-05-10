import { useContext } from "react";
import Logo from "../assets/logo.svg";
import Styles from "../Components_Styles/Extencions.module.css";
import { ThemeContext } from '../Context/Themes.jsx';

function Extension_Color(params) {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return(
    <>
    <div className={Styles.Div_Extencios}>
        <img src={Logo} alt="" />
        
        <button onClick={toggleTheme}>
         
        {theme === 'light' ?
         <i className="fa-solid fa-moon"></i>
          
        : <i className="fa-solid fa-sun"></i>
          
          }
        </button>
        
    </div>
    </>
)


}

export default Extension_Color