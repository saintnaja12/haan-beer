import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      backgroundColor: "#E1E2EF",
      text: "#02020A",
    }, // optional
  },
});

export const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      backgroundColor: "#02020A",
      text: "#E1E2EF",
    }, // optional
  },
});

export const defaultTheme = createTheme({
  type: "dark",
  colors: {
    darkPurple: "#310A31",
    rhythm: "#847996",
  },
  theme: {
    breakpoints: {
      sm: "650px",
      md: "650px",
      lg: "650px",
      xl: "650px",
    },
  },
});
