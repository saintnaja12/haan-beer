import { Button, Container, Navbar, styled, Text } from "@nextui-org/react";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
import { SunIcon } from "../assets/icons/SunIcon";
import { MoonIcon } from "../assets/icons/MoonIcon";

const NavbarContainer = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const MainContainer = styled("div", {
  maxWidth: "576px",
  margin: "auto",
});

export default function MainLayout({ children }) {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  return (
    <>
      <MainContainer>
        <Navbar maxWidth="fluid">
          <NavbarContainer>
            <Text h2>Haan Beer</Text>
            <Switch
              checked={isDark}
              shadow
              iconOn={<SunIcon />}
              iconOff={<MoonIcon />}
              onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            >
              <MoonIcon />
            </Switch>
            {/* <Button
            auto
            ripple={false}
            rounded
            light
            icon={<HiOutlineInformationCircle size={32} />}
          /> */}
          </NavbarContainer>
        </Navbar>
        <Container>{children}</Container>
      </MainContainer>
    </>
  );
}
