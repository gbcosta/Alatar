import { Flex, Text, Textarea } from "@chakra-ui/react";

import { textBoxComponent } from "./componenstSheet";
import { setComponent } from "../../../store/reducer/testeSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { setSaveSheetComponents } from "../../../store/reducers/saveSheet";

export const TextBox = (props) => {
  const component = useSelector((state) => state.component.value);
  const dispatch = useDispatch();

  let component_copy = structuredClone(textBoxComponent);
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
      sx={{ width: "100%", height: "100%", flexDir: "column", p: 2 }}
      onClick={() => {
        dispatch(setComponent(attribute));
      }}
    >
      <Text
        fontSize={attribute.text.value.fontSize.value}
        sx={{
          fontWeight: attribute.text.value.fontWeight.value,
          color: attribute.text.value.color.value,
        }}
      >
        {attribute.text.value.textValue.value}
      </Text>
      <Textarea
        sx={{
          height: attribute.textBox.value.height.value,
          resize: "none",
          border: `${attribute.textBox.value.borderBoxThickness.value} solid ${attribute.textBox.value.borderBoxColor.value} !important`,
          bgColor: attribute.textBox.value.backgroundColor.value,
          fontSize: attribute.textBox.value.fontSize.value,
          fontWeight: attribute.textBox.value.fontWeight.value,
          color: attribute.textBox.value.color.value,
          _focus: { outline: "none" },
          _hover: { outline: "none" },
        }}
      ></Textarea>
    </Flex>
  );
};
