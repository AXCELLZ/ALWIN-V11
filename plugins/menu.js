let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
    let exp = global.DATABASE.data.users[m.sender].exp
    let limit = global.DATABASE.data.users[m.sender].limit
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id'
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.DATABASE._data.users).length
    let tags = {
      'main': '𝗠𝗮𝗶𝗻',
      'xp': '𝗘𝘅𝗽 & 𝗟𝗶𝗺𝗶𝘁',
      'sticker': '𝗦𝘁𝗶𝗰𝗸𝗲𝗿',
      'kerang': '𝗞𝗲𝗿𝗮𝗻𝗴 𝗔𝗷𝗮𝗶𝗯',
      'quotes': '𝗤𝘂𝗼𝘁𝗲𝘀',
      'admin': '𝗔𝗱𝗺𝗶𝗻',
      'group': '𝗚𝗿𝗼𝘂𝗽',
      'internet': '𝗜𝗻𝘁𝗲𝗿𝗻𝗲𝘁',
      'downloader': '𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗲𝗿',
      'tools': '𝗧𝗼𝗼𝗹𝘀',
      'fun': '𝗙𝘂𝗻 𝗺𝗲𝗻𝘂',
      'jadibot': '𝗝𝗮𝗱𝗶 𝗕𝗼𝘁',
      'owner': '𝗢𝘄𝗻𝗲𝗿 𝗺𝗲𝗻𝘂',
      'host': '𝗛𝗼𝘀𝘁',
      'advanced': '𝗔𝗱𝘃𝗮𝗻𝗰𝗲𝗱',
      'info': '𝗜𝗻𝗳𝗼',
      '': 'No Category',
    }
    for (let plugin of Object.values(global.plugins))
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!tag in  tags) tags[tag] = tag
    let help = Object.values(global.plugins).map(plugin => {
      return {
        help: plugin.help,
        tags: plugin.tags,
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let menu of help)
        if (menu.tags && menu.tags.includes(tag))
          if (menu.help) groups[tag].push(menu)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || `
❉──────────❉

*_Mr ᭄A L W I Nツ_*

❉──────────❉

 Bot Aktif ; *Tergantung kuota*

*╭═┅ৡৢ͜͡✦═══╡꧁꧂╞═══┅ৡৢ͜͡✦═╮*
*║┊:* ⃟ ⃟  ━ೋ๑————๑ೋ━* ⃟ ⃟ *      
*║┊:◄✜┢┅ீ͜ৡৢ͜͡✦━━◇━━ீ͜ৡৢ͜͡✦┅┧✜►*
*║┊:*      ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ 
*║┊:* -❥ *ALWIN ᭄B O O Tツ Versi 10.0*
*║┊:* -❥ *Name : %name*
*║┊:* -❥ *Sisa : %exp XP*
*║┊:* -❥ *Prefix : 「 # 」*
*║┊:* -❥ *Total Pengguna : 2137*
*║┊:* 𝑊𝐴𝑅𝑁𝐼𝑁𝐺!!  𝐷𝑖𝑙𝑎𝑟𝑎𝑛𝑔 𝐶𝑜𝑝𝑦
*║┊:*      ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈
*║┊:◄✜┢┅ீ͜ৡৢ͜͡✦━━◇━━ீ͜ৡৢ͜͡✦┅┧✜►*
*║┊:  * ⃟ ⃟  ━ೋ๑————๑ೋ━* ⃟ ⃟ *   
*╰═┅ৡৢ͜͡✦═══╡꧁꧂╞═══┅ৡৢ͜͡✦═╯*
𝐑𝐮𝐥𝐞𝐬 - 𝐒𝐢𝐦𝐩𝐥𝐞
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
●⧐JANGAN SPAM BOT
●⧐JANGAN CALL.VC BOT
●⧐LANGGAR GW BAND
●⧐wa.me/6282327386917
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

▬▬▬▬ FITUR  BOT: ▬▬▬▬▬
%readmore`
    let header = conn.menu.header||'*╭═┅═══%category═══┅*'
    let body   = conn.menu.body  ||'*║┊:* -❥%cmd%islimit'
    let footer = conn.menu.footer|| '*╰═┅ৡৢ͜͡✦┅═══════┅ৡৢ͜͡✦*\n'
    let after  = conn.menu.after  || '©YANG MAU BIKIN BOT SENDIRI CHAT OWNER'
    let _text  = before + '\n'
    for (let tag in groups) {
      _text += header.replace(/%category/g, tags[tag]) + '\n'
      for (let menu of groups[tag]) {
        for (let help of menu.help)
          _text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? ' (Limit)' : '')  + '\n'
      }
      _text += footer + '\n'
    }
    _text += after
    text =  typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      exp, limit, name, weton, week, date, time, totalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).join`|`})`, 'g'), (_, name) => replace[name])
    conn.reply(m.chat, text.trim(), m)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu','help','?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
