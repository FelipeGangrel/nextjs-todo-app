import { NextPage } from "next";
import { styled } from "@root/stitches.config";

import { Button } from "@/components";

const Container = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "$4",
});

const Home: NextPage = () => {
  return (
    <Container>
      <Button>Click me</Button>
      <Button color="gray">Click me</Button>
      <Button color="blue">Click me</Button>
      <Button color="red">Click me</Button>
      <Button color="green">Click me</Button>
    </Container>
  );
};

export default Home;
