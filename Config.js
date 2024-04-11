const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['916282589020']
global.ownername = "𝐘𝐒 𝚫𝚳𝚩𝚪𝚯 𝐒𝚵𝚪"//owner name
global.ytname = "YT: x1ambroh"
global.socialm = "GitHub: Ambrox1"
global.location = "Indian"

global.botname = '𝐀𝐌𝐁𝐑𝐎-𝐌𝐃' //name of the bot

//sticker details
global.stickername = '𝐘𝐒 𝚫𝚳𝚩𝚪𝚯 𝐒𝚵𝚪'
global.packname = 'Sticker By'
global.author = 'Ambro Bot'
//console view/theme
global.themeemoji = '💜'
global.wm = "Ambro bot."

//theme link
global.link = 'https://chat.whatsapp.com/KADUoIJJR6PAWr6oh8p6zJ'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.welcome = false //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '*here you go!* \n\n*onAmbro Bot*\n\n*🧩 Bot link:* \nhttps://github.com/Ambrox1\n',
    prem: '*This feature can be used by premium user only*',
    admin: '*This feature can be used by admin only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by owner only*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*In process...* ',    
    error: '*Error!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
