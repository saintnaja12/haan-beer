import { Button, Checkbox, styled, Text } from "@nextui-org/react";
import { HiX } from "react-icons/hi";

const SelectorContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  paddingTop: "16px",
  paddingBottom: "16px",
});

const NamedContainer = styled("div", {
  display: "flex",
  alignItems: "center"
});

export default function ParticipantSelector({ participant, onRemove }) {
  return (
    <SelectorContainer>
      <Checkbox />

      <NamedContainer>
        <Text>{participant.name}</Text>
        <Button
          auto
          ripple={false}
          rounded
          light
          color="error"
          icon={<HiX size={24} />}
          onClick={() => onRemove(participant.id)}
        ></Button>
      </NamedContainer>
    </SelectorContainer>
  );
}
