const { app, BrowserWindow, ipcMain } = require("electron");
var crypto = require("crypto");

const fs = require("fs");

require("@electron/remote/main").initialize();

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 400,
    webPreferences: {
      contextIsolation: false,
      spellcheck: false,
      nodeIntegration: true,
      webSecurity: false,
      zoomFactor: 1.0,
    },
    frame: false,
    autoHideMenuBar: false,
  });

  win.loadURL("http://localhost:3000");

  win.once("ready-to-show", () => {
    win.webContents.setZoomFactor(1);
    win.show();
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform) {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

function closeWindow() {
  BrowserWindow.getFocusedWindow().close();
}

function minimizeWindow() {
  BrowserWindow.getFocusedWindow().minimize();
}

function maximizeWindow() {
  const window = BrowserWindow.getFocusedWindow();
  window.isMaximized() ? window.unmaximize() : window.maximize();
}

ipcMain.on("close", () => {
  closeWindow();
});

ipcMain.on("minimize", () => {
  minimizeWindow();
  console.log("test");
});

ipcMain.on("maximize", () => {
  maximizeWindow();
});

const read_file = function (path) {
  return fs.readFileSync(path, "utf8");
};

const write_file = function (path, output) {
  fs.writeFileSync(path, output);
};

const insideArray = (n, array) => {
  for (let i = 0; i < array.length; i++) {
    if (n.id == array[i].i) return true;
  }
  return false;
};

ipcMain.handle("save", async (event, args) => {
  let { name, layout, componentsAttributes } = { ...args };
  let componentsInsideSheet = [];

  for (let i = 0; i < componentsAttributes.length; i++) {
    const element = componentsAttributes[i];
    if (insideArray(element, layout)) {
      componentsInsideSheet.push(element);
    }
  }

  const saveObj = {
    name: name.name,
    componentsAttributes: componentsInsideSheet,
    layout: layout,
  };

  const jsonSaveObj = JSON.stringify(saveObj);

  if (!fs.existsSync("./saveSheets")) {
    fs.mkdirSync("./saveSheets");
  }

  console.log(saveObj);
  write_file(
    `./saveSheets/${
      saveObj.name + crypto.randomBytes(20).toString("hex")
    }.json`,
    jsonSaveObj
  );
});
var _files = [];
function readFiles() {
  const files = fs.readdirSync("./saveSheets");

  return files;
}

ipcMain.handle("getSheets", (argas) => {
  const files = readFiles();
  let sheets = [];
  for (let i = 0; i < files.length; i++) {
    let obj = read_file("./saveSheets/" + files[i]);
    obj = JSON.parse(obj);
    obj.fileName = files[i];
    sheets.push(obj);
  }

  return sheets;
});
