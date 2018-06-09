
const {app,BrowserWindow,ipcMain}=require('electron')
const path=require('path')
const url=require('url')


let win 
let child

function createWindows() {
    
    win =new BrowserWindow({width:800,height:600,show: false})

    win.loadURL(url.format({
        pathname:path.join(__dirname,'index.html'),
        protocol:'file',
        slashes:true
    }))
    
    child = new BrowserWindow({parent: win,width:400,height:300,frame:false})
    child.loadURL(url.format({
        pathname:path.join(__dirname,'login.html'),
        protocol:'file',
        slashes:true
    }))

    child.openDevTools()
}

ipcMain.on('entry-accepted', (event, arg) => {
    if(arg=='ping'){
        win.show()
        child.hide()
    }
  })

app.on('ready',createWindows)

