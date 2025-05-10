// App.jsx
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppProvider from "../src/Context/Context.jsx"; // Asegúrate de importar correctamente
import { ThemeProvider } from "../src/Context/Themes.jsx";
import MainPage from "../src/Pages/MainPage.jsx"; // Correcta ruta al componente


function App() {
  return (
    <ThemeProvider>
    <AppProvider>
<BrowserRouter  basename="/Managment-UI" >
<Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
</BrowserRouter>
      
    </AppProvider>
    </ThemeProvider>
  );
}

export default App;
