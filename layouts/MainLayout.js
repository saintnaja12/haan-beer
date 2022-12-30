import { Button, Container, Navbar, styled } from "@nextui-org/react";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
import useDarkMode from "use-dark-mode";

const NavbarContainer = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "end",
});
export default function MainLayout({ children }) {
  const darkMode = useDarkMode(false);
  const { type } = useTheme();
  return (
    <>
      <Navbar maxWidth="fluid">
        <NavbarContainer>
          The current theme is: {type}
          <Switch checked={darkMode.value} onChange={() => darkMode.toggle()} />
          <Button
            auto
            ripple={false}
            rounded
            light
            icon={<HiOutlineInformationCircle size={32} />}
          />
        </NavbarContainer>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
}
