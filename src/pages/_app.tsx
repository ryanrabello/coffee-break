import {
  ColorModeProvider,
  defaultTheme,
  Preflight,
  th,
  ThemeProvider,
} from "@xstyled/styled-components";
import type { AppProps } from "next/app";

const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    text: th.color("black"),
    primary: th.color("light-blue-300"),
    modes: {
      dark: {
        text: "#fff",
        background: "#000",
        primary: th.color("light-blue-800"),
      },
    },
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <Preflight />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}
