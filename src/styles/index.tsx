import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
  box-sizing:border-box;
  font-size: 10px;
  color:black;
}

*,*:before,*:after{
box-sizing:border-box
};

body{
margin:0;
padding:0;
font-size: 1.5em;
line-height: 2;
font-family: Play, sans-serif,Nunito,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,Helvetica,Arial;
}
a{
text-decoration:none;
color:black;
}
button{
  font-size: 15px;
  font-family: Nunito,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,Helvetica,Arial;
  line-height: 2;
  border:none;
  font-weight:900;

}
`;

const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  radii: [0, 2, 4, 8, 16, 32, 9999, "100%"],
  colors: {
    black: "#000e1a",
    white: "#fff",
    yellow: "#eccf13",
    blue: "#007ce0",
    navy: "#004175",
  },
};

export { GlobalStyle, theme };
