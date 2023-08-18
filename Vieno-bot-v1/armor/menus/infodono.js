const { fs, colors } = require('./_index.js');
const infodono = (prefix, numerodn, NomeDoBot, sender) => {

// NÃO APAGUE ESSE ${NickDono} nem 
//${numerodn} nem ${NomeDoBot} nem ${prefix} só se quiser apagar completo, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.

return `*Opa meu mano @${sender.split("@")[0]}!*
*Meu criador é o 𝕃𝕌ℂ𝔸𝕊 𝕄𝕆𝔻 𝔻𝕆𝕄𝕀ℕ𝔸🌹, segue abaixo o número dele caso vc queria trocar uma ideia com ele🫠*\n\nwa.me/${numerodn}`
}

exports.infodono = infodono

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(colors.red(`Modificação detectada: '.${__filename}' - Arquivo Atualizado.`))
    delete require.cache[file]
    require(file)
})
