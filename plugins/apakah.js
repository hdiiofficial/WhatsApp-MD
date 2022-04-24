let handler = async (m) => {
  m.reply(`
*Pertanyaan:* ${m.text}
*Jawaban:* ${pickRandom(['Ya', 'Mungkin iya', 'Mungkin', 'Mungkin tidak', 'Tidak', 'Tidak mungkin'])}
`.trim())
}
handler.help = ['apakah <teks>?']
handler.tags = ['game']
handler.command = /^apakah$/i
handler.register = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
