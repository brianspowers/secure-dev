import { merge } from "theme-ui";
import base from './base';

const blue = "#0af";

const futura = {
  fonts: {
    body: '"Avenir Next", system-ui, sans-serif',
  },
  colors: {
    text: "#fff",
    background: "#111",
    primary: blue,
    black: "#000",
  },
  fontWeights: {
    heading: 600,
    bold: 600,
  },
  text: {
    heading: {
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
  },
  styles: {
    pre: {
      color: "primary",
      bg: "black",
    },
    code: {
      color: "primary",
    },
  },
};

const futuraTheme = merge(base, futura);

export default futuraTheme;