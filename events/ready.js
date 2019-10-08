const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log('>> Oynuyor kısmı başarıyla güncellendi. <<');
console.log(`${client.guilds.size} sunucu + ${client.users.size} kullanıcı`);
console.log('>> Bot Hazır Giriş Yapıldı! <<');

  client.user.setStatus("dnd");
   var oyun = [ 
        `🔱│Created By HY  !     ∅N🔱 ₮Ø₱ℛ₳K ツ!`,//İstediginiz Gibi Değiştirebilirsiniz
        `🎉│${prefix}yardım Komutuyla Botumuzun Komutlarına Bakabilirsin`,//İstediginiz Gibi Değiştirebilirsiniz.
        `🌍│${client.guilds.size} Sunucuda Hizmet Veriyorum`,//İstediginiz Gibi Değiştirebilirsiniz.
        `📝│${client.channels.size} Kanalda Hizmet Veriyorum`,//İstediginiz Gibi Değiştirebilirsiniz.
        `👦│${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Üyeye Hizmet Veriyorum`,//İstediginiz Gibi Değiştirebilirsiniz.
        `🔥│${prefix}davet Yazarak Botu Sunucunuza Ekleyebilirsiniz`,//İstediginiz Gibi Değiştirebilirsiniz.
        `✅│7/24 Aktif`,//İstediginiz Gibi Değiştirebilirsiniz.
     
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "https://www.twitch.tv/morthoin");
        }, 2 * 2500);
}
