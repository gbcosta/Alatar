import { Flex, Icon } from "@chakra-ui/react";

export const ControllerButton = (props) => {
  const ipcRenderer = window.require("electron").ipcRenderer;
  return (
    <Flex
      sx={{
        display: "inline-flex",
        _hover: { backgroundColor: props.close ? "red.500" : "black.700" },
        "-webkit-app-region": "no-drag",
        width: "35px",
        height: "25px",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => {
        ipcRenderer.send(props.onClick);
      }}
    >
      <Icon as={props.icon} sx={{ color: "white" }}></Icon>
    </Flex>
  );
};
