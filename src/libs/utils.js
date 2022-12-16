export const isBetween = (num, { start, end }) => {
  return Number(start) <= num && num <= Number(end);
};
