import { hot } from "react-hot-loader/root";
import React from "react";
import { GlobalStyle, theme } from "./styles/index";
import { ThemeProvider } from "styled-components";

//custom component
import { Main } from "./main";

const App: React.FC = () => (
  <div className="App">
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  </div>
);
export default hot(App);
