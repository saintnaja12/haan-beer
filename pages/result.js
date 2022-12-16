import { Button, Card, Input, styled, Table } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import useHaan from "../src/haan.hook";

const ResultContainer = styled("div", {});
const ButtonContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  paddingTop: "16px",
  paddingBottom: "16px",
});
export default function Result() {
  const route = useRouter();
  const [unitPrice, setUnitPrice] = useState(0);
  const results = useHaan(unitPrice);

  const summaryPrice = results.map((r) => r.sum).reduce((a, b) => a + b, 0);
  return (
    <ResultContainer>
      <Card>
        <Card.Body>
          ราคาต่อขวด
          <Input
            value={unitPrice}
            onChange={(e) => setUnitPrice(e.target.value)}
            bordered
            type="number"
          ></Input>
        </Card.Body>
      </Card>
      <Table>
        <Table.Header>
          <Table.Column>Name</Table.Column>
          <Table.Column>Paid Price</Table.Column>
        </Table.Header>
        <Table.Body>
          {results.map((result) => (
            <Table.Row key={result.id}>
              <Table.Cell>{result.name}</Table.Cell>
              <Table.Cell>{result.sum}</Table.Cell>
            </Table.Row>
          ))}

          <Table.Row>
            <Table.Cell>ราคารวม</Table.Cell>
            <Table.Cell>{summaryPrice}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <ButtonContainer>
        <Button
          onClick={() => route.replace("/detail")}
          iconRight={<HiArrowLeft />}
          auto
        >
          กลับ
        </Button>
      </ButtonContainer>
    </ResultContainer>
  );
}
