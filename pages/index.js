import { Button, styled } from "@nextui-org/react";
import Participants from "../components/participants/participants";
import { HiArrowRight } from "react-icons/hi";
const PersonContainer = styled("div", {});

const NextButtonContainer = styled("div", {
  display: "flex",
  justifyContent: "end",
  paddingTop: "16px",
  paddingBottom: "16px",
});

export default function People(props) {
  return (
    <PersonContainer>
      Add Participants
      <Participants />
      <NextButtonContainer>
        <Button iconRight={<HiArrowRight />}>ต่อไป</Button>
      </NextButtonContainer>
    </PersonContainer>
  );
}
