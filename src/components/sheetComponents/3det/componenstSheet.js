export const attributeComponent = {
  name: "attribute",
  system: "3d&t",
  backgroundColor: {
    name: "BackgroundColor",
    type: "hex",
    value: "#fff",
  },
  banner: {
    name: "banner",
    type: "obj",
    value: {
      height: { name: "Height", type: "pixel", value: "40px" },
      width: { name: "Width", type: "pixel", value: "100%" },
      backgroundColor: { name: "Background Color", type: "hex", value: "#777" },
      positionVertical: { name: "Position Vertical", type: "number", value: 7 },
    },
  },
  text: {
    name: "Text",
    type: "obj",
    value: {
      fontWeight: {
        name: "Font Weight",
        type: "number",
        value: "700",
      },
      color: {
        name: "color",
        type: "hex",
        value: "#ccc",
      },
      fontSize: {
        name: "Font Size",
        type: "pixel",
        value: "45px",
      },
      value: {
        name: "Value",
        type: "text",
        value: "Force",
      },
    },
  },
  firstCharacter: {
    name: "First Character",
    type: "obj",
    value: {
      color: { name: "Color", type: "hex", value: "#222" },
      fontSize: { name: "Font Size", type: "pixel", value: "60px" },
    },
  },
};

export const textBoxComponent = {
  name: "textBox",
  system: "3d&t",
  text: {
    name: "Text",
    type: "obj",
    value: {
      fontSize: { name: "Font Size", type: "number", value: "36" },
      fontWeight: { name: "Font Weight", type: "number", value: "500" },
      textValue: { name: "Text Value", type: "string", value: "powers" },
      color: { name: "Color", type: "hex", value: "#000" },
    },
  },
  textBox: {
    name: "Text Box",
    type: "obj",
    value: {
      height: { name: "Height", type: "number", value: "100%" },
      backgroundColor: {
        name: "Background Color",
        type: "hex",
        value: "#dce9faf8",
      },
      borderBoxThickness: {
        name: "BorderBox Thickness",
        type: "pixel",
        value: "2px",
      },
      borderBoxColor: {
        name: "BorderBox Color",
        type: "hex",
        value: "#000",
      },
      color: { name: "Color", type: "hex", value: "#000" },
      fontSize: { name: "Font Size", type: "pixel", value: "12px" },
      fontWeight: { name: "Font Weight", type: "number", value: 400 },
    },
  },
};

export const personalComponent = {
  name: "personal",
  system: "3d&t",
  FirstText: {
    name: "First Text",
    type: "obj",
    value: {
      fontWeight: {
        name: "Font Weight",
        type: "number",
        value: "700",
      },
      color: {
        name: "color",
        type: "hex",
        value: "#ccc",
      },
      fontSize: {
        name: "Font Size",
        type: "pixel",
        value: "45px",
      },
      value: {
        name: "Value",
        type: "text",
        value: "Name",
      },
    },
  },
  secondText: {
    name: "Second Text",
    type: "obj",
    value: {
      fontWeight: {
        name: "Font Weight",
        type: "number",
        value: "700",
      },
      color: {
        name: "color",
        type: "hex",
        value: "#ccc",
      },
      fontSize: {
        name: "Font Size",
        type: "pixel",
        value: "45px",
      },
      value: {
        name: "Value",
        type: "number",
        value: "Points",
      },
    },
  },
  banner: {
    name: "banner",
    type: "obj",
    value: {
      height: { name: "Height", type: "pixel", value: "40px" },
      width: { name: "Width", type: "pixel", value: "100%" },
      backgroundColor: { name: "Background Color", type: "hex", value: "#777" },
      positionVertical: { name: "Position Vertical", type: "number", value: 7 },
    },
  },
};
