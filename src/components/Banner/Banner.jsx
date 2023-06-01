"use client";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className="text-center px-28 Banner py-28">
        <Heading m={"4"} fontSize={"3.5vw"}>
          BEGIN YOUR TRANSFORMATION TODAY
        </Heading>
        <Box
          maxW={"80%"}
          fontSize={"lg"}
          m={"auto"}
          className="banner-btn"
          color="rgba(105, 105, 105, 1)"
        >
          “Whether you are in sports or any other field, excellence is what you
          must always strive for. Heartfulness teaches you that in how they
          transformed this place which was as barren as it can get,” - Daaji
        </Box>
      </div>
    </>
  );
};

export default Banner;
