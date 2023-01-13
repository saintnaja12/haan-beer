import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import MainLayout from "../layouts/MainLayout";
import { lightTheme, darkTheme } from "../src/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
