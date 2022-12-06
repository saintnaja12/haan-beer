import { Checkbox, styled, Text } from "@nextui-org/react";

const SelectorContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  paddingTop: "16px",
  paddingBottom: "16px",
});

export default function ParticipantSelector({ participant }) {
  return (
    <SelectorContainer>
      <Checkbox />
      <Text>{participant.name}</Text>
    </SelectorContainer>
  );
}
