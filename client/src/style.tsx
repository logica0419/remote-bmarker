import { css, Global } from "@emotion/react";
import { VFC } from "react";

const GlobalStyle: VFC = () => {
  return (
    <Global
      styles={css`
        body {
          background-color: #ffffff;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue";
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}
    />
  );
};

export default GlobalStyle;
