import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      background: "#847996",
      text: "#000",
    }, // optional
  },
});

export const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      background: "#310A31",
      text: "#fff",
    }, // optional
  },
});

export const defaultTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      darkPurple: "#310A31",
      rhythm: "#847996",
    },
    breakpoints: {
      sm: "650px",
      md: "650px",
      lg: "650px",
      xl: "650px",
    },
  },
});
