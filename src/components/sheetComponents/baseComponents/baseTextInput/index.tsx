import { Input } from "@chakra-ui/react";
export const BaseTextInput = (props: { width: number }) => {
  return (
    <Input
      width={props.width}
      minWidth={props.width}
      alignSelf={"center"}
      sx={{
        border: "2px solid black !important",
        _focus: { outline: "none" },
        mr: 1,
        ml: 3,
      }}
    />
  );
};
