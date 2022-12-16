import { useState } from "react";

export default function useParticipant({ id, name, start, end, isEdit }) {
  const [participant, setParticipant] = useState({ id, name, start, end, isEdit });

  return { participant, setParticipant };
}
