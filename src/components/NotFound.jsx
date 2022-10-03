import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import notFoundSvg from "../img/not-found.svg";

const NotFound = () => {
  return (
    <Flex
      width={"full"}
      justifyContent="center"
      alignItems={"center"}
      direction="column"
    >
      <Image src={notFoundSvg} width={600} />
      <Text fontSize={40} fontWeight="semibold" fontFamily={"cursive"}>
        Not Found
      </Text>
    </Flex>
  );
};

export default NotFound;
