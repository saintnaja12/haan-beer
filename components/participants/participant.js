import { Input, styled } from "@nextui-org/react";

const ParticipantContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});

export default function Participant() {
  return (
    <ParticipantContainer>
      <div></div>
      <div>800</div>
    </ParticipantContainer>
  );
}
