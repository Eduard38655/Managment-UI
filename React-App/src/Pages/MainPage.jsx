import Extension_Color from '../Components/Extensios.jsx';
import ItemsPage from "../Components/ItemsPage.jsx";
import Status_Button from "../Components/StatusInfo.jsx";
import Styles from "../Components_Styles/HomePage.module.css";
function MainPage() {
 
  return (
  <div className={Styles.HomePage}>
    <Extension_Color />
    <Status_Button  />
    
    <ItemsPage />
  </div>
  );
}

export default MainPage;
