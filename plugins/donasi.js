/**
 * TOLONG JANGAN GANTI GAMBARNYA,NOMORKU DAN SAWERIAKU
 * MENDING KALIAN TAMBAHIN NOMOR KALIAN
*/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m) => {
let duit = `*⟩───── 「 DONATE 」 ─────⟨*
┌〔 Donasi • Transfer 〕
├ DANA 085700921759
├ PULSA 085700921759
└────

┌〔 Donasi • Qris/Link 〕
├ https://trakteer.id/hdiiofficial
├ https://saweria.co/hdiiofficial
├ https://sociabuzz.com/hdiiofficial/tribe
└────

Hasil donasi ini akan di gunakan untuk upgrade bot dan keperluan bot lainnya.

Donasi kalian sangat berarti bagi kami
Terimakasih yang sudah donasi
Yang belum gpp lain waktu bisa donasi
Kalo ga bisa gpp kalian masi bisa support saya dengan subrek yt saya ehehe

Contact person Owner:
wa.me/+6285701399751 (Owner)`
let message = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/ca517a39ce85c8a4c0479.jpg' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: duit,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'My Website',
               url: 'https://hdiiofficial.github.io'
             }

           },
               {
             urlButton: {
               displayText: 'Telegram Support',
               url: 'https://WangsafSupport'
             }
           },           
               {
             quickReplyButton: {
               displayText: 'Sewa Bot',
               id: '.price',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|bagiduit$/i

module.exports = handler
