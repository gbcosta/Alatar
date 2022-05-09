import { Flex, Text, Textarea } from "@chakra-ui/react";

export const TextBox = () => {
  return (
    <Flex sx={{ width: "100%", height: "100%", flexDir: "column", p: 2 }}>
      <Text fontSize={"4xl"} sx={{ fontWeight: "bold" }}>
        Tipos de Dano
      </Text>
      <Textarea
        sx={{
          height: "100% !important",
          mb: 2,
          resize: "none",
          border: "2px solid black !important",
          bgColor: "#dce9faf8",
          _focus: { outline: "none" },
          _hover: { outline: "none" },
        }}
      ></Textarea>
    </Flex>
  );
};
