import { isBetween } from "./utils";

export const bottle_amount = (participants) =>
  Math.max(...participants.map(({ end }) => end));

export const haan = (participants, unit_price) => {
  const people_per_bottle = [];

  for (let bottle = 1; bottle <= bottle_amount(participants); bottle++) {
    const peoples = participants.filter(({ start, end }) =>
      isBetween(bottle, { start, end })
    );

    const people_amount = peoples.length;
    const share_price = unit_price / people_amount;

    const _bottle = {
      bottle,
      peoples: peoples.map((people) => ({
        ...people,
        bottle,
        sum: share_price,
      })),
    };
    people_per_bottle.push(_bottle);
  }

  return people_per_bottle;
};

export const aggregate = (people_per_bottle) =>
  people_per_bottle
    .flatMap((bottle) => bottle.peoples)
    .reduce((cur, nex) => {
      const current = cur.find(({ id }) => id == nex.id);
      if (current) current.sum += nex.sum;
      else cur.push(nex);

      return cur;
    }, []);
