import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BaseInput } from "../baseComponents/baseInput/baseInput";
import { ObjectSheet, objectAttribute } from "./componenstSheet";

export const Attribute = (props: { text: string; setObject: any }) => {
  const [attribute, setAttribute] = useState<ObjectSheet>(objectAttribute);

  attribute.components.set("Background Color", {
    name: "Background Color",
    type: "hex",
    value: "white",
  });

  return (
    <Flex
      sx={{
        height: "100%",
        width: "100%",
        flexDir: "row",
        bgColor: attribute.components.get("Background Color")?.value,
      }}
      onClick={() => {
        props.setObject(attribute);
      }}
    >
      <Box
        sx={{
          position: "absolute",
          height: attribute.components.get("Banner")?.value.get("Height")
            ?.value,
          width: attribute.components.get("Banner")?.value.get("Width")?.value,
          bgColor: attribute.components
            .get("Banner")
            ?.value.get("Background Color")?.value,
          top: attribute.components
            .get("Banner")
            ?.value.get("Position Vertical")?.value,
        }}
      />
      <Text
        fontSize={"4xl"}
        sx={{
          fontWeight: attribute.components.get("Text")?.value.get("Font Weight")
            ?.value,
          color: attribute.components.get("Text")?.value.get("Color")?.value,
          display: "inline-flex",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <Text
          sx={{
            color: attribute.components
              .get("Text")
              ?.value.get("First Character")
              ?.value.get("Color")?.value,
          }}
          fontSize={
            attribute.components
              .get("Text")
              ?.value.get("First Character")
              ?.value.get("Font Size")?.value
          }
        >
          {props.text[0]}
        </Text>
        {props.text.slice(1)}
      </Text>
      <Box sx={{ flexGrow: 1 }} />
      <Flex>
        <BaseInput width="100px" />
      </Flex>
    </Flex>
  );
};
