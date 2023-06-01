"use client";

import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";

export default function BgBanner() {
  return (
    <Flex
      w={"full"}
      h={"70vh"}
      className="bgbanner"
      backgroundSize={"cover"}
      backgroundPosition={"center right"}
      justify={"end"}
    >
      <VStack
        w={"fit-content"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        // bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor
          </Text>
          <Box color={"white"} className="text-sm">Unleashing sporting potential </Box>
          <Stack direction={"row"}>
            <Button
              className="btn"
              colorScheme="red"
              px="20px"
              py="10px"
              rounded="100px"
            >
              Start Your Healthy Lifestyle
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
