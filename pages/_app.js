import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import MainLayout from "../layouts/MainLayout";
import { lightTheme, darkTheme } from "../src/theme";
import "../styles/globals.css";
import useDarkMode from "use-dark-mode";

function MyApp({ Component, pageProps }) {
  const darkMode = useDarkMode(false);

  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      theme={darkMode.value ? darkTheme : lightTheme}
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
