import React from "react";
import components from "./components.json";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Select,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

import { setAddComponent } from "../../store/reducers/addComponent";
import { useSelector, useDispatch } from "react-redux";

const getComponentsOptions = (name) => {
  if (name == "Select option") return;

  const componentOptions = [];

  for (let [key, child] of Object.entries(components)) {
    if (key == name) {
      for (let componentOption of child.components) {
        componentOptions.push(
          <option value={componentOption}>{componentOption}</option>
        );
      }
    }
  }

  return componentOptions;
};

const getComponentsSelect = (name, setComponentValue) => {
  if (name == "") return;

  return (
    <Flex sx={{ flexDir: "column" }}>
      <Text sx={{ fontSize: "1.25rem", fontWeight: 500 }}>Components</Text>
      <Select
        placeholder="Select option"
        onChange={(e) => {
          setComponentValue(e.target.value);
        }}
      >
        {getComponentsOptions(name)}
      </Select>
    </Flex>
  );
};

export const ModalAddComponent = (props) => {
  const addComponent = useSelector((state) => state.addComponent.value);
  const dispatch = useDispatch();

  const componentName = [];

  const [systemValue, setSystemValue] = useState("");
  const [componentValue, setComponentValue] = useState("");

  for (let [key] of Object.entries(components)) {
    componentName.push(<option value={key}>{key}</option>);
  }

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Component Option</ModalHeader>
          <ModalCloseButton
            onClick={() => {
              setSystemValue("");
              setComponentValue("");
            }}
          />
          <ModalBody>
            <Flex sx={{ flexDir: "column" }}>
              <Text sx={{ fontSize: "1.25rem", fontWeight: 500 }}>System</Text>
              <Select
                placeholder="Select option"
                onChange={(e) => {
                  setSystemValue(e.target.value);
                }}
              >
                {componentName}
              </Select>
            </Flex>
            {getComponentsSelect(systemValue, setComponentValue)}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={props.onClose}>
              Close
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                if (systemValue != "" && componentValue != "") {
                  dispatch(
                    setAddComponent({
                      system: systemValue,
                      component: componentValue,
                    })
                  );
                  setSystemValue("");
                  setComponentValue("");
                  props.onClose();
                }
              }}
            >
              Add Component
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
