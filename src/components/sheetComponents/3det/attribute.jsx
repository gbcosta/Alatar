import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BaseInput } from "../baseComponents/baseInput/baseInput";
import { attributeComponent } from "./componenstSheet";

import { setComponent } from "../../../store/reducer/testeSlice";
import { useSelector, useDispatch } from "react-redux";
import { setSaveSheetComponents } from "../../../store/reducers/saveSheet";

export const Attribute = (props) => {
  const component = useSelector((state) => state.component.value);
  const dispatch = useDispatch();

  let component_copy = structuredClone(attributeComponent);
  component_copy.id = props.id;

  const [attribute, setAttribute] = useState(component_copy);
  dispatch(setSaveSheetComponents(attribute));

  useEffect(() => {
    if (component.id == attribute.id) {
      setAttribute(component);
      dispatch(setSaveSheetComponents(component));
    }
  }, [component]);

  return (
    <Flex
      sx={{
        height: "100%",
        width: "100%",
        flexDir: "row",
        bgColor: attribute.backgroundColor.value,
      }}
      onClick={() => {
        dispatch(setComponent(attribute));
      }}
    >
      <Box
        sx={{
          position: "absolute",
          height: attribute.banner.value.height.value,
          width: attribute.banner.value.width.value,
          bgColor: attribute.banner.value.backgroundColor.value,
          top: attribute.banner.value.positionVertical.value,
        }}
      />
      <Text
        fontSize={"4xl"}
        sx={{
          fontWeight: attribute.text.value.fontWeight.value,
          color: attribute.text.value.color.value,
          display: "inline-flex",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <Text
          sx={{
            color: attribute.firstCharacter.value.color.value,
          }}
          fontSize={attribute.firstCharacter.value.fontSize.value}
        >
          {attribute.text.value.value.value[0]}
        </Text>
        {attribute.text.value.value.value.slice(1)}
      </Text>
      <Box sx={{ flexGrow: 1 }} />
      <Flex>
        <BaseInput width="100px" />
      </Flex>
    </Flex>
  );
};
