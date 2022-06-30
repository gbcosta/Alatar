import {
  Box,
  Flex,
  propNames,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { ModalAddComponent } from "@components/modalAddComponent";
import { SheetGrid } from "@components/sheetGrid";
import { useEffect, useState } from "react";
import { FieldHex } from "@components/filds/fieldHex";

import { useSelector, useDispatch } from "react-redux";

function hex(child, key, path) {
  return <FieldHex key={key} child={child} path={path}></FieldHex>;
}

const sheetObjReader = (child, primaryKey) => {
  let elements = [];
  for (let [key, _child] of Object.entries(child)) {
    if (_child.type != "obj") {
      elements.push(hex(_child, primaryKey + key, primaryKey + " " + key));
    } else {
      elements.push(
        sheetObjReader(_child.value, primaryKey + key, primaryKey + " " + key)
      );
    }
  }

  return elements;
};

const ComponentReader = (component) => {
  if (component.id == -1) return;
  let elements = [];
  for (let [key, child] of Object.entries(component)) {
    if (child.type != "obj" && child.type != undefined) {
      elements.push(hex(child, key, key));
    } else if (child.type != undefined) {
      elements.push(
        <Box mt={4} key={key}>
          <Text sx={{ color: "white", fontSize: "1.4rem" }}>{child.name}</Text>
          {sheetObjReader(child.value, key)}
        </Box>
      );
    }
  }

  return <Box>{elements}</Box>;
};

export const CreatingSheet = () => {
  const [ObjectMenu, setObjectMenu] = useState();
  const dispatch = useDispatch();
  const componentObject = useSelector((state) => state.component.value);
  const loadedComponents = useSelector(
    (state) => state.loadedSheetComponents.value
  );
  useEffect(() => {
    setObjectMenu(ComponentReader(componentObject));
  }, [componentObject]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex>
      <Flex
        sx={{
          width: "100%",
          height: "100h",
          bgColor: "white",
          overflow: "auto",
        }}
      >
        <SheetGrid loadedComponents={loadedComponents} />
      </Flex>
      <Flex
        sx={{
          height: "100vh",
          width: "400px",
          bgColor: "black.800",
          right: 0,
          mt: "25px",
          pl: 4,
          overflow: "auto",
          flexDir: "column",
          pr: "50px",
          pb: "50px",
        }}
      >
        {ObjectMenu}
        <Button
          sx={{
            mt: 12,
            width: "100%",
            minH: "50px",
            _focus: { outline: "none" },
          }}
          onClick={onOpen}
        >
          Add Component
        </Button>
      </Flex>
      <ModalAddComponent onClose={onClose} isOpen={isOpen} />
    </Flex>
  );
};
