import { Box, Flex, Icon } from "@chakra-ui/react";
import { ControllerButton } from "./controllerButton";
import {
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeClose,
} from "react-icons/vsc";
import { RiHome2Fill } from "react-icons/ri";
import { FaSave } from "react-icons/fa";
import { Link } from "react-router-dom";
const ipcRenderer = window.require("electron").ipcRenderer;

import { useSelector, useDispatch } from "react-redux";

const Draggable = () => {
  return (
    <Box
      zIndex={-1000}
      sx={{
        top: 0,
        left: 0,
        display: "block",
        position: "absolute",
        width: "100%",
        height: "inherit",
        "-webkit-app-region": "drag",
      }}
    ></Box>
  );
};

const Bar = (props) => {
  return (
    <Flex sx={{ width: "100%", height: "25px" }} bgColor="black.800">
      {props.children}
    </Flex>
  );
};

export const ControlBar = () => {
  const components = useSelector((state) => state.saveSheet.value);
  const name = useSelector((state) => state.sheetName.value);
  const copyArray = (array) => {
    console.log(array);
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      newArray.push(element);
    }
    return newArray;
  };
  return (
    <Flex sx={{ position: "fixed", width: "100%" }} zIndex={2000}>
      <Bar>
        <Draggable></Draggable>
        <Link to={"/"}>
          <Icon
            h={5}
            w={5}
            as={RiHome2Fill}
            sx={{
              fill: "white",
              ml: 2,
              alignSelf: "center",
              "-webkit-app-region": "no-drag",
              _hover: { cursor: "pointer" },
            }}
          ></Icon>
        </Link>
        <Icon
          h={5}
          w={5}
          as={FaSave}
          sx={{
            fill: "white",
            ml: 2,
            "-webkit-app-region": "no-drag",
            _hover: { cursor: "pointer" },
          }}
          onClick={() => {
            console.log(components.componentsAttributes);
            ipcRenderer.invoke("save", {
              name: {
                name: name.name,
                fileName: name.fileName,
              },
              componentsAttributes: components.componentsAttributes,
              layout: components.layout,
            });
          }}
        ></Icon>

        <Flex sx={{ flexGrow: 1 }}></Flex>
        <ControllerButton icon={VscChromeMinimize} onClick={"minimize"} />
        <ControllerButton icon={VscChromeMaximize} onClick={"maximize"} />
        <ControllerButton icon={VscChromeClose} close onClick={"close"} />
      </Bar>
    </Flex>
  );
};
