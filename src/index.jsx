/** @jsx jsx */
import { jsx } from "theme-ui";
import ReactDOM from "react-dom";
import Deck from "@mdxp/core";
import * as components from "@mdxp/components";
import MDXPresentation from "./deck.mdx";
import dmsi from "./theme/dmsi";



ReactDOM.render(
  <Deck components={components} theme={dmsi}>
    <MDXPresentation />
  </Deck>,
  document.getElementById("root")
);
