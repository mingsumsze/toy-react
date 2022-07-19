import React, { useState } from "react";
import Clock from "./clock";
import Counter from "./counter";
import Form from "./form";
import WarningBanner from "./warningBanner";
import NumberList from "./numberList";
import TemperatureConverter from "./temperatureConverter";
import Wrapper from "./wrapper";
import "normalize.css/normalize.css";
import Button from "./button";
import GlobalStyle from "./styles/global.styled";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/theme";
import SuspenseWrapper from "./suspenseWrapper";
import ThemeContext from "./themeContext";
import ThemeSelector from "./themeSelector";


function App() {
  const [theme, setTheme] = useState('light');

  return (
    // Wrapper component that provides a theme to all React components (underneath uses the context API)
    <ThemeProvider theme={Theme}>
    {/* Use a Provider to pass the current theme to the tree below. */}
    {/* Any component can read it, no matter how deep it is. */}
      <ThemeContext.Provider value={{theme, setTheme}}>
        <GlobalStyle/>
        <Wrapper>
          <Clock/>
          <Counter/>
          <ThemeSelector/>
          <Form/>
          <WarningBanner warn={true}/>
          <NumberList numbers={[1, 2, 3, 4, 5]}/>
          <TemperatureConverter/>
          {/* <SuspenseWrapper/> */}
        </Wrapper>
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}


export default App;


// Route-based code splitting
// import React, { Suspense, lazy } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// 
// const Home = lazy(() => import('./routes/Home'));
// const About = lazy(() => import('./routes/About'));
// 
// const App = () => (
//   <Router>
//     <Suspense fallback={<div>Loading...</div>}>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </Suspense>
//   </Router>
// );