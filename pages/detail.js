import { Button, styled } from "@nextui-org/react";
import { useRouter } from "next/router";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const DetailContainer = styled("div", {});
const ButtonContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  paddingTop: "16px",
  paddingBottom: "16px",
});
export default function Detail() {
  const route = useRouter();

  return (
    <DetailContainer>
      รายละเอียด
      <ButtonContainer>
        <Button
          onClick={() => route.replace("/")}
          iconRight={<HiArrowLeft />}
          auto
        >
          กลับ
        </Button>
        <Button
          onClick={() => route.push("/detail")}
          iconRight={<HiArrowRight />}
          auto
        >
          คำนวณ
        </Button>
      </ButtonContainer>
    </DetailContainer>
  );
}
