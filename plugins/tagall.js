let handler = async(m, { conn, text, participants }) => {
  let teks = `══✪〘 *👥 Mention All* 〙✪══\n\n➲ *PESANNYA : ${text ? text : 'TANPA ALASAN'}*\n\n`
		      	for (let mem of participants) {
		            teks += `࿃@${mem.id.split('@')[0]}\n`
				}
                teks += `\n⋙ *Admin Group* ⋘`
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <pesan>']
handler.tags = ['group']
handler.command = /^(tagall)$/i

handler.register = true
handler.group = true
handler.admin = true
handler.botAdmin = true

module.exports = handler
