import { Checkbox, Input, styled } from "@nextui-org/react";
import useParticipant from "../../src/participant.hook";

const EditorContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  paddingTop: "8px",
  paddingBottom: "8px",
});

export default function ParticipantEditor({ participant, onChange }) {
  const { participant: _participant, setParticipant } =
    useParticipant(participant);

  const handleChangeName = (name) => {
    setParticipant({ ..._participant, name });
    onChange && onChange(_participant.id, { ..._participant, name });
  };

  return (
    <EditorContainer>
      <Checkbox size="md"></Checkbox>
      <Input
        value={_participant.name}
        size="md"
        placeholder="name"
        onChange={(e) => handleChangeName(e.target.value)}
        bordered
        style={{
          textAlign: "right",
        }}
      />
    </EditorContainer>
  );
}
