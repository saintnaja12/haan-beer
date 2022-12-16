import { aggregate, haan } from "./libs/haan-beer";
import useParticipants from "./participants.hook";

export default function useHaan(unit_price) {
  const { participants } = useParticipants();
  const results = aggregate(haan(participants, unit_price));
  return results.map((r) => ({ ...r, sum: Math.round(r.sum) }));
}
