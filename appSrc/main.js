const electron = require("electron"); //https://www.youtube.com/watch?v=jKzBJAowmGg&feature=youtu.be
const {app, BrowserWindow} = electron;

app.on('ready',function(){
    let win = new BrowserWindow({width:800, height:450, icon:`${__dirname}/assets/sprites/game/fav.png`});
    win.loadURL(`file://${__dirname}/index.html`);
})