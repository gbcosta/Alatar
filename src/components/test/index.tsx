import React from "react";
import GridLayout from "react-grid-layout";
import { Attribute } from "@components/sheetComponents/3det/attribute";
import { TextBox } from "@components/sheetComponents/3det/textBox";
import { Personal } from "@components/sheetComponents/3det/personal";
export const MyFirstGrid = (props: { setObject: any }) => {
  // layout is an array of objects, see the demo for more complete usage
  const layout = [
    { i: "a", x: 0, y: 0, w: 4, h: 2, static: false },
    { i: "b", x: 1, y: 0, w: 3, h: 2 },
    { i: "c", x: 4, y: 0, w: 3, h: 6, static: true },
    { i: "d", x: 0, y: 0, w: 4, h: 2, static: false },
    { i: "e", x: 0, y: 0, w: 4, h: 2, static: false },
    { i: "f", x: 0, y: 0, w: 4, h: 2, static: false },
    { i: "g", x: 0, y: 0, w: 9, h: 2, static: false },
  ];
  return (
    <GridLayout
      className={"layout"}
      layout={layout}
      cols={22}
      rowHeight={30}
      width={1800}
      style={{ marginTop: "25px" }}
    >
      <div key="a" style={{ backgroundColor: "white" }}>
        <Attribute setObject={props.setObject} text="Força" />
      </div>
      <div key="d" style={{ backgroundColor: "white" }}>
        <Attribute setObject={props.setObject} text="Habilidade" />
      </div>
      <div key="e" style={{ backgroundColor: "white" }}>
        <Attribute setObject={props.setObject} text="Resistência" />
      </div>
      <div key="f" style={{ backgroundColor: "white" }}>
        <Attribute setObject={props.setObject} text="Armadura" />
      </div>
      <div key="g" style={{ backgroundColor: "white" }}>
        <Personal text="Nome" />
      </div>
      <div key="c" style={{ backgroundColor: "white" }}>
        <TextBox />
      </div>
    </GridLayout>
  );
};
