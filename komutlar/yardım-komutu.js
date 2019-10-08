const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '/'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setTitle('Yardım Menüsü')
  .setDescription(`:white_small_square: \`o.yardım eğlence\` = Eğlence ve Kullanıcı Komutlarını Listeler. \n\n:white_small_square: \`o.yardım moderasyon\` = Moderasyon Komutlarını Listeler. \n\n:white_small_square: \`o.yardım kullanıcı\` = Kullanıcı Komutlarını Listeler.  `)
  message.channel.send({embed})
  }
   if (arg === 'eğlence' || arg === '1') {
  const embed = new Discord.RichEmbed()
  .setTitle('Eğlence  Komutları')
  .setDescription(`:white_small_square: \`o.avatarım\` = Avatarınızı Gösterir. \n:white_small_square: \`o.ara155\` = Polisi Arar. \n:white_small_square: \`o.ascii\` = Ascii olarak yazarsınız. \n:white_small_square: \`o.herkesebendençay\` = Herkese Çay Ismarlarsınız. \n:white_small_square: \`o.çayiç\` = Çay İçersiniz. \n:white_small_square: \`o.çayaşekerat\` = Çaya Şeker Atarsınız. \n:white_small_square: \`o.yumruk-at\` = Yumruk Atarsınız. \n:white_small_square: \`o.wwegif\` = WWE Gifi Atar. \n:white_small_square: \`o.stresçarkı\` = Stres Çarkı Çevirirsin. \n:white_small_square: \`o.çekiç\` = İste'diginiz Kişiye Çekiç Atarsınız. \n:white_small_square: \`o.koş\` = Koşarsınız. \n:white_small_square: \`o.yazı-tura\` = Yazı Tura Oynarsınız.  \n:white_small_square: \`o.simit\` = Simit Yersiniz.   \n:white_small_square: \`o.ping\` = Botun Pingini Gösterir. \n:white_small_square: \`o.fbi\` = FBI Gifi Atar. \n:white_small_square: \`o.wasted\` = Profilinize Wasted Efekti Ekler. \n:white_small_square: \`o!1vs1\` = İki Kişiyi Savaştırırsın. \n:white_small_square: \`o.kralol\` = Kral Olursun `)
  message.channel.send(embed)
  }
  if (arg === 'moderasyon' || arg === '2') {
      const embed = new Discord.RichEmbed()
      .setTitle('Moderasyon Komutları:')
      .setDescription(` :white_small_square: \`o.otorol @rol #kanal\` = Sunucu için otorol ayarlar. \n:white_small_square: \`o.sayaç [sayı] #kanal\` = Sunucu için sayaç ayarlar. \n:white_small_square: \`o.ban\` = İstediginiz Kişiyi Banlar. \n:white_small_square: \`o.unban\` = İstediğiniz Kişini Banını  Açar. \n:white_small_square: \`o.küfür-engelle [aç-kapat]\` = Küfürü Engeller. \n:white_small_square: \`o.link-engelle [aç-kapat]\` = Link Paylaşılmasını Engeller. \n:white_small_square: \`o.yavaşmod [sayı]\` = Yavaş Modu Açar. \n:white_small_square: \`o.sil [1/100]\` = İstediniz Kadar Mesaj Siler. \n:white_small_square: \`o.sustur\` = İstediğiniz Kişiyi Geçici Olarak Susturursunuz. `)
      return message.channel.send(embed);
}
   if (arg === 'kullanıcı' || arg === '2') {
      const embed = new Discord.RichEmbed()
      .setTitle('Kullanıcı Komutları:')
      .setDescription(`:white_small_square: \`o.yaz\` = Bota İstediğiniz Şeyi Yazdırırsınız. \n:white_small_square: \`o.sunucuresmi\` = Sunucu Resmini Atar. \n:white_small_square: \`o.nsfw-gif\` = Nsfw Gifi Atar. \n:white_small_square: \`o.yetkilerim\` = Botun Yetkilerini Gösterir. \n:white_small_square: \`o.kullanıcıbilgim\` = Bilgilerinizi Gösterir. \n:white_small_square: \`o.ping\` = Botun Pingini Gösterir.  \n:white_small_square: \`o.sunucubilgi\` = Sunucu Hakkında Bilgi Verir. \n:white_small_square: \`o.afk [sebep]\` = AFK Olursunuz. \n:white_small_square: \`canlıdestek {mesaj}\` = Canlı Destek Yollarsınız. \n:white_small_square: \`o.dünya\` = Dünyayı İzlersin `)   
      return message.channel.send(embed);
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','help','y','halp','h'],
  permlevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Gelişmiş Yardım Menüsü',
  usage: 'yardım'
};
