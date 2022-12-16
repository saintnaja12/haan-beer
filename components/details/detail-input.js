import { Input, styled, Text } from "@nextui-org/react";
import useParticipant from "../../src/participant.hook";

const DetailContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default function DetailInput({ participant, onChange }) {
  const { participant: _participant, setParticipant } =
    useParticipant(participant);

  const handleChangeStart = (value) => {
    setParticipant({ ...participant, start: value });
    onChange && onChange(_participant.id, { ..._participant, start: value });
  };

  const handleChangeEnd = (value) => {
    setParticipant({ ...participant, end: value });
    onChange && onChange(_participant.id, { ..._participant, end: value });
  };

  return (
    <DetailContainer>
      <Text style={{ flexGrow: 1, flexBasis: 0 }}>{participant.name}</Text>
      <Input
        size="md"
        width="100px"
        bordered
        type="number"
        value={_participant.start}
        onChange={(e) => handleChangeStart(e.target.value)}
      ></Input>
      <Input
        size="md"
        width="100px"
        bordered
        type="number"
        value={_participant.end}
        onChange={(e) => handleChangeEnd(e.target.value)}
      ></Input>
    </DetailContainer>
  );
}
