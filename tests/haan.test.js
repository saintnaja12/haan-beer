import { aggregate, haan } from "../src/libs/haan-beer";

describe("haan", () => {
  it("should return people per bottle", () => {
    const unit_price = 80;
    const participants = [
      { id: "id1", name: "of", start: 1, end: 6 },
      { id: "id2", name: "tan", start: 1, end: 6 },
      { id: "id3", name: "back", start: 2, end: 3 },
      { id: "id4", name: "touch", start: 3, end: 6 },
      { id: "id5", name: "nawin", start: 5, end: 6 },
    ];

    const people_bott = haan(participants, unit_price);

    expect(people_bott).toEqual([
      {
        bottle: 1,
        peoples: [
          {
            id: "id1",
            name: "of",
            start: 1,
            end: 6,
            bottle: 1,
            sum: 40,
          },
          {
            id: "id2",
            name: "tan",
            start: 1,
            end: 6,
            bottle: 1,
            sum: 40,
          },
        ],
      },
      {
        bottle: 2,
        peoples: [
          {
            id: "id1",
            name: "of",
            start: 1,
            end: 6,
            bottle: 2,
            sum: 26.666666666666668,
          },
          {
            id: "id2",
            name: "tan",
            start: 1,
            end: 6,
            bottle: 2,
            sum: 26.666666666666668,
          },
          {
            id: "id3",
            name: "back",
            start: 2,
            end: 3,
            bottle: 2,
            sum: 26.666666666666668,
          },
        ],
      },
      {
        bottle: 3,
        peoples: [
          {
            id: "id1",
            name: "of",
            start: 1,
            end: 6,
            bottle: 3,
            sum: 20,
          },
          {
            id: "id2",
            name: "tan",
            start: 1,
            end: 6,
            bottle: 3,
            sum: 20,
          },
          {
            id: "id3",
            name: "back",
            start: 2,
            end: 3,
            bottle: 3,
            sum: 20,
          },
          {
            id: "id4",
            name: "touch",
            start: 3,
            end: 6,
            bottle: 3,
            sum: 20,
          },
        ],
      },
      {
        bottle: 4,
        peoples: [
          {
            id: "id1",
            name: "of",
            start: 1,
            end: 6,
            bottle: 4,
            sum: 26.666666666666668,
          },
          {
            id: "id2",
            name: "tan",
            start: 1,
            end: 6,
            bottle: 4,
            sum: 26.666666666666668,
          },
          {
            id: "id4",
            name: "touch",
            start: 3,
            end: 6,
            bottle: 4,
            sum: 26.666666666666668,
          },
        ],
      },
      {
        bottle: 5,
        peoples: [
          {
            id: "id1",
            name: "of",
            start: 1,
            end: 6,
            bottle: 5,
            sum: 20,
          },
          {
            id: "id2",
            name: "tan",
            start: 1,
            end: 6,
            bottle: 5,
            sum: 20,
          },
          {
            id: "id4",
            name: "touch",
            start: 3,
            end: 6,
            bottle: 5,
            sum: 20,
          },
          {
            id: "id5",
            name: "nawin",
            start: 5,
            end: 6,
            bottle: 5,
            sum: 20,
          },
        ],
      },
      {
        bottle: 6,
        peoples: [
          {
            id: "id1",
            name: "of",
            start: 1,
            end: 6,
            bottle: 6,
            sum: 20,
          },
          {
            id: "id2",
            name: "tan",
            start: 1,
            end: 6,
            bottle: 6,
            sum: 20,
          },
          {
            id: "id4",
            name: "touch",
            start: 3,
            end: 6,
            bottle: 6,
            sum: 20,
          },
          {
            id: "id5",
            name: "nawin",
            start: 5,
            end: 6,
            bottle: 6,
            sum: 20,
          },
        ],
      },
    ]);
  });

  it("should sum price per people", () => {
    const unit_price = 80;
    const participants = [
      { id: "id1", name: "of", start: 1, end: 6 },
      { id: "id2", name: "tan", start: 1, end: 6 },
      { id: "id3", name: "back", start: 2, end: 3 },
      { id: "id4", name: "touch", start: 3, end: 6 },
      { id: "id5", name: "nawin", start: 5, end: 6 },
    ];

    const people_bott = aggregate(haan(participants, unit_price));
    expect(people_bott).toEqual([
      {
        bottle: 1,
        end: 6,
        id: "id1",
        name: "of",
        start: 1,
        sum: 153.33333333333334,
      },
      {
        bottle: 1,
        end: 6,
        id: "id2",
        name: "tan",
        start: 1,
        sum: 153.33333333333334,
      },
      {
        bottle: 2,
        end: 3,
        id: "id3",
        name: "back",
        start: 2,
        sum: 46.66666666666667,
      },
      {
        bottle: 3,
        end: 6,
        id: "id4",
        name: "touch",
        start: 3,
        sum: 86.66666666666667,
      },
      { bottle: 5, end: 6, id: "id5", name: "nawin", start: 5, sum: 40 },
    ]);
  });
});
