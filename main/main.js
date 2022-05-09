const { app, BrowserWindow, ipcMain } = require("electron");

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
