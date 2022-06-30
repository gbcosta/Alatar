import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Input } from "@chakra-ui/react";

import { setComponent } from "../../store/reducer/testeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const FieldHex = (props) => {
  const component = useSelector((state) => state.component.value);
  const dispatch = useDispatch();
  const [value, setValue] = useState(props.child.value);

  useEffect(() => {
    setValue(props.child.value);
  });

  const handleChange = (e) => {
    setValue(e.target.value);

    let component_copy = structuredClone(component);
    const path = props.path.split(" ");
    let elemento;

    for (let i = 0; i < path.length; i++) {
      if (i == 0) elemento = component_copy[path[i]];
      else elemento = elemento.value[path[i]];
    }
    elemento.value = e.target.value;
    dispatch(setComponent(component_copy));
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: 2,
        color: "#ddd",
      }}
    >
      <Text>{props.child.name}</Text>
      <Input
        value={value}
        onChange={handleChange}
        sx={{ borderColor: "#999", _focus: { borderColor: "white" } }}
      ></Input>
    </Box>
  );
};

export { FieldHex };
