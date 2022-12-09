import { Button, Container, Navbar, styled } from "@nextui-org/react";
import { HiOutlineInformationCircle } from "react-icons/hi";

const NavbarContainer = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "end",
});
export default function MainLayout({ children }) {
  return (
    <>
      <Navbar maxWidth="fluid">
        <NavbarContainer>
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
