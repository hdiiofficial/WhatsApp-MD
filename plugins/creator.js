const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;hdiiofficial;;'
                    + 'FN:hdiiofficial\n' // full name
                    + 'ORG:hdiiofficial;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6285701399751:+62 857-0139-9751\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'hdiiofficial', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
