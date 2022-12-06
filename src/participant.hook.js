import { useState } from "react";

export default function useParticipant({ id, name, isEdit }) {
  const [participant, setParticipant] = useState({ id, name, isEdit });

  return { participant, setParticipant };
}
