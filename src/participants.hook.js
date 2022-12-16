import { customAlphabet } from "nanoid";
import { useEffect, useState } from "react";
const nanoid = customAlphabet("1234567890");

export default function useParticipants() {
  const [participants, setParticipants] = useState([]);

  const handleSetParticipants = (v) => {
    window.localStorage.setItem(
      "participants",
      JSON.stringify(participants.map((p) => ({ ...p, isEdit: false })))
    );
    setParticipants(v);
  };

  const addParticipant = (participant) => {
    const someEmpty = participants.some(({ name }) => name == "");
    if (someEmpty) return;
    handleSetParticipants([
      ...participants,
      {
        id: nanoid(8),
        isEdit: true,
        ...participant,
      },
    ]);
  };

  const removeParticipant = (id) => {
    const participantIndex = participants.findIndex((p) => id === p.id);
    participants.splice(participantIndex, 1);
    handleSetParticipants([...participants])
  };

  useEffect(() => {
    const participantString = localStorage.getItem("participants");
    const participantJSON = participantString
      ? JSON.parse(participantString)
      : [];

    setParticipants(participantJSON);

    if (participantJSON.length === 0) {
      addParticipant({ name: "" });
    }
  }, []);

  const updateParticipant = (id, state) => {
    const participant = participants.find((p) => id === p.id);
    Object.assign(participant, state);
    handleSetParticipants([...participants]);
  };

  return {
    participants,
    setParticipants,
    addParticipant,
    removeParticipant,
    updateParticipant,
  };
}
