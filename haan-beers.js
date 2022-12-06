const beer_price = 80;
const sum_bott = 24;
const info = [
  { name: "TIP", start: 1, end: 24, sum: 0 },
  { name: "TOUCH", start: 1, end: 24, sum: 0 },
  { name: "NAWIN", start: 4, end: 24, sum: 0 },
  { name: "TAN", start: 4, end: 24, sum: 0 },
  { name: "KNEW", start: 2, end: 17, sum: 0 },
  { name: "OHM", start: 2, end: 17, sum: 0 },
  { name: "NONG", start: 14, end: 24, sum: 0 },
];

const participants = [];
for (let i = 1; i <= sum_bott; i++) {
  const range = info.filter(({ start, end }) => {
    return start <= i && i <= end;
  });
  const share = range.length;
  const share_price = beer_price / share;

  participants.push(...range.map((r) => ({ ...r, sum: share_price, share })));
}

const results = participants.reduce((cur, nex) => {
  const current = cur.find(({ name }) => name == nex.name);
  if (current) {
    current.sum += nex.sum;
    current.share += nex.share;
  } else {
    cur.push(nex);
  }
  return cur;
}, []);

console.log(results.map((r) => ({ ...r, sum: Math.round(r.sum) })));
console.log(results.map((r) => r.sum).reduce((cur, nex) => cur + nex, 0));
