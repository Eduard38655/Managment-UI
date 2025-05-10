// App.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppProvider from "./Context/Context.jsx";
import { ThemeProvider } from "./Context/Themes.jsx";
import MainPage from "./Pages/MainPage.jsx";

function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <BrowserRouter basename="/Managment-UI">
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
