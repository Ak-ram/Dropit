import React from "react";
import logo from "../img/logo.png";
import logo_dark from "../img/logo_dark.png";
import { Link, useNavigate } from "react-router-dom";
import { Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";
const NavBar = ({ user }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.600", "gray.300");
  return (
    <Flex
      justifyContent={"space-between"}
      width={"100vw"}
      alignItems={"center"}
      p={"4"}
    ></Flex>
  );
};

export default NavBar;
