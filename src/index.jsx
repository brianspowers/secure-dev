/** @jsx jsx */
import { jsx } from "theme-ui";
import ReactDOM from "react-dom";
import Deck from "@mdxp/core";
import * as components from "@mdxp/components";
import MDXPresentation from "./deck.mdx";
import futura from "./theme/futura";



ReactDOM.render(
  <Deck components={components} theme={futura}>
    <MDXPresentation />
  </Deck>,
  document.getElementById("root")
);
