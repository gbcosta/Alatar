import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { BaseInput } from "../baseComponents/baseInput/baseInput";
import { BaseTextInput } from "../baseComponents/baseTextInput";

export const Personal = (props: { text: string }) => {
  return (
    <Flex
      sx={{
        height: "100%",
        width: "100%",
        flexDir: "row",
        bgColor: "white",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          height: "60%",
          width: "100%",
          bgColor: "black.300",
          top: 7,
          bottom: 0,
        }}
      />
      <Text
        fontSize={"4xl"}
        sx={{
          fontWeight: "bold",
          color: "white.400",
          display: "inline-flex",
          alignItems: "end",
          zIndex: 1,
        }}
      >
        {props.text}
      </Text>
      <Box sx={{ flexGrow: 1 }} />

      <BaseTextInput width={250} />
      <BaseInput width="60px" />
      <Text
        fontSize={"4xl"}
        sx={{
          fontWeight: "bold",
          color: "white.400",
          display: "inline-flex",
          alignItems: "end",
          zIndex: 1,
        }}
      >
        Pontos
      </Text>
    </Flex>
  );
};
