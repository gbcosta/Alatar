import { Box, Flex, propNames, Text } from "@chakra-ui/react";
import {
  ComponentSheet,
  ObjectSheet,
} from "@components/sheetComponents/3det/componenstSheet";
import { MyFirstGrid } from "@components/test";
import { useEffect, useState } from "react";
import { Input } from "@chakra-ui/react";

class SheetComponentsElements {
  hex(component: ComponentSheet) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: 2,
          color: "white",
        }}
      >
        <Text>{component.name}</Text>
        <Input value={component.value}></Input>
      </Box>
    );
  }

  componentElement(component: ComponentSheet) {
    return this.hex(component);
  }
}

const sheetObjReader = (obj: Map<string, ComponentSheet>, key: string) => {
  const sheetComponentsElements = new SheetComponentsElements();
  const elements = [];

  for (let [key, value] of obj) {
    const component = obj.get(key);

    if (component?.type != "obj" && component?.type != undefined) {
      elements.push(sheetComponentsElements.componentElement(component));
    } else {
      elements.push(sheetObjReader(component?.value, key));
    }
  }
  return (
    <Box>
      <Text sx={{ color: "white", mt: 4, fontSize: "xl" }}>{key}</Text>
      {elements}
    </Box>
  );
};

const ComponentReader = (object: ObjectSheet | any) => {
  const sheetComponentsElements = new SheetComponentsElements();
  const elements = [];
  if (!object) return;

  for (let [key, value] of object?.components) {
    const component = object.components.get(key);
    if (component?.type != "obj" && component?.type != undefined) {
      elements.push(sheetComponentsElements.componentElement(component));
    } else {
      elements.push(sheetObjReader(component?.value, key));
    }
  }

  return <Box>{elements}</Box>;
};

export const CreatingSheet = () => {
  const [object, setObject] = useState<ObjectSheet>();
  const [ObjectMenu, setObjectMenu] = useState<JSX.Element>();
  useEffect(() => {
    setObjectMenu(ComponentReader(object));
    console.log(object);
  }, [object?.components]);

  return (
    <Flex>
      <Flex
        sx={{
          width: "100%",
          height: "100vh",
          bgColor: "white",
          overflow: "auto",
        }}
      >
        <MyFirstGrid setObject={setObject} />
      </Flex>
      <Flex
        sx={{
          height: "100vh",
          width: "400px",
          bgColor: "black.800",
          right: 0,
          mt: "25px",
          pl: 4,
        }}
      >
        {ObjectMenu}
      </Flex>
    </Flex>
  );
};
