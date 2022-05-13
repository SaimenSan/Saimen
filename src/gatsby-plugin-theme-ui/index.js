import { merge } from "theme-ui";
import originalTheme from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index";

const theme = merge(originalTheme, {
  fonts: {
    body: `"Roboto Mono", monospace`,
  },
  colors: {
    text: "#fff",
    background: "#000",
    primary: "#639",
    secondary: "#ff6347",
  },
});

export default theme;