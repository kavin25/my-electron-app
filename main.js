const { app, BrowserWindow } = require('electron');

function createWindow () {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webpreferences: {
			nodeIntegration: true
		}
	})

	win.loadFile('index.html')
	// win.loadURL('https://livecode247.com')
}

// INFO: Creating a new Broswer window
app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow()
	}
})

