import { merge } from "theme-ui";
import base from "./base";

const blue = "#0af";

const dmsi = {
  fonts: {
    body: '"Montserrat", system-ui, sans-serif',
  },
  colors: {
    text: "#4a5658",
    background: "#fff",
    primary: blue,
    black: "#000",
  },
  fontWeights: {
    heading: 800,
    bold: 600,
  },
  googleFont:
    "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
  text: {
    heading: {},
  },
  styles: {
    pre: {
      color: "primary",
      bg: "black",
    },
    code: {
      color: "primary",
    },
    root: {
      fontFamily: "Montserrat, system-ui, sans-serif",
    },
    h1: {
      fontFamily: "heading",
      fontSize: 32,
      fontWeight: 900,
      lineHeight: "heading",
    },
    h2: {
      variant: "text.heading",
      fontSize: 26,
    },
    h3: {
      variant: "text.heading",
      fontSize: 40,
    },
    h4: {
      variant: "text.heading",
      fontSize: 25,
    },
    h5: {
      variant: "text.heading",
      fontSize: 18,
    },
    h6: {
      variant: "text.heading",
      fontSize: 18,
    },
  },
};

export default merge(base, dmsi);
