import { NextPage } from "next";
import { styled } from "@root/stitches.config";

import { Button, Header } from "@/components";

const Container = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "$4",
  padding: "$3",
});

const Home: NextPage = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <Header />
      <Container>
        <Button onClick={handleClick}>Click me</Button>
        <Button color="primary" onClick={handleClick}>
          Click me
        </Button>
        <Button color="danger" onClick={handleClick}>
          Click me
        </Button>
      </Container>
    </>
  );
};

export default Home;
