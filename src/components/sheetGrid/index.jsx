import React from "react";
import GridLayout from "react-grid-layout";
import { Attribute } from "@components/sheetComponents/3det/attribute";
import { TextBox } from "@components/sheetComponents/3det/textBox";
import { Personal } from "@components/sheetComponents/3det/personal";

import { setAddComponent } from "../../store/reducers/addComponent";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setSaveSheetComponents } from "../../store/reducers/saveSheet";

import { setLoadFlag } from "../../store/reducers/loadFlag";

const removeStyle = {
  position: "absolute",
  right: "2px",
  top: 0,
  cursor: "pointer",
  zIndex: 100,
};

let initial = 0;
const keyGenerator = () => {
  return initial++;
};

const _3det = (component, key) => {
  let componentSettings;
  switch (component) {
    case "attribute":
      componentSettings = {
        component: <Attribute key={key} id={key} />,
        w: 3,
        h: 2,
      };
      break;
    case "personal":
      componentSettings = {
        component: <Personal text="Nome" key={key} id={key} />,
        w: 9,
        h: 2,
      };
      break;
    case "textBox":
      componentSettings = {
        component: <TextBox key={key} id={key} />,
        w: 4,
        h: 5,
      };
      break;
    default:
      console.log("erro");
  }

  return componentSettings;
};

const addComponent = (settings, key) => {
  let componentSettings;
  switch (settings.system) {
    case "3d&t":
      componentSettings = _3det(settings.component, key);
      break;

    default:
      console.log("erro");
  }

  return componentSettings;
};

export const SheetGrid = (props) => {
  const addComponentValues = useSelector((state) => state.addComponent.value);
  const loadFlag = useSelector((state) => state.loadFlag.value);

  const dispatch = useDispatch();
  const [elements, setElements] = useState([]);
  const [layout, setLayout] = useState([]);

  const [lastWidthHeight, setLastWidthHeight] = useState({});
  const [toRemove, setToRemove] = useState(null);

  useEffect(() => {
    if (props.loadedComponents.componentsAttributes != undefined) {
      dispatch(setLoadFlag(""));

      let cloneLayout = props.loadedComponents.layout;
      let componentsAttributes = props.loadedComponents.componentsAttributes;

      for (let i = 0; i < cloneLayout.length; i++) {
        const element = cloneLayout[i];
        setLayout([...layout, element]);
      }
      console.log(cloneLayout);

      for (let j = 0; j < componentsAttributes.length; j++) {
        const component = componentsAttributes[j];
        const componentSettings = addComponent(
          { system: component.system, component: component.name },
          component.id
        );
        setElements([
          ...elements,
          <div key={component.id} style={{ backgroundColor: "white" }}>
            <span
              className="remove"
              style={removeStyle}
              onClick={() => {
                setToRemove(component.id);
              }}
            >
              x
            </span>
            {componentSettings.component}
          </div>,
        ]);
      }
    } else {
      setLayout([]);
      setElements([]);
    }
  }, []);
  useEffect(() => {
    if (
      addComponentValues.component != "" &&
      addComponentValues.system != "" &&
      loadFlag != "load"
    ) {
      const key = keyGenerator();
      const componentSetting = addComponent(addComponentValues, key);
      console.log(componentSetting, addComponentValues, key);
      setLayout([
        ...layout,
        {
          i: key,
          x: 0,
          y: 0,
          w: 2,
          h: 2,
          static: false,
        },
      ]);
      setLastWidthHeight({
        w: componentSetting.w,
        h: componentSetting.h,
      });
      setElements([
        ...elements,
        <div key={key} style={{ backgroundColor: "white" }}>
          <span
            className="remove"
            style={removeStyle}
            onClick={() => {
              setToRemove(key);
            }}
          >
            x
          </span>
          {componentSetting.component}
        </div>,
      ]);
      dispatch(setAddComponent({ system: "", component: "" }));
    }
  }, [addComponentValues]);

  useEffect(() => {
    if (toRemove != null) {
      let cloneLayout = [...layout];
      let cloneElements = [...elements];

      if (setToRemove != null) {
        for (let index = 0; index < cloneLayout.length; index++) {
          if (cloneLayout[index].i == toRemove) {
            cloneLayout.splice(index, 1);
          }
        }
        for (let index = 0; index < cloneElements.length; index++) {
          if (cloneElements[index].key == toRemove) {
            cloneElements.splice(index, 1);
          }
        }
        setLayout(cloneLayout);
        setElements(cloneElements);

        setToRemove(null);
      }
    }
  }, [toRemove]);

  useEffect(() => {
    dispatch(setSaveSheetComponents({ layout: layout }));
  }, [layout]);

  return (
    <GridLayout
      className={"layout"}
      layout={layout}
      cols={22}
      rowHeight={30}
      width={1800}
      style={{ marginTop: "50px" }}
      onLayoutChange={(layout) => {
        if (lastWidthHeight != "" && lastWidthHeight.w != undefined) {
          console.log("entrou");
          layout[layout.length - 1].w = lastWidthHeight.w;
          layout[layout.length - 1].h = lastWidthHeight.h;
          setLastWidthHeight("");
        }
        setLayout(layout);
        console.log("layout", layout);
      }}
    >
      {elements}
    </GridLayout>
  );
};
