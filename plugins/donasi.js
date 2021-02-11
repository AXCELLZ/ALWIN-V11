let handler = async m => m.reply(`
╭─〘 DONASI 〙
│ • CHAT OWNER AJA 
│ • wa.me/6282327386917
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
