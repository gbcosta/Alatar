import { Box, Flex, Text } from "@chakra-ui/react";
import { BaseInput } from "../baseComponents/baseInput/baseInput";
import { BaseTextInput } from "../baseComponents/baseTextInput";

import { personalComponent } from "./componenstSheet";
import { setComponent } from "../../../store/reducer/testeSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { setSaveSheetComponents } from "../../../store/reducers/saveSheet";

export const Personal = (props) => {
  const component = useSelector((state) => state.component.value);
  const dispatch = useDispatch();

  let component_copy = structuredClone(personalComponent);
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
        bgColor: "white",
        alignItems: "center",
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
          top: attribute.banner.value.positionVertical,
          bottom: 0,
        }}
      />
      <Text
        fontSize={"4xl"}
        sx={{
          fontWeight: attribute.FirstText.value.fontWeight.value,
          color: attribute.FirstText.value.color.value,
          fontSize: attribute.FirstText.value.fontSize.value,
          display: "inline-flex",
          alignItems: "end",
          zIndex: 1,
        }}
      >
        {attribute.FirstText.value.value.value}
      </Text>
      <Box sx={{ flexGrow: 1 }} />

      <BaseTextInput width={250} />
      <BaseInput width="60px" />
      <Text
        fontSize={"4xl"}
        sx={{
          display: "inline-flex",
          fontWeight: attribute.secondText.value.fontWeight.value,
          color: attribute.secondText.value.color.value,
          fontSize: attribute.secondText.value.fontSize.value,
          alignItems: "end",
          zIndex: 1,
        }}
      >
        {attribute.secondText.value.value.value}
      </Text>
    </Flex>
  );
};
