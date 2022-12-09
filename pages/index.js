import { Button, styled } from "@nextui-org/react";
import Participants from "../components/participants/participants";
import { HiArrowRight } from "react-icons/hi";
import { useRouter } from "next/router";
const PersonContainer = styled("div", {});

const NextButtonContainer = styled("div", {
  display: "flex",
  justifyContent: "end",
  paddingTop: "16px",
  paddingBottom: "16px",
});

export default function People(props) {
  const route = useRouter();
  return (
    <PersonContainer>
      Add Participants
      <Participants />
      <NextButtonContainer>
        <Button
          onClick={() => route.push("/detail")}
          iconRight={<HiArrowRight />}
          auto
        >
          ต่อไป
        </Button>
      </NextButtonContainer>
    </PersonContainer>
  );
}
