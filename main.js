const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 450,
    height: 600,
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
    }
  })

  mainWindow.loadFile('./html/index.html')

  mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// electron-python

const PY_DIST_FOLDER = 'python'
const PY_FOLDER = 'main'
const PY_MODULE = 'main' // without .py suffix

const guessPackaged = () => {
  const fullPath = path.join(__dirname, PY_DIST_FOLDER)
  return require('fs').existsSync(fullPath)
}

const getScriptPath = () => {
  if (!guessPackaged()) {
    return path.join(__dirname, PY_FOLDER, PY_MODULE + '.py')
  }
  if (process.platform === 'win32') {
    return path.join(__dirname, PY_DIST_FOLDER, PY_MODULE, PY_MODULE + '.exe')
  }

  return path.join(__dirname, PY_DIST_FOLDER, PY_MODULE, PY_MODULE)
}

// ----------------------------------------------

let pyProc = null
let pyPort = null

const selectPort = () => {
  pyPort = 5000
  return pyPort
}

const createPyProc = () => {
  let port = '' + selectPort()
  let script = getScriptPath()

  if (guessPackaged()) {
    pyProc = require('child_process').execFile(script, [port])
  } else {
    pyProc = require('child_process').spawn('python', [script, port])
  }

  if (pyProc != null) {
    // console.log(pyProc)
    console.log('child process success on port ' + port)
  }

}

const exitPyProc = () => {
  pyProc.kill()
  pyProc = null
  pyPort = null
}

app.on('ready', createPyProc)
app.on('will-quit', exitPyProc)