import { Flex } from "@chakra-ui/react";
import React from "react";
// import { Flex } from "@chakra-ui/react";
import { Category, NavBar, VideoPin,Feed,Create,Search } from "../components";
import { Routes,Route } from "react-router-dom";

const Home = ({ user }) => {
  return (
    <>
      <NavBar user={user} />
      <Flex
        direction={"column"}
        justifyContent={"start"}
        alignItems={"center"}
        width={"20"}
      >
        <Category />
      </Flex>

      <Flex
        px={"4"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"full"}
      >
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="/create" element={<Create />} />
          <Route path="/videoDetail/:videoId" element={<VideoPin />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Flex>
    </>
  );
};

export default Home;
