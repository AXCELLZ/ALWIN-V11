let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(global.anjing)}`, m)
}
handler.customPrefix = /Anjing|anjing|njing|amjinc|asu|asw|ANJING|ASU|ASW|Amjinc|AMJINC$/i
handler.command = new RegExp
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}


global.anjing = [
"Lah ngegas ajg",
"Kok ngegas ajg",
"Ga baik ngatain diri sendiri",
"Biar ape lu begitu",
]
