import { NumberInput, NumberInputField } from "@chakra-ui/react";

export const BaseInput = (props) => {
  return (
    <NumberInput
      sx={{
        display: "flex",
        alignItems: "center",
        mr: 2,
        width: props.width,
        minWidth: props.width,
        padding: 0,
        zIndex: 1,
      }}
    >
      <NumberInputField
        sx={{
          bgColor: "white",
          padding: "0 10px 0 10px",
          _focus: { outline: "none" },
          border: "2px solid black !important",
        }}
      />
    </NumberInput>
  );
};
