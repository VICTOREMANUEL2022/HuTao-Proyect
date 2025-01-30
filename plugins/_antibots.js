export async function before(m, { conn, isAdmin, isBotAdmin }) {
  if (!m.isGroup) return;

  let chat = global.db.data.chats[m.chat];
  if (m.fromMe) return true;

  const botPatterns = [
    /^3EB0/, 
  ];

  if (botPatterns.some(pattern => pattern.test(m.key.id)) && m.key.remoteJid.endsWith('@g.us')) {
    if (chat.antiBot) {
      if (isBotAdmin) {
        console.log(`Eliminando mensaje del bot: ${m.key.id} del participante ${m.key.participant}`);
        
        await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } });

       // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      } else {
        console.log('No soy admin, Enviando el mensaje...');
        m.reply('🧧 No soy administrador, el admin le tocara eliminarlo manualmente.\n> 🧨 Postada: Dame Admin Y Listo.');
      }
    }
  }
}