import { Button, Card, styled, Text } from "@nextui-org/react";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import { HiUserAdd } from "react-icons/hi";
import useParticipants from "../../src/participants.hook";
import ParticipantEditor from "./participant-editor";
import ParticipantSelector from "./participant-selector";

const CardFooterContainer = styled(Card.Footer, {
  display: "flex",
  justifyContent: "center",
});

export default function Participants() {
  const { participants, addParticipant, updateParticipant } = useParticipants();

  const handleAddPerson = () => {
    addParticipant({
      name: "",
      isEdit: true,
    });
  };

  const handleUpdatePerson = (id, p) => {
    updateParticipant(id, p);
  };

  return (
    <Card>
      <Card.Header>
        <Text>มนุษย์</Text>
      </Card.Header>
      <Card.Body>
        {participants.map((participant) =>
          participant.isEdit ? (
            <ParticipantEditor
              key={participant.id}
              participant={participant}
              onChange={handleUpdatePerson}
            />
          ) : (
            <ParticipantSelector
              key={participant.id}
              participant={participant}
            />
          )
        )}
      </Card.Body>
      <CardFooterContainer>
        <Button icon={<HiUserAdd size={26} />} onClick={handleAddPerson} flat>
          เพิ่มมนุษย์
        </Button>
      </CardFooterContainer>
    </Card>
  );
}
