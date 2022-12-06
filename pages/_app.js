import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import MainLayout from "../layouts/MainLayout";
import { defaultTheme } from "../src/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <NextThemesProvider
      defaultTheme="dark"
      attribute="class"
      value={{
        light: defaultTheme,
        dark: defaultTheme,
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
