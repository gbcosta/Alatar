import {
  Flex,
  Input,
  Text,
  FormControl,
  Select,
  Button,
} from "@chakra-ui/react";
import { HomeMenu } from "@components/homeMenu";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { setSheetName, SheetName } from "../store/reducers/nameSheet";
import { setLoadFlag } from "../store/reducers/loadFlag";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const ipcRenderer = window.require("electron").ipcRenderer;

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

const InputField = (props) => {
  return (
    <Flex sx={sxField}>
      <Text sx={sxTextField}>Name</Text>
      <Input
        variant={"flushed"}
        sx={{ _focus: "none", color: "white" }}
        onChange={(e) => {
          props.setNameSheet(e.target.value);
        }}
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
import { useNavigate } from "react-router-dom";
import { setLoadedSheetComponents } from "../store/reducers/loadedSheetComponents";
const Card = (props) => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/createSheet`;
    navigate(path);
  };

  const [nameSheet, setNameSheet] = useState("");
  const dispatch = useDispatch();

  return (
    <Flex
      sx={{
        bgColor: "#345",
        width: 200,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
      }}
      onClick={() => {
        dispatch(
          setSheetName({
            name: props.value.name,
            fileName: props.value.fileName,
          })
        );
        dispatch(
          setLoadedSheetComponents({
            componentsAttributes: props.value.componentsAttributes,
            layout: props.value.layout,
          })
        );
        dispatch(setLoadFlag("load"));
        routeChange();
      }}
    >
      <Text
        sx={{
          color: "white",
          textAlign: "center",
          fontSize: 24,
        }}
      >
        {props.value.name}
      </Text>
    </Flex>
  );
};

export const OpenSheet = () => {
  const [sheets, setSheets] = useState([]);
  const [cardSheets, setCardSheets] = useState([]);

  useEffect(() => {
    ipcRenderer.invoke("getSheets", {}).then((data) => {
      setSheets(data);
    });
  }, []);

  useEffect(() => {
    setCardSheets([]);
    let cards = sheets.map((value, key) => {
      return <Card key={key} value={value}></Card>;
    });
    setCardSheets(cards);
  }, [sheets]);

  return (
    <Flex sx={{ width: "100%", pt: 3, overflow: "auto" }}>
      <HomeMenu activeTab={"Open Sheet"} />
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
        <Text sx={{ color: "white", fontSize: "2xl" }}>Open Sheet</Text>
        <Flex
          sx={{
            gap: 4,
            mt: 12,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {cardSheets}
        </Flex>
      </Flex>
    </Flex>
  );
};
