// App.jsx
 import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppProvider from "./Context/Context.jsx";
import { ThemeProvider } from "./Context/Themes.jsx";
import MainPage from "./Pages/MainPage.jsx";

function App() {
  return (
    <ThemeProvider>
      <AppProvider>
 
<Router basename="/Managment-UI">
  <Routes>
    <Route path="/" element={<MainPage />} />
  </Routes>
</Router>

      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
