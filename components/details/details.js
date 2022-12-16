import { Card, Input, styled } from "@nextui-org/react";
import useParticipants from "../../src/participants.hook";
import DetailInput from "./detail-input";

const DetailsContainer = styled("div", {});

export default function Details() {
  const { participants, updateParticipant } = useParticipants();

  const handleUpdatePerson = (id, p) => {
    updateParticipant(id, p);
  };

  return (
    <DetailsContainer>
      <Card>
        <Card.Body>
          {participants.map((participant) => (
            <DetailInput
              participant={participant}
              key={participant.id}
              onChange={handleUpdatePerson}
            />
          ))}
        </Card.Body>
      </Card>
    </DetailsContainer>
  );
}
