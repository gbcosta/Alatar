export interface ComponentSheet {
  name: string;
  type: string;
  value: Map<string, ComponentSheet> | any;
}

export interface ObjectSheet {
  components: Map<string, ComponentSheet>;
}

const backgroundColor: ComponentSheet = {
  name: "Background Color",
  type: "hex",
  value: "fff",
};

const banner: ComponentSheet = {
  name: "Banner",
  type: "obj",
  value: new Map<string, ComponentSheet>([
    ["Height", { name: "Height", type: "pixel", value: "40px" }],
    ["Width", { name: "Width", type: "pixel", value: "100%" }],
    [
      "Background Color",
      { name: "Background Color", type: "hex", value: "#777" },
    ],
    ["Position Vertical", { name: "Position Y", type: "number", value: 7 }],
  ]),
};

const firstCharacter: ComponentSheet = {
  name: "First Character",
  type: "obj",
  value: new Map<string, ComponentSheet>([
    ["Color", { name: "Color", type: "hex", value: "#222" }],
    ["Font Size", { name: "Font Size", type: "pixel", value: "60px" }],
  ]),
};

const text: ComponentSheet = {
  name: "Text",
  type: "obj",
  value: new Map<string, ComponentSheet>([
    ["Font Weight", { name: "Font Weight", type: "number", value: "700" }],
    ["Color", { name: "Color", type: "hex", value: "#ccc" }],
    ["Font Size", { name: "Font Size", type: "pixel", value: "45px" }],
    [firstCharacter.name, firstCharacter],
  ]),
};

export const objectAttribute: ObjectSheet = {
  components: new Map<string, ComponentSheet>([
    [backgroundColor.name, backgroundColor],
    [text.name, text],
    [banner.name, banner],
  ]),
};
