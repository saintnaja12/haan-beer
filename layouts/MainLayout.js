import { Button, Container, Link, Navbar, styled } from "@nextui-org/react";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { VscGithub } from "react-icons/vsc";

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
          <Link
            target="_blank"
            href="https://github.com/akaporn-katip/haan-beer"
          >
            <Button
              auto
              ripple={false}
              rounded
              light
              icon={<VscGithub size={28} />}
            />
          </Link>
        </NavbarContainer>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
}
