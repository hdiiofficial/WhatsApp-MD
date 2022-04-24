let levelling = require('../lib/levelling')

let handler = async(m, { conn, usedPrefix, command }) => {
  let user = global.db.data.users[m.sender]
  if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    throw `
Level *${user.level} (${user.exp - min}/${xp})*
Anda membutuhkan *${max - user.exp}* lagi untuk naik level
`.trim()
  }
  let before = user.level * 1
	while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
	if (before !== user.level) {
            m.reply(`
Selamat, anda telah naik level!
*${before}* -> *${user.level}*
gunakan *${usedPrefix + command}* untuk mengecek
	`.trim())
        }
}

handler.help = ['levelup']
handler.tags = ['xp']
handler.register = true

handler.command = /^level(|up)$/i

module.exports = handler
