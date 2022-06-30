import {
  Flex,
  Input,
  Text,
  FormControl,
  Select,
  Button,
} from "@chakra-ui/react";
import { HomeMenu } from "@components/homeMenu";

const sxField = {
  flexDir: "column",
  alignItems: "center",
  mt: 8,
  width: "30%",
  minW: 400,
};

const sxTextField = {
  fontSize: "xl",
  color: "white",
  width: "100%",
  mb: 1,
};

const InputField = () => {
  return (
    <Flex sx={sxField}>
      <Text sx={sxTextField}>Name</Text>
      <Input
        variant={"flushed"}
        sx={{ _focus: "none", color: "white" }}
      ></Input>
    </Flex>
  );
};

const Option = (props) => {
  return (
    <option style={{ color: "black", backgroundColor: "#ddd" }}>
      {props.children}
    </option>
  );
};

const SelectPredefinedField = () => {
  return (
    <Flex sx={sxField}>
      <Text sx={sxTextField}>Predefined</Text>
      <FormControl sx={{ color: "white", bgColor: "black.700" }}>
        <Select id="country" sx={{ _focus: "none" }} variant={"flushed"}>
          <Option>D&D</Option>
          <Option>Tormenta</Option>
          <Option>None</Option>
        </Select>
      </FormControl>
    </Flex>
  );
};

export const CreateNewGame = () => {
  return (
    <Flex sx={{ width: "100%", pt: 3 }}>
      <HomeMenu activeTab={"New Game"} />
      <Flex
        sx={{
          flexGrow: 1,
          height: "100vh",
          alignItems: "center",
          mt: 4,
          flexDir: "column",
          pl: 2,
          pr: 2,
        }}
      >
        <Text sx={{ color: "white", fontSize: "2xl" }}>Game Options</Text>
        <InputField />
        <SelectPredefinedField />
        <Button
          variant={"outline"}
          sx={{
            mt: 16,
            _focus: { outline: "none" },
            _hover: { bgColor: "black.600" },
            _active: { bgColor: "black.500" },
            color: "white",
          }}
        >
          Create
        </Button>
      </Flex>
    </Flex>
  );
};
