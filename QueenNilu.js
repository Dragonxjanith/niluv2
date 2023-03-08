
require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, Mimetype, generateWAMessage, prepareWAMessageMedia, prepareMessageFromContent,  areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const os = require('os')
const util = require('util')
const path = require('path')
const axios = require('axios')
const chalk = require('chalk')
const crypto = require('crypto')
const yts = require('youtube-yts')
const xfar = require('xfarr-api')
const request = require('request')
const xeontod = require("tod-api")
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const thiccysapi = require('textmaker-thiccy')
const QrCode = require('qrcode-reader')
const qrcode = require('qrcode')
const { buffergif } = require('./lib/myfunc2')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const google = require('google-it')
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { jadibot, listJadibot } = require('./lib/rentbot')
const { performance } = require('perf_hooks')
const { igApi, getSessionId } = require('insta-fetcher');
let ig = new igApi("csrftoken=6wrPrUbsa05Csm9wlqxAOSqRwxxscjD;rur=16771\05427758921939\0541695476019:01f7994241f5e244ccf1bb676853d91b4f281e385e564f6c99a3592b27b0a39dada825e8;mid=Yy21jQALAAEmUl5E0beHHz_eVvyI;ds_user_id=27758921939;sessionid=27758921939%3ASGdS1WkMZToRfs%3A12%3AAYe5Sp23sp78pv0PnIRL6X-ySJdCDpe4uxbuJxtcxw;ig_did=09B76BA7-2D56-42E5-89BB-3584A9EAD69B");
ig.setCookie("csrftoken=6wrPrUbsa05Csm9wlqxAOSqRwxxscjD;rur=16771\05427758921939\0541695476019:01f7994241f5e244ccf1bb676853d91b4f281e385e564f6c99a3592b27b0a39dada825e8;mid=Yy21jQALAAEmUl5E0beHHz_eVvyI;ds_user_id=27758921939;sessionid=27758921939%3ASGdS1WkMZToRfs%3A12%3AAYe5Sp23sp78pv0PnIRL6X-ySJdCDpe4uxbuJxtcxw;ig_did=09B76BA7-2D56-42E5-89BB-3584A9EAD69B");
const maker = require('mumaker')
const textpro = require('./lib/textpro')
const { fetchBuffer } = require("./lib/myfunc2")
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const ini_mark = `0@s.whatsapp.net`
const ownernya = owner + '@s.whatsapp.net'
const Language = require('./language')
const Lang = Language.getString('nilubot')
const TIME_ZONE = global.TIME_ZONE
const MENU_IMOJI = global.MENU_IMOJI
  const M_E = MENU_IMOJI.split('|')[0]
  const D_E = MENU_IMOJI.split('|')[1]


  var LOGO_MAKING = ''
  if (global.LANG == 'EN') LOGO_MAKING = '*🌈 Take a moment to createing your textlogo...*'
  if (global.LANG == 'SI') LOGO_MAKING = '*🌈 මදක් රැදීසිටින්න ඔබගේ textlogo සෑදමින් පවතී...*'

var NOT_FOUND = ''
  if (global.LANG == 'EN') NOT_FOUND = '*🚫💬 I CAN\'T FIND ANYTHING !*'
  if (global.LANG == 'SI') NOT_FOUND = '*🚫💬 මට කිසිවක් සොයාගත නොහැකිවිය !*'
var FILE_DOWNLOAD = ''
var FILE_UPLOAD = ''
   if (global.LANG == 'EN') FILE_DOWNLOAD = '*📥 DOWNLOADING YOUR FILE...*'
   if (global.LANG == 'EN') FILE_UPLOAD =  '*📤 UPLOADING YOUR FILE...*'
   if (global.LANG == 'SI') FILE_DOWNLOAD = '*📥 ඔබගේ ගොනුව බාගතකරමින් පවති...*'
   if (global.LANG == 'SI') FILE_UPLOAD = '*📤 ඔබගේ ගොනුව එවමින් පවතී...*'


const BOT_VERSION = '2.0.0'

//TIME
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = `Good Morning 🌄`
 } 
 
// read database game
let tebaklagu = db.data.game.tebaklagu = []
let kuismath = db.data.game.math = []
let vote = db.data.others.vote = []

//read database jid
let premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let banned = JSON.parse(fs.readFileSync('./database/user/banned.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/AUTO/sticker.json'));
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'));
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'));
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'));
let ntwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'));
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'));
let ntilinktwt =JSON.parse(fs.readFileSync('./database/antilinktwitter.json'));
let ntilinktt =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'));
let ntilinktg =JSON.parse(fs.readFileSync('./database/antilinktelegram.json'));
let ntilinkfb =JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'));
let ntilinkig =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'));
let ntilinkytch =JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'));
let ntilinkytvid =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'));
let bad = JSON.parse(fs.readFileSync('./database/BAD_WORD.json'));

 
//database virus and whatsapp bugs
//warrrrrrrrr

//Database\\
let sticker = JSON.parse(fs.readFileSync('./database/AUTO/sticker.json'));
let audio = JSON.parse(fs.readFileSync('./database/AUTO/audio.json'));
//database auto reply
let janiyasticker = JSON.parse(fs.readFileSync('./database/AUTO/sticker.json'));
let janiyaaudio = JSON.parse(fs.readFileSync('./database/AUTO/audio.json'));
let janiyaimage = JSON.parse(fs.readFileSync('./database/AUTO/image.json'));
let janiyavideo = JSON.parse(fs.readFileSync('./database/AUTO/video.json'));

module.exports = QueenNilu = async (QueenNilu, m, chatUpdate, store) => {
    try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°${themeemoji}π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await QueenNilu.decodeJid(QueenNilu.user.id)
const Janith = "94767438882"
const isNilu = m.sender == "9476743882@s.whatsapp.net" ? true : false
const isCreator = [Janith, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const type = Object.keys(mek.message)[0]  
const from = mek.key.remoteJid      
const content = JSON.stringify(mek.message)

	    const cekUser = (users, id) => {     
var cek = null
Object.keys(user).forEach((i) => { 
if (user[i].id === id){ cek = i } })
if (cek !== null){ 
if (users == "id"){ return user[cek].id }
if (users == "emote"){ return user[cek].emote }
if (users == "timers"){ return user[cek].timers }
if (users == "hit"){ return user[cek].hit }
if (users == "star"){ return user[cek].star }
if (users == "alasan"){ return user[cek].alasan }
if (users == "ban"){ return user[cek].ban }
if (users == "premium"){ return user[cek].premium }
}
if (cek == null) return null
}
	
	         //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
     
        //hijack function
        const ordermessage = (m.msg.xtype === 'conversation' && m.msg.message.conversation) ? m.msg.message.conversation : (m.msg.xtype == 'imageMessage') && m.msg.message.imageMessage.caption ? m.msg.message.imageMessage.caption : (m.msg.xtype == 'videoMessage') && m.msg.message.videoMessage.caption ? m.msg.message.videoMessage.caption : (m.msg.xtype == 'extendedTextMessage') && m.msg.message.extendedTextMessage.text.startsWith(prefix) ? m.msg.message.extendedTextMessage.text : (m.msg.xtype == 'buttonsResponseMessage') && m.msg.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) ? m.msg.message.buttonsResponseMessage.selectedButtonId : (m.msg.xtype == 'listResponseMessage') && m.msg.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) ? m.msg.message.listResponseMessage.singleSelectReply.selectedRowId : (m.msg.xtype == 'templateButtonReplyMessage') && m.msg.message.templateButtonReplyMessage.selectedId.startsWith(prefix) ? m.msg.message.templateButtonReplyMessage.selectedId : ''   
        const order = ordermessage.slice(0).trim().split(/ +/).shift().toLowerCase()	   
	 
	
	    //Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}} 
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./Media/bot.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}		
	
// Group
        const groupMetadata = m.isGroup ? await QueenNilu.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
	    const isBan = banned.includes(m.sender)
        const isPremium = premium.includes(m.sender)
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
        const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
        const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
        const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
        const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
        const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const antiWame = m.isGroup ? ntwame.includes(from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(from) : false
        const solot = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔  Win',
		'🍒 : 🍒 : 🍒 Win',
		'🍌 : 🍌 : 🍌 Lose'
		]

//afk and other
try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            
    let chats = global.db.data.chats[m.chat]
    if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
    if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
    } else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
    }
    
    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
//function leveling & pick
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

// Public & Self
if (!QueenNilu.public) {
    if (!m.key.fromMe) return
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
const hsjdh = randomNomor(5)

//auto react all message
//QueenNilu.sendMessage(m.chat, {
          //: {
           // text: `${pickRandom(['😨','😅','😂','😳','😎', '🥵', '😱', '🐦', '🙄', '🐤','🗿','🐦','🤨','🥴','😐','👆','😔', '👀','👎'])}`,
            //key: m.key,
         // }})

//auto recording all
    if (global.autoRecord) { if (m.chat) { QueenNilu.sendPresenceUpdate('recording', m.chat) }
}
//autotyper all
  if (global.autoTyping) { if (m.chat) { QueenNilu.sendPresenceUpdate('composing', m.chat) }
}

// total hit
        global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/QueenNilu-md/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/QueenNilu-md${moment.tz('Asia/Kolkata').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}

//premium
const prem1 = `Hi bro  ${pushname} ${ucapanWaktu} \n\nThis feature is for premium members only, please buy premium to use this feature`
const prem2 = `Click the button below to buy premium`
const prem3 = [{buttonId: `${prefix}buypreim`,buttonText: {displayText: `BUY PREMIUM`,},type: 1,},]
blomdaftar = `${ucapanWaktu} @${sender.split("@")[0]} Kamu belum terdaftar di database cek private message mu untuk mendaftar`
limitabis = `*[YOUR LIMIT IS EXPIRED]*\nBuy limit in ${prefix}buylimit or buy premium to get unlimited limit`

//WARRRRRRR
const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/AgPwKRhs9an5F6WhnwXhdmhf8PX29TP_olqe4FIv1piE.enc",
"fileSha256": "u1dFgoXE6JsB5bUricNLDnIBh9NFx4QMuPMLccYrcb0=",
"fileEncSha256": "EK4PgZmQ6QoCl0GRQp3K8PCAzo9RXeMOU8NFjwnWXp0=",
"mediaKey": "XJ4fPYzZ63TWoziMvjXMHZQttVJLGpGN6wDjDpzdx7k=",
"mimetype": "image/webp",
"directPath": "/v/t62.15575-24/40664462_556808939544453_4219685480579374478_n.enc?ccb=11-4&oh=01_AVye92lzVBcYK_Ym5s5o-FrP_CF18W5sg9fb_Et5N3rV7g&oe=63639F3F",
"fileLength": "14240",
"mediaKeyTimestamp": "1664991742",
"isAnimated": false
}}}
const xbug = (teks) => {
  QueenNilu.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'INR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})}
//-------------------End--------------------\\
//Dont edit ot recode or bug wont work

const fmedia =  {
  key : {
    fromMe: false,
participant : '0@s.whatsapp.net'
},
     contextInfo: {
    forwardingScore: 9999,
    isForwarded: false, //:'v
showAdAttribution: true,
title: botname,
mediaType: "VIDEO",
mediaUrl: websitex,
previewType: "PHOTO",
thumbnail: thumb,
sourceUrl: "",
detectLinks: false,
    }}
    
    //reply fake
	//group target \\
const reply = (teks) => {
           QueenNilu.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./Media/bot.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }

	//button
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const butonna = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
QueenNilu.sendMessage(id, butonna, options)
}
const http = randomNomor(500)

//document
const kontol = {
	key : {
   participant : '0@s.whatsapp.net'
},
       message: {
    documentMessage: {
    title: `${pushname}`, 
    jpegThumbnail: thumb
  }
}
      }
sendMenuDoc = async (ID, doc, fileName, fileLength, caption, footer, time, buttons, boddy, thumbnail, thumbnailUrl, sourceUrl, mediaUrl, options) => {
let buttonMessage = {
  document: doc,
  mimetype: "application/pdf",
  fileName: fileName,
  fileLength: fileLength,
  caption: caption,
  footer: footer,
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
     title: time,
     body: boddy,
     thumbnail: thumbnail,
     thumbnailUrl: thumbnailUrl,
     sourceUrl: sourceUrl,
     mediaUrl: mediaUrl,  
     renderLargerThumbnail: true,
     showAdAttribution: true,
     mediaType: 1
   }}
       }
   QueenNilu.sendMessage(m.chat, buttonMessage, options)
   }
                
        // Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await QueenNilu.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await QueenNilu.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        
        // Anti Link
        if (Antilinkgc) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return m.reply(`${mess.botAdmin}, to kick the person who send link`)
        let gclink = (`https://chat.whatsapp.com/`+await QueenNilu.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return QueenNilu.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nYou won't be kicked by a bot because what you send is a link to this group`})
        if (isAdmins) return QueenNilu.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to post any link`})
        if (isCreator) return QueenNilu.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nOwner has sent a link, owner is free to post any link`})
        await QueenNilu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			QueenNilu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			QueenNilu.sendMessage(from, {text:`\`\`\`「 Group Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending group link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
            }            
        }
        
          // Antiwame by xeon
  if (antiWame)
  if (budy.includes(`Wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
        await QueenNilu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			QueenNilu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
QueenNilu.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
        await QueenNilu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			QueenNilu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
QueenNilu.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antivirtex by xeon
  if (antiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return m.reply(mess.botAdmin)
          await QueenNilu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			QueenNilu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			QueenNilu.sendMessage(from, {text:`\`\`\`「 Virus Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending virus in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
//anti bad words by xeon
if (antiToxic)
if (bad.includes(messagesD)) {
tos = ['Hey, watch your mouth','Never been taught how to speak?','Stop being toxic my friend🤢','Dont be toxic🦄']
sin =  tos[Math.floor(Math.random() * (tos.length))]
m.reply(sin)
if (m.text) {
bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin that's why i won't kick you😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await QueenNilu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			QueenNilu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
QueenNilu.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was kicked because of using bad words in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})}
}
//antilink youtube video by xeon
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await QueenNilu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			QueenNilu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
QueenNilu.sendMessage(from, {text:`\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink youtube channel by xeon
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await QueenNilu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			QueenNilu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
QueenNilu.sendMessage(from, {text:`\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube channel link in this group`, contextInfo:{mentionedJid:[m.sendet]}}, {quoted:m})
} else {
}
//antilink instagram by xeon
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await QueenNilu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			QueenNilu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
QueenNilu.sendMessage(from, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending instagram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink facebook by xeon
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await QueenNilu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			QueenNilu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
QueenNilu.sendMessage(from, {text:`\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending facebook link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink telegram by xeon
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await QueenNilu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			QueenNilu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
QueenNilu.sendMessage(from, {text:`\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending telegram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink tiktok by xeon
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await QueenNilu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			QueenNilu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
QueenNilu.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending tiktok link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink twitter by xeon
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await QueenNilu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			QueenNilu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
QueenNilu.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending twitter link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

/// AUTO STICKER COSTEM SEND \\\

for (let anji of sticker){
    if (budy.toLowerCase() === anji){
        result = fs.readFileSync(`./Media/sticker/${anji}.webp`)
        QueenNilu.sendMessage(m.chat, { sticker: result }, { quoted: m })
        }
}
for (let anju of audio){
    if (budy.toLowerCase() === anju){
        result = fs.readFileSync(`./Media/audio/${anju}.mp3`)
        QueenNilu.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
        }
}

//antilink all by xeon
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await QueenNilu.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			QueenNilu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
QueenNilu.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}



      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

//emoji 
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
const buttons = [{buttonId: "y", buttonText: {displayText:satu}, type: 1}]
const buttonMessage = {image: {url: emoji.images[dua].url},caption: "Here you go!",footerText: `${botname}`,buttons: buttons,headerType: 4}
QueenNilu.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (e) {
m.reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: QueenNilu.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, QueenNilu.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
QueenNilu.ev.emit('messages.upsert', msg)
}

//guess song
        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await QueenNilu.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, QueenNilu.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Wrong answer!*')
        }
        
        //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game Has Ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to surrender and admit defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await QueenNilu.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await QueenNilu.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    QueenNilu.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    QueenNilu.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) QueenNilu.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) QueenNilu.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) QueenNilu.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    QueenNilu.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) QueenNilu.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) QueenNilu.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    QueenNilu.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Don't tag him!
He's in AFK ${reason ? 'with reason ' + reason : 'no reason'}
During ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
You stop AFK${user.afkReason ? ' after ' + user.afkReason : ''}
During ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
        //menu image randomizer
	let picaks = [flaming,fluming,flarun,flasmurf]
	let picak = picaks[Math.floor(Math.random() * picaks.length)]
	
	//menu doc randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)

//swtich case
        switch(command) {
	case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} *Already Afk*${text ? ': ' + text : ''}`)
            }
            break	
                case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply(`You Are Still In The Game`)
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if (room.x !== room.o) await QueenNilu.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await QueenNilu.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Waiting For Partner' + (text ? ` Type The Command Below ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            QueenNilu.sendText(m.chat, `Successfully deleted TicTacToe session`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 does not exist`)
            } else throw '?'
            } catch (e) {
            m.reply('damaged')
            }
            }
            break
            case 'suitpvp':case 'rps': case 'rockpaperscissors':case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Complete your previous game`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Can't play with myself !`)
            if (!m.mentionedJid[0]) return m.reply(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `The person you are challenging is playing suit with someone else :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} *Challenged* @${m.mentionedJid[0].split`@`[0]} *to play suit*

*Hi* @${m.mentionedJid[0].split`@`[0]} *Please type accept to accept or type reject to reject`
            this.suit[id] = {
            chat: await QueenNilu.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) QueenNilu.sendText(m.chat, `_Suit time out_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
/////////////////////////////////////////FUNCTIUONSMY ------------------------------------------------------


//---------------------------------------------APK DOWNLOADER -------------------------------

case 'apk':{
    /*var P_LINK = ''
    if (global.LANG == 'EN') P_LINK = return reply('*💃 Please give me a correct link*\n _.apk https://play.google.com/store/apps/details?id=com.whatsapp_')
    if (global.LANG == 'EN') P_LINK = */
    
               if (!text) return reply('*💃 Please give plastore app name*')
                await QueenNilu.sendText(m.chat,mess.wait)
               await fetchJson(`https://api.akuari.my.id/search/playstoresearch?query=${text}`)
                .then(async (janiya) => {  
               const caption = `   *💃Qᴜᴇᴇɴ ɴɪʟᴜ ᴀᴘᴋ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ 💃*
    
     ☛ 𝚃𝙸𝚃𝙻𝙴 : ${janiya.hasil[0].title}
     ☛ 𝙿𝙰𝙲𝙺𝙰𝙶𝙴 𝙽𝙰𝙼𝙴 : ${janiya.hasil[0].appId}
     ☛ 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁 : ${janiya.hasil[0].developer}
     ☛ 𝚁𝙰𝚃𝙴 : ${janiya.hasil[0].scoreText}
     ☛ 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽 : ${janiya.hasil[0].summary}
     ☛ 𝚄𝚁𝙻 : ${janiya.hasil[0].url} 
    `
       
       const buttons = [
                        {buttonId: `getapk ${janiya.hasil[0].url}`, buttonText: {displayText: '🗳️ ᴅᴏᴡɴʟᴏᴀᴅ ᴀᴘᴋ 🗳️'}, type: 1},
                         
                    ]
                const buttonMessage = {
                        image: { url: janiya.hasil[0].icon },
                        caption: caption,
                        footer: global.botname,
                        buttons: buttons,
                        headerType: 4
                    }
                    
               await QueenNilu.sendMessage(m.chat, buttonMessage, { quoted: m })
                }).catch((err) => m.reply(NOT_FOUND))
           }
           break    
           
           case 'getapk' : {
                if (!text.includes('https://play.google.com/')) return reply('*💃 Please give me a correct link*\n _.apk https://play.google.com/store/apps/details?id=com.whatsapp_')
               await QueenNilu.sendMessage(from, { text: `*📥 Downloading Playstore apk...*` }, { quoted: m })
                   //  await getBuffer(`https://apk-dl2.herokuapp.com/api/apk-dl?url=${text}`)
                  //  const name = janiya.hasil[0].title || text
                    //const kkkkh = await fetchJson(`https://api.akuari.my.id/search/playstoresearch?query=${text}
                    //const name = `${args[0].split('https://play.google.com/store/apps/details?id=')[1]}`
                  // .then(async (janiya) => {  
                    const apk = 'https://apk-dl2.herokuapp.com/api/apk-dl?url='+text
                    await QueenNilu.sendMessage(from, { text: `*📤 Uploading playstore apk...*` }, { quoted: m })
                    //https://telegra.ph/file/5c59cd0f4c3e3fa79ee77.jpg
                    //const buffer = await getBuffer(janiya.respon.download)
                   await QueenNilu.sendMessage(m.chat, { document: {url : apk } , mimetype: 'application/vnd.android.package-archive', fileName: `${text}`}, { quoted: m })
                    //}).catch((err) => m.reply(NOT_FOUND))
               
                             }
                break
                case 'modapk' :{
                await QueenNilu.sendText(m.chat,mess.wait) 
                await fetchJson(`https://api.akuari.my.id/search/searchmod?query=${text}`)
                .then(async (janiya) => {  
                const search = janiya.respon
                let sections = []   
      for (let i of search) {
      const list = {title: `SELECT YOUR MOD APP`,
      rows: [
            {
             title: `${i.title}`, 
             rowId: `modapkdl ${i.link} ${i.title}`,
          description: `➮ 𝚅𝙴𝚁𝚂𝙸𝙾𝙽 ${i.version}`	     
            }, 
            ]
         }
         sections.push(list)   
         }
      const sendm =  QueenNilu.sendMessage(
          m.chat, 
          {
           text: `${m.pushName} This is matching apk\n\n➮ ʀᴇǫᴜᴇsᴛ ${text}`,
           footer: `${global.botname}`,
           title: "*💃Qᴜᴇᴇɴ ɴɪʟᴜ ᴀᴘᴋ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ 💃*",
           buttonText: "DOWNLOAD MOD APK",
           sections
          }, { quoted : m })    
                }).catch((err) => m.reply(NOT_FOUND))
                }
                break
                case 'modapkdl' : {
                const down = await QueenNilu.sendMessage(from, { text: `*📥 Downloding mod apk...*` }, { quoted: m })
                const janiya = await fetchJson(`https://api.akuari.my.id/downloader/dlmod?link=${args[0]}`)
                const upload = await QueenNilu.sendMessage(from, { text: `*📤 Uploading mod apk...*` }, { quoted: m })
                await QueenNilu.sendMessage(m.chat,{delete : down.key })  
                await QueenNilu.sendMessage(m.chat, { document: { url : janiya.respon.linkdl } , mimetype: 'application/vnd.android.package-archive', fileName: `${args[1]}.apk`}, { quoted: m })
                await QueenNilu.sendMessage(m.chat,{delete : upload.key })  
               
                }

              break

              ////----------------------------------------EHI STORE ----------------------------------\\\\\


              case 'niluehi': {
    
                const ehinima = await fetchJson ('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/EHIJSON.json')
              ehi = ehinima.EHI_FILES[0].SG_FILE1
              ehi2 = ehinima.EHI_FILES[0].SG_FILE2
              ehi3 = ehinima.EHI_FILES[0].SG_FILE3
              ehi4 = ehinima.EHI_FILES[0].SG_FILE4
              ehi5 = ehinima.EHI_FILES[1].US_FILE1
              ehi6 = ehinima.EHI_FILES[1].US_FILE2
              ehi7 = ehinima.EHI_FILES[1].US_FILE3
              ehi8 = ehinima.EHI_FILES[1].US_FILE4
                             
                            await QueenNilu.sendMessage(m.chat, { text : `
            ${ehinima.EHI}
            ${ehinima.C_E_DATES}
            ${ehinima.XX_XX}
            ` } ,{ quoted: m })
                            await QueenNilu.sendMessage(m.chat, { document: { url: ehi }, mimetype: 'application/octet-stream', fileName: `${ehinima.EHI_IMOJI} FaceBook ${ehinima.EHI_IMOJI}.ehi`}, { quoted: m })
                            await QueenNilu.sendMessage(m.chat, { document: { url: ehi2 }, mimetype: 'application/octet-stream', fileName: `${ehinima.EHI_IMOJI} Whatsapp ${ehinima.EHI_IMOJI}.ehi `}, { quoted: m })
                            await QueenNilu.sendMessage(m.chat, { document: { url: ehi3 }, mimetype: 'application/octet-stream', fileName: `${ehinima.EHI_IMOJI} Youtube ${ehinima.EHI_IMOJI}.ehi`}, { quoted: m })
                            await QueenNilu.sendMessage(m.chat, { document: { url: ehi4 }, mimetype: 'application/octet-stream', fileName: `${ehinima.EHI_IMOJI} Zoom ${ehinima.EHI_IMOJI}.ehi`}, { quoted: m })
                            await QueenNilu.sendMessage(m.chat, { document: { url: ehi5 }, mimetype: 'application/octet-stream', fileName: `${ehinima.EHI_IMOJI2} FaceBook ${ehinima.EHI_IMOJI2}.ehi`}, { quoted: m })
                            await QueenNilu.sendMessage(m.chat, { document: { url: ehi6 }, mimetype: 'application/octet-stream', fileName: `${ehinima.EHI_IMOJI2} Whatsapp ${ehinima.EHI_IMOJI2}.ehi `}, { quoted: m })
                            await QueenNilu.sendMessage(m.chat, { document: { url: ehi7 }, mimetype: 'application/octet-stream', fileName: `${ehinima.EHI_IMOJI2} Youtube ${ehinima.EHI_IMOJI2}.ehi`}, { quoted: m })
                            await QueenNilu.sendMessage(m.chat, { document: { url: ehi8 }, mimetype: 'application/octet-stream', fileName: `${ehinima.EHI_IMOJI2} Zoom ${ehinima.EHI_IMOJI2}.ehi`}, { quoted: m })
                            
                            await QueenNilu.sendText(m.chat, `✅ _Success send_ *${m.pushName}* _Ehi Files..._`,m)
                            
                            }
                            break
              
                            case 'ehi' :  {
                              const buffer = await getBuffer('https://te.legra.ph/file/57c7bd5c8b26430634a40.jpg')
                              const link = 'http://youtube.com/c/Janithsadanuwan'
                              
                            await QueenNilu.sendMessage(from, { react: { text: `💉`, key: m.key }})
                            AGAINTRY = ` ╔══════❨ ❄ ❩══════╗
                            
                                        *🎗️ ǫᴜᴇᴇɴ ɴɪʟᴜ ᴇʜɪ 🎗️*
                                
                             ▫ ғʀᴇᴇ ᴇʜɪ
                             ▫ ᴍᴀᴋᴇ ᴅᴀᴛᴇ
                             ▫ ᴇxᴘɪʀᴇ ᴅᴀᴛᴇ 
                                 
                             _✕ ɴᴏ ʜᴀᴄᴋɪɴɢ_
                             _✕ ɴᴏ sᴘᴀᴍ_ 
                             _✕ ɴᴏ ᴅᴅᴏs_
                             _✕ ᴅᴏɴ\'ᴛ ᴜsᴇ ᴜɴɴᴇᴄᴇssᴀʀʏ ᴡᴏʀᴋ_
                             
                                *ᴇɴᴊᴏʏ ʏᴏᴜʀ ᴇʜɪ ғɪʟᴇs 💞.*
                            
                            ╚══════[💀]
                             `
                            let buttons = [
                            {buttonId: `httpinjector`, buttonText: {displayText: ' ʜᴛᴛᴘ ɪɴᴊᴇᴄᴛᴏʀ '}, type: 1},
                            {buttonId: `niluehi`, buttonText: {displayText: ' ᴇʜɪ ғɪʟᴇ '}, type: 1},
                            {buttonId: `aboutehi`, buttonText: {displayText: ' ᴀʙᴏᴜᴛ '}, type: 1}
                            
                            ]
                            let buttonMessage = {
                              document: fs.readFileSync('./lib/tes.xlsx'),
                              mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                              jpegThumbnail:buffer,
                              mentions: [m.sender],
                              fileName: `${global.ownername}`,
                              fileLength: 99999999999999,
                              caption: AGAINTRY,
                              footer: `_© JANIYA_`,
                              buttons: buttons,
                              headerType: 4,
                              contextInfo:{externalAdReply:{
                              title: `${global.botname}`,
                              body: `💃Qᴜᴇᴇɴ ɴɪʟᴜ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ💃`,
                              mediaType:2,
                              thumbnail: buffer,
                              sourceUrl: link,
                              mediaUrl: link,
                              }}
                              }
                            QueenNilu.sendMessage(m.chat, buttonMessage, {quoted: m })
                          }
              

                 break

                 case 'aboutehi' :{
                    var ABOUTEHI = ''
                    if (global.LANG == 'EN') ABOUTEHI = ` *Ehi file is*,
                     💬 It is a method where you can get free internet by using whatsapp package.
                     For example, you can use whatsapp package to go to tiktok, fb, youtube, google etc.
                    
                     This ehi file does not provide maximum internet speed.  But you can get internet facility at some speed.
                     You can find this ehi file which we usually use
                     You can use the type of file suitable for packages like whatsapp, facebook, youtube, zoom etc
                    
                    *How to use*
                     1. Install the http injector app on your phone.
                     2. Select the ehi file related to your package.
                     3. Enter that file into the httpinjector app and press the start button.
                    _( If you want to use this file, you must have one of the above packages installed )_
                    
                    
                    *© Janiya*`
                    if (global.LANG == 'SI') ABOUTEHI = `*💬 Ehi file යනු* ,
                    ඔබට whatsapp package බාවිතාකර free internet ලබාගත හැකි ක්‍රමයකි.
                    
                    උදාහරණයක් ලෙස , ඔබට whatsapp package එක බාවිතාකරමින් tiktok , fb , youtube , google යාම වැනිදේ සිදුකර හැකිවීම.
                    මෙම ehi file උපරිම අන්තර්ජාල වේගයක් ලබා නොදෙයි. නමුත් ඔබට යම් වේගයකින් අන්තර්ජාල පහසුකම් ලබාගත හැක.
                    ඔබට මෙම ehi file සාමාන්‍යයෙන් අප බාවිතාකරන 
                    whatsapp , facebook , youtube , zoom යන ආදී package වලට ගැලපෙන ආකාරයේ file බාවිතාකර හැක 
                    
                    
                    බාවිතාකරන්නේ කෙසේද ?
                    1. http injector app එක ඔබගේ phone එකට install කරගන්න 
                    2. ඔබගේ package එකට අදාල ehi file එක තෝරාගන්න 
                    3. එම file එක httpinjector app එකට ඇතුලත් කර start බටන් එක ඔබන්න 
                    ( ඔබට මෙම file බාවිතාකිරීමටනම් ඉහත කිසියම් හෝ package 1ක් දමාගෙන තිබිය යුතුය )
                    
                    *© Janiya*`
                    reply (ABOUTEHI)
                    }
                    break 
                    case 'httpinjector' : {
                           
                           const load = await QueenNilu.sendText(m.chat,'*📤 Uploading...*' )
                           await QueenNilu.sendMessage(m.chat, { document: { url: 'https://github.com/Dragonxjanith/UPLOADS/raw/main/APK/HTTP%20Injector%20(SSHProxyV2Ray)%20VPN.apk' }, mimetype: 'application/vnd.android.package-archive', fileName: `HTTP Injector Queen Nilu (SSHProxyV2Ray) VPN.apk`}, { quoted: m })
                           const app = await QueenNilu.sendMessage(m.chat, { delete: load.key })
                           await QueenNilu.sendMessage(from, { react: { text: `🚀`, key: app.key }})
                    }
                    break

            case'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    QueenNilu.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    QueenNilu.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    QueenNilu.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    QueenNilu.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    QueenNilu.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    QueenNilu.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    QueenNilu.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break

            case 'guess': {
                if (!args.join(" ")) throw `Example : ${prefix + command} song`
if (args[0] === "song") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
let anugas = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/guessSong.json')
let result = anugas[Math.floor(Math.random() * anugas.length)]
let msg = await QueenNilu.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
QueenNilu.sendText(m.chat, `What is the name of this song?\n\nArtist : ${result.artist}\nTime : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
QueenNilu.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess the song' }, type: 1 }], `Time has run out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
delete tebaklagu[m.sender.split('@')[0]]
}
}
}
break
            case 'matchquiz': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                let { genMath, modes } = require('./lib/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nUsage example: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                QueenNilu.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    m.reply("Time has run out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
  case 'slot': {
            const somtoy = solot[Math.floor(Math.random() * solot.length)]
            let sloth =`[  🎰VIRTUAL SLOT 🎰  ]\n------------------------\n\n🍒 : 🍌 : 🍇\n${somtoy}<=====\n🍇 : 🍌 : 🍒\n\n------------------------\n[  🎰 VIRTUAL SLOT 🎰  ]\n\n*Information* :\n_If you get 3 of the same fruit_\n_Means You Win_\n\n_Example : 🍒 : 🍒 : 🍒_ <=====`
            let buttons = [{ buttonId: 'slot', buttonText: { displayText: '🎰PLAY AGAIN🎰' }, type: 1 }]
            await QueenNilu.sendButtonText(m.chat, buttons, sloth, botname, m)
            }
            break
            case 'soulmate': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Your Soulmate Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await QueenNilu.sendButtonText(m.chat, buttons, jawab, botname, m, {mentions: ments})
            }
            break
            case 'couple': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await QueenNilu.sendButtonText(m.chat, buttons, jawab, botname, m, {mentions: menst})
            }
            break
            case 'buttonmaker': {
			if (!text) throw `Example : ${prefix + command} hi|hello`
            let jawab = `${text.split("|")[0]}`
            let buttons = [{ buttonId: 'menu', buttonText: { displayText: `${themeemoji}` }, type: 1 }]
            await QueenNilu.sendButtonText(m.chat, buttons, jawab, `${text.split("|")[1]}`, m)
            }
            break
            //////////////////////////////////////////////  News start \\\\\\\\\\\\\\\\\\\\\\\\\\\\

            case 'news' : {
                const load = await QueenNilu.sendText(m.chat, mess.wait , m, ) 
                const news = await fetchJson(`https://api.sdbots.tk/hirunews`)
                const cap = `
         *🏷️ මාතෘකාව :* ${news.title}
         *⏰ අලුත් කරන වේලාව :* _${news.date}_
         
         *📄️ විස්තරය :*
         ${news.description}
         
         `
         const templateButtons = [
             {index: 1, urlButton: {displayText: `හිරු පුවත්`, url: news.link }},
         
         
             ]
         
         const templateMessage = {
             image: {url: news.img },
             caption: '     ◉ 💃𝐐𝐔𝐄𝐄𝐍 𝐍𝐈𝐋𝐔 𝐍𝐄𝐖𝐒 💃 ◉\n\n'+cap,
             footer: global.botname,
             templateButtons: templateButtons,
             headerType: 4
         }
              
              await QueenNilu.sendMessage(m.chat, templateMessage, { quoted: m })
              await QueenNilu.sendMessage(m.chat,{delete : load.key })  
          
             // await QueenNilu.sendMessage(m.chat, { image: { url : news.img} , caption : cap }, { quoted: m })
           }
           break
           
            case 'news2' : {
            const load = await QueenNilu.sendText(m.chat, mess.wait , m, )
                
            const {esana_scrape, esana_latest_news_id, esana_scrape_from_id} = require("esana-node-api").esana_news;
            const helnews = await esana_scrape({ fetch: 'latest' , passcode: 'uakdmin_sr_2064'}) // Enter Your Passcode or Contact Admin (+94766239744)
         
         const title = helnews.news.helakuru.title
         const news = helnews.news.helakuru.description
         const img = helnews.news.helakuru.thumb
         const url = helnews.news.helakuru.url
         const date = helnews.news.helakuru.data
         
         const cap = `*_🏷️ Title_ ${title}*\n\n*_📄 News_* ${news}\n`
         const templateButtons = [
             {index: 1, urlButton: {displayText: `එසැන පුවත්`, url: url }},
         
         
             ]
         
         const templateMessage = {
             image: {url: img },
             caption: '     ◉ 💃𝐐𝐔𝐄𝐄𝐍 𝐍𝐈𝐋𝐔 𝐍𝐄𝐖𝐒 💃 ◉\n\n'+cap,
             footer: global.botname,
             templateButtons: templateButtons,
             headerType: 4
         }
              
              await QueenNilu.sendMessage(m.chat, templateMessage, { quoted: m })
              await QueenNilu.sendMessage(m.chat,{delete : load.key })  
                    
            }
            break
            case 'newsjson' : {
            const {esana_scrape, esana_latest_news_id, esana_scrape_from_id} = require("esana-node-api").esana_news;
            const all_news = await esana_scrape({ fetch: 'all' , passcode: 'uakdmin_sr_2064'}) // Enter Your Passcode or Contact Admin (+94766239744)
           // const helnews = await esana_scrape({ fetch: 'latest' , passcode: 'uakdmin_sr_2064'}) // Enter Your Passcode or Contact Admin (+94766239744)
          //  const helnew_s = await esana_scrape_from_id({ id: text , passcode: 'uakdmin_sr_2064'})
           const cap = `
           ${jsonformat(all_news)}
           `
         reply(cap)
         //reply(jsonformat(helnews))
         //reply(jsonformat(helnew_s))
            
            }
          break
          case 'newsjson2' : {
            const {esana_scrape, esana_latest_news_id, esana_scrape_from_id} = require("esana-node-api").esana_news;
            //const all_news = await esana_scrape({ fetch: 'all' , passcode: 'uakdmin_sr_2064'}) // Enter Your Passcode or Contact Admin (+94766239744)
           // const helnews = await esana_scrape({ fetch: 'latest' , passcode: 'uakdmin_sr_2064'}) // Enter Your Passcode or Contact Admin (+94766239744)
            const helnew_s = await esana_scrape_from_id({ id: text , passcode: 'uakdmin_sr_2064'})
           const cap = `
           ${jsonformat(helnew_s)}
           `
         reply(cap)
         //reply(jsonformat(helnews))
         //reply(jsonformat(helnew_s))
            
            }
          break
            case 'helakurunews' : case 'findnews' : {
            const load = await QueenNilu.sendText(m.chat, mess.wait , m, )
         
            var NEWSSS = ''
           if (global.LANG == 'EN') NEWSSS = '```💃 Click And Get Your news```'
           if (global.LANG == 'SI') NEWSSS = '```💃 ඔබට අවශ්‍ය පුවත පහත බටන බාවිතයෙන් ලබාගන්න```'
         
            const {esana_scrape, esana_latest_news_id, esana_scrape_from_id} = require("esana-node-api").esana_news;
            const all_news = await esana_scrape({ fetch: 'all' , passcode: 'uakdmin_sr_2064'}) // Enter Your Passcode or Contact Admin (+94766239744)
            
           
               // reply(jsonformat(all_news))
            
           // reply(i.news_id)
            let sections = []   
           for (let i of all_news) {
         //  reply(i.news_id)
           const list = {title: `ǫᴜᴇᴇɴ  ɴɪʟᴜ ɴᴇᴡs `,
           rows: [
                 {
                  title: `${i.title}`, 
                  rowId: `getnews ${i.id}`
                 }, 
                 ]
              }
              sections.push(list)   
              }
           const sendm =  QueenNilu.sendMessage(
               m.chat, 
               {
                text: NEWSSS,
                footer: global.botname+'\n get on helakuru.com' ,
                title: "*◉  💃𝐐𝐔𝐄𝐄𝐍 𝐍𝐈𝐋𝐔 𝐍𝐄𝐖𝐒 💃 ◉*",
                buttonText: "GET NEWS",
                sections
               }, { quoted : m })    
            
            //all
           /* const all_news = await esana_scrape({ fetch: 'all' , passcode: 'your_passcode'}) // Enter Your Passcode or Contact Admin (+94766239744)
            reply(latest_news)*/
            await QueenNilu.sendMessage(m.chat,{delete : load.key })  
           
            
            }
            break
            case 'getnews' : {
            const load = await QueenNilu.sendText(m.chat, mess.wait , m, )
         
            const {esana_scrape, esana_latest_news_id, esana_scrape_from_id} = require("esana-node-api").esana_news;
            const helnews = await esana_scrape_from_id({ id: text , passcode: 'uakdmin_sr_2064'})
          //  reply(jsonformat(helnews))        
         
         const title = helnews.news_from_id.helakuru.title
         const news = helnews.news_from_id.helakuru.description
         const img = helnews.news_from_id.helakuru.thumb
         const url = helnews.news_from_id.helakuru.url
         const date = helnews.news_from_id.helakuru.data
         
         const cap = `*_🏷️ Title_ ${title}*\n\n*_📄 News_* ${news}\n`
         const templateButtons = [
             {index: 1, urlButton: {displayText: `ɴᴇᴡs ᴜʀʟ`, url: url }},
         ]
         
         const templateMessage = {
             image: {url: img },
             caption: '     ◉ 💃 *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙻𝚄 𝙽𝙴𝚆𝚂* 💃 ◉\n\n'+cap,
             footer: `${global.botname}` ,
             templateButtons: templateButtons,
             headerType: 4
         }
              
              await QueenNilu.sendMessage(m.chat, templateMessage, { quoted: m })
              await QueenNilu.sendMessage(m.chat,{delete : load.key })  
                    
                    
            
            }
            break
            //////////////////////news End \\\\\\\\\\\\\\\\\\\\\\\\\\
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                QueenNilu.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Enter the group link!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await QueenNilu.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leavegc': {
                if (!isCreator) throw mess.owner
                await QueenNilu.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif has been successfully changed to\n\n${themeemoji} Packname : ${global.packname}\n${themeemoji} Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await QueenNilu.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await QueenNilu.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await QueenNilu.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await QueenNilu.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await QueenNilu.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await QueenNilu.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await QueenNilu.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await QueenNilu.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setbotpp': case 'setbotpp': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await QueenNilu.downloadAndSaveMediaMessage(quoted)
                await QueenNilu.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setgrouppp': case 'setgruppp': case 'setgcpp': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await QueenNilu.downloadAndSaveMediaMessage(quoted)
                await QueenNilu.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
                case 'setexif': {
                    if (!isCreator) return replay(`${mess.owner}`)
                    if (!text) return replay(`${Lang.EXAMPLE}\n : ${prefix + command} packname|author`)
               global.packname = text.split("|")[0]
               global.author = text.split("|")[1]
               reply(`Exif Has Been Successfully Changed to\n\n🔮 Packname : ${global.packname}\n🔮 Author : ${global.author}`)
                 }
                 break
                 
                 case 'setalive': {
                    if (!isCreator) return replay(`${mess.owner}`)
                    if (!text) return replay(`.setalive hello \n  i am alive now \n how can i help you`)
               global.alive = text
               reply('*✅ ALIVE MASSAGE HAS CHANGE*\n '+'```'+global.alive+ '```')
                 }
                 break
                 case 'setbadwords' : {
                 global.ANTI_BADWORD = text
                 }
                 break
                 case 'setlang': {
                    if (!isCreator) return replay(`${mess.owner}`)
                    if (!text) return replay(`.setalive hello \n  i am alive now \n how can i help you`)
               global.LANG = text
               reply('*✅ ALIVE MASSAGE HAS CHANGE*\n '+'```'+global.LANG+ '```')
                 }
                 break
                 case 'setwelcome': {
                    if (!isCreator) return replay(`${mess.owner}`)
                    if (!text) return replay(`.setalive hello \n  i am alive now \n how can i help you`)
               global.WELCOME_MSG = text
               reply('*✅ WELCOME MSG*\n '+'```'+global.WELCOME_MSG+ '```')
                 }
                 break
                 case 'setzenzapi': {
                    if (!isCreator) return replay(`${mess.owner}`)
                    if (!text) return replay(`.setalive hello \n  i am alive now \n how can i help you`)
               global.zenzapi = text
               reply('*✅ ZENZ API HAS CHANGE*\n '+'```'+global.zenzapi+ '```')
                 }
                 break
                 case 'setalivelogo': {
                    if (!isCreator) return replay(`${mess.owner}`)
                    if (!text) return replay(`${Lang.EXAMPLE}\n : .setalivelogo `)
               global.alivelogo = text
               reply('*✅ ALIVE LOGO MASSAGE HAS CHANGE*\n '+'```'+global.alive+ '```')
                 }
                 break
                 case 'settiktokthub': {
                    if (!isCreator) return replay(`${mess.owner}`)
                    if (!text) return replay(`Example : .setalivelogo `)
               global.tiktokthub = text
               reply('*✅ _*\n '+'```'+global.tiktokthub+ '```')
                 }
                 break
                       case 'grupinfo': case 'groupinfo':
                       try{
                        var pic = await QueenNilu.getProfilePicture(m.chat)
                         } catch {
                        var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                         }
                       let ingfo = `*𝗚𝗥𝗢𝗨𝗣 𝗜𝗡𝗙𝗢*\n\n*𝗡𝗔𝗠𝗘 :* ${groupName}\n*𝗜𝗗 𝗚𝗥𝗢𝗨𝗣:* ${m.chat}\n*𝗠𝗔𝗗𝗘 :* ${moment(`${groupMetadata.creation}` * 1000).tz('Africa/Harare').format('DD/MM/YYYY HH:mm:ss')}\n*𝗚𝗥𝗢𝗨𝗣 𝗢𝗪𝗡𝗘𝗥:* @${groupMetadata.owner.split('@')[0]}\n*𝗔𝗗𝗠𝗜𝗡𝗦 :* ${groupAdmins.length}\n*𝗠𝗘𝗠𝗕𝗘𝗥𝗦 :* ${participants.length}\n*𝗗𝗘𝗦𝗖 :* \n${groupMetadata.desc}`
                       ds = await getBuffer(pic)
                       QueenNilu.sendMessage(m.chat, { image: ds,caption: ingfo, mentions: [groupMetadata.owner] }, { quoted: m})
                       break
                       case 'tagadmin' : {
                       if (!m.isGroup) throw mess.group
                       let teks = ` _❗ ${groupName}Admins ❗_
                       
     *MASSAGE :* ${q ? q : 'blank'}\n\n`
                       for (let mem of groupAdmins) {
                                       teks += `    `
                                       }
                       QueenNilu.sendMessage(m.chat, { text: teks, mentions: groupAdmins.map(a => a.id) }, { quoted: m })
                                       
                       }
                       break
                                   case 'tagall': case 'tag': {
                                       if (!m.isGroup) throw mess.group
                                       if (!isBotAdmins) throw mess.botAdmin
                                       if (!isAdmins) throw mess.admin
                       let teks = ` *ＧＲＯＵＰ  ＮＯＴＩＦＹ*
                        
                         *𝐌𝐄𝐒𝐒𝐀𝐆𝐄 : ${q ? q : 'blank'}*\n\n`
                                       for (let mem of participants) {
                                       teks += `🔵 @${mem.id.split('@')[0]}\n`
                                       }
                                       QueenNilu.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                                       }
                                       break
                                       case 'hidetag': {
                                   if (!m.isGroup) throw mess.group
                                   if (!isAdmins) throw mess.admin
                                   QueenNilu.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
                                   }
                                   break
                                   case '####taggrp': {
                                   for (let mem of participants) {
                                      await QueenNilu.sendText(m.chat,mem.id) 
                                       }
                                   
        }
                                   break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Enter Query text!'
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `💙💍 *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`
            if (!text) throw `Enter Reason for Vote, Example: *${prefix + command} Handsome Owner*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - for sure\n*${prefix}devote* - for devote\n*${prefix}cekvote* - to check the vote\n*${prefix}deletevote* - to delete votes`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}deletevote* - to delete votes`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: QueenNilu.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            QueenNilu.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You have Voted'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: QueenNilu.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            QueenNilu.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You have Voted'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: QueenNilu.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            QueenNilu.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'checkvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes


©${QueenNilu.user.id}
`
QueenNilu.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            delete vote[m.chat]
            m.reply('Successfully Deleted Vote Session In This Group')
	    }
            break
            case 'group': case 'grup': {
             if (!m.isGroup) throw mess.group
             if (!isBotAdmins) throw mess.botAdmin
             if (!isAdmins) throw mess.admin
             if (args[0] === 'close'){
                 await QueenNilu.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(Lang.G_MUTE)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'open'){
                 await QueenNilu.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(Lang.G_UNMUTE)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                     { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                     { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                 ]
                 await QueenNilu.sendButtonText(m.chat, buttons, `Group Mode`, QueenNilu.user.name, m)

          }
         }
         break
         case 'mute':{
             if (!m.isGroup) throw mess.group
             if (!isBotAdmins) throw mess.botAdmin
             if (!isAdmins) throw mess.admin
             
             await QueenNilu.sendMessage(from, { react: { text: `🔐`, key: m.key }})
             await QueenNilu.groupSettingUpdate(m.chat, 'announcement')
             const sendmsg = await QueenNilu.sendText(m.chat,Lang.G_MUTE)
             await QueenNilu.sendMessage(from, { react: { text: `🔇`, key: sendmsg.key }})
             
            }
            break
         case 'unmute':{
             if (!m.isGroup) throw mess.group
             if (!isBotAdmins) throw mess.botAdmin
             if (!isAdmins) throw mess.admin
             await QueenNilu.sendMessage(from, { react: { text: `🔓`, key: m.key }})
             await QueenNilu.groupSettingUpdate(m.chat, 'not_announcement')
             const sendmsg = await QueenNilu.sendText(m.chat,Lang.G_UNMUTE)
             await QueenNilu.sendMessage(from, { react: { text: `🔊`, key: sendmsg.key }})
             
          }
          break
         case 'editinfo': {
             if (!m.isGroup) throw mess.group
             if (!isBotAdmins) throw mess.botAdmin
             if (!isAdmins) throw mess.admin
          if (args[0] === 'open'){
             await QueenNilu.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(Lang.G_INFOON)).catch((err) => reply(jsonformat(err)))
          } else if (args[0] === 'close'){
             await QueenNilu.groupSettingUpdate(m.chat, 'locked').then((res) => reply(Lang.G_UNMUTE)).catch((err) => reply(jsonformat(err)))
          } else {
          let buttons = [
                     { buttonId: 'editinfo open', buttonText: { displayText: 'OPEN' }, type: 1 },
                     { buttonId: 'editinfo close', buttonText: { displayText: 'CLOSE' }, type: 1 }
                 ]
                 await QueenNilu.sendButtonText(m.chat, buttons, `Mode Edit Info`, QueenNilu.user.name, m)

         }
         }
         break
case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const xeonkak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
QueenNilu.sendMessage(m.chat, { text: xeonkak }, { quoted: m })
break
case 'mutebot': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`It's Been Active Before`)
                db.data.chats[m.chat].mute = true
                m.reply(`${QueenNilu.user.name} has been muted in this group !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Not Activated Before`)
                db.data.chats[m.chat].mute = false
                m.reply(`${QueenNilu.user.name} has been unmuted in this group !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await QueenNilu.sendButtonText(m.chat, buttons, `Mute Bot`, botname, m)
                }
             }
             break
case 'chatinfo': {
if (!m.quoted) m.reply('Reply Message')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) return m.reply('The message was not sent by a bot!')
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `${global.themeemoji} @${i.userJid.split('@')[0]}\n`
teks += ` ┗━${global.themeemoji} *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ${global.themeemoji} *Status :* ${read ? 'Read' : 'Sent'}\n\n`
}
QueenNilu.sendTextWithMentions(m.chat, teks, m)
}
break
            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await QueenNilu.groupInviteCode(m.chat)
                QueenNilu.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Enter the value enable/disable'
                if (args[0] === 'enable') {
                    await QueenNilu.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await QueenNilu.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'The message was not sent by a bot!'
                QueenNilu.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'report': case 'bug': {
            	if (!text) throw `Example : ${prefix + command} Report an error feature`
               let ownernya = owner + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Message From : @${me.split('@')[0]} \nFor : @${ownernya.split('@')[0]}\n\n${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '🙏THANKS FOR THE REPORT' }, type: 1 }]
            await QueenNilu.sendButtonText(ownernya, buttons, pjtxt, botname, m, {mentions: ments})
            let akhji = `Report Sent\nTo Owner @${ownernya.split('@')[0]}\n*Thank you for the report🙏*\n_Your number will be blocked_\n_If the Report is Only Created_`
            await QueenNilu.sendButtonText(m.chat, buttons, akhji, botname, m, {mentions: ments})
            }
            break
            
            case 'bctext': case 'broadcasttext': case 'broadcast':
			    if (!isCreator) throw mess.owner
		            if (!text) throw `Enter text`
		                            var data = await store.chats.all()
                            for (let i of data) {
                               QueenNilu.sendMessage(i.id, {text: `${ownername}'s Broadcast\n\nMessage : ${q}` })
                               await sleep(1000)
                            }
                            break
case 'broadcastimage': case 'bcimage': case 'broadcastvideo': case 'broadcastvid':
if(!isCreator) throw mess.owner
        if (!text) throw `enter text`
        let getGroups = await QueenNilu.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let xeoncast = groups.map(v => v.id)
        m.reply(` Broadcasting in ${xeoncast.length} Group Chat, in ${xeoncast.length * 1.5} seconds`)
        for (let i of xeoncast) {
let txt = `${ownername}'s Broadcast\n\nMessage : ${text}`
if(/image/.test(mime)) {
let media = await quoted.download()
await QueenNilu.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
}
if(/video/.test(mime)){
let media = await quoted.download()
await QueenNilu.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
}
            }
        m.reply(`Successfuly Broadcasted in ${xeoncast.length} Groups`)      
        break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Message!!')
		let wokwol = await QueenNilu.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('The message you replied to does not contain a reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `💃*PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
                 for (let i of anulistp) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `💃 *Name :* ${nama}\n💃 *User :* @${i.split('@')[0]}\n💃 *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 QueenNilu.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `🔥 *GROUP CHAT LIST*\n\nTotal Group : ${anulistg.length} Group\n\n`
                 for (let i of anulistg) {
                     let metadata = await QueenNilu.groupMetadata(i)
                     teks += `🔥 *Name :* ${metadata.subject}\n🔥 *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n🔥*ID :* ${metadata.id}\n🔥 *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n🔥 *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 QueenNilu.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'onlinelist': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    QueenNilu.sendText(m.chat, 'Online Member:\n\n' + online.map(v => '🌝 @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
             case 'sticker': case 'st': case 'stickergif2': case 'sgif2': case 's': {
                if (!quoted) return reply(`💃 Reply Video/Image With Caption ${prefix + command}`)
              
                var MAX = ''
                if (global.LANG == 'EN') MAX= '*Maximum 10 seconds videos only!*'
                if (global.LANG == 'SI') MAX= '*උපරිම තත්පර 10ක වීඩියෝ පමණයි !*'
                var MA2X = ''
                if (global.LANG == 'SI') MA2X= '*💃 වීඩියෝවකට හෝ ජායාරූපයකට රිප්ලයි ලබාදෙන්න !*'
                if (global.LANG == 'EN') MA2X= '*💃 Please reply video or photo !*'
                
                 QueenNilu.sendText(m.chat, Lang.STICKER_MAKING )
                        if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await QueenNilu.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: m.pushName })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return reply(MAX)
                    let media = await quoted.download()
                    let encmedia = await QueenNilu.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: m.pushName })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw MA2X
                    }
                }
            break
            case 'ebinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
case 'buypreim':
m.reply(`Chat owner bro, please type .owner`)
break
  case 'addprem':
if (!isCreator) throw mess.owner
if (!q) return m.reply(`Enter the sample number\n\nExample: \n${prefix}${command} 916909137213`)
if(isNaN(q)) return await m.reply('must be a number')
  if (q.includes(`+`)) return m.reply('Do not use + direct number 9169****')
prmi = args.join(" ")
premium.push(`${prmi}@s.whatsapp.net`)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
m.reply(`* PREMIUM ADDED *\n\n🌝 *ID*: ${prmi}`)
break
case 'delprem':
 case 'dellprem':
if (!isCreator) throw mess.owner
  if (!q) return m.reply(`Enter the Number\n\nExample: \n${prefix}${command} 916909137213`)
  if(isNaN(q)) return await m.reply('must be a number')
  if (q.includes(`+`)) return m.reply('Do not use + direct number 9169****')
  prmin = `${q}@s.whatsapp.net`
anul = banned.indexOf(prmin)
premium.splice(anul, 1)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
m.reply(`Success deleting premium ${prmi}`)
break
            case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anumojimix.results) {
		    let encmedia = await QueenNilu.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	case 'emojimix2': {
	    if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let anumix2 = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anumix2.results) {
		    let encmedia = await QueenNilu.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
         case 'tts': case 'say':{
         	if (!text) throw `Example : ${prefix + command} text`
             let tts = await fetchJson(`https://api.akuari.my.id/texttovoice/texttosound_english?query=${text}`)
             QueenNilu.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/mp4', ptt: true, fileName: `${text}.mp3` }, { quoted: m })
         	}
         break 
	case 'smeme': case 'stickermeme': case 'stickmeme': {
let { TelegraPh } = require('./lib/uploader')
if (!text) return m.reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (text.includes('|')) return m.reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (!/image/.test(mime)) return m.reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
m.reply(mess.wait)
mee = await QueenNilu.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await QueenNilu.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case 'photo': case 'toimg': {
    var REPLY 
    if (global.LANG == 'EN') REPLY = '*Please reply sticker*'
    if (global.LANG == 'SI') REPLY ='*කරුනාකර ස්ටිකර් එකකට රිප්ලයි කරන්න*'
    var STICKER
    if (global.LANG == 'EN') STICKER = '*This is not Sticker please reply correct sticker'
    if (global.LANG == 'SI') STICKER = '*ඔබ රිප්ලයි කරන ලද්දේ ස්ටිකර් එකකට නොවේ කරුනාකර ස්ටිකර් එකකට රිප්ලයි කරන්න*'
        if (!quoted) throw '*photo එකකට රිප්ලයි කරන්න !*'
        if (!/webp/.test(mime)) throw `${REPLY} *${prefix + command}*`
        const load = await QueenNilu.sendText(m.chat, Lang.CONVER_TING )
        let media = await QueenNilu.downloadAndSaveMediaMessage(quoted)
        await QueenNilu.sendMessage(m.chat, { delete: load.key })
        let ran = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) throw err
            let buffer = fs.readFileSync(ran)
            QueenNilu.sendMessage(m.chat, { image: buffer , caption : global.cap  }, { quoted: m })
            fs.unlinkSync(ran)
        })
    }

            break
case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `reply sticker with caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await QueenNilu.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await QueenNilu.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            QueenNilu.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            QueenNilu.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${QueenNilu.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            QueenNilu.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply video'
                if (!/webp/.test(mime)) throw `reply sticker with caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await QueenNilu.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await QueenNilu.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await QueenNilu.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    QueenNilu.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("youtube-yts")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${i.title}\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${i.timestamp}\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
                }
                QueenNilu.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `${themeemoji} *Title* : ${g.title}\n`
                teks += `${themeemoji} *Description* : ${g.snippet}\n`
                teks += `${themeemoji} *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
case 'video': { 
if (!text) return m.reply(`Example : ${prefix + command} Stay jb`)
            let ytsvideo = require("youtube-yts")
            let videosearch = await ytsvideo(text)
            listSerch = []
            teskd = `\nSearched Video: ${text}\n`
            for (let i of videosearch.all) {
                listSerch.push({
                    title: i.title,
                    rowId: `${prefix}ytmp4 ${i.url}`,
                    description: `Duration: ${i.timestamp}`
                })
            }
            let sections = [
                {
                    title: "Top " + videosearch.all.length + " videos thats matches search result",
                    rows: listSerch
                }
            ]
            const listMessage = {
                text: teskd,
                footer: botname,
                title: ``,
                buttonText: "Videos",
                mentions: parseMention(teskd), sections
            }
            return QueenNilu.sendMessage(m.chat, listMessage, {
                quoted: m
            })
            }
        break    


        ////////////////////////////////Meada start ------------------------------------\\\\\\\\\\\\\\\\\\\\\\\\\\
        case 'findsong':{
        if (!text) return m.reply(`Example : ${prefix + command} stay jb`)
            let ytslagu = require("youtube-yts")
            let lagusearch = await ytslagu(text)
            listSerch = []
            teskd = `Searched Song: ${text}\n`
            for (let i of lagusearch.all) {
                listSerch.push({
                    title: i.title,
                    rowId: `${prefix}ytmp3 ${i.url}`,
                    description: `Duration: ${i.timestamp}`
                })
            }
            const sections = [
                {
                    title: "Top " + lagusearch.all.length + " songs that matched search result",
                    rows: listSerch
                }
            ]
            const listMessage = {
                text: teskd,
                footer: botname,
                title: ``,
                buttonText: "Songs",
                mentions: parseMention(teskd), sections
            }
            return QueenNilu.sendMessage(m.chat, listMessage, {
                quoted: m
            })
            }
            break
        
            case 'play': case 'yt': { 
                var GIVEME = ''
                if (global.LANG == 'SI') GIVEME = "```💃 කරුනාකර මට වීඩියෝවක හෝ ගීතයක නමක් ලබාදෙන්න.```\n*උදාහරණ - .yt how to make queen nilu bot*"
                if (global.LANG == 'EN') GIVEME ="```💃 Please give me a video or song name.```\n *Example - .yt how to make queen nilu bot*"
                                                  await QueenNilu.sendMessage(from, { react: { text: `📽️`, key: m.key }})
                                                  if (!text) return reply (GIVEME)
                                                  await QueenNilu.sendText(m.chat,mess.wait, m, )
                                                  let yts = require("youtube-yts")
                                                  var svid = text.replace("shorts/","watch?v=")
                                                  var s2vid = svid.replace("?feature=share","")
                                                  yts(s2vid).then(async (search) => { 
                                                  let nima = search.all     
                if (search.all[0].type == 'channel') {
                
                                const buttons = [
                                    {buttonId: `selecttypebutton ${search.all[1].url}`, buttonText: {displayText: '🎬 VIDEO 🎬'}, type: 1},
                                    {buttonId: `audioselecttypebutton  ${search.all[1].url} `, buttonText: {displayText: '🎧 AUDIO 🎧'}, type: 1},
                 ]
                            const buttonMessage = {
                                    image: { url: search.all[1].thumbnail },
                                    caption: `◉⦁[ *💃 𝙽𝙸𝙻𝚄 𝚈𝚃 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁 💃* ]⦁◉
                
                *ᴀʙᴏᴜᴛ ʏᴏᴜʀ ʀᴇsᴜʟᴛ...*
                
                 ➥ ᴛɪᴛʟᴇ -  ${search.all[1].title}
                
                 ➥ ᴠɪᴇᴡs - ${search.all[1].views}
                
                 ➥ ᴅᴜʀᴀᴛɪᴏɴ - ${search.all[1].timestamp}
                
                 ➥ ᴜᴘʟᴏᴀᴅ ᴏɴ - ${search.all[1].ago}
                
                 ➥ ᴜʀʟ - ${search.all[1].url}` ,
                                    footer: global.botname,
                                    buttons: buttons,
                                    headerType: 4
                                }
                                
                               QueenNilu.sendMessage(m.chat, buttonMessage, { quoted: m })
                                 
                } else if (search.all[0].type == 'video') {
                                let nima = search.all           
                                const buttons = [
                                    {buttonId: `selecttypebutton ${search.all[0].url}`, buttonText: {displayText: '🎬 VIDEO 🎬'}, type: 1},
                                    {buttonId: `audioselecttypebutton  ${search.all[0].url} `, buttonText: {displayText: '🎧 AUDIO 🎧'}, type: 1},
                ]
                            const buttonMessage = {
                                    image: { url: search.all[0].thumbnail },
                                    caption:   `◉⦁[ *💃 𝙽𝙸𝙻𝚄 𝚈𝚃 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁 💃* ]⦁◉
                
                *ᴀʙᴏᴜᴛ ʏᴏᴜʀ ʀᴇsᴜʟᴛ...*
                
                 ➥ ᴛɪᴛʟᴇ -  ${search.all[0].title}
                
                 ➥ ᴠɪᴇᴡs - ${search.all[0].views}
                
                 ➥ ᴅᴜʀᴀᴛɪᴏɴ - ${search.all[0].timestamp}
                
                 ➥ ᴜᴘʟᴏᴀᴅ ᴏɴ - ${search.all[0].ago}
                
                 ➥ ᴜʀʟ - ${search.all[0].url}` ,
                                    footer: global.botname,
                                    buttons: buttons,
                                    headerType: 4
                                }
                                
                               QueenNilu.sendMessage(m.chat, buttonMessage, { quoted: m })
                                 
                }})
                                                  
                
                 
                                 }
                                              break
                                              case 'ytv': {
                const rash = await fetchJson(`https://github.com/Mrnimama/Mr-nima-/raw/main/SongVideo.jsons/songdl.json`)
                const mp14 = rash.mp14
                const mp24 = rash.mp24
                const sdpid = rash.sddlid
                const hdmidpid = rash.sdmiddlid
                const hdpid = rash.hddlid
                                              if (!text) throw `${Lang.EXAMPLE}\n : *${prefix + command} How to make queen nilu V2*`
                                                  await QueenNilu.sendText(m.chat, `\n*🔄 Please wait ${m.pushName}...*\n`, m, )
                                                  let yts = require("youtube-yts")
                                                  var svid = text.replace("shorts/","watch?v=")
                                                  var s2vid = svid.replace("?feature=share","")
                                                  yts(s2vid).then(async (search) => {  
                                                  for (let i of search.all)   
                                                  views = search.all[0].views
                                                      ngen = '◉⦁[ *💃 𝙽𝙸𝙻𝚄 𝚅𝙸𝙳𝙴𝙾 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁 💃* ]⦁◉\n\n*ᴀʙᴏᴜᴛ ʏᴏᴜʀ ʀᴇsᴜʟᴛ...*\n\n ➥ ᴛɪᴛʟᴇ - '+search.all[0].title+'\n\n ➥ ᴠɪᴇᴡs - '+views+'\n\n ➥ ᴅᴜʀᴀᴛɪᴏɴ - '+search.all[0].timestamp+'\n\n ➥ ᴜᴘʟᴏᴀᴅ ᴏɴ - '+search.all[0].ago+'\n\n ➥ ᴜʀʟ - '+search.all[0].url
                
                                
                                
                const sections = [
                    {
                    title: "ＱＵＥＥＮ  ＥＬＩＳＡ Ｖ2",
                    rows: [
                        {title: "144P 𝚀𝚞𝚊𝚕𝚒𝚝𝚢", rowId: `${mp14} ${search.all[0].url} 144p`, description: `${search.all[0].title}`},
                        {title: "240P 𝚀𝚞𝚊𝚕𝚒𝚝𝚢", rowId: `${mp24} ${search.all[0].url} 240p`, description: `${search.all[0].title}`},
                        {title: "360P 𝚀𝚞𝚊𝚕𝚒𝚝𝚢", rowId: `${sdpid} ${search.all[0].url} 360p`, description: `${search.all[0].title}`},
                        {title: "480P 𝚀𝚞𝚊𝚕𝚒𝚝𝚢", rowId: `${hdmidpid} ${search.all[0].url} 480p`, description: `${search.all[0].title}`},
                        {title: "720P 𝚀𝚞𝚊𝚕𝚒𝚝𝚢", rowId: `${hdpid} ${search.all[0].url} 720p`, description: `${search.all[0].title}`},
                        {title: "1080P 𝚀𝚞𝚊𝚕𝚒𝚝𝚢", rowId: `video2 ${search.all[0].url} 1080p`, description: `${search.all[0].title}`}
                    
                    ]
                    },
                ]
                
                const listMessage = {
                  text: ngen,
                  footer: global.botname,
                  buttonText: "ＳＥＬＥＣＴ ＶＩＤＥＯ",
                  sections
                }
                
                const me = await QueenNilu.sendMessage(m.chat, listMessage)}).catch((err) => m.reply('*Sorry, Can\'t Find your reqest ❗*'))
                await QueenNilu.sendMessage(from, { react: { text: `🎦`, key: m.key }})
                await new Promise(r => setTimeout(r, 2000)) 
                await QueenNilu.sendMessage(from, { react: { text: `⏳`, key: m.key }})
                await new Promise(r => setTimeout(r, 2000)) 
                await QueenNilu.sendMessage(from, { react: { text: `🎦`, key: m.key }})
                  }
                            break
                
                                              case 'song' : {
                var GIVEME = ''
                if (global.LANG == 'SI') GIVEME = "```💃 කරුනාකර මට ගීතයක නමක් ලබාදෙන්න.```\n*උදාහරණ - .song rosa male natuwe katu*"
                if (global.LANG == 'EN') GIVEME ="```💃 Please give me a song name.```\n *Example - .song rosa male natuwe katu*"
                const rash = await fetchJson(`https://github.com/Mrnimama/Mr-nima-/raw/main/SongVideo.jsons/songdl.json`)
                const audidd = rash.audcmd
                const docidd = rash.doccmd
                                              await QueenNilu.sendMessage(from, { react: { text: `🎵`, key: m.key }})
                                                  if (!text) return reply(GIVEME)
                                                  await QueenNilu.sendText(m.chat, mess.wait, m, )
                                                  let yts = require("youtube-yts")
                                                 // let search = await yts(text)
                                                  yts(text).then(async (search) => {  
                                                  for (let i of search.all)  
                                                  if(search.all.length < 1) throw Lang.NOT_FOUND 
                                                     
                                              
                                const footer = global.botname
                                const buttons = [
                                    {buttonId: `${docidd} ${search.all[0].url}`, buttonText: {displayText: '📁 DOCUMENT 📁'}, type: 1},
                                    {buttonId: `${audidd}  ${search.all[0].url}`, buttonText: {displayText: '🎧 AUDIO 🎧'}, type: 1}
                                    
                                ]
                            const buttonMessage = {
                                    image: { url: search.all[0].thumbnail },
                                    caption: `◉⦁[ *💃 𝙽𝙸𝙻𝚄 𝚂𝙾𝙽𝙶 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁 💃* ]⦁◉
                
                *ᴀʙᴏᴜᴛ ʏᴏᴜʀ ʀᴇsᴜʟᴛ...*
                
                 ➥ ᴛɪᴛʟᴇ -  ${search.all[0].title}
                
                 ➥ ᴠɪᴇᴡs - ${search.all[0].views}
                
                 ➥ ᴅᴜʀᴀᴛɪᴏɴ - ${search.all[0].timestamp}
                
                 ➥ ᴜᴘʟᴏᴀᴅ ᴏɴ - ${search.all[0].ago}
                
                 ➥ ᴜʀʟ - ${search.all[0].url}`,
                                    footer: footer,
                                    buttons: buttons,
                                    headerType: 4
                                }
                                
                               QueenNilu.sendMessage(m.chat, buttonMessage, { quoted: m })})
                                 
                                             }
                                             break
                                              case 'video': { 
                const rash = await fetchJson(`https://github.com/Mrnimama/Mr-nima-/raw/main/SongVideo.jsons/songdl.json`)
                const sdpid = rash.sddlid
                const hdmidpid = rash.sdmiddlid
                const hdpid = rash.hddlid
                
                var GIVEME = ''
                if (global.LANG == 'SI') GIVEME = "```💃 කරුනාකර මට වීඩියෝවක නමක් ලබාදෙන්න.```\n*උදාහරණ - .yt how to make queen nilu bot*"
                if (global.LANG == 'EN') GIVEME ="```💃 Please give me a video name.```\n *Example - .video how to make queen nilu bot*"
                
                                          await QueenNilu.sendMessage(from, { react: { text: `📽️`, key: m.key }})
                                                  if (!text) return reply (GIVEME)
                                                  await QueenNilu.sendText(m.chat, mess.wait, m, )
                                                  let yts = require("youtube-yts")
                                                  var svid = text.replace("shorts/","watch?v=")
                                                  var s2vid = svid.replace("?feature=share","")
                                                  yts(s2vid).then(async (search) => { 
                                                  let nima = search.all     
                if (search.all[0].type == 'channel') {
                
                                const buttons = [
                                    {buttonId: `${sdpid} ${search.all[1].url}`, buttonText: {displayText: '360p'}, type: 1},
                                    {buttonId: `${hdmidpid} ${search.all[1].url} 480p`, buttonText: {displayText: '480p'}, type: 1},
                                    {buttonId: `${hdpid} ${search.all[1].url} 720p`, buttonText: {displayText: '720p'}, type: 1}
                                ]
                            const buttonMessage = {
                                    image: { url: search.all[1].thumbnail },
                                    caption: `◉⦁[ *💃 𝙽𝙸𝙻𝚄 𝚅𝙸𝙳𝙴𝙾 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁 💃* ]⦁◉
                
                *ᴀʙᴏᴜᴛ ʏᴏᴜʀ ʀᴇsᴜʟᴛ...*
                
                 ➥ ᴛɪᴛʟᴇ -  ${search.all[1].title}
                
                 ➥ ᴠɪᴇᴡs - ${search.all[1].views}
                
                 ➥ ᴅᴜʀᴀᴛɪᴏɴ - ${search.all[1].timestamp}
                
                 ➥ ᴜᴘʟᴏᴀᴅ ᴏɴ - ${search.all[1].ago}
                
                 ➥ ᴜʀʟ - ${search.all[1].url}` ,
                                    footer: global.botname,
                                    buttons: buttons,
                                    headerType: 4
                                }
                                
                               QueenNilu.sendMessage(m.chat, buttonMessage, { quoted: m })
                                 
                } else if (search.all[0].type == 'video') {
                const rash = await fetchJson(`https://github.com/Mrnimama/Mr-nima-/raw/main/SongVideo.jsons/songdl.json`)
                const sdpid = rash.sddlid
                const hdmidpid = rash.sdmiddlid
                const hdpid = rash.hddlid
                                let nima = search.all           
                                const buttons = [
                                    {buttonId: `${sdpid} ${search.all[1].url}`, buttonText: {displayText: '360p'}, type: 1},
                                    {buttonId: `${hdmidpid} ${search.all[1].url} 480p`, buttonText: {displayText: '480p'}, type: 1},
                                    {buttonId: `${hdpid} ${search.all[1].url} 720p`, buttonText: {displayText: '720p'}, type: 1}
                                ]
                            const buttonMessage = {
                                    image: { url: search.all[0].thumbnail },
                                    caption:   `◉⦁[ *💃 𝙽𝙸𝙻𝚄 𝚅𝙸𝙳𝙴𝙾 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁 💃* ]⦁◉
                
                *ᴀʙᴏᴜᴛ ʏᴏᴜʀ ʀᴇsᴜʟᴛ...*
                
                 ➥ ᴛɪᴛʟᴇ -  ${search.all[0].title}
                
                 ➥ ᴠɪᴇᴡs - ${search.all[0].views}
                
                 ➥ ᴅᴜʀᴀᴛɪᴏɴ - ${search.all[0].timestamp}
                
                 ➥ ᴜᴘʟᴏᴀᴅ ᴏɴ - ${search.all[0].ago}
                
                 ➥ ᴜʀʟ - ${search.all[0].url}` ,
                                    footer: global.botname,
                                    buttons: buttons,
                                    headerType: 4
                                }
                                
                               QueenNilu.sendMessage(m.chat, buttonMessage, { quoted: m })
                                 
                }})
                                                  
                
                }
                                          break
                                          case 'song2' : {
                var GIVEME = ''
                if (global.LANG == 'SI') GIVEME = "```💃 කරුනාකර මට ගීතයක නමක් ලබාදෙන්න.```\n*උදාහරණ - .song2 lelena*"
                if (global.LANG == 'EN') GIVEME ="```💃 Please give me a song name.```\n *Example - .song2 lelena*"
                text1 = q.split(";")[0]
                text2 = q.split(";")[1]
                await QueenNilu.sendMessage(from, { react: { text: `⌛`, key: m.key }})
                
                                          //await QueenNilu.sendMessage(from, { react: { text: `🎧`, key: m.key }})
                                                  if (!text) return reply (GIVEME)
                                                  let yts = require("youtube-yts")
                                                  //const load = await QueenNilu.sendText(m.chat, `\n*📥 Downloading ${m.pushName} your song...*\n` )
                                                  const load = await QueenNilu.sendText(m.chat,global.SONG_DOWN, m, )
                                                  yts(text).then(async (search) => {  
                                                  
                                                  let nima = search.all
                                                  let media = await fetchJson(`https://queen-nilu-api-1-2-3.herokuapp.com/api/dowloader/yt?url=${search.all[0].url}`)
                                                  buf = await getBuffer(media.result.thumb)
                                                  await  QueenNilu.sendMessage(m.chat, { delete: load.key })
                                                  //const up = await QueenNilu.sendText(m.chat, `\n*📤 Uploading ${m.pushName} your song...*\n` )
                                                  const up = await QueenNilu.sendText(m.chat, global.SONG_UP, m, )
                                                  
                                                  if (media.result.song_size >= 120000) return reply('*FILE SIZE IS BIG !!!*')
                                                  const doc = await QueenNilu.sendMessage(m.chat, {document:{ url: media.result.mp3 }, mimetype:"audio/mpeg", fileName: `${media.result.Title}.mp3`,  quoted: m, contextInfo: { externalAdReply:{
                                title:`${media.result.Title}`,
                                body:"YOUTUBE MP3",
                                mediaType:2,
                                thumbnail:buf,
                                mediaUrl:`${text}`, 
                                sourceUrl: `${global.ytchannel}` }}}, {quoted:m})
                                await QueenNilu.sendMessage(m.chat, { delete: up.key })
                                                  await QueenNilu.sendMessage(from, { react: { text: `🎶`, key: doc.key }})
                
                                                  }).catch((err) => m.reply(NOT_FOUND))
                                           }
                                          break  
                                          case 'audiosong2' : {
                var GIVEME = ''
                if (global.LANG == 'SI') GIVEME = "```💃 කරුනාකර මට ගීතයක නමක් ලබාදෙන්න.```\n*උදාහරණ - .song2 lelena*"
                if (global.LANG == 'EN') GIVEME ="```💃 Please give me a song name.```\n *Example - .song2 lelena*"
                
                await QueenNilu.sendMessage(from, { react: { text: `⌛`, key: m.key }})
                
                                          //await QueenNilu.sendMessage(from, { react: { text: `🎧`, key: m.key }})
                                                   if (!text) return reply (GIVEME)
                                                  let yts = require("youtube-yts")
                                                  //const load = await QueenNilu.sendText(m.chat, `\n*📥 Downloading ${m.pushName} your song...*\n` )
                                                  const load = await QueenNilu.sendText(m.chat,global.SONG_DOWN, m, )
                                                  yts(text).then(async (search) => {  
                                                  
                                                  let nima = search.all
                                                  let media = await fetchJson(`https://test-apiyaa.herokuapp.com/api/dowloader/yt?url=${search.all[0].url}`)
                                                  buf = await getBuffer(media.result.thumb)
                                                  await  QueenNilu.sendMessage(m.chat, { delete: load.key })
                                                  //const up = await QueenNilu.sendText(m.chat, `\n*📤 Uploading ${m.pushName} your song...*\n` )
                                                  const up = await QueenNilu.sendText(m.chat, global.SONG_UP, m, )
                                                  
                                                  if (media.result.song_size >= 120000) return reply('*FILE SIZE IS BIG !!!*')
                                                  const doc = await QueenNilu.sendMessage(m.chat, {audio:{ url: media.result.mp3 }, mimetype:"audio/mpeg", fileName: `${media.result.Title}.mp3`,  quoted: m, contextInfo: { externalAdReply:{
                                title:`${media.result.Title}`,
                                body:"YOUTUBE MP3",
                                mediaType:2,
                                thumbnail:buf,
                                mediaUrl:`${text}`, 
                                sourceUrl: `${global.ytchannel}` }}}, {quoted:m})
                                await QueenNilu.sendMessage(m.chat, { delete: up.key })
                                                  await QueenNilu.sendMessage(from, { react: { text: `🎶`, key: doc.key }})
                
                                                  }).catch((err) => m.reply(NOT_FOUND))
                                           }
                                          break  
                                          case 'song4' : {
                                          var GIVEME = ''
                if (global.LANG == 'SI') GIVEME = "```💃 කරුනාකර මට ගීතයක නමක් ලබාදෙන්න.```\n*උදාහරණ - .song3 lelena*"
                if (global.LANG == 'EN') GIVEME ="```💃 Please give me a song name.```\n *Example - .song3 lelena*"
                text1 = q.split(";")[0]
                text2 = q.split(";")[1]
                                          await QueenNilu.sendMessage(from, { react: { text: `🎧`, key: m.key }})
                                                  if (!text) return reply (GIVEME)
                                                  let yts = require("youtube-yts")
                                                  //const load = await QueenNilu.sendText(m.chat, `\n*📥 Downloading ${m.pushName} your song...*\n` )
                                                  const laod = await QueenNilu.sendText(m.chat,global.SONG_DOWN, m, )
                                                  yts(text).then(async (search) => {  
                                                  let nima = search.all
                                          
                                          const akur = await fetchJson(`https://a.api.akuari.my.id/downloader/youtube3?link=${search.all[0].url}&type=360`)
                                          const gettsong = akur.audio.audio
                                          await  QueenNilu.sendMessage(m.chat, { delete: load.key })
                                          //const up = await QueenNilu.sendText(m.chat, `\n*📤 Uploading ${m.pushName} your song...*\n` )
                                          const up = await QueenNilu.sendText(m.chat, global.SONG_UP, m, )
                                          if ( text2 === 'audio' ){
                                                 // if (media.filesize >= 120000) return reply('❗ Audio size is too big '+util.format(media))
                                                  await QueenNilu.sendMessage(m.chat, { audio: { url : gettsong }, mimetype: 'audio/mpeg', fileName: `${akur.title}.mp3` }, { quoted: m })
                                                  return await QueenNilu.sendMessage(m.chat, { delete: up.key })
                                                  
                                                  }
                                                 // if (media.filesize >= 120000) return reply('❗ Audio size is too big '+util.format(media))
                                                  await QueenNilu.sendMessage(m.chat, { document: { url : gettsong }, mimetype: 'audio/mpeg', fileName: `${akur.title}.mp3` }, { quoted: m })
                                                  await QueenNilu.sendMessage(m.chat, { delete: up.key })
                                                  
                                          }).catch((err) => m.reply(err))
                                          }
                                          break
                                          case 'video3' :{
                var GIVEME = ''
                if (global.LANG == 'SI') GIVEME = "```💃 කරුනාකර මට වීඩියෝවක නමක් ලබාදෙන්න.```\n*උදාහරණ - .yt how to make queen nilu bot*"
                if (global.LANG == 'EN') GIVEME ="```💃 Please give me a video or song name.```\n *Example - .yt how to make queen nilu bot*"
                text1 = q.split(";")[0]
                text2 = q.split(";")[1]
                                          if (!text) return reply(GIVEME)
                                          await QueenNilu.sendMessage(from, { react: { text: `🎥`, key: m.key }})
                                          const yts = require("youtube-yts")
                                          const load = await QueenNilu.sendText(m.chat, `📥 Downloading ${m.pushName} your video...*`, m, )
                                          const search = await yts(text)
                                        //  for (let i of search.all)  
                                          const vid = await fetchJson(`https://youtubeapisdownloader.vercel.app/youtube/downloader/video?url=${search.all[0].url}`)
                                          //const data = await fetchJson(`https://cakrayp.herokuapp.com/api/youtube/video/search?query=${text}&type=default&apikey=cakrayp24Q6`)
                                          const capp = `${global.cap}
                                          
                 *➮ ᴛɪᴛʟᴇ :* ${vid.result.title}
                 
                 *➮ ᴜʀʟ* ${search.all[0].url}
                                          `
                                          const sdsize = vid.result.downloads.tubemp3_biz[0].size
                                          const hdsize = vid.result.downloads.tubemp3_biz[1].size
                                          await  QueenNilu.sendMessage(m.chat, { delete: load.key })
                                          if (text.split(";")[1] == 'hd'){
                                          if (hdsize.split('MB')[0] >= 110) return reply('*CAN\'T UPLODE YOUR FILE* \n_YOUR VIDEO BIGGER THAN 100mb_\n\nfile size')
                                          const video = vid.result.downloads.tubemp3_biz[1].url
                                          const upload = await QueenNilu.sendText(m.chat, `*📤 Uploading ${m.pushName} your video...*`, m, )
                                          await QueenNilu.sendMessage(m.chat, { video: { url: video }, mimetype: 'video/mp4',jpegThumbnail:buf, caption: capp }, { quoted: m })
                                          return 
                                          }
                                          if (sdsize.split('MB')[0] >= 110) return reply('*CAN\'T UPLODE YOUR FILE* \n_YOUR VIDEO BIGGER THAN 100mb_\n\nfile size')
                                          const video = vid.result.downloads.tubemp3_biz[0].url
                                          const upload = await QueenNilu.sendText(m.chat, `*📤 Uploading ${m.pushName} your video...*`, m, )
                                          await QueenNilu.sendMessage(m.chat, { video: { url: video }, mimetype: 'video/mp4',jpegThumbnail:buf, caption: capp }, { quoted: m })
                                          await  QueenNilu.sendMessage(m.chat, { delete: upload.key })
                                          }     
                                          break 
                                          case 'video2' :{
                                          const thub = await fetchJson('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/niludetails.json')
                                          buf = await getBuffer(thub.YT_THUB)
                                          if (!text) return reply('*💃 Need video name or url*')
                                          if (text.includes('https://youtu')){
                                         // if (!text.includes('-')) return reply('*💃 Please give me a correct type*\n_example .video2 https://youtube.com/watch?v=on3sJ8OlH8M - 360p')
                                          const quality = args[1] ? args[1] : '360'
                                          const load = await QueenNilu.sendText(m.chat, `*📥 Downloading ${m.pushName} your video...*`, m, )
                                          const nima = await fetchJson(`https://api.akuari.my.id/downloader/youtube3?link=${args[0]}&type=${quality}`)
                                          const upload = await QueenNilu.sendText(m.chat, `*📤 Uploading ${m.pushName} your video...*`, m, )
                                          if (nima.mp4.size.split('MB')[0] >= 110) return m.reply('*FILE SIZE IS BIG !!!*')
                                          return await QueenNilu.sendMessage(m.chat, { video: { url: nima.mp4.download }, mimetype: 'video/mp4',jpegThumbnail:buf, caption: `${global.cap}` }, { quoted: m })
                                         
                                          }
                                    m.reply(mess.wait)
                                    const yts = require("youtube-yts")
                                    const nima = await yts(text)
                                    const search = nima.all
                                    
                                   let sections = []   
                  for (let i of search) {
                  const list = { title: `✨ select ✨`,
                   rows :[
                        {
                         title: `${i.title}`, 
                         rowId: `video2 ${i.url} `,
                      description: `DOWNLOAD 360P QULITY`	     
                        },
                        {
                         title: `${i.title}`, 
                         rowId: `video2 ${i.url} 720`,
                      description: `DOWNLOAD 720P QULITY`	     
                        }, 
                        ]
                     }
                     sections.push(list)   
                     }
                  const sendm =  QueenNilu.sendMessage(
                      m.chat, 
                      {
                       text: `${text} *Here is the list of videos, click the button below to choose*\n\n${m.pushName}`,
                       footer: `${global.botname}`,
                       title: `*💃 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙻𝚄 𝚅𝙸𝙳𝙴𝙾 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁 💃*\n\n Search from ${text}`,
                       buttonText: "ᴅᴏᴡɴʟᴏᴀᴅ ᴠɪᴅᴇᴏ",
                       sections
                      }, { quoted : m })    
                               
                                          
                                           
                                             
                                          }
                                          break
                                          case 'video4' : {
                                              if (!text) throw '*Please Give me a link*'
                                              let yts = require("youtube-yts")
                                              const search = await yts(text)
                                                  //const load = await QueenNilu.sendText(m.chat, `\n*📥 Downloading ${m.pushName} your song...*\n` )
                                                  //yts(text).then(async (search) => {  
                   //buf = await getBuffer(thub.SF_THUB)
                  // const download = await QueenNilu.sendText(m.chat, ` *Please Wait ${global.botname} Prosesing Your  ${m.pushName} Video ... 🔄*`)
                
                                let bicil = require('@bochilteam/scraper')
                
                                let urlnya = search.all[0].url
                
                                bicil.savefrom(urlnya)
                
                                .then(async(result) => {	  	                                	                      	            
                
                                
                                for (let i of result.url) {
                                if(i.url.includes('mp4')){		           			    				
                
                                let sections = []   
                  const list = { title: `✨ select ✨`,
                   rows :[
                        {
                         title: `${i.title}`, 
                         rowId: `directvideo4 ${i.url} `,
                      description: `🎬 Download ${i.subname} Quality`	     
                        },
                        ]
                     }
                     sections.push(list)   
                     }
                  const sendm =  QueenNilu.sendMessage(
                      m.chat, 
                      {
                       text: `${text} *Here is the list of videos, click the button below to choose*\n\n${m.pushName}`,
                       footer: `${global.botname}`,
                       title: `*💃 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙻𝚄 𝚅𝙸𝙳𝙴𝙾 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁 💃*\n\n Search from ${text}`,
                       buttonText: "ᴅᴏᴡɴʟᴏᴀᴅ ᴠɪᴅᴇᴏ",
                       sections
                      }, { quoted : m })    
                               
                
                              }
                
                            }).catch((err) => m.reply(err))
                
                                          
                                          }
                                          break
                                          case 'ytdl4' : {
                                          let boltc = require('@bochilteam/scraper')
                                          await boltc.youtubedlv2(`${text}`)
                                          .then(async(nima) => {
                                          const dl_url = await nima.video['360p'].download()
                                          const dl_url3 = await nima.video['240p'].download()
                                          const dl_url2 = await nima.video['720p'].download()
                                          const dl_url4 = await nima.audio['128kbps'].download()
                                          await QueenNilu.sendText(m.chat,`
                360 ${dl_url}
                240 ${dl_url2}
                720 ${dl_url3}
                audio ${dl_url4}
                    
                                          
                                                                
                ${jsonformat(nima)}`)
                                          })
                                          }
                                          break
                                          case 'bolchidl' : {
                                          let boltc = require('@bochilteam/scraper')
                                          const nima = await boltc.youtubedl(`${text}`)
                                          const nima1 = await boltc.youtubedlv2(`${text}`)
                                          const nima2 = await boltc.youtubedl3(`${text}`)
                                          reply(`${jsonformat(nima)}
                ▷▷▷
                
                ${jsonformat(nima1)}
                
                ▷▷▷▷
                
                ${jsonformat(nima2)}
                `)
                                          }
                                          break
                                          case 'bolchiyt' : {
                                          let boltc = require('@bochilteam/scraper')
                                          const nima = await boltc.youtubeSearch(`${text}`)
                                          reply(`${jsonformat(nima)}`)
                                          }
                                          break
                                          case 'ytdl5' : {
                                          const url = text.split(";")[0]
                                          const query = text.split(";")[1]
                                          const api = require("onx-api")
                const nima1 = await api.downloader.youtube.ytmp3(url)
                const nima2 = await api.downloader.youtube.ytmp4(url)
                const nima3 = await api.downloader.youtube.ytplay(query)
                const nima4 = await api.downloader.youtube.ytplayvid(query)
                
                await QueenNilu.sendText(m.chat , `${jsonformat(nima4)}`)
                await QueenNilu.sendText(m.chat , `${jsonformat(nima1)}`)
                await QueenNilu.sendText(m.chat , `${jsonformat(nima2)}`)
                await QueenNilu.sendText(m.chat , `${jsonformat(nima3)}`)
                
                
                
                                          }
                                          break
                                          case '144getvideo' : {
                                         if(!text) return m.reply('need text')
                                          await QueenNilu.sendMessage(from, { react: { text: `📥`, key: m.key }})
                                          await QueenNilu.sendText(m.chat,mess.wait)
                                          const yts = require("youtube-yts")
                                          const search = await yts(`${args[0]}`)
                                          let boltc = require('@bochilteam/scraper')
                                          await boltc.youtubedlv2(search.all[0].url)
                                          
                                          .then(async(nima) => {
                                          const dl_url = await nima.video['144p'].download()
                                          const size = nima.video['144p'].fileSize
                                          if(size >= 120000) return m.reply('*FILE SIZE IS SO BIG !!!*')
                                       //   if(nima.video.720p.fileSize >= 110000) return m.reply('*FILE SIZE IS SO BIG !!!*')
                                          await QueenNilu.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4', caption: global.cap }, { quoted: m })
                                          }).catch((err) => m.reply(NOT_FOUND))
                                      
                                          }
                                          break
                                          case '240getvideo' : {
                                         if(!text) return m.reply('need text')
                                          await QueenNilu.sendMessage(from, { react: { text: `📥`, key: m.key }})
                                          await QueenNilu.sendText(m.chat,mess.wait)
                                          const yts = require("youtube-yts")
                                          const search = await yts(`${args[0]}`)
                                          let boltc = require('@bochilteam/scraper')
                                          await boltc.youtubedlv2(search.all[0].url)
                                          
                                          .then(async(nima) => {
                                          const dl_url = await nima.video['240p'].download()
                                          const size = nima.video['240p'].fileSize
                                          if(size >= 120000) return m.reply('*FILE SIZE IS SO BIG !!!*')
                                       //   if(nima.video.720p.fileSize >= 110000) return m.reply('*FILE SIZE IS SO BIG !!!*')
                                          await QueenNilu.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4', caption: global.cap }, { quoted: m })
                                          }).catch((err) => m.reply(NOT_FOUND))
                                      
                                          }
                                          break
                                          case 'getvideo' : {
                                          if(!text) return m.reply('need text')
                                          await QueenNilu.sendMessage(from, { react: { text: `📥`, key: m.key }})
                                          await QueenNilu.sendText(m.chat,mess.wait)
                                          const yts = require("youtube-yts")
                                          const search = await yts(text)
                                          let boltc = require('@bochilteam/scraper')
                                          await boltc.youtubedlv2(search.all[0].url)
                                          .then(async(nima) => {
                                          const dl_url = await nima.video['360p'].download()
                                          const size = nima.video['360p'].fileSize
                                          if(size >= 120000) return m.reply('*FILE SIZE IS SO BIG !!!*')
                                          await QueenNilu.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4',jpegThumbnail:buf, caption: global.cap }, { quoted: m })
                                          //await QueenNilu.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4', caption: `${global.cap}` }, { quoted: m })
                                          }).catch((err) => m.reply(NOT_FOUND))
                                      
                                          }
                                          break
                                          case '480getvideo' : {
                                          if(!text) return m.reply('need text')
                                          await QueenNilu.sendMessage(from, { react: { text: `📥`, key: m.key }})
                                          await QueenNilu.sendText(m.chat,mess.wait)
                                          const yts = require("youtube-yts")
                                          const search = await yts(text.split("480")[0])
                                          let boltc = require('@bochilteam/scraper')
                                          await boltc.youtubedlv2(search.all[0].url)
                                          .then(async(nima) => {
                                          const dl_url = await nima.video['480p'].download()
                                          const size = nima.video['480p'].fileSize
                                          if(size >= 120000) return m.reply('*FILE SIZE IS SO BIG !!!*')
                                          await QueenNilu.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4', caption: global.cap }, { quoted: m })
                                          }).catch((err) => m.reply(NOT_FOUND))
                                      
                                          }
                                          break
                                          case '720getvideo' : {
                                         if(!text) return m.reply('need text')
                                          await QueenNilu.sendMessage(from, { react: { text: `📥`, key: m.key }})
                                          await QueenNilu.sendText(m.chat,mess.wait)
                                          const yts = require("youtube-yts")
                                          const search = await yts(`${args[0]}`)
                                          let boltc = require('@bochilteam/scraper')
                                          await boltc.youtubedlv2(search.all[0].url)
                                          
                                          .then(async(nima) => {
                                          const dl_url = await nima.video['720p'].download()
                                          const size = nima.video['720p'].fileSize
                                          if(size >= 120000) return m.reply('*FILE SIZE IS SO BIG !!!*')
                                       //   if(nima.video.720p.fileSize >= 110000) return m.reply('*FILE SIZE IS SO BIG !!!*')
                                          await QueenNilu.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4', caption: global.cap }, { quoted: m })
                                          }).catch((err) => m.reply(NOT_FOUND))
                                      
                                          }
                                          break
                                          case 'song3' : {
                                          if(!text) return m.reply('need text')
                                         // await QueenNilu.sendMessage(from, { react: { text: `📥`, key: m.key }})
                                          const down = await QueenNilu.sendText(m.chat,global.SONG_DOWN,m,)
                                          const yts = require("youtube-yts")
                                          const search = await yts(text)
                                          const buf = await getBuffer(search.all[0].thumbnail)
                                          const boltc = require('@bochilteam/scraper')
                                          await boltc.youtubedlv2(search.all[0].url)
                                          .then(async(nima) => {
                                          const dl_url = await nima.audio['128kbps'].download()
                                          await QueenNilu.sendMessage(m.chat,{delete : down.key }) 
                                          const up = await QueenNilu.sendText(m.chat,global.SONG_UP,m,)
                                          const doc = await QueenNilu.sendMessage(m.chat, {document:{ url: dl_url }, mimetype:"audio/mpeg", fileName: `${nima.title}.mp3`,  quoted: m, contextInfo: { externalAdReply:{
                                title:`${nima.title}`,
                                body:"YOUTUBE MP3",
                                mediaType:2,
                                thumbnail:buf,
                                mediaUrl:`${text}`, 
                                sourceUrl: `${global.ytchannel}` }}}, {quoted:m})
                                await QueenNilu.sendMessage(m.chat, { delete: up.key })
                                                  await QueenNilu.sendMessage(from, { react: { text: `🎶`, key: doc.key }})
                //await QueenNilu.sendMessage(m.chat,{delete : up.key }) 
                                           //await QueenNilu.sendMessage(from, { react: { text: `🎶`, key: m.key }})
                
                                                  }).catch((err) => m.reply(err))
                                      
                                          }
                                          break
                                          case 'song5' : {
                                          if(!text) return m.reply('need text')
                                         // await QueenNilu.sendMessage(from, { react: { text: `📥`, key: m.key }})
                                          const down = await QueenNilu.sendText(m.chat,global.SONG_DOWN,m,)
                                          const yts = require("youtube-yts")
                                          const search = await yts(text)
                                          //const buf = await getBuffer(search.all[0].thumbnail)
                                          const boltc = require('@bochilteam/scraper')
                                          await boltc.youtubedlv3(search.all[0].url)
                                          .then(async(nima) => {
                                          const dl_url = await nima.audio['131'].download()
                                          await QueenNilu.sendMessage(m.chat,{delete : down.key }) 
                                          const up = await QueenNilu.sendText(m.chat,global.SONG_UP,m,)
                                          await QueenNilu.sendMessage(m.chat, { audio : { url : dl_url }, mimetype: 'audio/mpeg', fileName: `${search.all[0].title}.mp3` }, { quoted: m })
                                          await QueenNilu.sendMessage(m.chat,{delete : up.key }) 
                                           //await QueenNilu.sendMessage(from, { react: { text: `🎶`, key: m.key }})
                
                                                  }).catch((err) => m.reply(err))
                                      
                                          }
                                          break
                                          case 'audiosong3' : {
                                          if(!text) return m.reply('need text')
                                         // await QueenNilu.sendMessage(from, { react: { text: `📥`, key: m.key }})
                                          const down = await QueenNilu.sendText(m.chat,global.SONG_DOWN,m,)
                                          const yts = require("youtube-yts")
                                          const search = await yts(text)
                                          const buf = await getBuffer(search.all[0].thumbnail)
                                          const boltc = require('@bochilteam/scraper')
                                          await boltc.youtubedlv2(search.all[0].url)
                                          .then(async(nima) => {
                                          const dl_url = await nima.audio['128kbps'].download()
                                          await QueenNilu.sendMessage(m.chat,{delete : down.key }) 
                                          const up = await QueenNilu.sendText(m.chat,global.SONG_UP,m,)
                                          const doc = await QueenNilu.sendMessage(m.chat, {audio :{ url: dl_url }, mimetype:"audio/mpeg", fileName: `${nima.title}.mp3`,  quoted: m, contextInfo: { externalAdReply:{
                                title:`${nima.title}`,
                                body:"YOUTUBE MP3",
                                mediaType:2,
                                thumbnail:buf,
                                mediaUrl:`${text}`, 
                                sourceUrl: `${global.ytchannel}` }}}, {quoted:m})
                                await QueenNilu.sendMessage(m.chat, { delete: up.key })
                                                  await QueenNilu.sendMessage(from, { react: { text: `🎶`, key: doc.key }})
                //await QueenNilu.sendMessage(m.chat,{delete : up.key }) 
                                           //await QueenNilu.sendMessage(from, { react: { text: `🎶`, key: m.key }})
                
                                                  }).catch((err) => m.reply(err))
                                      
                                          }
                                          break
                                         /* case 'yt2' : {
                                          if (!text) return m.reply('Please Give me a youtube link')
                                          await QueenNilu.sendText(m.chat,mess.wait)
                                          let boltc = require('@bochilteam/scraper')
                                          await boltc.youtubedlv2(`${text}`)
                                          .then(async(nima) => {
                                          const dl_url = await nima.video['480p'].download()
                                          const dl_url3 = await nima.video['240p'].download()
                                          const dl_url2 = await nima.video['720p'].download()
                                          const dl_url4 = await nima.audio['128kbps'].download()
                                         
                           const buttons = [
                  {buttonId: `directvideodown ${dl_url3}`, buttonText: {displayText: '240P'}, type: 1},
                  {buttonId: `directvideodown ${dl_url}`, buttonText: {displayText: '480P'}, type: 1},
                  {buttonId: `directaudiodown ${dl_url4}`, buttonText: {displayText: 'AUDIO'}, type: 1}
                ]
                
                const buttonMessage = {
                    image: {url: nima.thubnail},
                    caption: `╭────[💃 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙻𝚄 𝙱𝙾𝚃 💃] 
                │
                ◯ ᴛɪᴛʟᴇ : ${nima.title}
                
                ◯ ᴠɪᴅᴇᴏ ɪᴅ : ${nima.id}
                
                ◯ ʀᴇǫᴜsᴛᴇʀ : ${m.pushName}
                │
                ╰────────────◯`,
                    footer: global.botname,
                    buttons: buttons,
                    headerType: 4
                }
                
                await QueenNilu.sendMessage(m.chat, buttonMessage)
                })
                                          }
                                          break*/
                                          case 'tiktokjson' : {
                                          let boltc = require('@bochilteam/scraper')    
                 //  if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'                
                   boltc.youtubedlv3(`${text}`).then(async (video) => {  
                   reply(`${jsonformat(video)}`)
                     })  
                                          }
                                          break
                                          case 'tiktokjson2' : {
                                          let boltc = require('@bochilteam/scraper')    
                 //  if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'                
                   boltc.youtubedl(`${text}`).then(async (video) => {  
                   reply(`${jsonformat(video)}`)
                     })  
                                          }
                                          break
                                          case 'tiktokjson3' : {
                                          let boltc = require('@bochilteam/scraper')    
                 //  if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'                
                   boltc.youtubedlv2(`${text}`).then(async (video) => {  
                   reply(`${jsonformat(video)}`)
                     })  
                                          }
                                          break
                                          case 'savevid' : {
                                          let boltc = require('@bochilteam/scraper')
                                          boltc.savefrom(text)
                                         .then(async(result) => {
                                         reply(`${jsonformat(result)}`)
                                         })
                                          }
                                          break
                                          case 'directvideo4' : {
                                          
                       const down = await QueenNilu.sendText(m.chat,global.SONG_DOWN, m, )
                       const up = await QueenNilu.sendText(m.chat, global.SONG_UP, m, )
                       await QueenNilu.sendMessage(m.chat,{delete : down.key })  
                       await QueenNilu.sendMessage(m.chat, { video: { url: text }, caption: global.cap}, { quoted: m })
                       await QueenNilu.sendMessage(m.chat,{delete : up.key })  
                                  
                                          }
                                          break
                case 'directvideodown' : {
                var DOWNLOAD = ''
                if (global.LANG == 'SI' ) DOWNLOAD = '*📥 ඔබගේ වීඩියෝව බාගත කරමින් පවති...*'
                if (global.LANG == 'EN' ) DOWNLOAD = '*📥 DOWNLOADING YOUR VIDEO...*'
                var UPLOAD = ''
                if (global.LANG == 'SI' ) UPLOAD = '*📤 ඔබගේ විඩියෝව ඔබවෙත එවමින් පවතී...*'
                if (global.LANG == 'EN' ) UPLOAD = '*📤 UPLOADING YOUR VIDEO...*'
                       const down = await QueenNilu.sendText(m.chat,DOWNLOAD, m, )
                       const thub = await fetchJson('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/niludetails.json')
                       buf = await getBuffer(thub.SF_THUB)
                       const up = await QueenNilu.sendText(m.chat,UPLOAD, m, )
                       await QueenNilu.sendMessage(m.chat,{delete : down.key })  
                       await QueenNilu.sendMessage(m.chat, { video: { url: text }, mimetype: 'video/mp4', fileName: `${text}.mp4`,jpegThumbnail:buf, caption: global.cap }, { quoted: m })
                       //await QueenNilu.sendMessage(m.chat, { video: { url: text }, caption: global.cap}, { quoted: m })
                       await QueenNilu.sendMessage(m.chat,{delete : up.key })  
                                  }
                break
                case 'directaudiodown' : {
                
                       const down = await QueenNilu.sendText(m.chat,global.SONG_DOWN, m, )
                     //  const thub = await fetchJson('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/niludetails.json')
                       buf = await getBuffer(thub.SF_THUB)
                       const up = await QueenNilu.sendText(m.chat,global.SONG_UP, m, )
                       await QueenNilu.sendMessage(m.chat,{delete : down.key })  
                       await QueenNilu.sendMessage(m.chat, { video: { url: text }, mimetype: 'video/mp4', fileName: `${text}.mp4`,jpegThumbnail:buf, caption: global.cap }, { quoted: m })
                       //await QueenNilu.sendMessage(m.chat, { video: { url: text }, caption: global.cap}, { quoted: m })
                       await QueenNilu.sendMessage(m.chat,{delete : up.key })  
                                  }
                break
                                          case 'ytmp3': case 'ytaudio': {  
                                          //await QueenNilu.sendMessage(from, { react: { text: `🔄`, key: m.key }})
                                                  
                                                  if (!text && text.includes("https://youtu")) return m.reply('*💃 Need youtube url* \n'+'```ℹ️ Example .ytmp3 https://youtube.com/watch?v=WoWlWb6vbzA```')
                                                 const load = await QueenNilu.sendText(m.chat, `\n*🔄 Preparing ${m.pushName} your song...*\n`, m, )
                                                 //const load = await QueenNilu.sendText(m.chat,global.SONG_DOWN, m, )
                                                  await fetchJson(`https://queen-nilu-api-1-2-3.herokuapp.com/api/dowloader/yt?url=${text}`)
                                                  .then(async (media) => { 
                                                  buf = await getBuffer(media.result.thumb)
                                                  if (media.result.song_size.split("MB")[0] >= 120) return m.reply('*FILE SIZE IS BIG !!!*')
                                                  //reply('❗ Audio size is too big '+util.format(media))
                                                  //QueenNilu.sendImage(m.chat, media.thumb, `🟡 𝗧𝗜𝗧𝗟𝗘 : ${media.title}\n🎀 𝗙𝗜𝗟𝗘 𝗦𝗜𝗭𝗘 : ${media.filesizeF}\n📡 𝗨𝗥𝗟 : ${isUrl(text)}\n📜 𝗘𝗫𝗧 : MP3\n📑 𝗥𝗘𝗦𝗢𝗟𝗨𝗧𝗜𝗢𝗡 : ${args[1] || '256kbps'}`, m)
                                                  await QueenNilu.sendMessage(from, { react: { text: `⬆️`, key: m.key }})
                                                 // 
                                                  await QueenNilu.sendMessage(m.chat, {document:{ url: media.result.mp3 }, mimetype:"audio/mpeg", fileName: `${media.result.Title}.mp3`,  quoted: m, contextInfo: { externalAdReply:{
                                title:`🐣 ᴛɪᴛʟᴇ - ${media.result.Title}\n`,
                                body:"YOUTUBE MP3",
                                mediaType:2,
                                thumbnail:buf,
                                mediaUrl:`${text}`, 
                                sourceUrl: `${global.ytchannel}` }}}, {quoted:m})
                                await QueenNilu.sendMessage(from, { react: { text: `✅`, key: m.key }})
                                await QueenNilu.sendMessage(m.chat, { delete: load.key })
                                                  
                              //  await QueenNilu.sendMessage(m.chat,{ delete : upload.key })  
                      
                      }).catch((err) => reply(err))
                      
                                              }
                                              break
                                              case 'seleytmp3': case 'seleytaudio': {  
                                         // await QueenNilu.sendMessage(from, { react: { text: `🔄`, key: m.key }})
                                                  let { yta } = require('./lib/y2mate')
                                                  if (!text) throw `${Lang.EXAMPLE}\n : ${prefix + command} https://Subscribe.com/watch?v=PtF6Tccag%27 320kbps`
                                                 // const load = await QueenNilu.sendText(m.chat, `\n*🔄 Preparing ${m.pushName} your Document type song...*\n`, m, )
                                                 const load = await QueenNilu.sendText(m.chat,global.SONG_DOWN, m, )
                      
                                                  let quality = args[1] ? args[1] : '128kbps'
                                                  await yta(text, quality)
                                                  .then(async (media) => { 
                                                  buf = await getBuffer(media.thumb)
                                                  if (media.filesize >= 150000) return reply('❗ Audio size is too big '+util.format(media))
                                                  await QueenNilu.sendMessage(from, { react: { text: `⬆️`, key: m.key }})
                                                  
                    
                                                  QueenNilu.sendMessage(m.chat, {document:{ url: media.dl_link }, mimetype:"audio/mpeg", fileName: `${media.title}.mp3`,  quoted: m, contextInfo: { externalAdReply:{
                                title:`🐣 ᴛɪᴛʟᴇ - ${media.title}\n🎧 sɪᴢᴇ - ${media.filesize}`,
                                body:"YOUTUBE MP3",
                                mediaType:2,
                                thumbnail:buf,
                                mediaUrl:`${text}`, 
                                sourceUrl: `${global.ytchannel}` }}}, {quoted:m})
                                await  QueenNilu.sendMessage(m.chat, { delete: load.key })
                                await QueenNilu.sendMessage(from, { react: { text: `✅`, key: m.key }})}).catch((err) => m.reply(NOT_FOUND))
                                //await QueenNilu.sendMessage(m.chat,{delete : upload.key })  
                    
                                              }
                                              break
                                              case 'selecttypebutton': {  
                const rash = await fetchJson(`https://github.com/Mrnimama/Mr-nima-/raw/main/SongVideo.jsons/songdl.json`)
                const sdpid = rash.sddlid
                const hdmidpid = rash.sdmiddlid
                const hdpid = rash.hddlid
                                          await QueenNilu.sendMessage(from, { react: { text: `📽️`, key: m.key }})
                
                                              
                                    YTMASS = `
                
                ╭───[  * ɴɪʟᴜ ʙᴏᴛ*  ]───◉
                │
                │  🎬 ʏᴛ  ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ 🎬
                │ 
                │ ➧ sᴇʟᴇᴄᴛ ʏᴏᴜʀ ᴠɪᴅᴇᴏ ʀᴇsᴏʟᴜᴛɪᴏɴ 
                │
                ╰──────◉
                `,
                                            buttons = [
                                                          { buttonId: `${sdpid} ${text}`, buttonText: { displayText: '360p' }, type: 1 },
                                                          { buttonId: `${hdmidpid} ${text} 480p`, buttonText: { displayText: '480p' }, type: 1 },
                                                          { buttonId: `${hdpid} ${text}`, buttonText: { displayText: '720p' }, type: 1 }
                                                      
                                                      ]
                                                      await QueenNilu.sendButtonText(m.chat, buttons, YTMASS, `𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙽𝙸𝙻𝚄 𝙱𝙾𝚃 ` ,m)
                                                  }
                                                  break
                                                  case 'audioselecttypebutton': {  
                                                  const rash = await fetchJson(`https://github.com/Mrnimama/Mr-nima-/raw/main/SongVideo.jsons/songdl.json`)
                const audidd = rash.audcmd
                const docidd = rash.doccmd
                                          await QueenNilu.sendMessage(from, { react: { text: `🎧`, key: m.key }})
                
                                              
                                    YTMASS = `
                
                ╭───[  * ɴɪʟᴜ ʙᴏᴛ*  ]───◉
                │
                │  🎬 ʏᴛ  sᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ 🎬
                │ 
                │ ➧ sᴇʟᴇᴄᴛ ʏᴏᴜʀ sᴏɴɢ ᴛʏᴘᴇ
                │
                ╰──────◉
                `,
                                            buttons = [
                                                          { buttonId: `${docidd} ${text}`, buttonText: { displayText: '📁 DOCUMENT 📁' }, type: 1 },
                                                          { buttonId: `${audidd} ${text}`, buttonText: { displayText: '🎧 AUDIO 🎧' }, type: 1 }
                                                      ]
                                                      await QueenNilu.sendButtonText(m.chat, buttons, YTMASS, `𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙽𝙸𝙻𝚄 𝙱𝙾𝚃 ` ,m)
                                                  }
                                                  break
                                                  case 'ytmp4' : {
                                                  const thub = await fetchJson('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/niludetails.json')
                                              const buf = await getBuffer(thub.YT_THUB)
                                          if(!text) return m.reply('*💃 Need youtube url* \n'+'```ℹ️ Example .ytmp4 https://youtube.com/watch?v=WoWlWb6vbzA```')
                                          if (!text.includes('https://youtu')) return m.reply('*💃 Need youtube url* \n'+'```ℹ️ Example .ytmp4 https://youtube.com/watch?v=WoWlWb6vbzA```')
                                          await QueenNilu.sendMessage(from, { react: { text: `📥`, key: m.key }})
                                          await QueenNilu.sendText(m.chat,mess.wait)
                                          let quality = args[1] ? args[1] : '360p'
                                          //const yts = require("youtube-yts")
                                         // const search = await yts(args[0])
                                          const dltext = args[0]
                                          let boltc = require('@bochilteam/scraper')
                                          await boltc.youtubedlv2(dltext)
                                          .then(async(nima) => {
                                          const dl_url = await nima.video[quality].download()
                                          const size = nima.video[quality].fileSize
                                          if(size >= 120000) return m.reply('*FILE SIZE IS SO BIG !!!*')
                                          const viddd = await QueenNilu.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4', fileName: `${nima.title}.mp4`,jpegThumbnail:buf, caption: global.cap }, { quoted: m })
                                          await QueenNilu.sendMessage(from, { react: { text: `📽️`, key: viddd.key }})
                                          // await QueenNilu.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4',jpegThumbnail:buf, caption: global.cap }, { quoted: m })
                                          //await QueenNilu.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4', caption: `${global.cap}` }, { quoted: m })
                                          }).catch((err) => m.reply(NOT_FOUND))
                                      
                                          }
                                          break
                                             /* case 'audytmp3': case 'audytaudio': {
                                              
                                              AGAINTRY = ` *💃 ENJOY YOUR SONG* `
                                              buttons = [
                                                          { buttonId: `audioretry ${text}`, buttonText: { displayText: '♻ ᴛʀʏ ᴀɢᴀɪɴ ️♻️' }, type: 1 }
                                                      ]
                                                  let { yta } = require('./lib/y2mate')
                                                  if (!text) throw `Example : ${prefix + command} https://Subscribe.com/watch?v=PtF6Tccag%27 320kbps`
                                                  const load = await QueenNilu.sendText(m.chat, `\n*🔄 Preparing ${m.pushName} your song...*\n`, m, )
                                                  let quality = args[1] ? args[1] : '256kbps'
                                                  let media = await yta(text, quality)
                                                  if (media.filesize >= 150000) return reply('❗ Audio size is too big '+util.format(media))
                                                  var upload = await QueenNilu.sendButtonText(m.chat, buttons, AGAINTRY, `${m.pushName} Use this only if you have not received the request.` ,m)
                                                  QueenNilu.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                                                   QueenNilu.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: upload.key.id, participant: m.quoted.sender } })
                                              }
                                              break*/
                                             case 'audio': case 'seleytaudio': {  
                                         // await QueenNilu.sendMessage(from, { react: { text: `🔄`, key: m.key }})
                                                  let { yta } = require('./lib/y2mate')
                                                  if (!text) throw `${Lang.EXAMPLE}\n : ${prefix + command} https://Subscribe.com/watch?v=PtF6Tccag%27 320kbps`
                                                 // const load = await QueenNilu.sendText(m.chat, `\n*🔄 Preparing ${m.pushName} your Document type song...*\n`, m, )
                                                 const load = await QueenNilu.sendText(m.chat,global.SONG_DOWN, m, )
                      
                                                  let quality = args[1] ? args[1] : '128kbps'
                                                  await yta(text, quality)
                                                  .then(async (media) => { 
                                                  buf = await getBuffer(media.thumb)
                                                  if (media.filesize >= 150000) return reply('❗ Audio size is too big '+util.format(media))
                                                  await QueenNilu.sendMessage(from, { react: { text: `⬆️`, key: m.key }})
                                                  
                    
                                                  QueenNilu.sendMessage(m.chat, {audio:{ url: media.dl_link }, mimetype:"audio/mpeg", fileName: `${media.title}.mp3`,  quoted: m, contextInfo: { externalAdReply:{
                                title:`🐣 ᴛɪᴛʟᴇ - ${media.title}\n🎧 sɪᴢᴇ - ${media.filesize}`,
                                body:"YOUTUBE MP3",
                                mediaType:2,
                                thumbnail:buf,
                                mediaUrl:`${text}`, 
                                sourceUrl: `${global.ytchannel}` }}}, {quoted:m})
                              //  await  QueenNilu.sendMessage(m.chat, { delete: load.key })
                                await QueenNilu.sendMessage(from, { react: { text: `✅`, key: m.key }})}).catch((err) => m.reply(NOT_FOUND))
                                await QueenNilu.sendMessage(m.chat,{delete : load.key })  
                    
                                              }
                                              break
                                              case 'audioretry': case 'ytaudioretry': {  
                                         const up = await QueenNilu.sendMessage(from, { react: { text: `🔄`, key: m.key }})
                                              
                                                  let { yta } = require('./lib/y2mate')
                                                  if (!text) throw `${Lang.EXAMPLE}\n : ${prefix + command} https://Subscribe.com/watch?v=PtF6Tccag%27 320kbps`
                                                  let quality = args[1] ? args[1] : '128kbps'
                                                  await yta(text, quality)
                                                  .then(async (media) => { 
                                                  if (media.filesize >= 150000) return reply('❗ Audio size is too big '+util.format(media))
                                                  QueenNilu.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })}).catch((err) => m.reply(NOT_FOUND))
                                                  await QueenNilu.sendMessage(from, { react: { text: `✅`, key: m.key }})
                                                  await QueenNilu.sendMessage(m.chat,{delete : up.key })  
                      
                                              }
                                              break
                                              case '22ytmp4' : {
                                              await QueenNilu.sendMessage(from, { react: { text: `📽️`, key: m.key }})
                                              await QueenNilu.sendText(m.chat,mess.wait)
                                              const qulity = args[1]
                                              /*const thub = await fetchJson('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/niludetails.json')
                                              const buf = await getBuffer(thub.YT_THUB)
                                              const boltc = require('@bochilteam/scraper')
                                              //const search = args[0]
                                              const yts = require("youtube-yts")
                                              const search = await yts(`${args[0]}`)
                                              const nima = await boltc.youtubedlv2(search.all[0].url)
                                              */
                                              if(qulity = '144p'){
                                              const thub = await fetchJson('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/niludetails.json')
                                              const buf = await getBuffer(thub.YT_THUB)
                                              const boltc = require('@bochilteam/scraper')
                                              //const search = args[0]
                                              const yts = require("youtube-yts")
                                              const search = await yts(`${args[0]}`)
                                              const nima = await boltc.youtubedlv2(search.all[0].url) 
                                          const dl_url = await nima.video['144p'].download()
                                          const size = nima.video['144p'].fileSize
                                          if(size >= 120000) return m.reply('*FILE SIZE IS SO BIG !!!*')
                                          await QueenNilu.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4',jpegThumbnail:buf, caption: global.cap }, { quoted: m })
                                          
                                              }else if(qulity = '240p'){
                                              const thub = await fetchJson('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/niludetails.json')
                                              const buf = await getBuffer(thub.YT_THUB)
                                              const boltc = require('@bochilteam/scraper')
                                              //const search = args[0]
                                              const yts = require("youtube-yts")
                                              const search = await yts(`${args[0]}`)
                                              const nima = await boltc.youtubedlv2(search.all[0].url)
                                          const dl_url = await nima.video['240p'].download()
                                          const size = nima.video['240p'].fileSize
                                          if(size >= 120000) return m.reply('*FILE SIZE IS SO BIG !!!*')
                                          await QueenNilu.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4',jpegThumbnail:buf, caption: global.cap }, { quoted: m })
                                          
                                              }else if(qulity = '480'){
                                              const thub = await fetchJson('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/niludetails.json')
                                              const buf = await getBuffer(thub.YT_THUB)
                                              const boltc = require('@bochilteam/scraper')
                                              //const search = args[0]
                                              const yts = require("youtube-yts")
                                              const search = await yts(`${args[0]}`)
                                              const nima = await boltc.youtubedlv2(search.all[0].url)
                                          const dl_url = await nima.video['480p'].download()
                                          const size = nima.video['480p'].fileSize
                                          if(size >= 120000) return m.reply('*FILE SIZE IS SO BIG !!!*')
                                          await QueenNilu.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4',jpegThumbnail:buf, caption: global.cap }, { quoted: m })
                                          
                                              
                                              }else if(qulity = '720'){
                                              const thub = await fetchJson('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/niludetails.json')
                                              const buf = await getBuffer(thub.YT_THUB)
                                              const boltc = require('@bochilteam/scraper')
                                              //const search = args[0]
                                              const yts = require("youtube-yts")
                                              const search = await yts(`${args[0]}`)
                                              const nima = await boltc.youtubedlv2(search.all[0].url)
                                           const dl_url = await nima.video['720p'].download()
                                          const size = nima.video['720p'].fileSize
                                          if(size >= 120000) return m.reply('*FILE SIZE IS SO BIG !!!*')
                                          await QueenNilu.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4',jpegThumbnail:buf, caption: global.cap }, { quoted: m })
                                          
                                              
                                              }else if (qulity = '1080'){
                                              const thub = await fetchJson('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/niludetails.json')
                                              const buf = await getBuffer(thub.YT_THUB)
                                              const boltc = require('@bochilteam/scraper')
                                              //const search = args[0]
                                              const yts = require("youtube-yts")
                                              const search = await yts(`${args[0]}`)
                                              const nima = await boltc.youtubedlv2(search.all[0].url)
                                          const dl_url = await nima.video['1080p'].download()
                                          const size = nima.video['1080p'].fileSize
                                          if(size >= 120000) return m.reply('*FILE SIZE IS SO BIG !!!*')
                                          await QueenNilu.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4',jpegThumbnail:buf, caption: global.cap }, { quoted: m })
                                          
                                              }
                                              const thub = await fetchJson('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/niludetails.json')
                                              const buf = await getBuffer(thub.YT_THUB)
                                              const boltc = require('@bochilteam/scraper')
                                              //const search = args[0]
                                              const yts = require("youtube-yts")
                                              const search = await yts(`${args[0]}`)
                                              const nima = await boltc.youtubedlv2(search.all[0].url)
                                          const dl_url = await nima.video['360p'].download()
                                          const size = nima.video['360p'].fileSize
                                          if(size >= 120000) return m.reply('*FILE SIZE IS SO BIG !!!*')
                                          await QueenNilu.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4',jpegThumbnail:buf, caption: global.cap }, { quoted: m })
                                          
                                              
                                              
                                              }
                                              break
                                              case '22ytmp4': case '22ytvideo': {  
                                              await QueenNilu.sendMessage(from, { react: { text: `📽️`, key: m.key }})
                                              const thub = await fetchJson('https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/niludetails.json')
                                              buf = await getBuffer(thub.YT_THUB)
                
                                                  let { ytv } = require('./lib/y2mate')
                                                  if (!text) return reply( `${Lang.EXAMPLE}\n ${prefix + command} https://youtube.com/watch?v=on3sJ8OlH8M`)
                                                  const load = await QueenNilu.sendText(m.chat, mess.wait, m, )
                                                  let quality = args[1] ? args[1] : '360p'
                                                  await ytv(text, quality)
                                                  .then(async (media) => { 
                                                  buf = await getBuffer(thub.YT_THUB)
                                                  if (media.filesize >= 100000) {
                                                  const msg = `*⛔ FILE SIZE UP TO 100MB ⛔*
                                                  
                *ғɪʟᴇ ɴᴀᴍᴇ :* ${media.title}
                                                  
                *ғɪʟᴇ sɪᴢᴇ :* ${media.filesize}
                `
                                                  const templateButtons = [
                                                  {index: 1, urlButton: {displayText: 'DOWNLOAD ON WEB', url: media.dl_link+'.mp4' }},
                                                  {index: 2, urlButton: {displayText: 'ǫᴜᴇᴇɴ  ɴɪʟᴜ ᴘᴜʙʟɪᴄ', url: 'https://chat.whatsapp.com/JlIOrWU08K19dFrHkOGI5N'}}
                    
                                                  ]
                
                                                  const templateMessage = {
                                                  text: msg,
                                                  footer: global.botname,
                                                  templateButtons: templateButtons
                                                  }
                
                                                  return await QueenNilu.sendMessage(m.chat, templateMessage, { quoted: m })   
                
                                                 // return reply('❗ Video size is too big '+util.format(media)+'.mp4')
                                                  }
                                                  await QueenNilu.sendMessage(from, { react: { text: `⬆️`, key: m.key }})
                                                  await QueenNilu.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`,jpegThumbnail:buf, caption: global.cap }, { quoted: m })
                                                  
                                                  .catch((err) => m.reply('*Sorry, Can\'t Find your reqest 🥴*'))
                                                  await  QueenNilu.sendMessage(m.chat, { delete: load.key })}).catch((err) => m.reply(NOT_FOUND))
                                                  await QueenNilu.sendMessage(from, { react: { text: `✅`, key: m.key }})
                                              }
                                              break
                                              case 'secytmp4': case 'secytvideo': {  
                                          await QueenNilu.sendMessage(from, { react: { text: `🎥`, key: m.key }})
                                              AGAINTRY = ` 💃 ENJOY YOUR VIDEO `
                                              
                                              buttons = [
                                                          { buttonId: `audioretry ${text}`, buttonText: { displayText: '♻ ᴛʀʏ ᴀɢᴀɪɴ ♻️' }, type: 1 }
                                                      ]
                                                const buttonMessage = {
                    text: AGAINTRY ,
                    footer: `${m.pushName} Use this only if you have not received the request.` ,
                    buttons: buttons,
                    headerType: 2
                }       
                                              
                                                  let { ytv } = require('./lib/y2mate')
                                                  if (!text) throw `${Lang.EXAMPLE}\n : ${prefix + command} https://Subscribe.com/watch?v=PtFMhcag%27 360p`
                                                  const load = await QueenNilu.sendText(m.chat,mess.wait, m, )
                                                  let quality = args[1] ? args[1] : '360p'
                                                  await ytv(text, quality)
                                                  .then(async (media) => { 
                                                  await QueenNilu.sendText(m.chat, ` *ʟᴏᴀᴅɪɴɢ ${m.pushName} ʏᴏᴜʀ ᴠɪᴅᴇᴏ... 🔄*`)
                                                  if (media.filesize >= 100000)  {
                                                  const msg = `*⛔ FILE SIZE UP TO 100MB ⛔*
                                                  
                *ғɪʟᴇ ɴᴀᴍᴇ :* ${media.title}
                                                  
                *ғɪʟᴇ sɪᴢᴇ :* ${media.filesize}
                
                `
                                                  const templateButtons = [
                                                  {index: 1, urlButton: {displayText: 'DOWNLOAD ON WEB', url: media.dl_link+'.mp4' }},
                                                  {index: 2, urlButton: {displayText: 'ǫᴜᴇᴇɴ  ɴɪʟᴜ ᴘᴜʙʟɪᴄ', url: 'https://chat.whatsapp.com/JlIOrWU08K19dFrHkOGI5N'}}
                    
                                                  ]
                
                                                  const templateMessage = {
                                                  text: msg,
                                                  footer: global.botname,
                                                  templateButtons: templateButtons
                                                  }
                
                                                  return await QueenNilu.sendMessage(m.chat, templateMessage, { quoted: m }) 
                                                  }  
                //return reply('❗ Video size is too big '+util.format(media)+'.mp4')
                                                  await  QueenNilu.sendMessage(m.chat, { delete: load.key })
                                                  const upload = await QueenNilu.sendMessage(m.chat, buttonMessage , { quoted: m })
                                                  await QueenNilu.sendMessage(from, { react: { text: `⬆️`, key: m.key }})
                                                  QueenNilu.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: global.cap }, { quoted: m })
                                                  await  QueenNilu.sendMessage(m.chat, { delete: upload.key })}).catch((err) => m.reply(NOT_FOUND))
                                                  await QueenNilu.sendMessage(from, { react: { text: `✅`, key: m.key }})
                                                  
                                              }
                                              break
                                              case 'retryytmp4': case 'retrysecytvideo': {  
                                          await QueenNilu.sendMessage(from, { react: { text: `🔄`, key: m.key }})
                                              
                                                  let { ytv } = require('./lib/y2mate')
                                                  if (!text) throw `${Lang.EXAMPLE}\n : ${prefix + command} https://Subscribe.com/watch?v=PtFMhcag%27 360p`
                                                  let quality = args[1] ? args[1] : '360p'
                                                  let media = await ytv(text, quality)
                                                  await QueenNilu.sendText(m.chat, ` *ʟᴏᴀᴅɪɴɢ ${m.pushName} ʏᴏᴜʀ ᴠɪᴅᴇᴏ... 🔄*`)
                                                  if (media.filesize >= 100000)  {
                                                  const msg = `*⛔ FILE SIZE UP TO 100MB ⛔*
                                                  
                *ғɪʟᴇ ɴᴀᴍᴇ :* ${media.title}
                                                  
                *ғɪʟᴇ sɪᴢᴇ :* ${media.filesize}
                `
                                                  const templateButtons = [
                                                  {index: 1, urlButton: {displayText: 'DOWNLOAD ON WEB', url: media.dl_link+'.mp4' }},
                                                  {index: 2, urlButton: {displayText: 'ǫᴜᴇᴇɴ  ɴɪʟᴜ ᴘᴜʙʟɪᴄ', url: 'https://chat.whatsapp.com/JlIOrWU08K19dFrHkOGI5N'}}
                    
                                                  ]
                
                                                  const templateMessage = {
                                                  text: msg,
                                                  footer: global.botname,
                                                  templateButtons: templateButtons
                                                  }
                
                                                  return await QueenNilu.sendMessage(m.chat, templateMessage, { quoted: m })   
                                                  }
                //return reply('❗ Video size is too big '+util.format(media)+'.mp4')
                                                  var up = await QueenNilu.sendText(m.chat, `*ENJOY*`)
                                                  QueenNilu.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: global.cap }, { quoted: m })
                                                  await QueenNilu.sendMessage(from, { react: { text: `✅`, key: m.key }})
                                                  
                                              }
                                              break
                                              case '360pvideo': case 'yt360pvideo': {  
                                          await QueenNilu.sendMessage(from, { react: { text: `📽️`, key: m.key }})
                                                  let { ytv } = require('./lib/y2mate')
                                                  if (!text) throw `${Lang.EXAMPLE}\n : ${prefix + command} https://Subscribe.com/watch?v=PtFMhcag%27 360p`
                                                  const load = await QueenNilu.sendText(m.chat, `\n*🔄 Please wait ${m.pushName}...*\n`, m, )
                                                  let quality = args[1] ? args[1] : '360p'
                                                  let media = await ytv(text, quality)
                                                  if (media.filesize >= 100000) {
                                                  const msg = `*⛔ FILE SIZE UP TO 100MB ⛔*
                                                  
                *ғɪʟᴇ ɴᴀᴍᴇ :* ${media.title}
                                                  
                *ғɪʟᴇ sɪᴢᴇ :* ${media.filesize}
                `
                                                  const templateButtons = [
                                                  {index: 1, urlButton: {displayText: 'DOWNLOAD ON WEB', url: media.dl_link+'.mp4' }},
                                                  {index: 2, urlButton: {displayText: 'ǫᴜᴇᴇɴ  ɴɪʟᴜ ᴘᴜʙʟɪᴄ', url: 'https://chat.whatsapp.com/JlIOrWU08K19dFrHkOGI5N'}}
                    
                                                  ]
                
                                                  const templateMessage = {
                                                  text: msg,
                                                  footer: global.botname,
                                                  templateButtons: templateButtons
                                                  }
                
                                                  return await QueenNilu.sendMessage(m.chat, templateMessage, { quoted: m })   
                                                  }
                // return reply('❗ Video size is too big '+util.format(media)+'.mp4')
                                                  await QueenNilu.sendMessage(from, { react: { text: `⬆️`, key: m.key }})
                                                  await QueenNilu.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: global.cap }, { quoted: m })
                                                  await  QueenNilu.sendMessage(m.chat, { delete: load.key })
                                                  await QueenNilu.sendMessage(from, { react: { text: `✅`, key: m.key }})
                                              }
                                              break





                                              //////////////////////////////////--------------------------Meadia end
case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anupint = await pinterest(text)
                result = anupint[Math.floor(Math.random() * anupint.length)]
                QueenNilu.sendMessage(m.chat, { image: { url: result }, caption: `${themeemoji} Media Url : `+result }, { quoted: m })
            }
            break
            case 'waifu': {
            	m.reply(mess.wait)
                anufux = await fetchJson(`https://waifu.pics/api/sfw/waifu`)
                buffer13x = await getBuffer(anufux.url)
                let buttons = [{buttonId: `waifu`, buttonText: {displayText: 'Next Image'}, type: 1},{buttonId: `animemenu`, buttonText: {displayText: '⬅️Back'}, type: 1}]
                let buttonMessage = {
                    image: buffer13x,
                    caption: `Random Waifu`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                QueenNilu.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'couplepp': case 'ppcouple': {
                m.reply(mess.wait)
                let anucpp = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/couple.json')
                let random = anucpp[Math.floor(Math.random() * anucpp.length)]
                QueenNilu.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                QueenNilu.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffee': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffee`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                QueenNilu.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Enter Query Title'
		let { wallpaper } = require('./lib/scraper')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Category : ${result.type}\n${themeemoji} Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                QueenNilu.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Enter Query Title'
		let { wikimedia } = require('./lib/scraper')
                anuwmedia = await wikimedia(text)
                result = anumedia[Math.floor(Math.random() * anumedia.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                QueenNilu.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
 case 'tinyurl':{
   if(!q) return m.reply('link?')
   request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
   try {
  m.reply(body)
  } catch (e) {
  m.reply(e)
  }
  })
  }
 break
 /////////////////----------------Logo Menu-----------------
 case 'logo' :{ 
    var MAX = ''
    if (global.LANG == 'SI') MAX= '```💃 කරුනාකර වචනයක් ලබාදෙන්න ...```\n_උදාහරණ .logo Janiya_'
    if (global.LANG == 'EN') MAX= '```💃 Please give me a some words ...```\n_example .logo Janiya_'
    if (!text) return reply (MAX)
                                  
     await QueenNilu.sendMessage(from, { react: { text: `1️⃣`, key: m.key }})     
      
             const desmsg = 
             `◉═════════════◉
    
             💃𝐐𝐔𝐄𝐄𝐍 𝐍𝐈𝐋𝐔 💃
          
              🎨𝗟𝗢𝗚𝗢 𝗣𝗔𝗖𝗞 01 🖌️
          
             𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙻𝚄 𝚕𝚘𝚐𝚘 𝚖𝚎𝚗𝚞 
          
              
              *● ʀᴇǫᴜᴇsᴛᴇʀ -*  _${m.pushName}_
              *● ʟᴏɢᴏ ᴛᴇxᴛ -* _${text}_
              *● ᴀᴠᴀʟᴀʙʟᴇ ʟᴏɢᴏᴇs -* _44_
              
              ◉═════════════◉`
         let sections = [{
    
             "title": "ʙᴏᴛ ʟɪsᴛ ᴍᴇɴᴜ ᴄʟɪᴄᴋ ᴀɴᴅ sᴇʟᴇᴄᴛ ʏᴏᴜʀ ᴏᴡɴ",
                                                      "rows": [
                                                      {
                "title": "CANDY STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `candy ${text}`
                },
            {
                "title": "CHRISTMAS STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `christmas ${text}`
                },
            {
                "title": "DEEPSEA STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `deepsea ${text}`
            },
            {
                "title": "SCIFI STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `scifi ${text}`
            },
            {
                "title": "RAINBOW STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `rainbow ${text}`
            },
            {
                    "title": "WATERPIPE STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `waterpipe ${text}`
                },
                                             {
                    "title": "SPOOKEY STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `spooky ${text}`
                },
                {
                    "title": "PENCIL STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `pencil ${text}`
                },		
                {
                    "title": "CIRCUITE STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `circuit ${text}`
                },
                {
                    "title": "DESCOVERY STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `discovery ${text}`
                },	
                {
                    "title": "FICTION STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `fiction ${text}`
                },
                {
                    "title": "DEMON STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `demon ${text}`
                },
                {
                    "title": "TRANSFORMER STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `transformer ${text}`
                },
                {
                    "title": "BERRY STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `berry ${text}`
                },
                {
                    "title": "THUNDER  STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `thunder ${text}`
                },
                {
                    "title": "MAGMA STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `magma ${text}`
                },
                {
                    "title": "3-D STONE STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `3dstone ${text}`
                },
                {
                    "title": "NEONLIGHT STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `neonlight ${text}`
                },
                {
                    "title": "GLITCH STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `glitch ${text}`
                },
                {
                    "title": "HARRYPOTTER STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `harrypotter ${text}`
                },
                {
                    "title": "BROKENGLASS STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `brokenglass ${text}`
                },
                {
                    "title": "PAPERCUT STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `papercut ${text}`
                },
                {
                    "title": "WATERCOLOR STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `watercolor ${text}`
                },
                {
                    "title": "MULTICOLOR STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `multicolor ${text}`
                },
                {
                    "title": "NEON DEVIL STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `neondevil ${text}`
                },
                {
                    "title": "UNDERWATER STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `underwater ${text}`
                },
                {
                    "title": "GRAFFITIBIKE STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `graffitibike ${text}`
                },
                {
                    "title": "SNOW STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `snow ${text}`
                },
                {
                    "title": "CLOUD STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `cloud ${text}`
                },
                {
                    "title": "HONEY STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `honey ${text}`
                },
                {
                    "title": "ICE STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `ice ${text}`
                },
                {
                    "title": "BISCUIT STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `biscuit ${text}`
                },
                {
                    "title": "WOOD STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `wood ${text}`
                },
                {
                    "title": "CHOCOLATE STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `chocolate ${text}`
                },
                {
                    "title": "STRAWBERRY STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `strawberry ${text}`
                },
                {
                    "title": "MATRIXS STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `matrix ${text}`
                },
                {
                    "title": "BLOOD STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `blood ${text}`
                },
                {
                    "title": "DROPWATER STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `dropwater ${text}`
                },
                {
                    "title": "TOXIC STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `toxic ${text}`
                },
                {
                    "title": "LAVA STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `lava ${text}`
                },
                {
                    "title": "ROCK STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `rock ${text}`
                },
                {
                    "title": "BLOODGLAS STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `bloodglas ${text}`
                },
                {
                    "title": "HALLOWEN STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `hallowen ${text}`
                },
                {
                    "title": "DARKGOLD STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `darkgold ${text}`
                },
                {
                    "title": "JOKER STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `joker ${text}`
                },
                {
                    "title": "WICKER STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `wicker ${text}`
                },
                {
                    "title": "FIREWORK STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `firework ${text}`
                },
                {
                    "title": "SKELETON STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `skeleton ${text}`
                },
                {
                    "title": "BLACKPINK STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `blackpink ${text}`
                },
                {
                    "title": "SAND STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `sand ${text}`
                },
                {
                    "title": "GLUE STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `glue ${text}`
                }, ///
                {
                    "title": "3D BOX STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `3dbox ${text}`
                },
                {
                    "title": "GLITCH STYLE - 2",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `glitch2 ${text}`
                },
                {
                    "title": "GLITCH STYLE - 3",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `glitch3 ${text}`
                },
                {
                    "title": "GREEN NEON STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `greenneon ${text}`
                },
                {
                    "title": "3D NEON STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `3dneon ${text}`
                },
                {
                    "title": "BOKEH STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `bokeh ${text}`
                },
                {
                    "title": "BEAR STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `bear ${text}`
                },
                {
                    "title": "CHRISTMAS STYLE - 2",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `sparklechristmas ${text}`
                },
                {
                    "title": "CHRISTMAS STYLE - 3",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `3dchristmas ${text}`
                },
                {
                    "title": "RAINBOW STYLE - 3",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `rainbow2 ${text}`
                },
                {
                    "title": "FRUIT JUICE STYLE",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `fruitjuice ${text}`
                },
                
                ///
                {
                    "title": "1917 STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `1917 ${text}`
                },
                {
                    "title": "LEAVES STYLE ",
                "description": `\nMr ${m.pushName} ${global.botname} is Ready to make your logo`,
                "rowId": `leaves ${text}`
                }
             ]
          }
       ]
                
         await QueenNilu.sendListMsg(m.chat, `${desmsg}`, `${global.botname}`, `*  🎨𝗟𝗢𝗚𝗢 𝗣𝗔𝗖𝗞 01 🖌️*`, `MAKE LOGO`, sections, m)
                                    
      }

      break
      /// TEXT LOGO 2
case 'logo2' :{

    if (global.LANG == 'SI') MAX= '```💃 කරුනාකර වචනයක් ලබාදෙන්න ...```\n_උදාහරණ .logo MR NIMA_'
    if (global.LANG == 'EN') MAX= '```💃 Please give me a some words ...```\n_example .logo MR NIMA_'
    if (!text) return reply (MAX)
    
    await QueenNilu.sendMessage(from, { react: { text: `2️⃣️`, key: m.key }})             	
                   
                   let sections = [{ 
                        "title": `𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙻𝚄 𝚅2 𝙻𝙾𝙶𝙾 𝙻𝙸𝚂𝚃 - 2 𝚂𝙴𝙻𝙴𝙲𝚃 𝚈𝙾𝚄𝚁 𝙻𝙾𝙶𝙾 `,
                                       "rows": [
                                       {
                                            "title": "LEAGUE OF KING STYLE ",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `lofg3 ${text}`
                                            },
                                        {
                                            "title": "YASHO STYLE ",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `gamin ${text}`
                                            },
                                        {
                                            "title": "HORROR STYLE ",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `horr ${text}`
                                        },
                                        {
                                            "title": "ARENA OF VALOR STYLE ",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `lofg2 ${text}`
                                        },
                                        {
                                            "title": "LEAGUE OF LEGENDS STYLE ",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `lofg1 ${text}`
                                        },
                                        {
                                                "title": "LIGHT STYLE ",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `light ${text}`
                                            },
                                             {
                                                "title": "NINJA STYLE ",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `ninja ${text}`
                                            },
                                            {
                                                "title": "NEON-BRIGHT BLUE STYLE ",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `neon5 ${text}`
                                            },		
                                            {
                                                "title": "NEON-DEVIL WING STYLE ",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `neon4 ${text}`
                                            },
                                            {
                                                "title": "NEON SATIN STYLE ",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `neon3 ${text}`
                                            },
                                            {
                                                "title": "NEON-VALANTINE STYLE ",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `neon2 ${text}`
                                            },
                                            {
                                                "title": "NEON-GALAXY STYLE ",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `neon1 ${text}`
                                            },
                                            {
                                                "title": "TEXT TO STETUS STYLE (life)- 1",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `status8 ${text}`
                                            },
                                            {
                                                "title": "TEXT TO STETUS STYLE (life)- 2",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `status7 ${text}`
                                            },
                                            {
                                                "title": "TEXT TO STETUS STYLE (life)- 3",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `status6 ${text}`
                                            },
                                            {
                                                "title": "TEXT TO STETUS  STYLE (lovely)- 4",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `status5 ${text}`
                                            },
                                            {
                                                "title": "TEXT TO STETUS STYLE (lovely)- 5",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `status4 ${text}`
                                            },
                                            {
                                                "title": "TEXT TO STETUS STYLE (mood)- 6",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `status3 ${text}`
                                            },
                                            {
                                                "title": "TEXT TO STETUS STYLE (mood)- 7",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `status2 ${text}`
                                            },
                                            {
                                                "title": "TEXT TO STETUS STYLE (mood)- 8",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `status ${text}`
                                            },
                                            {
                                                "title": "TATOO ON HAND STYLE ",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `tattoo ${text}`
                                            },
                                            {
                                                "title": "LEAVES STYLE - 1",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `leaves4 ${text}`
                                            },
                                            {
                                                "title": "LEAVES STYLE - 2",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `leaves3 ${text}`
                                            },
                                            {
                                                "title": "LEAVES STYLE - 3",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `leaves2 ${text}`
                                            },
                                            {
                                                "title": "LEAVES STYLE - 4",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `leaves1 ${text}`
                                            },
                                            {
                                                "title": "LEAVES STYLE - 5",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `leaves ${text}`
                                            },
                                            {
                                                "title": "LEAVES STYLE - 6",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `leaves5 ${text}`
                                            },
                                            {
                                                "title": "VALANTINE STYLE ",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `valentine ${text}`
                                            },
                                            {
                                                "title": "LEND STYLE ",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `lende ${text}`
                                            },
                                            {
                                                "title": "GALAXY-ANGAL-WINGS STYLE ",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `gaw ${text}`
                                            },
                                            {
                                                "title": "CAKE STYLE - 1",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `cake-text ${text}`
                                            },
                                            {
                                                "title": "CAKE STYLE - 2",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `cake-text2 ${text}`
                                            },
                                            {
                                                "title": "CAKE STYLE - 3",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `cake-text3 ${text}`
                                            },
                                            {
                                                "title": "BLOOD STYLE - 1",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `blood-frosted ${text}`
                                            },
                                            {
                                                "title": "BLOOD STYLE - 2",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `blood-steel ${text}`
                                            },
                                            {
                                                "title": "BLOOD STYLE - 3",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `Blood-Text2 ${text}`
                                            },
                                            {
                                                "title": "BIRTHDAY CAKE STYLE - 1",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `birthday-cake7 ${text}`
                                            },
                                            {
                                                "title": "BIRTHDAY CAKE STYLE - 2",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `birthday-cake6 ${text}`
                                            },
                                            {
                                                "title": "BIRTHDAY CAKE STYLE - 3",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `birthday-cake5 ${text}`
                                            },
                                            {
                                                "title": "BIRTHDAY CAKE STYLE - 4",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `birthday-cake4 ${text}`
                                            },
                                            {
                                                "title": "BIRTHDAY CAKE STYLE - 5",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `birthday-cake3 ${text}`
                                            },
                                            {
                                                "title": "BIRTHDAY CAKE STYLE - 6",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `birthday-cake2 ${text}`
                                            },
                                            {
                                                "title": "BIRTHDAY CAKE STYLE - 7",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `birthday-cake ${text}`
                                            },
                                            {
                                                "title": "QUITE STYLE ",
                                            "description": `Mr ${m.pushName} ${global.botname} is Ready to make your logo`,
                                            "rowId": `darkgold ${text}`
                                            }		
                                          ]
                                    
                                    }
                                ]
         await QueenNilu.sendListMsg(m.chat, 
   `◉═════════════◉
    
   💃𝐐𝐔𝐄𝐄𝐍 𝐍𝐈𝐋𝐔 💃


   𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙻𝚄 𝚕𝚘𝚐𝚘 𝚖𝚎𝚗𝚞 

    
    *● ʀᴇǫᴜᴇsᴛᴇʀ -*  _${m.pushName}_
    *● ʟᴏɢᴏ ᴛᴇxᴛ -* _${text}_
    *● ᴀᴠᴀʟᴀʙʟᴇ ʟᴏɢᴏᴇs -* _44_
    
    ◉═════════════◉`, `${global.botname}`, `*  🎨𝗟𝗢𝗚𝗢 𝗣𝗔𝗖𝗞 02 🖌️*`, `MAKE LOGO`, sections, m)
     
                }
                break

                case 'logo3' :{
                    var MAX = ''
                    if (global.LANG == 'SI') MAX= '```💃 කරුනාකර වචනයක් ලබාදෙන්න ...```\n_උදාහරණ .logo3 Janiya_'
                    if (global.LANG == 'EN') MAX= '```💃 Please give me a some words ...```\n_example .logo3 Janiya_'
                    if (!text && !text.includes('|')) return reply (MAX)
                                                  
                     await QueenNilu.sendMessage(from, { react: { text: `3️⃣`, key: m.key }})     
                      
                             const desmsg = 
  `◉═════════════◉
    
  💃𝐐𝐔𝐄𝐄𝐍 𝐍𝐈𝐋𝐔 💃
                          
    𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙻𝚄 𝚕𝚘𝚐𝚘 𝚖𝚎𝚗𝚞 
                          
  *● ʀᴇǫᴜᴇsᴛᴇʀ -*  _${m.pushName}_
  *● ʟᴏɢᴏ ᴛᴇxᴛ -* _${text}_
  *● ᴀᴠᴀʟᴀʙʟᴇ ʟᴏɢᴏᴇs -* _30_
                              
  ◉═════════════◉`    
                         
                         let sections = [{
                    
                                "rows": [{
                                "title": "Steel style",
                                    "rowId": `qsteel ${text}`
                                },
                                 {
                                "title": "avenger style",
                                "rowId": `qavenger ${text}`
                                },
                                {
                                "title": "polygon style ",
                                "rowId": `qpolugon ${text}`
                                },
                                {
                                "title": "fire steel style ",
                                "rowId": `qhsteel ${text}`
                                },
                                {
                                "title": "wood style ",
                                "rowId": `qwood ${text}`
                                },
                                {
                                "title": "ornamental style ",
                                "rowId": `qlovely ${text}`
                                },
                                {
                                "title": "matalic style ",
                                "rowId": `qmetalic ${text}`
                                },
                                {
                                "title": "neon style ",
                                "rowId": `qneon ${text}`
                                },
                                {
                                "title": "pubg style ",
                                "rowId": `qpubg ${text}`
                                },
                                {
                                "title": "fire game style ",
                                "rowId": `qfire ${text}`
                                },
                                {
                                "title": "horror style ",
                                "rowId": `qhorr ${text}`
                                },
                                {
                                "title": "haloween style",
                                "rowId": `qhalowin ${text}`
                                },
                                {
                                "title": "video game style",
                                "rowId": `qvideogame ${text}`
                                },
                                {
                                "title": "wolf style ",
                                "rowId": `qwolf ${text}`
                                },
                                {
                                "title": "ninja style ",
                                "rowId": `qninja ${text}`
                                },
                                {
                                "title": "3d reto style ",
                                "rowId": `qreto ${text}`
                                },
                                {
                                "title": "bear style",
                                "rowId": `bear ${text}`
                                },
                                {
                                "title": "lion style ",
                                "rowId": `lion ${text}`
                                },
                                {
                                "title": "3dspace style ",
                                "rowId": `3dspace ${text}`
                                },
                                {
                                "title": "glitch style ",
                                "rowId": `glitch3 ${text}`
                                },
                                {
                                "title": "glitch style - 2 ",
                                "rowId": `glitch2 ${text}`
                                },
                                {
                                "title": "pron hub style ",
                                "rowId": `pornhub2 ${text}`
                                },
                                {
                                "title": "grafiti style ",
                                "rowId": `grafiti ${text}`
                                },
                                {
                                "title": "giltch style 3 ",
                                "rowId": `glitch3 ${text}`
                                },
                                {
                                "title": "team logo style - 1 ",
                                "rowId": `tlc ${text}`
                                },
                                {
                                "title": "team logo style - 2 ",
                                "rowId": `tls ${text}`
                                },
                                {
                                "title": "team logo style - 3 ",
                                "rowId": `tlm ${text}`
                                },
                                {
                                "title": "team logo style - 4 ",
                                "rowId": `tle ${text}`
                                },
                                {
                                "title": "team logo style - 5 ",
                                "rowId": `tlb ${text}`
                                },
                                {
                                "title": "mountain style ",
                                "rowId": `mountain ${text}`
                                },
                                {
                                "title": "💃 ǫᴜᴇᴇɴ ɴɪʟᴜ 💃",
                                "rowId": `about`
                                }
                              ]
                            }
                         ]
                         await QueenNilu.sendListMsg(m.chat, `${desmsg}`, `${global.botname}`, `*  🎨𝗟𝗢𝗚𝗢 𝗣𝗔𝗖𝗞 03 🖌️*`, `MAKE LOGO`, sections, m)
                     
                    }
                    break


                case 'eglitch' : case 'eberry': case 'eneon' : case 'ecrismas' : case 'ethunder' : case 'eninja' :
                case 'eorange' : case 'ecake' : case 'estrowberry' : case 'eflaming' : case 'eshadow' : case 'eongrass' : 
                case 'eloveu' : case 'ecoffee' : case 'eilluminati' : {
                
                var GIVEE = ''
      if (global.LANG == 'EN') GIVEE = `*💃 Please give me a some words* \n_ℹ️ example ${prefix + command} Janiya_`
      if (global.LANG == 'SI') GIVEE = `*💃 කරුනාකර වචනයක් ලබාදෙන්න* \n _ℹ️ උදාහරණ ${prefix + command} Janiya_`
         if(!text) return reply(GIVEE)
         const logomaking = await QueenNilu.sendText(m.chat,LOGO_MAKING)
              
           let link      
           if (/eglitch/.test(command)) link = 'https://my-shinz.herokuapp.com/api/textpro/glitch?text='+text
           if (/eberry/.test(command)) link = 'https://my-shinz.herokuapp.com/api/textpro/berry?text='+text
           if (/eneon/.test(command)) link = 'https://my-shinz.herokuapp.com/api/textpro/neon?text='+text
           if (/ecrismas/.test(command)) link = 'https://my-shinz.herokuapp.com/api/textpro/3dchristmas?text='+text
           if (/ethunder/.test(command)) link = 'https://my-shinz.herokuapp.com/api/textpro/thunder?text='+text
           if (/eninja/.test(command)) link = 'https://my-shinz.herokuapp.com/api/textpro/ninja-logo?text='+text+'&text2=QueenNilu BOT'
           if (/eorange/.test(command)) link = 'https://my-shinz.herokuapp.com/api/textpro/3d-orange-juice?text='+text
           if (/ecake/.test(command)) link = 'https://my-shinz.herokuapp.com/api/textpro/chocolate-cake?text='+text
           if (/estrowberry/.test(command)) link = 'https://my-shinz.herokuapp.com/api/textpro/strawberry?text='+text
           if (/eflaming/.test(command)) link = 'https://my-shinz.herokuapp.com/api/photooxy/flaming?text='+text
           if (/eshadow/.test(command)) link = 'https://my-shinz.herokuapp.com/api/photooxy/shadow-sky?text='+text
           if (/eongrass/.test(command)) link = 'https://my-shinz.herokuapp.com/api/photooxy/under-grass?text='+text
           if (/eloveu/.test(command)) link = 'https://my-shinz.herokuapp.com/api/photooxy/picture-of-love?text='+text
           if (/ecoffee/.test(command)) link = 'https://my-shinz.herokuapp.com/api/photooxy/coffee-cup?text='+text
           if (/eilluminati/.test(command)) link = 'https://my-shinz.herokuapp.com/api/photooxy/illuminated-metallic?text='+text
           
        const img = await getBuffer(link)
        await QueenNilu.sendMessage(m.chat, { image: img, caption: `${global.cap}\n\n*🗳️ ʀᴇǫᴜᴇsᴛᴇʀ -* ${m.pushName}` }, { quoted: m })
        await QueenNilu.sendMessage(m.chat,{delete : logomaking.key })  
               
    }
    break





case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow2': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case '.': case '3dstone2': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rockart': case 'bloodglas': case 'halloween': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpinkart': case 'sand': case 'glue': case '1917': case 'leaves': case 'demon': {
             if (!q) throw `Example : ${prefix + command} ${global.ownername}`
             m.reply(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rockart/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpinkart/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'           
             let anutexpro = await maker.textpro(link, q)
                QueenNilu.sendMessage(m.chat, { image: { url: anutexpro }, caption: `Made by ${global.botname}` }, { quoted: m })
             }
             break
case'glitch3':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dbox':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break

case 'waterdrop':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
     `${q}`,])
    .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
    .catch((err) => console.log(err));
     break

case 'lion2':
  if(!q) throw `Use ${prefix + command} text`
  m.reply(mess.wait)
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
     .catch((err) => console.log(err));
     break

case 'papercut':
      if(!q) throw `Use ${prefix + command} text`
      m.reply(mess.wait)
      maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
         .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
         .catch((err) => console.log(err));
         break

case 'transformer':
      if(!q) throw `Use ${prefix + command} text`
      m.reply(mess.wait)
      maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break
   
case 'harrypot':
       if(!q) throw `Use ${prefix + command} text|text`
       m.reply(mess.wait)
       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
 .catch((err) => console.log(err));
 break

case 'neondevil':
      if(!q) throw `Use ${prefix + command} text`
      m.reply(mess.wait)
      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
         .catch((err) => console.log(err));
         break

case '3dstone':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3davengers':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'thunder':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
case 'window':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

   case 'blackpinkneon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'graffiti':
   case 'grafiti':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'pornhub2':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'blackpink2':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch2':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch3':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dspace':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'lion':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dneon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'neon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'greenneon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
    
case 'bokeh':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   

case 'holographic':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'bear':

if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'wolf':

if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'joker':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'dropwater2':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   case 'summertime':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'neonlight2':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'thewall':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
case 'natural':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break 

case 'carbon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'pencil':
if(!q) throw`Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'textmaker': {
   
if (args.length < 1) throw `Example :\n${prefix + command} <name>`
if (args[0] === 'glitch') {
if (args.length < 2) throw `Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`
let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
QueenNilu.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else if (args[0] === 'glow') {
if (args.length < 2) throw `Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`
let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
QueenNilu.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else {
m.reply(`*Text Maker List :*\n•> glitch\n•> glow`)
}
}
break
case 'hoorror':{

     let link = `https://textpro.me/horror-blood-text-effect-online-883.html`
     let anui = await textpro(link, q)
     m.reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    QueenNilu.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'whitebear':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'thunder2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-thunder-text-effect-online-881.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   break
case 'neon':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-online-882.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'matrix2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sky':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'magma':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sand':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'pencil':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'graffiti':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'metallic':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-metallic-text-effect-free-online-1041.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'steel':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/steel-text-effect-online-921.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'harrpotter':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'underwater':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-underwater-text-effect-generator-online-1013.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'luxury':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'glue2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'fabric':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/fabric-text-effect-online-964.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'neonlight':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-glitch-text-generator-online-1063.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'lava':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/lava-text-effect-online-914.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'toxic':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/toxic-text-effect-online-901.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'ancient':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'christmas2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/sparkles-merry-christmas-text-effect-1054.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sci_fi':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'rainbow':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'classic':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'watercolor2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'halloweem2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'halloweenfire':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/halloween-fire-text-effect-940.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'writing':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'foggy':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'marvel':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'skeleton2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sketch':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'wonderful':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'batman':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/make-a-batman-logo-online-free-1066.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'juice':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/fruit-juice-text-effect-861.html", [
    `${q}`,])
  .then((data) => QueenNilu.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'pornhub':{
	
if(!q) throw `Example: ${prefix + command} ajg | ea`
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anuphub = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anuphub)
QueenNilu.sendMessage(from,{image:{url:anuphub}, caption:"Here you go!"},{quoted:m})
}
break
case 'retro':{
if(!q) throw `Example: ${prefix + command} ajg | ea`
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anutro2 = await textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
console.log(anutro2)
QueenNilu.sendMessage(from,{image:{url:anutro2}, caption:"Here you go!"},{quoted:m})
}
break
case 'horror':{
if(!q) throw `Example: ${prefix + command} ajg | ea`
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anuror2 = await textpro("https://textpro.me/create-a-cinematic-horror-text-effect-1045.html", [`${logo4}`,`${logo9}`])
console.log(anuror2)
QueenNilu.sendMessage(from,{image:{url:anuror2}, caption:"Here you go!"},{quoted:m})
}
break
case '8bit':{
if(!q) throw `Example: ${prefix + command} ajg | ea`
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anubit8 = await textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])
console.log(anubit8)
QueenNilu.sendMessage(from,{image:{url:anubit8}, caption:"Here you go!"},{quoted:m})
}
break
case 'tiktok': {
    if (!text) throw '*👸💬 Please give me tiktok link.*'
    await QueenNilu.sendMessage(from, { react: { text: `🪄`, key: m.key }})
     //let bocil = require('@bochilteam/scraper')    
       if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'                
       await fetchJson(`https://api.sdbots.tk/tiktok?url=${text}`).then(async (video) => {           
    //const imga = video.author
    //const musiccc = video.music
    const anu = `   *✨👸 𝙽𝙸𝙻𝚄 𝚃𝙸𝙺𝚃𝙾𝙺 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 👸✨*
    
    *🕵 AUTHOR* : ${video.result.author}
    
    *ℹ️ DESC* : ${video.result.desc}
    
    *⏱️ DURATION :* ${video.result.duration} seconds
    `                      
                         footer = global.botnma
                     buttons = [
                        {buttonId: `tiktok2 ${text}`, buttonText: {displayText: '𝗡𝗢 𝗪𝗔𝗧𝗘𝗥𝗠𝗔𝗥𝗞'}, type: 1},
                        {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '𝗪𝗜𝗧𝗛 𝗪𝗔𝗧𝗘𝗥𝗠𝗔𝗥𝗞'}, type: 1},
                        {buttonId: `directmp3 ${video.result.music}`, buttonText: {displayText: '𝗔𝗨𝗗𝗜𝗢'}, type: 1}
                   
                    ]
                    let buttonMessage = {
                        image: { url: 'https://telegra.ph/file/c2a78bd76db155addef24.jpg' },
                        caption: anu,
                        footer: footer,
                        buttons: buttons,
                        headerType: 4
                    }
                   QueenNilu.sendMessage(m.chat, buttonMessage, { quoted: m })
             }).catch((err) => {
             reply(err)
           //QueenNilu.sendText(m.chat, err)
           })
    
    }
    break
    case 'getlink' : case 'geturl': {
                                  const load = QueenNilu.sendText(m.chat, Lang.CONVER_TING )
                                  await  QueenNilu.sendMessage(m.chat, { delete: load.key })
                          let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                                  let media = await QueenNilu.downloadAndSaveMediaMessage(quoted)
                                  if (/image/.test(mime)) {
                                      let anu = await TelegraPh(media)
                                      reply(util.format(anu))
                                  } else if (!/image/.test(mime)) {
                                      let anu = await UploadFileUgu(media)
                                      reply('*ʏᴏᴜʀ ᴅɪʀᴇᴄᴛ ʟɪɴᴋ*\n\n'+util.format(anu))
                                  }
                                  await fs.unlinkSync(media)
                              }
                              break
                           case 'hurl' : case 'tourl': {
                                   const msg = `*👸 Queen Nilu WA Uploader 👸* \n\n_👸💬 your link -_`
                                  const load = QueenNilu.sendText(m.chat, Lang.CONVER_TING )
                                  //await  QueenNilu.sendMessage(m.chat, { delete: load.key })
                          let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                                  let media = await QueenNilu.downloadAndSaveMediaMessage(quoted)
                                  if (/image/.test(mime)) {
                                      //let anu = await TelegraPh(media)
                                      const anu = await fetchJson(`https://api.akuari.my.id/uploader/telegraph?link=${media}`)
                                      reply(msg+ anu.respon.link)
                                  } else if (!/image/.test(mime)) {
                                      let anu = await UploadFileUgu(media)
                                      reply('*ʏᴏᴜʀ ᴅɪʀᴇᴄᴛ ʟɪɴᴋ*\n\n'+util.format(anu))
                                  }
                                  await fs.unlinkSync(media)
                              }
                              break
break
case 'tiktokaudio':{
if (!text) return m.reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
m.reply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
QueenNilu.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
case 'tiktokgirl':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var asupan = JSON.parse(fs.readFileSync('./Media/HostMedia/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
QueenNilu.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktokghea':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var gheayubi = JSON.parse(fs.readFileSync('./Media/HostMedia/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
QueenNilu.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktokbocil':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var bocil = JSON.parse(fs.readFileSync('./Media/HostMedia/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
QueenNilu.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktoknukhty':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ukhty = JSON.parse(fs.readFileSync('./Media/HostMedia/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
QueenNilu.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktoksantuy':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var santuy = JSON.parse(fs.readFileSync('./Media/HostMedia/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
QueenNilu.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktokkayes':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var kayes = JSON.parse(fs.readFileSync('./Media/HostMedia/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
QueenNilu.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktokpanrika':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var rikagusriani = JSON.parse(fs.readFileSync('./Media/HostMedia/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
QueenNilu.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktoknotnot':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'chinese':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'hijab':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'indo':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'japanese':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'korean':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'malay':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'randomgirl':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'randomboy':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'thai':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'vietnamese':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'aesthetic':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'antiwork':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'blackpink':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'bike':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/randompics/bike.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'boneka':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/randompics/boneka.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'cosplay':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'cat':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/randompics/cat.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'doggo':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/randompics/doggo.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'hacking':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/randompics/hacking.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'justina':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/randompics/justina.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'kayes':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/randompics/kayes.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'kpop':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/randompics/kpop.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'notnot':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/randompics/notnot.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'car':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/randompics/car.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'couplepic':case 'couplepicture':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/randompics/ppcouple.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'profilepic':  case 'profilepicture':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/randompics/profile.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'pubg':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/randompics/pubg.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'rose':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/randompics/rose.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'ryujin':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/randompics/ryujin.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'ulzzangboy':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/randompics/ulzzangboy.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'ulzzanggirl':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/randompics/ulzzanggirl.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/randompics/wallml.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'wallpaperphone': case 'wallphone':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./Media/HostMedia/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break

case 'rentbot': {
if (!isPremium) return sendButMessage (m.chat, prem1, prem2, prem3, { quoted:m})
jadibot(QueenNilu, m, m.chat)
}
break
case 'rentbotlist':
try {
let user = [... new Set([...global.conns.filter(QueenNilu => QueenNilu.user).map(QueenNilu => QueenNilu.user)])]
te = "*Bot Rent List*\n\n"
for (let i of user){
let y = await QueenNilu.decodeJid(i.id)
te += " × User : @" + y.split("@")[0] + "\n"
te += " × Name : " + i.name + "\n\n"
}
QueenNilu.sendMessage(m.chat,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
m.reply(`There are no users who have rented bot yet`)
}
break
case 'git': case 'gitclone':
if (!args[0]) return m.reply(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/YukiShima4/tes`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    QueenNilu.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
break
	        case 'pinterest': {
m.reply(mess.wait)
let { pinterest } = require('./lib/scraper')
anutrest = await pinterest(text)
result = anutrest[Math.floor(Math.random() * anutrest.length)]
QueenNilu.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
}
break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anutone2 = await ringtone(text)
		let result = anutone2[Math.floor(Math.random() * anutone2.length)]
		QueenNilu.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break

        case 'apkdl': case 'apkmod': case 'apkd': {      
  
            if (!text) return m.reply(`Use${prefix + command} vpn`) 
            let noh = require('./lib/myfunc2')                
            noh.rexdl(`${text}`).then(async (data) => {
            let sections = []   
            for (let i of data) {
            const list = {title: `${i.judul}`,
            rows: [
                  {
                   title: `${i.judul}`, 
                   rowId: `${prefix}donlod ${i.link}`,
                   description: `CATEGORY: ${i.kategori}\nPUBLISH: ${i.upload_date}\nINFORMATION: ${i.deskripsi}`
                  }, 
                  ]
               }
               sections.push(list)   
               }
            const sendm =  QueenNilu.sendMessage(
                m.chat, 
                {
                 text: `${ucapannya2} ${pushname} *Search Results From ${text} Click the button below to choose*`,
                 footer: `© ZIM BOT INC`,
                 title: "*▊▊▊APK DOWNLOAD▊▊▊*",
                 buttonText: "CLICK HERE",
                 sections
                }, { quoted : m })                 
                          }).catch((err) => {
                              reply(`*${text} Not found*`)
                          })
                      }
                      break
                      case 'donlod':  {  
                        let dhupi = require('./lib/index.js')             
                                        if (!text) return m.reply(`Use${prefix + command} whatsapp`)
                                        if (!isUrl(args[0]) && !args[0].includes('https://rexdl.com/'))
                                        
                                   dhupi.rexdldown(`${text}`).then(async (anu) => {        
                                   if (anu[0].size.split('MB')[0] >= 150) return reply('*File Over Limit* '+util.format(anu))
                                   for (let i of anu) {    
                                   linkye = `*▊▊▊APK DOWNLOAD▊▊▊*\n\n*TITLE:* ${i.title}\n*UPDATE:* ${i.up}\n*VERSION:* ${i.vers}\n*FILESIZE:* ${i.size}\n*URL:* \n*DESCRIPTION:* ${i.desc}\n\n*ZIM BOT INC*`         
                                        QueenNilu.sendMessage(m.chat, { image: await getBuffer(i.thumb), jpegThumbnail: await getBuffer(i.thumb), caption: `${linkye}` }, { quoted: m })
                                        QueenNilu.sendMessage(m.chat, {document: await getBuffer(i.link), mimetype: `application/vnd.android.package-archive`, fileName: `${i.title}`}, {quoted:m})  
                                        }  
                                        }).catch((err) => {
                                            reply(`*Failed When Downloading Media and Sending Files*`)
                                        }) 
                                      }
                                        break
case 'stickman':
m.reply(mess.wait)
QueenNilu.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/manusia-lidi?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'spongebob':
m.reply(mess.wait)
QueenNilu.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/kawan-sponsbob?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'gojosatoru':
m.reply(mess.wait)
QueenNilu.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/gojosatoru?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'nicholas':
m.reply(mess.wait)
QueenNilu.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/nicholas?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'cartoon':
m.reply(mess.wait)
QueenNilu.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/kr-robot?apikey=dhmDlD5x`}}, {quoted: m })
break
		case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await QueenNilu.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                QueenNilu.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `For What Command?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `No hashes`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                QueenNilu.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message You Want To Save In Database'
                if (!text) throw `Example : ${prefix + command} filename`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' registered in the message list`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nView message list with ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' not listed in the message list`
                QueenNilu.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = ' DATABASE LIST \n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		m.reply(`Successfully deleted '${text}' from the message list`)
            }
	    break
case 'developer': case 'dev': {
reply(`•CHEEMS BOT DEVELOPER•\n\n\n   ©2021-2022 Xeon Bot Inc.\n\n🦄Dream Guy Xeon\nPm: wa.me/916909137213`)
}
            break
case 'owner': case 'creator': case 'moderator': case 'mod': {
QueenNilu.sendContact(m.chat, owner, m)
}
            break
        case 'menfess':
			case 'menfes':
			case 'confes':
			case 'confess':
				if (m.isGroup) return m.reply(mess.group)
				if (!text) return m.reply(`*How to use?*\n\Send command ${prefix + command} number|sender|message\n\nExample ${prefix + command} 91xxxxxxxxxx|handsome here|I have a crush on you\n\nExample 2 : ${prefix + command} 91xxxxxxxxxx|ur crush|I have a crush on you\n\nDon't worry, privacy is safe><`)
				let nomor = q.split('|')[0] ? q.split('|')[0] : q
				let saking = q.split('|')[1] ? q.split('|')[1] : q
				let pesan = q.split('|')[2] ? q.split('|')[2] : ''
				if (pesan.length < 1) return m.reply(`All must be filled in! eg : confess 91xxxxxxxxxx|from|hello dude`)
				 let teksnya = `Hi friend, there is confess message for you!!\n\nFrom :  _${saking}_  \nMessage : _${pesan}_ `
					gambar = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`
				 var button = [{ buttonId: `menfesconfirm`, buttonText: { displayText: `CONFIRM‡` }, type: 1 }, { buttonId: `menu`, buttonText: { displayText: `Menu` }, type: 1 }]
					QueenNilu.sendMessage(`${nomor}@s.whatsapp.net`, { caption: teksnya, image: {url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`}, buttons: button, footer: botname })
				m.reply(`Success Sending Menfess!!`)
				break
			case 'menfesconfirm':{
 				 QueenNilu.sendMessage(q, {text: `It's been confirmed, Confess🌹`})
				  m.reply(`Thank you confess for being accepted.`)
				}
				break
case 'anonymous': {
                if (m.isGroup) return m.reply(mess.group)
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                QueenNilu.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await QueenNilu.getName(m.sender)} Welcome To Anonymous Chat\n\nClick the button below to find a partner\`\`\``, botname, m)
            }
			break
case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await QueenNilu.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In Anonymous Session, Press Button To Find Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await QueenNilu.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await QueenNilu.sendButtonText(m.chat, buttons, `\`\`\`You are still in an anonymous session, press the button below to terminate your anonymous session\`\`\``, botname, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await QueenNilu.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send messages\`\`\``, botname, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await QueenNilu.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send messages\`\`\``, botname, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await QueenNilu.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, botname, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await QueenNilu.sendButtonText(m.chat, buttons, `\`\`\`You are not in an anonymous session, press the button to find a partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await QueenNilu.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await QueenNilu.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, botname, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await QueenNilu.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, botname, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await QueenNilu.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, botname, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                QueenNilu.public = true
                m.reply('*Successful in Changing To Public Usage*')
            }
            break
            case 'self': { 
                if (!isCreator) throw mess.owner
                QueenNilu.public = false
                m.reply('*Successful in Changing To Self Usage*')
            }
            break 
            case 'ping' : case 'ping2' : case 'p' :{
                const start = new Date().getTime()
await QueenNilu.sendText(m.chat, '*📡  ʀᴜɴɪɴɢ ʀᴇsᴘᴏɴᴅ...*')
const end = new Date().getTime()
const poonn = await QueenNilu.sendText(m.chat, '*ᴘᴏɴɢ* ' + (end - start) + ' *_ᴍs_*' )
await QueenNilu.sendMessage(from, { react: { text: `✅`, key: poonn.key }})
}
break
case 'botstetus' : case 'stetus' : {
const start = new Date().getTime()
await QueenNilu.sendMessage(from, { react: { text: `⚧️`, key: m.key }})
const end = new Date().getTime()
const ping = (end - start) + 'ms' 
// const runtime = 
const ramusage = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
m.reply('```🧬 Bot Stetus 🧬 ```\n\n'+'*⚙️ Ping :* ```'+ping+'```\n*⏳ Run Time :* ```'+runtime(process.uptime())+'``` \n*📶 Ram Usage :*``` '+ramusage+'```\n')
}
            break
            case 'setmenu': {
            if (!isCreator) throw mess.owner
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                m.reply(mess.success)
                } else {
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
                {title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
                {title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
                {title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`}
                ]
                },
                ]
                QueenNilu.sendListMsg(m.chat, `pilih aja *Din* Setmenu nya!`, QueenNilu.user.name, `*Hello QueenNilu* !`, `Pilih Din`, sections, m)
                }
            }
            break
            
case 'req': case 'request': {
            	if (!text) throw `Example : ${prefix + command} Fitur Min`
               let ownernya = owner + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Message From : @${me.split('@')[0]} \nFor : @${ownernya.split('@')[0]}\n\n${command} ${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '🙏THANKS' }, type: 1 }]
            await QueenNilu.sendButtonText(ownernya, buttons, pjtxt, botname, m, {mentions: ments, quoted: fdoc})
            let akhji = `*Request has been sent*\n*To Owner @${ownernya.split('@')[0]}*\n_Thank you🙏_`
            await QueenNilu.sendButtonText(m.chat, buttons, akhji, botname, m, {mentions: ments, quoted: fkontak})
            }
            break
case 'report': case 'bug': {
            	if (!text) throw `Example : ${prefix + command} Report an error feature`
               let ownernya = owner + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Message From : @${me.split('@')[0]} \nFor : @${ownernya.split('@')[0]}\n\n${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '🙏THANKS FOR THE REPORT' }, type: 1 }]
            await QueenNilu.sendButtonText(ownernya, buttons, pjtxt, botname, m, {mentions: ments})
            let akhji = `Report Sent\nTo Owner @${ownernya.split('@')[0]}\n*Thank you for the report🙏*\n_Your number will be blocked_\n_If the Report is Only Created_`
            await QueenNilu.sendButtonText(m.chat, buttons, akhji, botname, m, {mentions: ments})
            }
            break
            case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
QueenNilu_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await QueenNilu.sendMessage(m.chat, { audio: QueenNilu_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
case 'hijack':{
  if(!isCreator) throw mess.owner
  let text1 = q.split("|")[0]
  let text2 = q.split("|")[1]
  if(!text1) throw `Example:\n${order +' 1234567890@g.us|_amount_'}`
  if(!text2) throw `Eg:\n${order +' 1234567890@g.us|_amount_'}`
  QueenNilu.sendMessage(text1, { text: `Member kidnapping request by @${m.sender.split("@")[0]}\nAmount: ${text2}\nImporting from : ${from} => ${text1}`, mentions: [m.sender] },{ quoted : m })               
  await QueenNilu.sendMessage(from, { text: `Member kidnapping request by @${m.sender.split("@")[0]}\nAmount: ${text2}\nImporting from : ${from} => ${text1}`, mentions: [m.sender] },{ quoted : m })                
  await m.sequestrar(text1, participants.map(mem => mem.id), text2)
  }
  break
case 'setthumb':{
                       if (!m.key.fromMe && !isCreator) return m.reply(mess.owner)
                       if (!isQuotedImage) return m.reply('Reply the picture!')
                                 let media = await QueenNilu.downloadMediaMessage(m.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
                await fs.writeFileSync('./Media/bot.jpg', media)
               m.reply(mess.success)
            }
          break
case 'creategroup':
if (!isCreator) return m.reply(mess.owner)
if (!q) return reply("Enter text")
const group = await QueenNilu.groupCreate(q, [owner + "@s.whatsapp.net"])
m.reply(mess.success)
QueenNilu.sendMessage(group.id, { text: 'Halo!!' }) // say hello to everyone on the group
break
case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return m.reply('Already activated')
ntilinkytvid.push(from)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
m.reply('Success in turning on youtube video antilink in this group')
var groupe = await QueenNilu.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
QueenNilu.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return m.reply('Already deactivated')
let off = ntilinkytvid.indexOf(from)
ntilinkytvid.splice(off, 1)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
m.reply('Success in turning off youtube video antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await QueenNilu.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
    case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return m.reply('Already activated')
ntilinkytch.push(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
m.reply('Success in turning on youtube channel antilink in this group')
var groupe = await QueenNilu.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
QueenNilu.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube channel link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return m.reply('Already deactivated')
let off = ntilinkytch.indexOf(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
ntilinkytch.splice(off, 1)
m.reply('Success in turning off youtube channel antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await QueenNilu.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
      case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkInstagram) return m.reply('Already activated')
ntilinkig.push(from)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
m.reply('Success in turning on instagram antilink in this group')
var groupe = await QueenNilu.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
QueenNilu.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the instagram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return m.reply('Already deactivated')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
m.reply('Success in turning off instagram antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await QueenNilu.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
        case 'antilinkfacebook': case 'antilinkfb': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkFacebook) return m.reply('Already activated')
ntilinkfb.push(from)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
m.reply('Success in turning on facebook antilink in this group')
var groupe = await QueenNilu.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
QueenNilu.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return m.reply('Already deactivated')
let off = ntilinkfb.indexOf(from)
ntilinkfb.splice(off, 1)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
m.reply('Success in turning off facebook antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await QueenNilu.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
          case 'antilinktelegram': case 'antilinktg': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTelegram) return m.reply('Already activated')
ntilinktg.push(from)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
m.reply('Success in turning on telegram antilink in this group')
var groupe = await QueenNilu.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
QueenNilu.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the telegram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return m.reply('Already deactivated')
let off = ntilinktg.indexOf(from)
ntilinktg.splice(off, 1)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
m.reply('Success in turning off telegram antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await QueenNilu.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
            case 'antilinktiktok': case 'antilinktt': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTiktok) return m.reply('Already activated')
ntilinktt.push(from)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
m.reply('Success in turning on tiktok antilink in this group')
var groupe = await QueenNilu.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
QueenNilu.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the tiktok link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return m.reply('Already deactivated')
let off = ntilinktt.indexOf(from)
ntilinktt.splice(off, 1)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
m.reply('Success in turning off tiktok antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await QueenNilu.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
            case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return m.reply('Already activated')
ntilinktwt.push(from)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
m.reply('Success in turning on twitter antilink in this group')
var groupe = await QueenNilu.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
QueenNilu.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the twitter link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return m.reply('Already deactivated')
let off = ntilinktwt.indexOf(from)
ntilinktwt.splice(off, 1)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
m.reply('Success in turning off twitter antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await QueenNilu.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
              case 'antilinkall': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return m.reply('Already activated')
ntilinkall.push(from)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
m.reply('Success in turning on all antilink in this group')
var groupe = await QueenNilu.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
QueenNilu.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return m.reply('Already deactivated')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
m.reply('Success in turning off all antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await QueenNilu.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'antitoxic': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (antiToxic) return m.reply('Already activated')
nttoxic.push(from)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
m.reply('Success in turning on antitoxic in this group')
var groupe = await QueenNilu.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
QueenNilu.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return m.reply('Already deactivated')
let off = nttoxic.indexOf(from)
nttoxic.splice(off, 1)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
m.reply('Success in turning off antitoxic in this group')
} else {
  let buttonsnttoxic= [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await QueenNilu.sendButtonText(m.chat, buttonsnttoxic, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'antiwame': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (antiWame) return m.reply('Already activated')
ntwame.push(from)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
m.reply('Success in turning on antiwame in this group')
var groupe = await QueenNilu.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
QueenNilu.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send wa.me in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiWame) return m.reply('Already deactivated')
let off = nttoxic.indexOf(from)
ntwame.splice(off, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
m.reply('Success in turning off antiwame in this group')
} else {
  let buttonsntwame = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await QueenNilu.sendButtonText(m.chat, buttonsntwame, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'antilinkgc': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (Antilinkgc) return m.reply('Already activated')
ntlinkgc.push(from)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
m.reply('Success in turning on antiwame in this group')
var groupe = await QueenNilu.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
QueenNilu.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send group link in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!Antilinkgc) return m.reply('Already deactivated')
let off = ntlinkgc.indexOf(from)
ntlinkgc.splice(off, 1)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
m.reply('Success in turning off antiwame in this group')
} else {
  let buttonsntwame = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await QueenNilu.sendButtonText(m.chat, buttonsntwame, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'dare':
              const dare =[
    "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
    "spill people who make you pause",
    "call crush/pickle now and send ss",
    "drop only emote every time you type on gc/pc for 1 day.",
    "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
    "call ex saying miss",
    "sing the chorus of the last song you played",
    "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss🥺👉🏼👈🏼",
	"Bang on the table (which is at home) until you get scolded for being noisy",
    "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
    "mention ex's name",
    "make 1 rhyme for the members!",
    "send ur whatsapp chat list",
    "chat random people with gheto language then ss here",
    "tell your own version of embarrassing things",
    "tag the person you hate",
    "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
    "change name to *I AM DONKEY* for 24 hours",
    "shout *ma chuda ma chuda ma chuda* in front of your house",
    "snap/post boyfriend photo/crush",
    "tell me your boyfriend type!",
    "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
    "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
    "prank chat ex and say *i love u, please come back.* without saying dare!",
    "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
    "change the name to *I am a child of randi* for 5 hours",
    "type in bengali 24 hours",
    "Use selmon bhoi photo for 3 days",
    "drop a song quote then tag a suitable member for that quote",
    "send voice note saying can i call u baby?",
    "ss recent call whatsapp",
    "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
    "pop to a group member, and say fuck you",
    "Act like a chicken in front of ur parents",
    "Pick up a random book and read one page out loud in vn n send it here",
    "Open your front door and howl like a wolf for 10 seconds",
    "Take an embarrassing selfie and paste it on your profile picture",
    "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
    "Walk on your elbows and knees for as long as you can",
    "sing national anthem in voice note",
    "Breakdance for 30 seconds in the sitting room😂",
    "Tell the saddest story you know",
    "make a twerk dance video and put it on status for 5mins",
    "Eat a raw piece of garlic",
    "Show the last five people you texted and what the messages said",
    "put your full name on status for 5hrs",
    "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
    "call ur bestie, bitch",
    "put your photo without filter on ur status for 10mins",
    "say i love oli london in voice note🤣🤣",
    "Send a message to your ex and say I still like you",
    "call Crush/girlfriend/bestie now and screenshot here",
    "pop to one of the group member personal chat and Say you ugly bustard",
    "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
    "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
    "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
    "use any bollywood actor photo as ur pfp for 3 days",
    "put your crush photo on status with caption, this is my crush",
    "change name to I AM GAY for 5 hours",
    "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
    "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
    "slap ur butt hardly send the sound of slap through voice note😂",
    "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
    "shout bravooooooooo and send here through voice note",
    "snap your face then send it here",
    "Send your photo with a caption, i am lesbian",
    "shout using harsh words and send it here through vn",
    "shout you bastard in front of your mom/papa",
    "change the name to i am idiot for 24 hours",
    "slap urself firmly and send the sound of slap through voice note😂",
    "say i love the bot owner xeon through voice note",
    "send your gf/bf pic here",
    "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
    "breakup with your best friend for 5hrs without telling him/her that its a dare",
     "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
     "say i love depak kalal through voice note",
     "write i am feeling horny and put it on status, u can delete it only after 5hrs",
     "write i am lesbian and put it on status, u can delete only after 5hrs",
     "kiss your mommy or papa and say i love you😌",
     "put your father name on status for 5hrs",
     "send abusive words in any grup, excepting this grup, and send screenshot proof here"
]
              const xeondare = dare[Math.floor(Math.random() * dare.length)]
              bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              QueenNilu.sendMessage(from, { image: bufferdare, caption: '_You choose DARE_\n'+ xeondare }, {quoted:m})
              break
                            break
       case 'truth':
              const truth =[
    "Have you ever liked anyone? How long?",
    "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
    "apa ketakutan terbesar kamu?",
    "Have you ever liked someone and felt that person likes you too?",
    "What is the name of your friend's ex-girlfriend that you used to secretly like?",
    "Have you ever stolen money from your father or mom? The reason?",
    "What makes you happy when you're sad?",
    "Ever had a one sided love? if so who? how does it feel bro?", 
    "been someone's mistress?",
    "the most feared thing",
    "Who is the most influential person in your life?",
    "what proud thing did you get this year", 
    "Who is the person who can make you awesome", 
    "Who is the person who has ever made you very happy?", 
    "Who is closest to your ideal type of partner here", 
    "Who do you like to play with??", 
    "Have you ever rejected people? the reason why?",
    "Mention an incident that made you hurt that you still remember", 
    "What achievements have you got this year??",
    "What's your worst habit at school??",
    "What song do you sing most in the shower",
    "Have you ever had a near-death experience",
    "When was the last time you were really angry. Why?",
    "Who is the last person who called you",
    "Do you have any hidden talents, What are they",
    "What word do you hate the most?",
    "What is the last YouTube video you watched?",
    "What is the last thing you Googled",
    "Who in this group would you want to swap lives with for a week",
    "What is the scariest thing thats ever happened to you",
    "Have you ever farted and blamed it on someone else",
    "When is the last time you made someone else cry",
    "Have you ever ghosted a friend",
    "Have you ever seen a dead body",
    "Which of your family members annoys you the most and why",
    "If you had to delete one app from your phone, which one would it be",
    "What app do you waste the most time on",
    "Have you ever faked sick to get home from school",
    "What is the most embarrassing item in your room",
    "What five items would you bring if you got stuck on a desert island",
    "Have you ever laughed so hard you peed your pants",
    "Do you smell your own farts",
    "have u ever peed on the bed while sleeping ??",
    "What is the biggest mistake you have ever made",
    "Have you ever cheated in an exam",
    "What is the worst thing you have ever done",
    "When was the last time you cried",
    "whom do you love the most among ur parents", 
    "do u sometimes put ur finger in ur nosetril?", 
    "who was ur crush during the school days",
    "tell honestly, do u like any boy in this grup",
    "have you ever liked anyone? how long?",
    "do you have gf/bf','what is your biggest fear?",
    "have you ever liked someone and felt that person likes you too?",
    "What is the name of your ex boyfriend of your friend that you once liked quietly?",
    "ever did you steal your mothers money or your fathers money",
    "what makes you happy when you are sad",
    "do you like someone who is in this grup? if you then who?",
    "have you ever been cheated on by people?",
    "who is the most important person in your life",
    "what proud things did you get this year",
    "who is the person who can make you happy when u r sad",
    "who is the person who ever made you feel uncomfortable",
    "have you ever lied to your parents",
    "do you still like ur ex",
    "who do you like to play together with?",
    "have you ever stolen big thing in ur life? the reason why?",
    "Mention the incident that makes you hurt that you still remember",
    "what achievements have you got this year?",
    "what was your worst habit at school?",
    "do you love the bot creator, xeon?🤣",
    "have you ever thought of taking revenge from ur teacher?",
    "do you like current prime minister of ur country",
    "you non veg or veg",
    "if you could be invisible, what is the first thing you would do",
    "what is a secret you kept from your parents",
    "Who is your secret crush",
    "whois the last person you creeped on social media",
    "If a genie granted you three wishes, what would you ask for",
    "What is your biggest regret",
    "What animal do you think you most look like",
    "How many selfies do you take a day",
    "What was your favorite childhood show",
    "if you could be a fictional character for a day, who would you choose",
    "whom do you text the most",
    "What is the biggest lie you ever told your parents",
    "Who is your celebrity crush",
    "Whats the strangest dream you have ever had",
    "do you play pubg, if you then send ur id number"
]
              const xeontruth = truth[Math.floor(Math.random() * truth.length)]
              buffertruth = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              QueenNilu.sendMessage(from, { image: buffertruth, caption: '_You choose TRUTH_\n'+ xeontruth }, {quoted:m})
              break  
case 'fliptext': {
if (args.length < 1) return m.reply(`Example:\n${prefix}fliptext ${ownername}`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
m.reply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
break
case 'toviewonce': case 'toonce': { 
        if (!quoted) return m.reply(`Reply image`)
        if (/image/.test(mime)) {
anuoncr2 = await QueenNilu.downloadAndSaveMediaMessage(quoted)
QueenNilu.sendMessage(m.chat, {image: {url: anuoncr2},viewOnce : true},{quoted: m })
        } else if (/video/.test(mime)) {
        anuonce2 = await QueenNilu.downloadAndSaveMediaMessage(quoted)
        QueenNilu.sendMessage(m.chat, {video: {url: anuonce2},viewOnce : true},{quoted: m })
        }
        }
        break
case 'autostickergc':
            case 'autosticker':
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args.length < 1) return m.reply('type auto sticker on to enable\ntype auto sticker off to disable')
if (args[0]  === 'on'){
if (isAutoSticker) return m.reply(`Already activated`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
m.reply('autosticker activated')
} else if (args[0] === 'off'){
let anuticker1 = autosticker.indexOf(from)
autosticker.splice(anuticker1, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
m.reply('auto sticker deactivated')
}
break
case 'antivirus': case 'antivirtex': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (antiVirtex) return m.reply('Already activated')
ntvirtex.push(from)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
m.reply('Success in turning on antivirus in this group')
var groupe = await QueenNilu.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
QueenNilu.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiVirtex) return m.reply('Already deactivated')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
m.reply('Success in turning off antivirus this group')
} else {
  let buttonsntvirtex = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await QueenNilu.sendButtonText(m.chat, buttonsntvirtex, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'nsfw': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiNsfw) return m.reply('Already activated')
ntnsfw.push(from)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
m.reply('Success in turning on nsfw in this group')
var groupe = await QueenNilu.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
QueenNilu.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return m.reply('Already deactivated')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
m.reply('Success in turning off nsfw in this group')
} else {
  let buttonsntnsfw = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await QueenNilu.sendButtonText(m.chat, buttonsntnsfw, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'mediafire': {
if (!text) throw mess.linkm
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw `The link you provided is invalid`
const { mediafireDl } = require('./lib/mediafire.js')
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 999) return m.reply('*File Over Limit* '+util.format(baby1))
const result4 = `*MEDIAFIRE DOWNLOADER*
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
m.reply(`${result4}`)
QueenNilu.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply(mess.error))
}
break
case 'lyrics2': {
	    if (!text) return reply(`Use example ${prefix}lyrics Despacito`)
	m.reply(mess.wait)
	const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
    const result = await lyricsv2(text).catch(async _ => await lyrics(text))
    m.reply(`
    *🗳️ Title :*${result.title}*
    *🎗️Tittle :* ${result.author}
    *📝Lyrics :* ${result.lyrics}
    *📁Url : *${result.link}
`.trim())
}
break
case 'lyrics':
if (!text) throw `Song name?`
const findLyrics = require('simple-find-lyrics')
try {
const lyrics = await findLyrics(text)
if (lyrics.lyrics == '') return console.log("it's f up")
var txt = `
*🗳️ Title :* ${lyrics.title}
*🎗️Tittle :* ${lyrics.artist}
*📝Lyrics :* \n
${lyrics.lyrics}`
console.log(lyrics)
 await QueenNilu.sendMessage(m.chat, {text:txt},{quoted:m})
} catch (err) {
    console.log(err)
    }
    break
        case 'gimage': {
       if (!text) throw `Example : ${prefix + command} kaori cicak`
        xeonezyanu = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)
        n = xeonezyanu.result
        images = n[Math.floor(Math.random() * n.length)]
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
*📁  Query* : ${text}
*🪄 Media Url* : ${images}`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                QueenNilu.sendMessage(m.chat, buttonMessage, { quoted: m })
        }
        break
case 'img':
case 'image': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraperW')
                anuxeonezy2 = await pinterest(text)
                resultkkk3 = anuxeonezy2[Math.floor(Math.random() * anuxeonezy2.length)]
                QueenNilu.sendMessage(m.chat, { image: { url: resultkkk3 }, caption: ` 🪄Media Url : `+resultkkk3 }, { quoted: m })
            }
            break
case 'swm': case 'stickerwm': case 'wm': case 'take': {  
if (!args.join(" ")) return m.reply(`Example :\nswm ${global.author}|${global.packname}`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
QueenNilu.downloadAndSaveMediaMessage(quoted, "gifee")
QueenNilu.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await QueenNilu.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: global.atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await QueenNilu.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
m.reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
}
break
case 'emoji': {
if (!args.join(" ")) return m.reply('Where is the emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await QueenNilu.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Made by ${global.botname}`}, {quoted:m})
await QueenNilu.sendMessage(from, {text:"reply #s to this image to make sticker"}, {quoted:mese})
})
}
break
case 'volume': {
if (!args.join(" ")) return m.reply(`Example: ${prefix + command} 10`)
media = await QueenNilu.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
jadie = fs.readFileSync(rname)
QueenNilu.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
jadie = fs.readFileSync(rname)
QueenNilu.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
m.reply("Send video/audio")
}
}
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'lizard':
case 'meow':
case 'tickle':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, buttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewallpaper': case 'animewall': {
                if (!args.join(" ")) return m.reply("What wallpaper are you looking for??")
		let { wallpaper } = require('./lib/scraperW')
                anu = await wallpaper(args)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `.wallpaper ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: `${botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                QueenNilu.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'animewall2': case 'animewallpaper2':
m.reply(mess.wait)						
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return m.reply('What wallpaper do you want?')
const wall = new AnimeWallpaper();
    const pages = [1,2,3,4];
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null);
const i = Math.floor(Math.random() * wallpaper.length);
var walb = [
        {buttonId: `.${command} ${q}`, buttonText: {displayText: `Next ✨`}, type: 1},        
        ]
      let wal = {
       image: {url:wallpaper[i].image},
       caption: `*Query :* ${q}`,
      footer: `${global.botname}`,
      buttons: walb,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, wal,{ quoted:m }).catch(err => {
                    return('Error!')
                })
//QueenNilu.sendMessage(m.chat,{image:{url:wallpaper[i].image},caption:`*Query :* ${q}`})            
break
case 'igemoji': 
case 'instagramemoji': 
if (!q) return m.reply("Enter emoji, maximum 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "11")
break
case 'iphoneemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "0")
break
case 'googleemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "1")
break
case 'samsungemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "2")
break
case 'microsoftemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "3")
break
case 'whatsappemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "4")
break
case 'twitteremoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "5")
break
case 'facebookemoji': 
case 'fbemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "6")
break
case 'skypeemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "7")
break
case 'joyemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "8")
break
case 'mojiemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "9")
case 'pediaemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "10")
break
case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						QueenNilu.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					break
case 'loli-waifu':
					m.reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					QueenNilu.sendImage(m.chat, data.url, mess.success, m)
					})
					break
case 'hentaivid': case 'hentaivideo': {
	if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
                m.reply(mess.wait)
                const { hentai } = require('./lib/scraper.js')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                QueenNilu.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
case 'trap' :
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
 let trapbot = [
    {buttonId: `trap`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button2Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
  buttons: trapbot,
  headerType: 1
  }     
            await QueenNilu.sendMessage(m.chat, button2Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'hentai-neko' :
case 'hneko' :
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 let hnekobot = [
    {buttonId: `.hneko`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
  buttons: hnekobot,
  headerType: 1
  }      
            await QueenNilu.sendMessage(m.chat, button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
 let nwaifubot = [
    {buttonId: `.hneko`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button4Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
  buttons: nwaifubot,
  headerType: 1
  }      
            await QueenNilu.sendMessage(m.chat, button4Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'gasm':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonsssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, buttonsssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break  
case 'milf':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/nsfw/milf.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break 
case 'ahegao':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/nsfw/ahegao.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'ass':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/nsfw/ass.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'bdsm':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/nsfw/bdsm.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'blowjob':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/nsfw/blowjob.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'cuckold':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/nsfw/cuckold.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'cum':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/nsfw/cum.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'eba':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/nsfw/eba.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'ero':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/nsfw/ero.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'femdom':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/nsfw/femdom.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'foot':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/nsfw/foot.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'gangbang':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/nsfw/gangbang.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'glasses':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/nsfw/glasses.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'hentai':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/nsfw/hentai.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'jahy':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/nsfw/jahy.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'manga':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/nsfw/manga.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'masturbation':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/nsfw/masturbation.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'neko-hentai':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/nsfw/neko.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'neko-hentai2':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/nsfw/neko2.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'nsfwloli':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/nsfw/nsfwloli.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'orgy':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/nsfw/orgy.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'panties':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/nsfw/panties.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'pussy':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/nsfw/pussy.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tentacles':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/nsfw/tentacles.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'thights':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/nsfw/thights.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'yuri':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/nsfw/yuri.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'zettai':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/nsfw/zettai.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'gifblowjob':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await QueenNilu.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'gifhentai':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/nsfw/gifs.json'))
var janiyaresultx = pickRandom(ahegaonsfw)
    await QueenNilu.sendMessage(m.chat,{video:janiyaresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case'slap2':
if(!quoted){
const   result = await fetchJson(`https://g.tenor.com/v1/random?q=anime slapping&key=LIVDSRZULELA`, {method: 'get'})
const ku = result.results[0]
const oj = ku.media[0]
const urlg = oj.mp4
const slapp = urlg.url
const { data: mediaData } = await axios.get(slapp, {responseType: "arraybuffer"})
const media = new MessageMedia(
    'video/mp4', 
    mediaData.toString("base64")
);
const mention = msg
const mentionedId = await QueenNilu.getName(mention.mentionedIds)
ctv = `@${contacts.number} *Slapped* @${mentionedId.number}`
const ahh = []
m.reply(media,m.chat , {mentions:[contacts,mentionedId], sendVideoAsGif:true, caption: ctv}).then((r) => {
})
}else if(quoted){
const qmid = quoted.author
const   result = await fetchJson(`https://g.tenor.com/v1/random?q=anime slapping&key=LIVDSRZULELA`, {method: 'get'})
const ku = result.results[0]
const oj = ku.media[0]
const urlg = oj.mp4
const slapp = urlg.url
const { data: mediaData } = await axios.get(slapp, {responseType: "arraybuffer"})
const media = new MessageMedia(
    'video/mp4', 
    mediaData.toString("base64")
);
const contact1 = await QueenNilu.getName(qmid)
ctv = `@${contacts.number} *Slapped* @${contact1.number} `
m.reply(media,m.chat , {mentions:[contacts,contact1 ], sendVideoAsGif:true, caption: ctv}).then((r) => {
})
}
break

case 'animesmug':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/smug`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let button1ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, button1ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'foxgirl':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let button12ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, button12ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break   
case 'animenom' :
m.reply(mess.wait)
    waifudd = await axios.get(`https://waifu.pics/api/sfw/nom`)
 let xxhnekobot = [
    {buttonId: `.nom`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let xx1button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
  buttons: xxhnekobot,
  headerType: 1
  }      
            await QueenNilu.sendMessage(m.chat, xx1button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewaifu':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let button112ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, button112ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeneko':
m.reply(mess.wait)						
   waifud = await axios.get('https://waifu.pics/api/sfw/neko')
                var wbutsss = [
        {buttonId: `animeneko`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonssMessage = {
       image: {url:waifud.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbutsss,
      headerType: 4
      }
            await QueenNilu.sendMessage(m.chat,buttonssMessage, { quoted:m }).catch(err => {
                    return('Error!')
                })               
                break
case 'animecuddle':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonsosMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, buttonsosMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break   
case 'animeslap':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let btutttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, btutttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animepat':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let xxbuttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, xxbuttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeneko':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/neko`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonsTsMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, buttonsTsMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animehug':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonussMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, buttonussMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animekiss':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let bxxuttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, bxxuttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewlp':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttoxnssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, buttoxnssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animespank':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonssxMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, buttonssxMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animecry':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/cry`)
                           var wbutt1sss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let button1ssxMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbutt1sss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, button1ssxMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animekill':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/kill`)
                           var wbuttszzss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsxMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszzss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, buttonszzsxMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animelick':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/lick`)
                           var wbuttszz12ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx12Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz12ss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, buttonszzsx12Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animebite':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/bite`)
                           var wbuttszz123ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx123Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz123ss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, buttonszzsx123Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeyeet':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/yeet`)
                           var wbuttszz124ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx124Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz124ss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, buttonszzsx124Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animebully':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/lick`)
                           var wbuttszz125ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx125Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz125ss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, buttonszzsx125Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break

case 'sendme' : {
    if (!isNilu) throw ('*This is only main owner command ☺*️')
    QueenNilu.sendText(m.chat,text)
    }
    break
case 'animebonk':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/bonk`)
                           var wbuttszz126ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx126Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz126ss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, buttonszzsx126Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewink':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/wink`)
                           var wbuttszz127ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx127Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz127ss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, buttonszzsx127Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animepoke':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/poke`)
                           var wbuttszz128ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx128Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz128ss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, buttonszzsx128Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animesmile':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/smile`)
                           var wbuttszz129ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx129Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz129ss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, buttonszzsx129Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewave':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/wave`)
                           var wbuttszz1210ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1210Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1210ss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, buttonszzsx1210Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeawoo':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/awoo`)
                           var wbuttszz1211ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1211Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1211ss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, buttonszzsx1211Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeblush':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/blush`)
                           var wbuttszz1212ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1212Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1212ss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, buttonszzsx1212Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animesmug':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/smug`)
                           var wbuttszz1213ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1213Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1213ss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, buttonszzsx1213Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeglomp':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/glomp`)
                           var wbuttszz1214ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1214Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1214ss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, buttonszzsx1214Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animehappy':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/happy`)
                           var wbuttszz1215ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1215Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1215ss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, buttonszzsx1215Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animedance':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/dance`)
                           var wbuttszz1216ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1216Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1216ss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, buttonszzsx1216Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animecringe':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/cringe`)
                           var wbuttszz1217ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1217Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1217ss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, buttonszzsx1217Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animehighfive':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/highfive`)
                           var wbuttszz1218ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1218Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1218ss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, buttonszzsx1218Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animehandhold':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/handhold`)
                           var wbuttszz1219ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1219Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1219ss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, buttonszzsx1219Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animemegumin':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/megumin`)
                           var wbuttszz1220ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1220Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1220ss,
      headerType: 4
      }     
            await QueenNilu.sendMessage(m.chat, buttonszzsx1220Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'shinobu2':  
m.reply(mess.wait)						
                    ud = await axios.get('https://waifu.pics/api/sfw/shinobu')
var wbutsss = [
    {buttonId: `.shinobu`, buttonText: {displayText: `Next ✨`}, type: 1},
         ]
      let buttonsesMessage = {
      image: {url:ud.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
          buttons: wbutsss,
     headerType: 4
                      }
await QueenNilu.sendMessage(m.chat,buttonsesMessage, { quoted:m }).catch(err => {
     return('Error!')
    })               
break
case 'animemegumin':
m.reply(mess.wait)						
                    ud = await axios.get('https://waifu.pics/api/sfw/megumin')
var wbutsss = [
    {buttonId: `.megumin`, buttonText: {displayText: `Next ✨`}, type: 1},
         ]
      let buttonzMessage = {
      image: {url:ud.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
          buttons: wbutsss,
     headerType: 4
                      }
await QueenNilu.sendMessage(m.chat,buttonzMessage, { quoted:m }).catch(err => {
     return('Error!')
    })               
break     
case 'animeawoo':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)
 var wbuttsss = [
    {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
    ]
  let button1Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
   footer: `${global.botname}`,
  buttons: wbuttsss,
  headerType: 2
  }       
            await QueenNilu.sendMessage(m.chat, button1Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'loli':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/anime/loli.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'husbu':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/anime/husbu.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'neko2':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/anime/neko.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'randomanime':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/anime/random.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'shota':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/anime/shota.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'waifu2':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./Media/HostMedia/anime/waifu.json'))
var janiyaresult = pickRandom(ahegaonsfw)
QueenNilu.sendMessage(m.chat, { caption: mess.success, image: { url: janiyaresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'genshin':
try {
if (!text) throw `Which genshin are you lookin for?`
const genshin = require("genshin-api")
a = text.toLowerCase();
const anime = await genshin.Characters(text)
let txt = ""
txt += `🎀 *Name:* ${anime.name}\n`
txt += `🎖️ *Title:* ${anime.title}\n`
txt += `💠 *Vision:* ${anime.vision}\n`
txt += `🏹 *Weapon:* ${anime.weapon}\n`
txt += `💮 *Gender:* ${anime.gender}\n`
txt += `🌏 *Nation:* ${anime.nation}\n`
txt += `🪷 *Affiliation:* ${anime.affiliation}\n`
txt += `🌟 *Rarity:* ${anime.rarity}\n`
txt += `❄️ *Constellation:* ${anime.constellation}\n`
txt += `📖 *Description:* ${anime.description}\n`
txt += `🌐 *Url:* https://genshin-impact.fandom.com/wiki/${a}\n`
urll = `https://api.genshin.dev/characters/${a}/portrait`
await QueenNilu.sendMessage(m.chat,{image:{url:urll}, caption:txt},{quoted:m})
} catch (err) {
console.log(err)
throw mess.error
}
break
case 'anime':
if (!text) throw `Which anime are you lookin for?`
const malScraper = require('mal-scraper')
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) throw `Could not find`
let animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularity: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`
                await QueenNilu.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
                break
case 'patrick':
case 'patricksticker': {
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/patrick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await QueenNilu.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'ttp': {
           if (!text) return m.reply(`*Example : ${prefix + command} hello*`)
           await QueenNilu.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/texttopng2?teks=${text}`, 'A L Y A', 'B O T M D', m, {asSticker: true})
         
                     }
                     break
case 'dogesticker':
case 'dogestick':
	case 'doge':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/doge')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await QueenNilu.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'lovesticker':
case 'lovestick' :{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/love')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await QueenNilu.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await QueenNilu.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
            case 'can': {
            	if (!text) throw `Ask question\n\nExample : ${prefix + command} i dance?`
            	let bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Can ${text}*\nAnswer : ${keh}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'PATIENT 👀' }, type: 1 }]
            await QueenNilu.sendButtonText(m.chat, buttons, jawab, botname, m)
            }
            break
            case 'is': {
            	if (!text) throw `Ask question\n\nExample : ${prefix + command} she virgin?`
            	let apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Is ${text}*\nAnswer : ${kah}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'HAHAHA' }, type: 1 }]
            await QueenNilu.sendButtonText(m.chat, buttons, jawab, botname, m)
            }
            break
            case 'when': {
            	if (!text) throw `Ask question\n\nExample : ${prefix + command} will i get married?`
            	let kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nAnswer : ${koh}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'PATIENT 👀' }, type: 1 }]
            await QueenNilu.sendButtonText(m.chat, buttons, jawab, botname, m)
            }
            break
case 'what': {
            	if (!text) throw `Ask question\n\nExample : ${prefix + command} is your name?`
            	let lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
                let kah = lel[Math.floor(Math.random() * lel.length)]
                let jawab = `*What ${text}*\nAnswer : ${kah}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'HAHAHA' }, type: 1 }]
            await QueenNilu.sendButtonText(m.chat, buttons, jawab, botname, m)
            }
            break
case 'where': {
            	if (!text) throw `Ask question\n\nExample : ${prefix + command} is your name?`
            	let wherelol = [`In the mountain`, `On mars`, `On moon`,`In the jungle`,`I dont know ask your mom`,`It could be somewhere`]
                let kah = wherelol[Math.floor(Math.random() * wherelol.length)]
                let jawab = `*Whwre ${text}*\nAnswer : ${kah}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'HAHAHA' }, type: 1 }]
            await QueenNilu.sendButtonText(m.chat, buttons, jawab, botname, m)
            }
            break
case 'how': {
            	if (!text) throw `Ask question\n\nExample : ${prefix + command} to date girl?`
            	let gimana = [`Ummm...`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah😴, don't wanna answer`,`Ohhh I See:(`,`The Patient, Boss:(`,`Really dude 🙄`]
                let kah = gimana[Math.floor(Math.random() * gimana.length)]
                let jawab = `*How ${text}*\nAnswer : ${kah}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'HAHAHA' }, type: 1 }]
            await QueenNilu.sendButtonText(m.chat, buttons, jawab, botname, m)
            }
            break
case 'rate': {
            	if (!text) throw `Example : ${prefix + command} my profile`
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = `*Rate ${text}*\nAnswer : ${kah}%`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'HAHAHA' }, type: 1 }]
            await QueenNilu.sendButtonText(m.chat, buttons, jawab, botname, m)
            }
            break
case 'runtime': {
            	let lowq = `*The Bot Has Been Online For:*\n*${runtime(process.uptime())}*`
                let buttons = [{ buttonId: 'menu', buttonText: { displayText: 'Menu' }, type: 1 }]
                await QueenNilu.sendButtonText(m.chat, buttons, lowq, botname, m, {quoted: fkontak})
            	}
            break
case 'handsomecheck':
				if (!text) return m.reply(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
QueenNilu.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })

					break
case 'beautifulcheck':
				if (!text) return m.reply(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
QueenNilu.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })
					break
					case 'charactercheck':
					if (!text) return m.reply(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const janiya =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = janiya[Math.floor(Math.random() * janiya.length)]
					QueenNilu.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break
                    case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
				if (!text) return m.reply(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
QueenNilu.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${sange}%*` }, { quoted: m })
					break
                    case 'stupid':
      case 'foolish':
      case 'smart':
      case 'idiot':
      case 'gay':
      case 'lesbi':
      case 'bastard':
      case 'stubble':
      case 'dog':
      case 'fuck':
      case 'ape':
      case 'noob':
      case 'great':
      case 'horny':
      case 'wibu':
      case 'asshole':
      case 'handsome':
      case 'beautiful':
      case 'cute':
      case 'kind':
      case 'ugly':
      case 'pretty':
      case 'lesbian':
      case 'randi':
      case 'gandu':
      case 'madarchod':
      case 'kala':
      case 'gora':
      case 'chutiya':
      case 'nibba':
      case 'nibbi':
      case 'bhosdiwala':
      case 'chutmarika':
      case 'bokachoda':
      case 'suarerbaccha':
      case 'bolochoda':
      case 'muthal':
      case 'muthbaaz':
      case 'randibaaz':
      case 'topibaaz':
      case 'cunt':
      case 'nerd':
      case 'behenchod':
      case 'behnchoda':
      case 'bhosdika':
      case 'nerd':
      case 'mc':
      case 'bsdk':
      case 'bhosdk':
      case 'nigger':
      case 'loda':
      case 'laund':
      case 'nigga':
      case 'noobra':
      case 'tharki':
      case 'nibba':
      case 'nibbi':
      case 'mumu':
      case 'rascal':
      case 'scumbag':
      case 'nuts':
      case 'comrade':
      case 'fagot':
      case 'scoundrel':
      case 'ditch':
      case 'dope':
      case 'gucci':
      case 'lit':
      case 'dumbass':
      case 'sexy':
      case 'crackhead':
      case 'mf':
      case 'motherfucker':
      case 'dogla':
      case 'bewda':
      case 'boka':
      case 'khanki':
      case 'bal':
      case 'sucker':
      case 'fuckboy':
      case 'playboy':
      case 'fuckgirl':
      case 'playgirl':
      case 'hot': {
            if (!m.isGroup) return m.reply(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `The Most *${command}* Here Is @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'oke', buttonText: { displayText: '🤣' }, type: 1 }
                    ]
                    await QueenNilu.sendButtonText(m.chat, buttons, jawab, botname, m, {mentions: ments})
            }
            break
case 'id':{
            m.reply(from)
           }
          break
case 'toqr':{
  if (!q) return m.reply(' Please include link or text!')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await QueenNilu.sendMessage(from, { image: medi, caption:"Here you go!"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
case 'ig': case 'instagram': case 'reels':{ //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
if (args.length === 0) throw `Where is the link?\nSend ${prefix + command} url`
        let urlInsta = args[0];
        if (!(urlInsta.includes("instagram.com/p/") ||
            urlInsta.includes("instagram.com/reel/") ||
            urlInsta.includes("instagram.com/tv/")))
            return QueenNilu.sendMessage(
                m.chat,
                { text: `The link you provided is not a instagram link` },
                { quoted: m }
            );      
            if (urlInsta.includes("?"))
            urlInsta = urlInsta.split("/?")[0];
        console.log(urlInsta);
        ig.fetchPost(urlInsta).then((res) => {
            if (res.media_count == 1) {
                if (res.links[0].type == "video") {
                    QueenNilu.sendMessage(
                        m.chat,
                        {
                            video: { url: res.links[0].url }
                        },
                        { quoted: m }
                    )
                }else if (res.links[0].type == "image") {
                    QueenNilu.sendMessage(
                        m.chat,
                        {
                            image: { url: res.links[0].url }
                        },
                        { quoted: m }
                    )
                }
            }
            else if (res.media_count > 1) {
                for (let i = 0; i < res.media_count; i++) {
                    if (res.links[i].type == "video") {
                        QueenNilu.sendMessage(
                            m.chat,
                            {
                                video: { url: res.links[i].url }
                            },
                            { quoted: m }
                        )
                    } else if (res.links[i].type == "image") {
                        QueenNilu.sendMessage(
                            m.chat,
                            {
                                image: { url: res.links[i].url }
                            },
                            { quoted: m }
                        )
                    }
                }
            }            
        }).catch((error) => {
            console.log(error);
            QueenNilu.sendMessage(m.chat, { text: `Must be private or unavailable` }, { quoted: m })
        });
}
break
case 'spotify': //credit: Ray Senpai❤️ https://github.com/EternityBots/Nezuko
if (!text) return m.reply(`Where is the link?`)
        const Spotify = require('./lib/spotify')
        const spotify = new Spotify(text)
        const info = await spotify.getInfo()
        if ((info).error) throw `The link you provided is not spotify link`
        const { name, artists, album_name, release_date, cover_url } = info
        const details = `${themeemoji} *Title:* ${name || ''}\n${themeemoji} *Artists:* ${(artists || []).join(
            ','
        )}\n${themeemoji} *Album:* ${album_name}\n${themeemoji} *Release Date:* ${release_date || ''}`
       const response = await QueenNilu.sendMessage(m.chat, { image: { url: cover_url }, caption: details }, { quoted: m })
        const bufferpotify = await spotify.download()
        await QueenNilu.sendMessage(m.chat, { audio: bufferpotify }, { quoted: response })
break
case 'reddit': //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
if (!text) throw `Where is the subreddit name?`
const RedditImageFetcher = require("reddit-image-fetcher")
RedditImageFetcher.fetch({
            type: 'custom',
            total: 1, 
            addSubreddit:text,
        }).then(result => {
            console.log(result);
            let akusingle = result[0]
            QueenNilu.sendMessage(m.chat,{image:{url:akusingle.image}},{quoted:m})
        })
        .catch(err => {
            m.reply ("Not found!")
        })
        break
case 'define': //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
if (!q) throw `What do you want to define?`
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) throw mess.error
const reply = `
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
   QueenNilu.sendMessage(m.chat,{text:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return m.reply (`*${q}* isn't a valid text`)
    }
    break
case 'About': case 'script': case 'bot': case 'donate': case 'about': case 'updatebot': case 'cekbot': case 'sourcecode': {
    anu = await fetchJson('https://github.com/Dragonxjanith/UPLOADS/raw/main/JSON/niludetails.json')
    G_LINK = anu.PUBLIC_GROUP
 
 
 
const msg = `*💃 𝙌𝙐𝙀𝙀𝙉 𝙉𝙄𝙇𝙐 𝙑2 💃*

*💃ᴀʙᴏᴜᴛ ʙᴏᴛ💃*

*🧑🏻‍💻ᴅᴇᴠᴇʟᴏᴘᴇʀ : 𝙹𝙰𝙽𝙸𝚈𝙰*
*🔮ᴠᴇʀꜱɪᴏɴ : 2.0.0*
*📡ᴡᴇʙ ᴀᴘɪ : 𝙱𝙰𝙸𝙻𝚈𝙴𝚂*
*🪦ʙᴀꜱᴇ : 𝚡𝚎𝚘𝚗*

*💃ᴅᴇᴘʟᴏʏ Qᴜᴇᴇɴ ɴɪʟᴜ💃*

•ᴡᴇʙꜱɪᴛᴇ - https://janithsadanuwan.tech/QueenNilu
•ɢɪᴛʜᴜʙ- https://github.com/Janithsadanuwan
•Qʀ -https://bit.ly/QueenNiluQR

*© Qᴜᴇᴇɴ ɴɪʟᴜ ᴘᴜʙʟɪᴄ ꜱᴛᴀʙʟᴇ*
`
const templateButtons = [
    {buttonId: `publicgroup`, buttonText: {displayText: 'Qᴜᴇᴇɴ ɴɪʟᴜ ᴘᴜʙʟɪᴄ ɢʀᴏᴜᴘ'}, type: 1},
    {buttonId: `botstetus`, buttonText: {displayText: 'sᴛᴇᴛᴜs'}, type: 1}
]

const templateMessage = {
image: {url: 'https://te.legra.ph/file/3e57249993356ba15109f.jpg'},
caption: msg,
footer: 'ǫᴜᴇᴇɴ ɴɪʟᴜ ᴡᴀ ʙᴏᴛ ᴍᴅ',
buttons: templateButtons,
headerType: 4
}

await QueenNilu.sendMessage(m.chat, templateMessage, { quoted: m })   

await QueenNilu.sendMessage(from, { react: { text: `💃`, key: m.key }})  
           
 }
 break

 case 'publicgroup' : {
    const anu = await fetchJson ('https://github.com/Dragonxjanith/UPLOADS/raw/main/JSON/niludetails.json')
const msg =  `*💃𝗤𝗨𝗘𝗘𝗡 𝗡𝗜𝗟𝗨 𝗣𝗨𝗕𝗟𝗜𝗖 𝗚𝗥𝗢𝗨𝗣 💃*

${anu.PUBLIC_GROUP_RULES}

`
const templateButtons = [
{index: 1, urlButton: {displayText: 'ᴊᴏɪɴ ɴᴏᴡ', url: 'https://chat.whatsapp.com/IeODOwZ6Ot1BqGzEgFjKEw'}},
{index: 2, urlButton: {displayText: 'sᴜʙsᴄʀɪʙᴇ', url: 'https://youtube.com/c/Janithsadanuwan'}}

]

const templateMessage = {
text: msg,
footer: 'Qᴜᴇᴇɴ ɴɪʟᴜ',
templateButtons: templateButtons
}

const sendｍsg = await QueenNilu.sendMessage(m.chat, templateMessage, { quoted: m })   

}
            break
case 'quotes':
const quotejaniya = await axios.get(`https://favqs.com/api/qotd`)
        const textquotes = `*${themeemoji} Quote:* ${quotejaniya.data.quote.body}\n\n*${themeemoji} Author:* ${quotejaniya.data.quote.author}`
return m.reply(textquotes)
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
case 'resetgrouplink':
case 'resetgclink':
case 'resetgruplink': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
QueenNilu.groupRevokeInvite(m.chat)
}
break
case 'imdb':
if (!text) return m.reply(`_Name a Series or movie`)
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title      : " + fids.data.Title + "\n"
            imdbt += "📅Year       : " + fids.data.Year + "\n"
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Actors     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Language   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + ""
           QueenNilu.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: m,
            })
            break
            // AUTO MASSAGE REPLY REACT🐣

     if (global.AUTO_REACT == 'true' ) {
		//const sudoo = HELPERS.split(',')
		const Sudooo = [HELPERS].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
		if (Sudooo){
		await QueenNilu.sendMessage(from, { react: { text: `👻`, key: m.key }})
         
		}
		if (m.sender == `${global.owner}@s.whatsapp.net`) {
				  await QueenNilu.sendMessage(from, { react: { text: global.OWNER_REACT , key: m.key }})
				 }		 
         if (budy.match(`🥲`)) {
         await QueenNilu.sendMessage(from, { react: { text: `😙`, key: m.key }})
         }
           if (budy.match(`😹`)) {
         await QueenNilu.sendMessage(from, { react: { text: `😹`, key: m.key }})
         }
           if (budy.match(`😂`)) {
         await QueenNilu.sendMessage(from, { react: { text: `😹`, key: m.key }})
         }
           if (budy.match(`🤣`)) {
         await QueenNilu.sendMessage(from, { react: { text: `😂`, key: m.key }})
         }
           if (budy.match(`🥰`)) {
         await QueenNilu.sendMessage(from, { react: { text: `😍`, key: m.key }})
         }
           if (budy.match(`😍`)) {
         await QueenNilu.sendMessage(from, { react: { text: `😇`, key: m.key }})
         }
           if (budy.match(`🤗`)) {
         await QueenNilu.sendMessage(from, { react: { text: `🤗`, key: m.key }})
         }
           if (budy.match(`🙂`)) {
         await QueenNilu.sendMessage(from, { react: { text: `😔`, key: m.key }})
         }
           if (budy.match(`😇`)) {
         await QueenNilu.sendMessage(from, { react: { text: `😇`, key: m.key }})
         }
           if (budy.match(`😙`)) {
         await QueenNilu.sendMessage(from, { react: { text: `🌝`, key: m.key }})
         }
           if (budy.match(`😪`)) {
         await QueenNilu.sendMessage(from, { react: { text: `😪`, key: m.key }})
         }
           if (budy.match(`😔`)) {
         await QueenNilu.sendMessage(from, { react: { text: `😔`, key: m.key }})
         }
           if (budy.match(`paka`)) {
         await QueenNilu.sendMessage(from, { react: { text: `🍆`, key: m.key }})
         }
           if (budy.match(`nima`)) {
         await QueenNilu.sendMessage(from, { react: { text: `👻`, key: m.key }})
         }
           if (budy.match(`❤`)) {
         await QueenNilu.sendMessage(from, { react: { text: `💞`, key: m.key }})
         }
           if (budy.match(`🌝`)) {
         await QueenNilu.sendMessage(from, { react: { text: `🌚`, key: m.key }})
         }
           if (budy.match(`🌚`)) {
         await QueenNilu.sendMessage(from, { react: { text: `🌝`, key: m.key }})
         }
           if (budy.match(`🤨`)) {
         await QueenNilu.sendMessage(from, { react: { text: `😮‍💨`, key: m.key }})
         }
           if (budy.match(`😒`)) {
         await QueenNilu.sendMessage(from, { react: { text: `🙄`, key: m.key }})
         }
           if (budy.match(`🤗`)) {
         await QueenNilu.sendMessage(from, { react: { text: `👀`, key: m.key }})
         }
         if (budy.match(`sex`)) {
         await QueenNilu.sendMessage(from, { react: { text: `🧐`, key: m.key }})
         }
         if (budy.match(`janiya`)) {
         await QueenNilu.sendMessage(from, { react: { text: `🐼`, key: m.key }})
         }
         if (budy.match(`rash`)) {
         await QueenNilu.sendMessage(from, { react: { text: `🦄`, key: m.key }})
         }
         if (budy.match(`vish`)) {
         await QueenNilu.sendMessage(from, { react: { text: `🦚`, key: m.key }})
         }
         const reactimoji = ["🌍","🐼","😎","🥺","😳","😲","😯","😥","😱","😭","😖","😈","📥","😀","😃","😄","😁","😆","🥹","😅","☺","️😊","🙃","😉","😌","🤓","💦","🥸","🤩","🥳","😕","😖","😩","🥺","🖤","💔","❤️‍🔥","❤️‍🩹","💋","😤","🤬","🥵","🥶","😶","🤡","😐","😯","😮","🥱","😪","😵","😵‍💫","🙈","👺","💩","👻","💀","☠️","👾","😺","😸","😹","😻","😼","😽","🙀","😾","🫶","🤲","🫵","👍","🫳","👉","🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐻‍❄","🐨","🐯","🦁","🐮","🐷","🐽","🐸","🌙","🍆","🍊","🥎","🧡","💟","💘","🇱🇰","🫂","👀","🪀","⚽","🧘‍♀️","✈️","🎡","⛲","🎠","⛱️","Hi","morning","night","gm","gn","😘","🤤","💪","🙏","👋","😊","🖕","🌼","🌸","🍑","ok","elisa","Elisa" ]
         const repkyreact = ["🌍","🐼","😎","🥺","😳","😲","😯","😥","😱","🤧","😖","😈","😶‍🌫️","😀","😃","😄","😁","😆","🥹","😅","☺","️😊","🙃","😉","😌","🦁","💥","🥸","🤩","🥳","😕","😖","😩","🥺","🤍","💔","❤️‍🔥","❤️‍🩹","💋","😤","🤬","🥵","🥶","😶","🤡","😐","😯","😮","🥱","😪","😵","😵‍💫","🙊","👺","💩","👻","💀","☠️","👾","😺","😸","😹","😻","😼","😽","🙀","😾","🫶","🤲","🫵","👍","🫳","👉","🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐻‍❄","🐨","🐯","🦁","🐮","🐷","🐽","🐸","🌙","🍆","🍊","🥎","🧡","💟","💘","🇱🇰","🫂","👀","🪀","⚽","🧘‍♀️","✈️","🎡","⛲","🎠","⛱️","👋","⛅","🌌","🌄","🌙","😘","🤤","💪","🙏","👋","😊","🖕","🌼","🌸","🍑","✌️","👸","👸"]
         for (any in reactimoji){
         if (budy.toLowerCase().includes(reactimoji[any])) {
         imoji = repkyreact[any]
//await QueenNilu.sendText(m.chat, imoji )
         await QueenNilu.sendMessage(from, { react: { text: imoji, key: m.key }})
}
}
     }

     break
     /// AUTO REPLY MASSAGE \\\
const auto_reply_msg = JSON.parse(fs.readFileSync('./database/autoreply.json'))
const resevmsg = auto_reply_msg.massage
const sendmsg = auto_reply_msg.reply_massage
         for (any in resevmsg){
         if (budy.toLowerCase().startsWith(resevmsg[any])) {
         imoji = sendmsg[any]
m.reply(imoji)
}
}
break
///  ANTI BAD WORDS
if (global.ANTI_BADWORD == 'true' && m.isGroup && !isAdmins && !isCreator) {
         
    const bad = JSON.parse(fs.readFileSync('./database/BAD_WORD.json'))
    //await fetchJson(`https://github.com/DarkMakerofc/UPLOADS/raw/main/JSON/BADWORD.json`)
    for (any in bad){
    if (budy.toLowerCase().includes(bad[any])){
    if (!isBotAdmins) return 
   // if (isCreator) return
    //await QueenNilu.sendMessage(from, { react: { text: `🤬`, key: m.key }})
    await QueenNilu.sendMessage(m.chat, { delete: m.key })
    await QueenNilu.sendText(m.chat,`*@${m.sender.split("@")[0]} Bot Owner is Activated Anti Bad Words*`)
    //await QueenNilu.groupParticipantsUpdate(m.chat,[m.sender], 'remove')
    }}}

break
case 'weather':
if (!text) return m.reply('What location?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

           QueenNilu.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           break
case 'horoscope':
if (!text) return m.reply('What sign?')
            try {
                const URL = `https://aztro.sameerkumar.website/?sign=${text}&day=today`
                fetch(URL, {
                        method: 'POST'
                    })
                    .then(response => response.json())
                    .then(json => {
                        const date = json.current_date
                        console.log(date)
                        let textw = ""
                        textw += `*👁️ Horoscope of  ${text}*\n\n`
                        textw += `*Current Date:* ${json.current_date}.\n`
                        textw += `*Sign:* ${text}.\n`
                        textw += `*Lucky Time:* ${json.lucky_time}.\n`
                        textw += `*Compatibility:* ${json.compatibility}.\n`
                        textw += `*Lucky Number:* ${json.lucky_number}.\n`
                        textw += `*Lucky Color:* ${json.color}.\n`
                        textw += `*Today Mood:* ${json.mood}.\n`
                        textw += `*Overall:* ${json.description}.\n`
                        m.reply(textw)
                    })

            } catch (e) {
                console.log(e)
            }
        break
case 'wanumber': case 'searchno': case 'searchnumber':
var inputnumber = text.split(" ")[0]
        if (!inputnumber.includes('x')) return m.reply(`You did not add xx\nExample: ${prefix + command} 9169091372xx`)
        m.reply(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await QueenNilu.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await QueenNilu.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        m.reply(`${text66}${nobio}${nowhatsapp}`)
break
    
//-----------------ALIVE-----------------------------\\
 

case 'alive': case 'bot':{  
    // Push Message To Console && Auto Read
QueenNilu.readMessages([m.key])

   // await QueenNilu.sendReadReceipt(from, m.sender, [m.key.id])
             await QueenNilu.sendPresenceUpdate('recording', m.chat) 
             await QueenNilu.sendMessage(m.chat, { audio: {url :'https://github.com/Dragonxjanith/UPLOADS/raw/main/VOICE/Nilu.mp3'}, mimetype: 'audio/mp4', ptt: true }, { quoted: m }) 
 if (global.alive === 'default') {
 const ita = '```'
 await QueenNilu.sendMessage(from, { react: { text: `👋`, key: m.key }})
 
    let buttons = [
       {buttonId: `panel`, buttonText: {displayText: 'ᴍᴇɴᴜ'}, type: 1},
       {buttonId: `owner`, buttonText: {displayText: 'ᴏᴡɴᴇʀ'}, type: 1}
       
   ]
   let buttonMessage = {
       image: { url: global.alivelogo },
       caption:`${ita}◈ Queen Nilu Bot is Online ◈${ita}

*( ᴅᴇᴘʟᴏʏ ) ▽* 
_http://github.com/janithsadanuwan_
*( ᴏᴡɴᴇʀ ) ▽* 
_${global.owner}_
*( ᴘᴜʙʟɪᴄ ɢʀᴏᴜᴘ ) ▽*
_https://chat.whatsapp.com/
*( ᴠᴇʀsɪᴏɴ ) ▽*
_${BOT_VERSION}_
*( ʏᴏᴜᴛᴜʙᴇ ) ▽*
_https://youtube.com/janithsadanuwan

*[ ⏱️ ʀᴜɴ ᴛɪᴍᴇ ⏱️] ▽*
${runtime(process.uptime())}

${ita}💗 THANKS FOR USING QUEEN NILU 💗${ita}
`,
       footer: global.botname,
       buttons: buttons,
       headerType: 4
   }
            return await QueenNilu.sendMessage(m.chat, buttonMessage, { quoted: m })

}

 
             await QueenNilu.sendMessage(from, { react: { text: `👋`, key: m.key }})
    
                    const templateButtons = [
{ quickReplyButton: {displayText: ' 𝙻𝙸𝚂𝚃 𝙼𝙴𝙽𝚄 ', id: 'list' }} , 
{ quickReplyButton: {displayText: ' 𝙼𝙴𝙽𝚄 ', id: 'allmenu' }}  ,
{ quickReplyButton: {displayText: ' 𝙿𝙸𝙽𝙶 ️', id: 'botstetus' }}  
                        ]
 const buttonMessage = {
 caption: `◈𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙻𝚄 𝙸𝚂 𝙰𝙻𝙸𝚅𝙴◈

 💃ᴀʙᴏᴜᴛ ʙᴏᴛ💃
 
 *🧑🏻‍💻ᴅᴇᴠᴇʟᴏᴘᴇʀ : 𝙹𝙰𝙽𝙸𝚈𝙰*
 *🔮ᴠᴇʀꜱɪᴏɴ : ${BOT_VERSION}*
 *🤹‍♂️ ᴏᴡɴᴇʀ : ${global.ownername}* 
 *👸ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*

 💃ᴅᴇᴘʟᴏʏ Qᴜᴇᴇɴ ɴɪʟᴜ💃
 
 •ᴡᴇʙꜱɪᴛᴇ - https://janithsadanuwan.tech/QueenNilu
 •ɢɪᴛʜᴜʙ- https://github.com/Janithsadanuwan
 •Qʀ -https://bit.ly/QueenNiluQR
 
 💞𝚃𝙷𝙰𝙽𝙺𝚂 𝙵𝙾𝚁 𝚄𝚂𝙸𝙽𝙶 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙻𝚄 💞
 `,
 footer: global.botname,
 templateButtons: templateButtons,
 image: { url: global.alivelogo }
 }
            await QueenNilu.sendMessage(m.chat, buttonMessage ,{ quoted: m })
                                          
  
}


            break
//////////////////////////////////////////////////////All------------------------


case 'twiter' : case 'insta': case 'igvid' : case 'fb': case 'get': {  
    const thub = await fetchJson('https://github.com/Dragonxjanith/UPLOADS/raw/main/JSON/niludetails.json')
                          await QueenNilu.sendMessage(from, { react: { text: `📥`, key: m.key }})
    
    if (!text) throw '*Please Give me a link*'
   buf = await getBuffer(thub.SF_THUB)
   const download = await QueenNilu.sendText(m.chat, mess.wait)

                let bicil = require('@bochilteam/scraper')

                let urlnya = text

	            bicil.savefrom(urlnya)

	            .then(async(result) => {	  	                                	                      	            

		        for(let i of result.url) {		

		        if(i.url.includes('mp4')){		           			    				

				let link = await getBuffer(i.url)
			 await QueenNilu.sendMessage(m.chat, { delete: download.key })	
             const uplode = await QueenNilu.sendText(m.chat, ` *Please Wait ${global.botnma} Trying upload Your  ${m.pushName} Video ... 🔄*`)
             await QueenNilu.sendMessage(from, { react: { text: `📤`, key: m.key }})

                QueenNilu.sendMessage(m.chat, { video: link, jpegThumbnail:buf,caption: `${global.cap}\n\n*⦁ quality ${i.subname}*` }, { quoted: m }) 
                await QueenNilu.sendMessage(m.chat, { delete: uplode.key })    
                          await QueenNilu.sendMessage(from, { react: { text: `✅`, key: m.key }})          

               }

              }

            }).catch((err) => m.reply('```Can\'t Download your Video... ☹️```'))

            }		

			break
//----------------------------------------------------------LIST MENU --------------------------------------------

            case 'command':case 'listmenu': case 'list': case 'panel':{
await QueenNilu.sendMessage(from, { react: { text: `🗒️`, key: m.key }})
	const sections =[{

        "title": "● ʙᴏᴛ ʟɪsᴛ ᴍᴇɴᴜ ᴄʟɪᴄᴋ ᴀɴᴅ sᴇʟᴇᴄᴛ ʏᴏᴜʀ ᴏᴡɴ ●",
                                                 "rows": [
                                                     {
                                                         "title": "👥 ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅꜱ",
                                                         "description": Lang.GROUP_CMD_DESC ,
                                                         "rowId": `${prefix}grpmenu`
                                                     }
                                                 ]
                                             },
                                             {
                                                 "title": `● Qᴜᴇᴇɴ ɴɪʟᴜ ᴍᴇɴᴜ ● `,
                                                 "rows": [
                                                     {
                                                         "title": "📥 ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴏᴍᴍᴀɴᴅꜱ",
                                                         "description": Lang.DOWNLOAD_CMD ,
                                                         "rowId": `${prefix}niludownloadmenu`
                                                     },
                                                     {
                                                         "title": "🔍 ꜱᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅꜱ",
                                                         "description": Lang.SEARCH_CMD ,
                                                         "rowId": `${prefix}nilusearchmenu`
                                                     },
                                                         {
                                                             "title": "🤹‍♂️ ꜰᴜɴ ᴄᴏᴍᴍᴀɴᴅꜱ",
                                                         "description": Lang.FUN_CMD ,
                                                         "rowId": `${prefix}funmenu`
                                                         },
                                                         {
                                                             "title": "💱 ᴄᴏɴᴠᴇʀᴛ ᴄᴏᴍᴍᴀɴᴅꜱ",
                                                         "description": Lang.CONVERT_CMD ,
                                                         "rowId": `${prefix}niluconvertmenu`
                                                         },
                                                         {
                                                             "title": "💍 ᴀɴɪᴍᴇ ᴄᴏᴍᴍᴍᴀɴᴅꜱ",
                                                         "description": Lang.RANDOM_ANIME ,
                                                         "rowId": `${prefix}niluranimemenu`
                                                         },
                                                         {
                                                         "title": "🍻 ᴍɪꜱᴄ ᴍᴇɴᴜ",
                                                         "description": Lang.MISC_CMD ,
                                                         "rowId": `${prefix}nilunocategorymenu`
                                                         },
                                                         {
                                                             "title": "🔤 ᴛᴇxᴛ ᴛᴏ ʟᴏɢᴏ ᴄᴏᴍᴍᴀɴᴅꜱ",
                                                         "description": Lang.LOGO_CMD ,
                                                         "rowId": `${prefix}textlogo`
                                                         },
                                                         {
                                                             "title": "💟 ʟᴏɢᴏ  ᴄᴏᴍᴍᴀɴᴅꜱ",
                                                         "description": Lang.LOGO_CMD ,
                                                         "rowId": `${prefix}logomenu`
                                                         },
                                                         {
                                                             "title": "🎤 ᴠᴏɪᴄᴇ ᴄᴏᴍᴍᴀɴᴅꜱ",
                                                         "description": Lang.VOICE_CMD ,
                                                         "rowId": `${prefix}niluvoicemenu`
                                                         }
                                                 ]
                                             },
                                             {
                                                 "title": "● ᴏᴡɴᴇʀ ᴢᴏɴᴇ ●",
                                                 "rows": [
                                                     {
                                                         "title": "🗣️ ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ",
                                                         "description": Lang.OWNER_CMD ,
                                                         "rowId": `${prefix}ownermenu`
                                                     }
                                                 ]
                                             },
                                             {
                                                 "title": "● Qᴜᴇᴇɴ ɴɪʟᴜ ʙᴏᴛ ᴍᴅ ᴠ2 ●",
                                                 "rows": [
                                                     {
                                                         "title": "💃 ᴀʙᴏᴜᴛ  Qᴜᴇᴇɴ ɴɪʟᴜ",
                                                         "description": Lang.ABOUT_CMD ,
                                                         "rowId": `${prefix}about`
                                                     }
                                                   ]
                           }
                       ]
const listMessage = {
  text: " *Please Choose the Menu*\n\n𝚠𝚎𝚕𝚌𝚘𝚖𝚎 𝚃𝙾\n🙈 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙻𝚄 🫶🏻💙\n\👨🏻‍💻𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁 : 𝘑𝘈𝘕𝘐𝘠𝘈\n💍𝚅𝙴𝚁𝚂𝙸𝙾𝙽 :_02.00.00_\n🪷𝚆𝙴𝙱𝚂𝙸𝚃𝙴: _https://janithsadanuwan.tech/QueenNilu_\n\n\n*💃Qᴜᴇᴇɴ ɴɪʟᴜ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴍᴇɴᴜ💃*",
  footer: `𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙻𝚄`,
  title: `Hi 👋 ${pushname}`,
  buttonText: "𝗔𝗟𝗟 𝗠𝗘𝗡𝗨",
  sections
}
const sendMsg = await QueenNilu.sendMessage(m.chat, listMessage,{ react: { text: `👋`, key: m.key }})
}
break

//----------------------------------------------------Menu------------------------------------------------------------------------------------------

case 'menu': {
    const anu = await fetchJson ('https://github.com/Dragonxjanith/UPLOADS/raw/main/JSON/niludetails.json')
    const JSMSG = anu.MENU_NOTE
    const start = new Date().getTime()
    await QueenNilu.sendMessage(from, { react: { text: `📃`, key: m.key }})
    const end = new Date().getTime()
    const ping = end - start
    const menuimg = ['https://te.legra.ph/file/3e57249993356ba15109f.jpg','https://te.legra.ph/file/8be699bf71bfa93acac3f.jpg','https://te.legra.ph/file/a9293226a7c660ecbfffb.jpg']
    const result = menuimg[Math.floor(Math.random() * menuimg.length)]   
    ram0 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
    
             const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
             var utch = new Date().toLocaleDateString( get_localized_date)
             var time = new Date().toLocaleString('HI', { timeZone: TIME_ZONE }).split(' ')[1]
             const biography = '*📅 ᴛᴏᴅᴀʏ ɪs :* ' + utch + '\n*⌚ ɴᴏᴡ ᴛɪᴍᴇ :* ' + time
  
                                   message = await prepareWAMessageMedia({ image : { url: global.alivelogo} }, { upload:   QueenNilu.waUploadToServer })
  
         const MENUMSG = `*WELCOME ${m.pushName}*
  
  *💃 ᴜᴘ ᴛɪᴍᴇ :* ${runtime(process.uptime())}
  ${biography}
  
  ➮ 𝙱𝙾𝚃 𝙽𝙰𝙼𝙴 - ${global.botname}
  ➮ 𝙱𝙾𝚃 𝙾𝚆𝙽𝙴𝚁 -  ${global.ownername}
  ➮ 𝙽𝚄𝙼𝙱𝙴𝚁 - ${global.owner}
  ➮ 𝚁𝙴𝚂𝙿𝙾𝙽𝙳 𝚂𝙿𝙴𝙴𝙳 - ${(end - start)} Ms
  ➮ 𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴 - ${ram0}
  
  ${JSMSG}
  
  ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
  ╭──❰ *📥𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂📥* ❱
  │ ${prefix}tiktok
  │ ${prefix}tiktok2
  │ ${prefix}video
  │ ${prefix}video2
  │ ${prefix}song
  │ ${prefix}song2
  │ ${prefix}song3
  │ ${prefix}fb
  │ ${prefix}fb2
  │ ${prefix}fb3
  │ ${prefix}fbook
  │ ${prefix}ig
  │ ${prefix}ig2
  │ ${prefix}twitter
  │ ${prefix}ytmp3
  │ ${prefix}ytmp4
  │ ${prefix}ehi
  │ ${prefix}apk
  │ ${prefix}modapk
  │ ${prefix}downxvid
  └─────────◉
  
  ╭──❰ *🔍𝚂𝙴𝙰𝚁𝙲𝙷 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂🔍* ❱
  │ ${prefix}play
  │ ${prefix}yts
  │ ${prefix}img
  │ ${prefix}pinterest
  │ ${prefix}wikimedia
  │ ${prefix}ytsearch
  │ ${prefix}apk
  │ ${prefix}modapk
  └─────────◉
  
  ╭──❰ *💠𝚁𝙰𝙽𝙳𝙾𝙼 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂💠* ❱
  │ ${prefix}pic
  │ ${prefix}coffee
  │ ${prefix}couplepp
  ╰└─────────◉
  
  ╭──❰ *🤹‍♂️𝙵𝚄𝙽 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂🤹‍♂️* ❱
  │ ${prefix}couple
  │ ${prefix}mysoulmate
  │ ${prefix}math
  └─────────◉
  
  ╭──❰ *🪄𝙰𝚂𝚄𝙿𝙰𝙽 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂🪄* ❱
  │ ${prefix}cecan
  │ ${prefix}china
  │ ${prefix}cogan
  │ ${prefix}indonesia
  │ ${prefix}japan
  │ ${prefix}korea
  │ ${prefix}malaysia
  │ ${prefix}thailand
  │ ${prefix}vietnam 
  └─────────◉
  
  ╭──❰ *🎤𝚅𝙾𝙸𝙲𝙴 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂🎤* ❱
  │ ${prefix}bass
  │ ${prefix}blown
  │ ${prefix}deep
  │ ${prefix}earrape
  │ ${prefix}fast
  │ ${prefix}fat
  │ ${prefix}nightcore
  │ ${prefix}reverse
  │ ${prefix}robot
  │ ${prefix}slow
  │ ${prefix}squirrel
  └─────────◉
  
  ╭──❰ *💱𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂💱* ❱
  │ ${prefix}photo
  │ ${prefix}ss
  │ ${prefix}removebg
  │ ${prefix}sticker
  │ ${prefix}emojimix
  │ ${prefix}tovideo
  │ ${prefix}togif
  │ ${prefix}attp
  │ ${prefix}attp2
  │ ${prefix}attp3
  │ ${prefix}ttp
  │ ${prefix}tts
  │ ${prefix}unvoice
  │ ${prefix}fancy
  └─────────◉
    
  ╭──❰ *💍𝚁𝙰𝙽𝙳𝙾𝙼 𝙰𝙽𝙸𝙼𝙴💍* ❱
  │ ${prefix}akira  
  │ ${prefix}ana
  │ ${prefix}asuna 
  │ ${prefix}ayuzawa 
  │ ${prefix}boruto
  │ ${prefix}elaina 
  │ ${prefix}emilia 
  │ ${prefix}erza  
  │ ${prefix}gremory  
  │ ${prefix}inori  
  │ ${prefix}kaga  
  │ ${prefix}kaori  
  │ ${prefix}kurumi  
  │ ${prefix}loli  
  │ ${prefix}madara  
  │ ${prefix}mikasa  
  │ ${prefix}miku  
  │ ${prefix}naruto  
  │ ${prefix}nezuko  
  │ ${prefix}rize  
  │ ${prefix}sakura  
  │ ${prefix}sasuke  
  │ ${prefix}shina  
  │ ${prefix}shinka  
  │ ${prefix}shota  
  │ ${prefix}waifu  
  │ ${prefix}yuki  
  │ ${prefix}bully
  │ ${prefix}cuddle
  │ ${prefix}cry
  │ ${prefix}hug
  │ ${prefix}awoo
  │ ${prefix}kiss
  │ ${prefix}lick
  │ ${prefix}pat
  │ ${prefix}smug
  │ ${prefix}bonk
  │ ${prefix}yeet
  │ ${prefix}blush
  │ ${prefix}smile
  │ ${prefix}wave
  │ ${prefix}highfive
  │ ${prefix}handhold
  │ ${prefix}nom
  │ ${prefix}bite
  │ ${prefix}glomp
  │ ${prefix}slap
  │ ${prefix}kill
  │ ${prefix}happy
  │ ${prefix}wink
  │ ${prefix}poke
  │ ${prefix}dance
  │ ${prefix}cringe
  └─────────◉
  
  ╭──❰ *👥𝙶𝚁𝙾𝚄𝙿 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂👥* ❱
  │ ${prefix}grouplink
  │ ${prefix}ephemeral
  │ ${prefix}setgrouppp
  │ ${prefix}setname
  │ ${prefix}group
  │ ${prefix}editinfo
  │ ${prefix}grupinfo
  │ ${prefix}add
  │ ${prefix}kick
  │ ${prefix}promote
  │ ${prefix}demote
  │ ${prefix}delm
  └─────────◉
  
  ╭──❰ *✨𝙼𝙸𝚂𝙲 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂✨* ❱
  │ ${prefix}speedtest
  │ ${prefix}ping
  │ ${prefix}ping2
  │ ${prefix}owner
  │ ${prefix}donate
  │ ${prefix}menu
  │ ${prefix}delete
  │ ${prefix}chatinfo
  │ ${prefix}quoted
  │ ${prefix}listpc
  │ ${prefix}listgc
  │ ${prefix}listonline
  │ ${prefix}report
  └─────────◉
  
  ╭──❰ *📁𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂📁* ❱
  │ ${prefix}setcmd
  │ ${prefix}listcmd
  │ ${prefix}delcmd
  │ ${prefix}lockcmd
  │ ${prefix}addmsg
  │ ${prefix}listmsg
  │ ${prefix}getmsg
  │ ${prefix}delmsg
  └─────────◉
  
  ╭────❰ *💟𝙻𝙾𝙶𝙾 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂💟* ❱   
  │ ${prefix}logo
  │ ${prefix}logo2
  │ ${prefix}logo3
  └─────────◉
  
  ╭───❰ *💃𝙾𝚆𝙽𝙴𝚁 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂💃* ❱
  │ ${prefix}chat
  │ ${prefix}join
  │ ${prefix}leave
  │ ${prefix}setbotpp
  │ ${prefix}block
  │ ${prefix}unblock
  │ ${prefix}bcgroup
  │ ${prefix}bcall
  └─────────◉
  ╭───❮ *📍𝙾𝚃𝙷𝙴𝚁 𝙲𝙾𝙼𝙼𝙰𝙽𝚂📍* ❯
  │ ${prefix}alive
  │ ${prefix}bug
  │ ${prefix}xnxxsh
  │ ${prefix}xvideo
  │ ${prefix}about
  │ ${prefix}news
  │ ${prefix}readmore
  │ ${prefix}areadmore
  │ ${prefix}cyberspace
  │ ${prefix}mountain
  │ ${prefix}programming
  │ ${prefix}technology
  └─────────◉`
  const templateButtons = [
    {buttonId: `panel`, buttonText: {displayText: 'ʟɪsᴛ ᴍᴇɴᴜ'}, type: 1},
    {buttonId: `owner`, buttonText: {displayText: 'ᴏᴡɴᴇʀ‍️'}, type: 1},
    {buttonId: `stetus`, buttonText: {displayText: 'sᴛᴇᴛᴜs'}, type: 1}
  
      ]
  
  let buttonMessage = {
                      image: { url: result },
                      caption: MENUMSG ,
                      footer: global.botname,
                      buttons: templateButtons,
                      headerType: 4
                  }
                 await QueenNilu.sendMessage(m.chat, buttonMessage, { quoted: fakestatus })
            
       
       //await QueenNilu.sendMessage(m.chat, templateMessage, { quoted: fakestatus })   
  
                                }
                                break

//----------Status-------------------------------------

case 'Stts' :{
    const start = new Date().getTime()
    await QueenNilu.sendMessage(from, { react: { text: `💠`, key: m.key }})
    const end = new Date().getTime()
    const ping = (end - start) + 'ms' 
    // const runtime = 
    const ramusage = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
    const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    var date = new Date().toLocaleDateString( get_localized_date)
    var time = new Date().toLocaleString('HI', { timeZone: TIME_ZONE }).split(' ')[1]
    ram0 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
    

desmsg = `╭╌┄┄『 *USER DETAILS* 』
┊ ▢ 𝙽𝚄𝙼𝙱𝙴𝚁 :  ${m.sender.split('@')[0]}
┊ ▢ 𝙽𝙰𝙼𝙴 :  ${m.pushName}
╰ ┄┬┄┄┄◯
╭┄ ┴┄『 *BOT DETAILS* 』
┊ ▢  𝙽𝙰𝙼𝙴 : ${global.botname}
┊ ▢  𝙽𝚄𝙼𝙱𝙴𝚁 : ${botNumber.split('@')[0]}
┊ ▢  𝙷𝙾𝚂𝚃 𝙾𝙽 : heroku 
┊ ▢  𝚆𝙴𝙱 : opera
╰┄┬┄╌╌╌┄◯
╭┄┴┄┄『 *ABOUT SYSTEM* 』
┊ ▢  𝙿𝚁𝙴𝙵𝙸𝚇 : ${prefix}
┊ ▢  𝚃𝙸𝙼𝙴 : ${time}
┊ ▢  𝙳𝙰𝚃𝙴 : ${date}
┊ ▢  𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴 : ${ram0}
╰┄┄┄┄┄┄┄┄┄◯`
const templateButtons = [
    {buttonId: `publicgroup`, buttonText: {displayText: 'Qᴜᴇᴇɴ ɴɪʟᴜ ᴘᴜʙʟɪᴄ ɢʀᴏᴜᴘ'}, type: 1},
    {buttonId: `botstetus`, buttonText: {displayText: 'sᴛᴇᴛᴜs'}, type: 1}
]

const templateMessage = {
caption: desmsg,
footer: 'ǫᴜᴇᴇɴ ɴɪʟᴜ ᴡᴀ ʙᴏᴛ ᴍᴅ',
buttons: templateButtons,
headerType: 4
}

await QueenNilu.sendMessage(m.chat, templateMessage, { quoted: m })   


}
break





case 'botstetus' : case 'stetus' : {
    const start = new Date().getTime()
    await QueenNilu.sendMessage(from, { react: { text: `💠`, key: m.key }})
    const end = new Date().getTime()
    const ping = (end - start) + 'ms' 
   // const runtime = 
    const ramusage = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
    m.reply('```🧬 Bot Stetus 🧬 ```\n\n'+'*⚙️ Ping :* ```'+ping+'```\n*⏳ Run Time :* ```'+runtime(process.uptime())+'``` \n*📶 Ram Usage :*``` '+ramusage+'```\n')
    }
    break
////////////////////////////////--------------------menu start

case 'grpmenu': {  
    const start = new Date().getTime()
    await QueenNilu.sendMessage(from, { react: { text: `♥️`, key: m.key }})
    const end = new Date().getTime()
    const ping = (end - start) + ' *_ᴍs_*' 
    const time = new Date().toLocaleString('HI', { timeZone: TIME_ZONE }).split(' ')[1]
  
                            await QueenNilu.sendMessage(from, { react: { text: `👥`, key: m.key }})
  
  var GRPDES = ''
  if (global.LANG == 'EN') GRPDES = '```Get Group link```'
  if (global.LANG == 'SI') GRPDES = '```ඔබ සිටින සමූහයේ ලින්කුව ගැනීමට```'
  var GRPPP = ''
  if (global.LANG == 'EN') GRPPP = '```Change Group Profile photo [ reply photo ]```'
  if (global.LANG == 'SI') GRPPP = '```සමූහයේ ප්‍රොෆයිල් චායාරූපය වෙනස් කරයි [ ජායාරූපයකට රිප්ලයි ලබාදෙන්න ]```'
  var SETNAME = ''
  if (global.LANG == 'EN') SETNAME = '```Change Group Name```'
  if (global.LANG == 'SI') SETNAME = '```සමූහයේ නම වෙනස් කරයි```'
  var GROUDES = ''
  if (global.LANG == 'EN') GROUDES = '```Change send massage type (only admin/allparticipate)```'
  if (global.LANG == 'SI') GROUDES = '```සමූහයේ මැස්ස්සේජ් යවන ආකාරය වෙනස් කරයි ( ඇඩ්මින්ලට පමණක් / සියලු දෙනාට )```'
  var EDITINFO = ''
  if (global.LANG == 'EN') EDITINFO = '```Change Group Edit info```'
  if (global.LANG == 'SI') EDITINFO = '```සමූහයේ එඩිට් ඉන්ෆො වෙනස් කරයි```'
  var GRPINFO = ''
  if (global.LANG == 'EN') GRPINFO ='```Send Group details```'
  if (global.LANG == 'SI') GRPINFO = '```සමූහයේ තොරතුරු ලබාගැනීමට```'
  var ADDDES =''
  if (global.LANG == 'EN') ADDDES = '```Add new member```'
  if (global.LANG == 'SI') ADDDES = '```සමූහයට අයෙකු එකතු කිරීමට```'
  var KICKDES = ''
  if (global.LANG == 'EN') KICKDES = '```Remove member from group```'
  if (global.LANG == 'SI') KICKDES = '```සමූහයේ අයෙකු ඉවත් කිරීමට```'
  var PROMOTEDES = ''
  if (global.LANG == 'EN') PROMOTEDES = '```give admin on group```'
  if (global.LANG == 'SI') PROMOTEDES = '```සමූහයේ ඇඩ්මින් තනතුර ලබාදීම```'
  var DEMOTEDES = ''
  if (global.LANG == 'EN') DEMOTEDES = '```Demote From group admin```'
  if (global.LANG == 'SI') DEMOTEDES = '```ගෲප් එකේ ඇඩ්මින් වරයෙකුගේ ඇඩ්මින් ඉවත්කිරීමට```'
  var DELX = ''
  if (global.LANG == 'EN') DELX = '```Delete massage for everyone```'
  if (global.LANG == 'SI') DELX = '```පනිවිඩයක් සියලු දෙනාගෙන් මකාදැමීමට [ delete for everyone ]```'
  
  prefix = '.'
  
                                  anu = `
  *◉────[ GROUP MENU ]────◉*
  
  ╭👸  *ᴏᴡɴᴇʀ* ${global.ownername}
  ├📡  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
  ╰⏰  *ᴛɪᴍᴇ* ${time}
  
  ${M_E} *${prefix}grouplink* 
     ${D_E} ${GRPDES}
  ${M_E} *${prefix}setgrouppp* 
     ${D_E} ${GRPPP}
  ${M_E} *${prefix}setname* 
     ${D_E} ${SETNAME}
  ${M_E} *${prefix}group* 
     ${D_E} ${GROUDES}
  ${M_E} *${prefix}editinfo* 
     ${D_E} ${EDITINFO}
  ${M_E} *${prefix}grupinfo* 
     ${D_E} ${GRPINFO}
  ${M_E} *${prefix}add* 
     ${D_E} ${ADDDES}
  ${M_E} *${prefix}kick* 
     ${D_E} ${KICKDES}
  ${M_E} *${prefix}promote* 
     ${D_E} ${PROMOTEDES}
  ${M_E} *${prefix}demote* 
     ${D_E} ${DEMOTEDES}
  
  *───────────◯* `,
  next = Lang.NEXT_BUTTON
  back = Lang.BACK_BUTTON
  
  footer = global.botname
                   buttons = [
                      {buttonId: `list`, buttonText: {displayText: back}, type: 1},
                      {buttonId: `niludownloadmenu`, buttonText: {displayText: next}, type: 1}
                      
                  ]
                  let buttonMessage = {
                      image: { url: 'https://telegra.ph/file/6e6e5387b5ff163765bb1.jpg'},
                      caption:anu ,
                      footer: footer,
                      buttons: buttons,
                      headerType: 4
                  }
                 QueenNilu.sendMessage(m.chat, buttonMessage, { quoted: m })
            
                     /* message = await prepareWAMessageMedia({ image : { url: 'https://telegra.ph/file/6e6e5387b5ff163765bb1.jpg' } }, { upload:   QueenNilu.waUploadToServer })
                                    template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                        templateMessage: {
                                            hydratedTemplate: {
                                                imageMessage: message.imageMessage,
                                                hydratedContentText: anu ,
                                                hydratedFooterText: global.botname ,
                                                hydratedButtons: [{
                                                    urlButton: {
                                                        displayText: '❰ ʏᴏᴜᴛᴜʙᴇ ❱' ,
                                                        url: 'https://youtube.com/c/janithsadanuwan'
                                                    }
                                                }, {
                                                    quickReplyButton: {
                                                        displayText: `${back}` ,
                                                        id: 'list'
                                                        }
                                                    },  {
                                                    quickReplyButton: {
                                                        displayText: `${next}` ,
                                                        id: 'niludownloadmenu'
                                                        }
                                                }]
                                            }
                                        }
                                    }), { userJid: m.chat, quoted: m })
                                      QueenNilu.relayMessage(m.chat, template.message, { messageId: template.key.id })
                               */
  }
                    break

                    case 'niludownloadmenu': {  
  const start = new Date().getTime()
    await QueenNilu.sendMessage(from, { react: { text: `♥️`, key: m.key }})
    const end = new Date().getTime()
    const ping = (end - start) + ' *_ᴍs_*' 
    const time = new Date().toLocaleString('HI', { timeZone: TIME_ZONE }).split(' ')[1]
  
  await QueenNilu.sendMessage(from, { react: { text: `📥`, key: m.key }})
  var TIKTOK = ''
  if (global.LANG == 'EN') TIKTOK = '```Download Your Tiktok Link video```'
  if (global.LANG == 'SI') TIKTOK = '```ඔබගේ ටික්ටොක් වීඩියෝ ලින්කුව බාගතකරයි```'
  var INSTA = ''
  if (global.LANG == 'EN') INSTA = '```Download your instagram link Video```'
  if (global.LANG == 'SI') INSTA = '```ඔබගේ ඉන්ස්ටාග්‍රෑම් වීඩියෝ ලින්ක් බාගත කරයි```'
  var IG2 = ''
  if (global.LANG == 'EN') IG2 = '```Download your instagram link Video type ( ii )```'
  if (global.LANG == 'SI') IG2 = '```ඔබගේ ඉන්ස්ටාග්‍රෑම් වීඩියෝ ලින්ක් බාගත කරයි ආකාරය ( ii )```'
  var YTMP3 = ''
  if (global.LANG == 'EN') YTMP3 = '```Download your youtube link song```'
  if (global.LANG == 'SI') YTMP3 = '```ඔබගේ යූටියුබ් ලින්කුවේ සින්දුව බාගත කරයි```'
  var YTMP4 = ''
  if (global.LANG == 'EN') YTMP4  = '```Download your youtube link video```'
  if (global.LANG == 'SI') YTMP4  = '```ඔබගේ යූටියුබ් ලින්කුවේ වීඩියෝව බාගත කරය```'
  var GETMUSIC = ''
  if (global.LANG == 'EN') GETMUSIC = '```Get your song```'
  if (global.LANG == 'SI') GETMUSIC  = '```ඔබගේ සින්දුව එවයි```'
  var GETVIDEO = ''
  if (global.LANG == 'EN') GETVIDEO  = '```get your video```'
   if (global.LANG == 'SI') GETVIDEO  = '```ඔබගේ විඩියෝව එවයි```'
  var SONG = ''
  var YTV = ''
  if (global.LANG == 'EN') YTV = '```Download videos [ 144p / 240p / 360p / 480p / 720p / 1080p ] Qualitys``` Can not Download up to 100mb videos ❗'
  if (global.LANG == 'SI') YTV = '```වීඩියෝ බාගතකිරීම [ 144p / 240p / 360p / 480p / 720p / 1080p ]``` 100mb වඩා වීඩීයෝ බාගතකළ නොහැක ❗'
  if (global.LANG == 'EN') SONG  = '```The song you name will download```'
  if (global.LANG == 'SI') SONG  = '```ඔබ නම් යෙදූ ගීතය බාගත කරයි```'
  var VIDEO = ''
  if (global.LANG == 'EN') VIDEO = '```The video you name will download```'
  if (global.LANG == 'SI') VIDEO  = '```ඔබ නම් යෙදූ ගීතය බාගත කරයි```'
  var YT = ''
  if (global.LANG == 'EN') YT  = '```Your song or video will be searched on YouTube and downloaded```'
  if (global.LANG == 'SI') YT  = '```ඔබගේ සින්දුව හෝ වීඩියෝව යූටියුබ් හී සර්ච් කර බාගත කරයි```'
  var FB  = ''
  if (global.LANG == 'EN') FB  =' ```Download your facebook video link```'
  if (global.LANG == 'SI') FB  = '```ඔබගේ ෆේස් බූක් වීඩියෝ ලින්කුව බාගත කරයි```'
  var FB2 = '' 
  if (global.LANG == 'EN') FB2  = '```Download your facebook video link type ( ii )```'
  if (global.LANG == 'SI') FB2  = '```ඔබගේ ෆේස් බූක් වීඩියෝ ලින්කුව බාගත කරය ආකාරය ( ii )```'
  var SONG2 = ''
  var VIDEO2 = ''
  if (global.LANG == 'EN') SONG2  = '```The song you name will download [ none button ]```'
  if (global.LANG == 'SI') SONG2  = '```ඔබ නම් යෙදූ ගීතය බාගත කරයි [ බටන් මැස්ස්සේජ් නොමැතිව ]```'
  if (global.LANG == 'EN') VIDEO2  = '```The video you name will download [ none button ]```'
  if (global.LANG == 'SI') VIDEO2  = '```ඔබ නම් යෙදූ වීඩියෝව බාගත කරයි [ බටන් මැස්ස්සේජ් නොමැතිව ]```'
  var APK = ''
  var MOD_APK = ''
  var TELE = ''
  var XNXX = ''
  if (global.LANG == 'EN') APK = '```Download Plastore apk```'
  if (global.LANG == 'SI') APK = '```Plastore Apk බාගත කිරීමට```'
  if (global.LANG == 'EN') MOD_APK = '```Mod Apk Download```'
  if (global.LANG == 'SI') MOD_APK = '```මොඩ් Apk බාගත කිරීම```'
  if (global.LANG == 'EN') TELE = '```Telegram Sticker Download```'
  if (global.LANG == 'SI') TELE = '```Telegram ස්ටිකර් බාගත කිරීමට```'
  if (global.LANG == 'EN') XNXX = '```Xnxx Video Download ( only main Group )```'
  if (global.LANG == 'SI') XNXX = '```Xnxx වීඩියෝ බාගත කිරීම ( ප්‍රදාන ශාපයේ පමණක් වලංගු විදානයකි )```'
  
   prefix = '.'
  anu = `*◉────[ DOWNLOAD MENU ]────◉*
  
  ╭👸  *ᴏᴡɴᴇʀ* ${global.ownername}
  ├📡  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
  ╰⏰  *ᴛɪᴍᴇ* ${time}
  
  ${M_E} *${prefix}tiktok* 
     ${D_E} ${TIKTOK}    
  ${M_E} *${prefix}tiktok2*  
     ${D_E}  ${TIKTOK} _type ( ii )_   
  ${M_E} *${prefix}insta*  
     ${D_E}  ${INSTA}   
  ${M_E} *${prefix}ig2*  
     ${D_E}  ${IG2}   
  ${M_E} *${prefix}fb*  
     ${D_E}  ${FB}   
  ${M_E} *${prefix}fb2*  
     ${D_E}  ${FB2}   
  ${M_E} *${prefix}ytmp3*  
     ${D_E}  ${YTMP3}   
  ${M_E} *${prefix}ytmp4*  
     ${D_E}  ${YTMP4}   
  ${M_E} *${prefix}getmusic*  
     ${D_E}  ${GETMUSIC}   
  ${M_E} *${prefix}getvideo*  
     ${D_E}  ${GETVIDEO}   
  ${M_E} *${prefix}song*  
     ${D_E}  ${SONG}   
  ${M_E} *${prefix}song2*  
     ${D_E}  ${SONG2}   
  ${M_E} *${prefix}video*  
     ${D_E}  ${VIDEO}   
  ${M_E} *${prefix}video2*  
     ${D_E}  ${VIDEO2}   
  ${M_E} *${prefix}ytv*  
     ${D_E}  ${YTV}   
  ${M_E} *${prefix}yt*  
     ${D_E}  ${YT}    
  ${M_E} *${prefix}apk*  
     ${D_E}  ${APK}    
  ${M_E} *${prefix}modapk*  
     ${D_E}  ${MOD_APK}    
  ${M_E} *${prefix}stelegram*  
     ${D_E}  ${TELE}    
  ${M_E} *${prefix}xnxxsh*  
     ${D_E}  ${XNXX} 
  
  *────────◯*`,
  
  next = Lang.NEXT_BUTTON
  back = Lang.BACK_BUTTON
  
        footer = global.botname
                   buttons = [
                      {buttonId: `grpmenu`, buttonText: {displayText: back}, type: 1},
                      {buttonId: `nilusearchmenu`, buttonText: {displayText: next}, type: 1}
                      
                  ]
                  let buttonMessage = {
                      image: { url: 'https://telegra.ph/file/e0aa108673b5059695677.jpg' },
                      caption:anu ,
                      footer: footer,
                      buttons: buttons,
                      headerType: 4
                  }
                 QueenNilu.sendMessage(m.chat, buttonMessage, { quoted: m })
            
                     /* message = await prepareWAMessageMedia({ image : { url: 'https://telegra.ph/file/e0aa108673b5059695677.jpg' } }, { upload:   QueenNilu.waUploadToServer })
                                    template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                        templateMessage: {
                                            hydratedTemplate: {
                                                imageMessage: message.imageMessage,
                                                hydratedContentText: anu ,
                                                hydratedFooterText: global.botname ,
                                                hydratedButtons: [{
                                                
                                                    quickReplyButton: {
                                                        displayText: `${back}` ,
                                                        id: 'grpmenu'
                                                        }
                                                    },  {
                                                    quickReplyButton: {
                                                        displayText: `${next}` ,
                                                        id: 'nilusearchmenu'
                                                        }
                                                }]
                                            }
                                        }
                                    }), { userJid: m.chat, quoted: m })
                                      QueenNilu.relayMessage(m.chat, template.message, { messageId: template.key.id })
                               */
  }
                                break 
                                case 'nilusearchmenu': { 
  const start = new Date().getTime()
    await QueenNilu.sendMessage(from, { react: { text: `♥️`, key: m.key }})
    const end = new Date().getTime()
    const ping = (end - start) + ' *_ᴍs_*' 
    const time = new Date().toLocaleString('HI', { timeZone: TIME_ZONE }).split(' ')[1]
  
                            await QueenNilu.sendMessage(from, { react: { text: `🔍`, key: m.key }})
  var PLAY = ''
  if (global.LANG == 'EN') PLAY = '```Search youtube and download```'
  if (global.LANG == 'SI') PLAY = '```යූටියුබ් හි සර්ච් කර Download කරයි```'
  var YTS = ''
  if (global.LANG == 'EN') YTS = '```search your text on youtube```'
  if (global.LANG == 'SI') YTS =  '```ඔබගේ වචනය යූටියුබ් හී සොයයි```'
  var GOOGLE = ''
  if (global.LANG == 'EN') GOOGLE = '```search your word on google```'
  if (global.LANG == 'SI') GOOGLE = '```ඔබගේ වචනය ගූහල් හී සොයයි```'
  var IMG = ''
  if (global.LANG == 'EN') IMG = '```search google image```'
  if (global.LANG == 'SI') IMG = '```ගූගල්හී ජායාරූප සොයයි```'
  var PINSA = ''
  if (global.LANG == 'EN') PINSA = '```search image from pinterest```'
  if (global.LANG == 'SI') PINSA = '```pinterest හී ජාඅයාරූප සොයයි```'
  var WALLPAPER  = ''
  if (global.LANG == 'EN') WALLPAPER = '```search wallpapers```'
  if (global.LANG == 'SI') WALLPAPER = '```වෝල්පේපර්ස් සොයයි```'
  var WIKI = ''
  if (global.LANG == 'EN') WIKI = '```search on wikipidia```'
  if (global.LANG == 'SI') WIKI = '```විකිපීඩියා හී සර්ච් කරයි```'
  prefix = '.'
                                    anu = `*◉────[ SEARCH MENU ]────◉*
  
  ╭👸  *ᴏᴡɴᴇʀ* ${global.ownername}
  ├📡  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
  ╰⏰  *ᴛɪᴍᴇ* ${time}
  
  ${M_E} *${prefix}play*   
     ${D_E}  ${PLAY}
  ${M_E} *${prefix}yts*   
     ${D_E}  ${YTS}
  ${M_E} *${prefix}google*   
     ${D_E}  ${GOOGLE}
  ${M_E} *${prefix}img*   
     ${D_E}  ${IMG}
  ${M_E} *${prefix}pinterest*   
     ${D_E}  ${PINSA}
  ${M_E} *${prefix}wallpaper*   
     ${D_E}  ${WALLPAPER}
  ${M_E} *${prefix}wikimedia*   
     ${D_E}  ${WIKI}
  ${M_E} *${prefix}ytsearch*   
     ${D_E}  ${YTS}
        
  *──────────◯*
  `
   next = Lang.NEXT_BUTTON
  back = Lang.BACK_BUTTON
                      
                      footer = global.botname
                   buttons = [
                      {buttonId: `niludownloadmenu`, buttonText: {displayText: back}, type: 1},
                      {buttonId: `randommenu`, buttonText: {displayText: next}, type: 1}
                      
                  ]
                  let buttonMessage = {
                      image: { url: 'https://telegra.ph/file/422f47351a4ba19070837.jpg' },
                      caption: anu,
                      footer: footer,
                      buttons: buttons,
                      headerType: 4
                  }
                 QueenNilu.sendMessage(m.chat, buttonMessage, { quoted: m })
            
                      /*message = await prepareWAMessageMedia({ image : { url: 'https://telegra.ph/file/422f47351a4ba19070837.jpg' } }, { upload:   QueenNilu.waUploadToServer })
                                    template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                        templateMessage: {
                                            hydratedTemplate: {
                                                imageMessage: message.imageMessage,
                                                hydratedContentText: anu ,
                                                hydratedFooterText: global.botname ,
                                                hydratedButtons: [{
                                                    urlButton: {
                                                        displayText: '❰ ʏᴏᴜᴛᴜʙᴇ ❱' ,
                                                        url: 'https://youtube.com/c/janithsadanuwan'
                                                    }
                                                }, {
                                                    quickReplyButton: {
                                                        displayText: `${back}` ,
                                                        id: 'niludownloadmenu'
                                                        }
                                                    },  {
                                                    quickReplyButton: {
                                                        displayText: `${next}` ,
                                                        id: 'randommenu'
                                                        }
                                                }]
                                            }
                                        }
                                    }), { userJid: m.chat, quoted: m })
                                      QueenNilu.relayMessage(m.chat, template.message, { messageId: template.key.id })
                                */
  }
                    break
                    case 'randommenu': { 
  const start = new Date().getTime()
    await QueenNilu.sendMessage(from, { react: { text: `📥`, key: m.key }})
    const end = new Date().getTime()
    const ping = (end - start) + ' *_ᴍs_*' 
    const time = new Date().toLocaleString('HI', { timeZone: TIME_ZONE }).split(' ')[1]
  
                            await QueenNilu.sendMessage(from, { react: { text: `🗳️`, key: m.key }})
  var COFFY = ''
  if (global.LANG == 'EN') COFFY = '```Send random coffee image```'
  if (global.LANG == 'SI') COFFY = '```අහබු ලෙස coffee ජායාරූප එවයි.```'
  var COUPP = ''
  if (global.LANG == 'EN') COUPP = '```send copple profile photo randomly```'
  if (global.LANG == 'SI') COUPP = '_අහබු ලෙස copple profile photo එවයි```'
  prefix = '.'
                        anu = `*◉────[ RANDOM MENU ]────◉*
  
  ╭👸  *ᴏᴡɴᴇʀ* ${global.ownername}
  ├📡  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
  ╰⏰  *ᴛɪᴍᴇ* ${time}
  
  ${M_E} *${prefix}coffee*   
     ${D_E}  ${COFFY}
  ${M_E} *${prefix}couplepp*   
     ${D_E}  ${COUPP}
     
  *──────────◯*
  `
  next = Lang.NEXT_BUTTON
  back = Lang.BACK_BUTTON
  
  footer = global.botname
                   buttons = [
                      {buttonId: `nilusearchmenu`, buttonText: {displayText: back}, type: 1},
                      {buttonId: `funmenu`, buttonText: {displayText: next}, type: 1}
                      
                  ]
                  let buttonMessage = {
                      image: { url: 'https://telegra.ph/file/60f9d53af312a48e619ad.jpg' },
                      caption:anu ,
                      footer: footer,
                      buttons: buttons,
                      headerType: 4
                  }
                 QueenNilu.sendMessage(m.chat, buttonMessage, { quoted: m })
            
            
                     /* message = await prepareWAMessageMedia({ image : { url: 'https://telegra.ph/file/60f9d53af312a48e619ad.jpg' } }, { upload:   QueenNilu.waUploadToServer })
                                    template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                        templateMessage: {
                                            hydratedTemplate: {
                                                imageMessage: message.imageMessage,
                                                hydratedContentText: anu ,
                                                hydratedFooterText: global.botname ,
                                                hydratedButtons: [{
                                                    urlButton: {
                                                        displayText: '❰ ʏᴏᴜᴛᴜʙᴇ ❱' ,
                                                        url: 'https://youtube.com/c/janithsadanuwan'
                                                    }
                                                }, {
                                                    quickReplyButton: {
                                                        displayText: `${back}` ,
                                                        id: 'nilusearchmenu'
                                                        }
                                                    },  {
                                                    quickReplyButton: {
                                                        displayText: `${next}` ,
                                                        id: 'funmenu'
                                                        }
                                                }]
                                            }
                                        }
                                    }), { userJid: m.chat, quoted: m })
                                      QueenNilu.relayMessage(m.chat, template.message, { messageId: template.key.id })
                               */
  }
                    break
                    case 'funmenu': {  
  const start = new Date().getTime()
    await QueenNilu.sendMessage(from, { react: { text: `🤹‍♂️`, key: m.key }})
    const end = new Date().getTime()
    const ping = (end - start) + ' *_ᴍs_*' 
    const time = new Date().toLocaleString('HI', { timeZone: TIME_ZONE }).split(' ')[1]
  
                            await QueenNilu.sendMessage(from, { react: { text: `🤹‍♂️`, key: m.key }})
                        
  var COPLE = ''
  if (global.LANG == 'EN') COPLE = '```Choose two members from the group.```'
  if (global.LANG == 'SI') COPLE = '```ගෲප් එකේ සිටින දෙදෙනෙකු තෝරයි.```'
  var MYSOLO = ''
  if (global.LANG == 'EN') MYSOLO = '```Choose your soulmate```.' 
  if (global.LANG == 'SI') MYSOLO ='```ඔබගේ ආත්මීය මිතුරා තෝරයි```.'
  var MATH = ''
  if (global.LANG == 'EN') MATH = '```Counting with Bot```.'
  if (global.LANG == 'SI') MATH = '```බොට් සමග ගණන් සෑදීමට.```'
  prefix = '.'
  anu = `*◉────[ FUN MENU ]────◉*
  
  ╭👸  *ᴏᴡɴᴇʀ* ${global.ownername}
  ├📡  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
  ╰⏰  *ᴛɪᴍᴇ* ${time}
  
  ${M_E} *${prefix}couple*   
     ${D_E}  ${COPLE}
  ${M_E} *${prefix}mysoulmate*   
     ${D_E}  ${MYSOLO}
  ${M_E} *${prefix}math*   
     ${D_E}  ${MATH}
     
  *──────────◯*
  `
  next = Lang.NEXT_BUTTON
  back = Lang.BACK_BUTTON
                     
                     footer = global.botname
                   buttons = [
                      {buttonId: `randommenu`, buttonText: {displayText: back}, type: 1},
                      {buttonId: `niluvoicemenu`, buttonText: {displayText: next}, type: 1}
                      
                  ]
                  let buttonMessage = {
                      image: { url: 'https://telegra.ph/file/f2bb8d4fbd8fc9ca5a496.jpg'},
                      caption: anu,
                      footer: footer,
                      buttons: buttons,
                      headerType: 4
                  }
                 QueenNilu.sendMessage(m.chat, buttonMessage, { quoted: m })
            
                      /* message = await prepareWAMessageMedia({ image : { url: 'https://telegra.ph/file/f2bb8d4fbd8fc9ca5a496.jpg' } }, { upload:   QueenNilu.waUploadToServer })
                                    template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                        templateMessage: {
                                            hydratedTemplate: {
                                                imageMessage: message.imageMessage,
                                                hydratedContentText: anu ,
                                                hydratedFooterText: global.botname ,
                                                hydratedButtons: [{
                                                    urlButton: {
                                                        displayText: '❰ ʏᴏᴜᴛᴜʙᴇ ❱' ,
                                                        url: 'https://youtube.com/c/janithsadanuwan'
                                                    }
                                                }, {
                                                    quickReplyButton: {
                                                        displayText: `${back}` ,
                                                        id: 'randommenu'
                                                        }
                                                    },  {
                                                    quickReplyButton: {
                                                        displayText: `${next}` ,
                                                        id: 'niluvoicemenu'
                                                        }
                                                }]
                                            }
                                        }
                                    }), { userJid: m.chat, quoted: m })
                                      QueenNilu.relayMessage(m.chat, template.message, { messageId: template.key.id })
                               */
  }
                    break
                    case 'niluvoicemenu': {  
  const start = new Date().getTime()
    await QueenNilu.sendMessage(from, { react: { text: `📥`, key: m.key }})
    const end = new Date().getTime()
    const ping = (end - start) + ' *_ᴍs_*' 
    const time = new Date().toLocaleString('HI', { timeZone: TIME_ZONE }).split(' ')[1]
                    
                            await QueenNilu.sendMessage(from, { react: { text: `🎙️`, key: m.key }})
                    
  var VOICEDESC = ''
  if (global.LANG == 'EN') VOICEDESC= '*💬 About Voice changer cmd*\n ```When you reply to one of your voice messages and use the following command, the corresponding voice has been changed.```'
  if (global.LANG == 'SI') VOICEDESC= '*💬 වොයිස් විධාන පිලිබද* \n ```ඔබගේ වොයිස් මැස්ස්සේජ් එකක් සදහා රිප්ලයි කර පහත කමාන්ඩ් බාවිතකරවිට ඒවාට අදාල voice වෙනස් වී ලැබෙයි```'
  prefix = '.'
                        anu = `*◉────[ VOICE MENU ]────◉*
  
  ╭👸  *ᴏᴡɴᴇʀ* ${global.ownername}
  ├📡  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
  ╰⏰  *ᴛɪᴍᴇ* ${time}
  
  ${M_E} *${prefix}bass*
  ${M_E} *${prefix}blown*
  ${M_E} *${prefix}deep*
  ${M_E} *${prefix}earrape*
  ${M_E} *${prefix}fast*
  ${M_E} *${prefix}fat*
  ${M_E} *${prefix}nightcore*
  ${M_E} *${prefix}reverse*
  ${M_E} *${prefix}robot*
  ${M_E} *${prefix}slow*
  ${M_E} *${prefix}squirrel*
  
  ${VOICEDESC}
  
  *──────────◯*
  `
                    next = Lang.NEXT_BUTTON
  back = Lang.BACK_BUTTON
  
  footer = global.botname
                   buttons = [
                      {buttonId: `funmenu`, buttonText: {displayText: back}, type: 1},
                      {buttonId: `niluconvertmenu`, buttonText: {displayText: next}, type: 1}
                      
                  ]
                  let buttonMessage = {
                      image: { url: 'https://telegra.ph/file/5178ff96358a9e33cf7da.jpg'},
                      caption:anu ,
                      footer: footer,
                      buttons: buttons,
                      headerType: 4
                  }
                 QueenNilu.sendMessage(m.chat, buttonMessage, { quoted: m })
            
            
                     /* message = await prepareWAMessageMedia({ image : { url: 'https://telegra.ph/file/5178ff96358a9e33cf7da.jpg' } }, { upload:   QueenNilu.waUploadToServer })
                                    template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                        templateMessage: {
                                            hydratedTemplate: {
                                                imageMessage: message.imageMessage,
                                                hydratedContentText: anu ,
                                                hydratedFooterText: global.botname ,
                                                hydratedButtons: [{
                                                    urlButton: {
                                                        displayText: '❰ ʏᴏᴜᴛᴜʙᴇ ❱' ,
                                                        url: 'https://youtube.com/c/janithsadanuwan'
                                                    }
                                                }, {
                                                    quickReplyButton: {
                                                        displayText: `${back}` ,
                                                        id: 'funmenu'
                                                        }
                                                    },  {
                                                    quickReplyButton: {
                                                        displayText: `${next}` ,
                                                        id: 'niluconvertmenu'
                                                        }
                                                }]
                                            }
                                        }
                                    }), { userJid: m.chat, quoted: m })
                                      QueenNilu.relayMessage(m.chat, template.message, { messageId: template.key.id })
                               */
  }
                    break
                    case 'religionmenukdksoejdjj': {
                        anu = `
  *𝗥𝗘𝗟𝗜𝗚𝗜𝗢𝗡 𝗠𝗘𝗡𝗨*
   Islamic
  🔵 ${prefix}iqra
  🔵 ${prefix}hadith
  🔵 ${prefix}alquran
  🔵 ${prefix}juzamma
  🔵 ${prefix}tafsirsurah`
                    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                        templateMessage: {
                                            hydratedTemplate: {
                                                hydratedContentText: anu,
                                                locationMessage: {
                                                jpegThumbnail: fs.readFileSync('./image/nilu.jpg')},
                                                hydratedFooterText: `𝚀𝚞𝚎𝚎𝚗 𝙽𝚒𝚕𝚞 𝙿𝚞𝚋𝚕𝚒𝚌 𝙴𝚍𝚒𝚝𝚒𝚘𝚗 `,
                                                hydratedButtons: [{
                                                    urlButton: {
                                                        displayText: 'SUBSCRIBE',
                                                        url: 'https://www.youtube.com/c/janithsadanuwan'
                                                    }
                                                }, {
                                                    quickReplyButton: {
                                                        displayText: 'OWNER',
                                                        id: `${prefix}owner`
                                                    }
                                                }]
                                            }
                                        }
                                    }), { userJid: m.chat })
                                    QueenNilu.relayMessage(m.chat, template.message, { messageId: template.key.id })
                                }
                    break
                    case 'horoscopemenuxxxxxxx': {
                        anu = `
   *𝗛𝗢𝗥𝗢𝗦𝗖𝗢𝗣𝗘 𝗠𝗘𝗡𝗨*
  
  🔵 ${prefix}hockeynumber
  🔵 ${prefix}dreammeaning
  🔵 ${prefix}namemeaning
  🔵 ${prefix}fortunetelling
  🔵 ${prefix}marriageprediction
  🔵 ${prefix}wife&husband
  🔵 ${prefix}fortunetelling2
  🔵 ${prefix}matchname
  🔵 ${prefix}couplematch
  🔵 ${prefix}married
  🔵 ${prefix}businessnature
  🔵 ${prefix}sustenance
  🔵 ${prefix}profession
  🔵 ${prefix}fate
  🔵 ${prefix}potentialdisease
  🔵 ${prefix}tarot
  🔵 ${prefix}fengshui
  🔵 ${prefix}goodday
  🔵 ${prefix}badday
  🔵 ${prefix}unluckyday
  🔵 ${prefix}dragonday
  🔵 ${prefix}sustenance2
  🔵 ${prefix}luck
  🔵 ${prefix}weton
  🔵 ${prefix}character
  🔵 ${prefix}luck2
  🔵 ${prefix}fishing
  🔵 ${prefix}fertiletime
  🔵 ${prefix}zodiac
  🔵 ${prefix}shio`
                      const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                        templateMessage: {
                                            hydratedTemplate: {
                                                hydratedContentText: anu,
                                                locationMessage: {
                                                jpegThumbnail: fs.readFileSync('./image/nilu.jpg')},
                                                hydratedFooterText: `𝚀𝚞𝚎𝚎𝚗 𝙽𝚒𝚕𝚞 𝙿𝚞𝚋𝚕𝚒𝚌 𝙴𝚍𝚒𝚝𝚒𝚘𝚗 `,
                                                hydratedButtons: [{
                                                    urlButton: {
                                                        displayText: 'SUBSCRIBE',
                                                        url: 'https://www.youtube.com/c/janithsadanuwan'
                                                    }
                                                }, {
                                                    quickReplyButton: {
                                                        displayText: 'OWNER',
                                                        id: `${prefix}owner`
                                                    }
                                                }]
                                            }
                                        }
                                    }), { userJid: m.chat })
                                    QueenNilu.relayMessage(m.chat, template.message, { messageId: template.key.id })
                                }
                    break
                    case 'niluconvertmenu': {  
  const start = new Date().getTime()
    await QueenNilu.sendMessage(from, { react: { text: `📥`, key: m.key }})
    const end = new Date().getTime()
    const ping = (end - start) + ' *_ᴍs_*' 
    const time = new Date().toLocaleString('HI', { timeZone: TIME_ZONE }).split(' ')[1]
  
                            await QueenNilu.sendMessage(from, { react: { text: `🛠️`, key: m.key }})
                    prefix = '.'
  var IMG = ''
  if (global.LANG == 'EN' ) IMG= '```Sticker convert to photo.```'
  if (global.LANG == 'SI' ) IMG= '```ස්ටිකර් 1ක් ෆොටෝ 1ක් බවට හැරවීම.```'
  var RBG = ''
  if (global.LANG == 'EN' ) RBG= '```Remove photo background.```'
  if (global.LANG == 'SI' ) RBG= '```ජායාරූප වල පසුබිම ඉවත්කරයි```'
  var STICKER = ''
  if (global.LANG == 'EN' ) STICKER= '```image / small video convert to sticker```'
  if (global.LANG == 'SI' ) STICKER= '```ජායාරූපයක් හෝ කුඩා වීඩීයෝවක් ස්ටිකර් බවට පත්කිරීම```'
  var EMOJIMIX = ''
  if (global.LANG == 'EN' ) EMOJIMIX= '```Mix 2 imoji and make sticker```'
  if (global.LANG == 'SI' ) EMOJIMIX= '```ඉමෝජි 2ක් එකතු කර ස්ටිකර් සාදයි```'
  var TOVIDEO = ''
  if (global.LANG == 'EN' ) TOVIDEO= '```Animation sticker convert to video```'
  if (global.LANG == 'SI' ) TOVIDEO= '```ඇනිමේශන් ස්ටිකර් වීඩියෝ බවට හැරවීම```'
  var GIF = ''
  if (global.LANG == 'EN' ) GIF= '```Animation Sticker Convert to Gif```'
  if (global.LANG == 'SI' ) GIF= '```ඇනිමේශන් ස්ටිකර් GIF බවට පත්කිරීම```'
  var URL = ''
  if (global.LANG == 'EN' ) URL= '```Get url your image / video```'
  if (global.LANG == 'SI' ) URL= '```ඔබගේ ජායාරූපයට හෝ වීඩියෝවට ලින්කුවක් ලබාදෙයි```'
  var FANCY = ''
  if (global.LANG == 'EN' ) FANCY = '```Make fancy text```'
  if (global.LANG == 'SI' ) FANCY = '```විවිද හැඩවලින් අකුරු සෑදීම [ only english ]```'
  
                    anu = `*◉────[ CONVERT MENU ]────◉*
  
  ╭👸  *ᴏᴡɴᴇʀ* ${global.ownername}
  ├📡  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
  ╰⏰  *ᴛɪᴍᴇ* ${time}
  
  ${M_E} *${prefix}toimage*   
     ${D_E}  ${IMG}
  ${M_E} *${prefix}removebg*   
     ${D_E}  ${RBG}
  ${M_E} *${prefix}sticker*   
     ${D_E} ${STICKER}
  ${M_E} *${prefix}emojimix*   
     ${D_E}  ${EMOJIMIX}
  ${M_E} *${prefix}tovideo*   
     ${D_E}  ${TOVIDEO}
  ${M_E} *${prefix}togif*   
     ${D_E}  ${GIF}
  ${M_E} *${prefix}tourl*   
     ${D_E}  ${URL} 
  ${M_E} *${prefix}fancy*   
     ${D_E}  ${FANCY} 
     
  *──────────◯*
  `
                      next = Lang.NEXT_BUTTON
  back = Lang.BACK_BUTTON
  
      footer = global.botname
                   buttons = [
                      {buttonId: `niluvoicemenu`, buttonText: {displayText: back}, type: 1},
                      {buttonId: `niluranimemenu`, buttonText: {displayText: next}, type: 1}
                      
                  ]
                  let buttonMessage = {
                      image: { url: 'https://telegra.ph/file/b6077fd339af273d1ec4e.jpg'},
                      caption:anu ,
                      footer: footer,
                      buttons: buttons,
                      headerType: 4
                  }
                 QueenNilu.sendMessage(m.chat, buttonMessage, { quoted: m })
            
                      /*message = await prepareWAMessageMedia({ image : { url: 'https://telegra.ph/file/b6077fd339af273d1ec4e.jpg' } }, { upload:   QueenNilu.waUploadToServer })
                                    template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                        templateMessage: {
                                            hydratedTemplate: {
                                                imageMessage: message.imageMessage,
                                                hydratedContentText: anu ,
                                                hydratedFooterText: global.botname ,
                                                hydratedButtons: [{
                                                    urlButton: {
                                                        displayText: '❰ ʏᴏᴜᴛᴜʙᴇ ❱' ,
                                                        url: 'https://youtube.com/c/janithsadanuwan'
                                                    }
                                                }, {
                                                    quickReplyButton: {
                                                        displayText: `${back}` ,
                                                        id: 'niluvoicemenu'
                                                        }
                                                    },  {
                                                    quickReplyButton: {
                                                        displayText: `${next}` ,
                                                        id: 'niluranimemenu'
                                                        }
                                                }]
                                            }
                                        }
                                    }), { userJid: m.chat, quoted: m })
                                      QueenNilu.relayMessage(m.chat, template.message, { messageId: template.key.id })
                               */
  }
                    break
                    case 'niluranimemenu': {  
  const start = new Date().getTime()
    await QueenNilu.sendMessage(from, { react: { text: `📥`, key: m.key }})
    const end = new Date().getTime()
    const ping = (end - start) + ' *_ᴍs_*' 
    const time = new Date().toLocaleString('HI', { timeZone: TIME_ZONE }).split(' ')[1]
  
                            await QueenNilu.sendMessage(from, { react: { text: `🌝`, key: m.key }})
  
  next = Lang.NEXT_BUTTON
  back = Lang.BACK_BUTTON
  
  
                        anu = `◉────[ DOWNLOAD MENU ]────◉*
  
  ╭👸  *ᴏᴡɴᴇʀ* ${global.ownername}
  ├📡  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
  ╰⏰  *ᴛɪᴍᴇ* ${time}
  
  ${M_E} ${prefix}akira  
  ${M_E} ${prefix}ana
  ${M_E} ${prefix}asuna 
  ${M_E} ${prefix}ayuzawa 
  ${M_E} ${prefix}boruto
  ${M_E} ${prefix}elaina 
  ${M_E} ${prefix}emilia 
  ${M_E} ${prefix}erza  
  ${M_E} ${prefix}gremory  
  ${M_E} ${prefix}inori  
  ${M_E} ${prefix}kaga  
  ${M_E} ${prefix}kaori  
  ${M_E} ${prefix}kurumi  
  ${M_E} ${prefix}loli  
  ${M_E} ${prefix}madara  
  ${M_E} ${prefix}mikasa  
  ${M_E} ${prefix}miku  
  ${M_E} ${prefix}naruto  
  ${M_E} ${prefix}nezuko  
  ${M_E} ${prefix}rize  
  ${M_E} ${prefix}sakura  
  ${M_E} ${prefix}sasuke  
  ${M_E} ${prefix}shina  
  ${M_E} ${prefix}shinka  
  ${M_E} ${prefix}shota  
  ${M_E} ${prefix}waifu  
  ${M_E} ${prefix}yuki  
  ${M_E} ${prefix}bully
  ${M_E} ${prefix}cuddle
  ${M_E} ${prefix}cry
  ${M_E} ${prefix}hug
  ${M_E} ${prefix}awoo
  ${M_E} ${prefix}kiss
  ${M_E} ${prefix}lick
  ${M_E} ${prefix}pat
  ${M_E} ${prefix}smug
  ${M_E} ${prefix}bonk
  ${M_E} ${prefix}yeet
  ${M_E} ${prefix}blush
  ${M_E} ${prefix}smile
  ${M_E} ${prefix}wave
  ${M_E} ${prefix}highfive
  ${M_E} ${prefix}handhold
  ${M_E} ${prefix}nom
  ${M_E} ${prefix}bite
  ${M_E} ${prefix}glomp
  ${M_E} ${prefix}slap
  ${M_E} ${prefix}kill
  ${M_E} ${prefix}happy
  ${M_E} ${prefix}wink
  ${M_E} ${prefix}poke
  ${M_E} ${prefix}dance
  ${M_E} ${prefix}cringe
  
  *──────────◯*
  `
  
  footer = global.botname
                   buttons = [
                      {buttonId: `niluconvertmenu`, buttonText: {displayText: back}, type: 1},
                      {buttonId: `nilunocategorymenu`, buttonText: {displayText: next}, type: 1}
                      
                  ]
                  let buttonMessage = {
                      image: { url: 'https://telegra.ph/file/a41e3b88d1676fa98dd00.jpg'},
                      caption: anu,
                      footer: footer,
                      buttons: buttons,
                      headerType: 4
                  }
                 QueenNilu.sendMessage(m.chat, buttonMessage, { quoted: m })
            
                   /* message = await prepareWAMessageMedia({ image : { url: 'https://telegra.ph/file/a41e3b88d1676fa98dd00.jpg' } }, { upload:   QueenNilu.waUploadToServer })
                                    template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                        templateMessage: {
                                            hydratedTemplate: {
                                                imageMessage: message.imageMessage,
                                                hydratedContentText: anu ,
                                                hydratedFooterText: global.botname ,
                                                hydratedButtons: [{
                                                    urlButton: {
                                                        displayText: '❰ ʏᴏᴜᴛᴜʙᴇ ❱' ,
                                                        url: 'https://youtube.com/c/janithsadanuwan'
                                                    }
                                                }, {
                                                    quickReplyButton: {
                                                        displayText: `${back}` ,
                                                        id: 'niluconvertmenu'
                                                        }
                                                    },  {
                                                    quickReplyButton: {
                                                        displayText: `${next}` ,
                                                        id: 'nilunocategorymenu'
                                                        }
                                                }]
                                            }
                                        }
                                    }), { userJid: m.chat, quoted: m })
                                      QueenNilu.relayMessage(m.chat, template.message, { messageId: template.key.id })
                               */
  }
                    break
                    case 'nilunocategorymenu': {  
  const start = new Date().getTime()
    await QueenNilu.sendMessage(from, { react: { text: `📥`, key: m.key }})
    const end = new Date().getTime()
    const ping = (end - start) + ' *_ᴍs_*' 
    const time = new Date().toLocaleString('HI', { timeZone: TIME_ZONE }).split(' ')[1]
  
                            await QueenNilu.sendMessage(from, { react: { text: `⚙️`, key: m.key }})
                    prefix = '.'
  
  next = Lang.NEXT_BUTTON
  back = Lang.BACK_BUTTON
  
  var SPEED = ''
  if (global.LANG == 'EN' ) SPEED = '```Test Bot Speed```'
  if (global.LANG == 'SI') SPEED = '```බොට්ගේ වේගය මැනීමට```'
  var PING = ''
  if (global.LANG == 'EN' ) PING= '```Test Bot ping.```'
  if (global.LANG == 'SI') PING= '```බොට්ගේ පින්ග් පරීක්ශාකිරීමට```'
  var OWNER = ''
  if (global.LANG == 'EN' ) OWNER = '```Send Bot Owner Contact```'
  if (global.LANG == 'SI') OWNER = '```බොට් අයිතිකරුගේ නම්බර් එක එවයි```'
  var DONA = ''
  if (global.LANG == 'EN' ) DONA = '```Donate fro bot```'
  if (global.LANG == 'SI') DONA = '```බොට් සදහා ආදාරයක් කිරීමට```'
  var MENU = ''
  if (global.LANG == 'EN' ) MENU = '```Send Bot Menu```'
  if (global.LANG == 'SI') MENU= '```බොට් මෙනුව එවයි```'
  var DELETE = ''
  if (global.LANG == 'EN' ) DELETE= '```Delete massage if bot send```'
  if (global.LANG == 'SI') DELETE= '```බොට් යැවූ මැස්ස්සේජ් මකාදමයි```'
  var QUO = ''
  if (global.LANG == 'EN' ) QUO = '```Send Quoted Massage```'
  if (global.LANG == 'SI') QUO = '```ඔබ විමසූ පනිවුඩය රිප්ලයි කර ඇති මැස්ස්සේජ් එක එවයි```'
  var LIP = ''
  if (global.LANG == 'EN' ) LIP = '```Send personal massage list```'
  if (global.LANG == 'SI') LIP= '```ඉන්බොක්ස් ඇති චැට් පෙන්වයි```'
  var LPO = ''
  if (global.LANG == 'EN' ) LPO= '```Show online List```'
  if (global.LANG == 'SI') LPO= '```ඔන්ලයින් සිටින අය පෙන්වයි```'
  var REPORT = ''
  if (global.LANG == 'EN' ) REPORT= '```report from bot owner```'
  if (global.LANG == 'SI') REPORT = '```බොට් අයිතිකරුට වාර්තාකරන්න```'
  
  
  anu = `*◉────[ MISC MENU ]────◉*
  
  ╭👸  *ᴏᴡɴᴇʀ* ${global.ownername}
  ├📡  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
  ╰⏰  *ᴛɪᴍᴇ* ${time}
  
  ${M_E} *${prefix}speedtest*   
      ${D_E}  ${SPEED}
  ${M_E} *${prefix}ping*   
      ${D_E}  ${PING}
  ${M_E} *${prefix}owner*   
      ${D_E}  ${OWNER}
  ${M_E} *${prefix}donate*   
      ${D_E}  ${DONA}
  ${M_E} *${prefix}menu*   
      ${D_E}  ${MENU}
  ${M_E} *${prefix}delete*   
      ${D_E}  ${DELETE}
  ${M_E} *${prefix}quoted*   
      ${D_E}  ${QUO}
  ${M_E} *${prefix}listpc*   
      ${D_E}  ${LIP}
  ${M_E} *${prefix}listonline*   
      ${D_E}  ${LPO}
  ${M_E} *${prefix}report*   
      ${D_E}  ${REPORT}
      
  *──────────◯*
  `
                      footer = global.botname
                   buttons = [
                      {buttonId: `niluranimemenu`, buttonText: {displayText: back}, type: 1},
                      {buttonId: `textlogo`, buttonText: {displayText: next}, type: 1}
                      
                  ]
                  let buttonMessage = {
                      image: { url: 'https://telegra.ph/file/be3ca9a3bdac2fbe47f10.jpg' },
                      caption:anu ,
                      footer: footer,
                      buttons: buttons,
                      headerType: 4
                  }
                 QueenNilu.sendMessage(m.chat, buttonMessage, { quoted: m })
            
                      /*message = await prepareWAMessageMedia({ image : { url: 'https://telegra.ph/file/be3ca9a3bdac2fbe47f10.jpg' } }, { upload:   QueenNilu.waUploadToServer })
                                    template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                        templateMessage: {
                                            hydratedTemplate: {
                                                imageMessage: message.imageMessage,
                                                hydratedContentText: anu ,
                                                hydratedFooterText: global.botname ,
                                                hydratedButtons: [{
                                                    urlButton: {
                                                        displayText: '❰ ʏᴏᴜᴛᴜʙᴇ ❱' ,
                                                        url: 'https://youtube.com/c/janithsadanuwan'
                                                    }
                                                }, {
                                                    quickReplyButton: {
                                                        displayText: `${back}` ,
                                                        id: 'niluranimemenu'
                                                        }
                                                    },  {
                                                    quickReplyButton: {
                                                        displayText: `${next}` ,
                                                        id: 'niludatabasemenu'
                                                        }
                                                }]
                                            }
                                        }
                                    }), { userJid: m.chat, quoted: m })
                                      QueenNilu.relayMessage(m.chat, template.message, { messageId: template.key.id })
                                */
  }
                    break
                    case 'textlogo': { 
  const start = new Date().getTime()
    await QueenNilu.sendMessage(from, { react: { text: `👻`, key: m.key }})
    const end = new Date().getTime()
    const ping = (end - start) + ' *_ᴍs_*' 
    const time = new Date().toLocaleString('HI', { timeZone: TIME_ZONE }).split(' ')[1]
  
                            await QueenNilu.sendMessage(from, { react: { text: `⚧️️`, key: m.key }})
  prefix = '.'
                        anu = `*◉────[ TEXT TO LOGO MENU ]────◉*
  
  ╭👸  *ᴏᴡɴᴇʀ* ${global.ownername}
  ├📡  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
  ╰⏰  *ᴛɪᴍᴇ* ${time}
  
  ${M_E} *${prefix}eglitch*
  ${M_E} *${prefix}eberry*
  ${M_E} *${prefix}eneon*
  ${M_E} *${prefix}ecrismas*
  ${M_E} *${prefix}ethunder*
  ${M_E} *${prefix}eninja*
  ${M_E} *${prefix}eorange*
  ${M_E} *${prefix}ecake*
  ${M_E} *${prefix}estrowberry*
  ${M_E} *${prefix}eflaming*
  ${M_E} *${prefix}eshadow*
  ${M_E} *${prefix}eongrass*
  ${M_E} *${prefix}eloveu*
  ${M_E} *${prefix}ecoffee*
  ${M_E} *${prefix}eilluminati*
  
     ${D_E} ${prefix}eberry Janiya
   
  *──────────◯*
  `
  next = Lang.NEXT_BUTTON
  back = Lang.BACK_BUTTON
  
  footer = global.botname
                   buttons = [
                      {buttonId: `nilunocategorymenu`, buttonText: {displayText: back}, type: 1},
                      {buttonId: `logomenu`, buttonText: {displayText: next}, type: 1}
                      
                  ]
                  let buttonMessage = {
                      image: { url: 'https://telegra.ph/file/43fb12ef3bb693973d756.jpg' },
                      caption:anu ,
                      footer: footer,
                      buttons: buttons,
                      headerType: 4
                  }
                 QueenNilu.sendMessage(m.chat, buttonMessage, { quoted: m })
            
                      /*message = await prepareWAMessageMedia({ image : { url: 'https://telegra.ph/file/15c3205613be1d0bd1f1b.jpg' } }, { upload:   QueenNilu.waUploadToServer })
                                    template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                        templateMessage: {
                                            hydratedTemplate: {
                                                imageMessage: message.imageMessage,
                                                hydratedContentText: anu ,
                                                hydratedFooterText: global.botname ,
                                                hydratedButtons: [{
                                                    urlButton: {
                                                        displayText: '❰ ʏᴏᴜᴛᴜʙᴇ ❱' ,
                                                        url: 'https://youtube.com/c/janithsadanuwan'
                                                    }
                                                }, {
                                                    quickReplyButton: {
                                                        displayText: `${back}` ,
                                                        id: 'nilunocategorymenu'
                                                        }
                                                    },  {
                                                    quickReplyButton: {
                                                        displayText: `${next}` ,
                                                        id: 'niluanonymouschatmenu'
                                                        }
                                                }]
                                            }
                                        }
                                    }), { userJid: m.chat, quoted: m })
                                      QueenNilu.relayMessage(m.chat, template.message, { messageId: template.key.id })
                                */
  }
                    break
                    case 'niluanonymouschatmenu': {
  next = Lang.NEXT_BUTTON
  back = Lang.BACK_BUTTON
                        anu = `
  *𝗔𝗡𝗢𝗡𝗬𝗠𝗢𝗨𝗦 𝗠𝗘𝗡𝗨*
  👤 ${prefix}start
  👤 ${prefix}next
  👤 ${prefix}stop
                        `
                        footer = global.botname
                   buttons = [
                      {buttonId: `niludatabasemenu`, buttonText: {displayText: back}, type: 1},
                      {buttonId: `logomenu`, buttonText: {displayText: next}, type: 1}
                      
                  ]
                  let buttonMessage = {
                      image: { url: 'https://telegra.ph/file/4c48b566ce23dd180d1be.jpg'},
                      caption: anu,
                      footer: footer,
                      buttons: buttons,
                      headerType: 4
                  }
                 QueenNilu.sendMessage(m.chat, buttonMessage, { quoted: m })
           
  }
                    break
                    case 'logomenu': {  
  const start = new Date().getTime()
    await QueenNilu.sendMessage(from, { react: { text: `♥️`, key: m.key }})
    const end = new Date().getTime()
    const ping = (end - start) + ' *_ᴍs_*' 
    const time = new Date().toLocaleString('HI', { timeZone: TIME_ZONE }).split(' ')[1]
  
                            await QueenNilu.sendMessage(from, { react: { text: `🌸`, key: m.key }})
  
  prefix = '.'
  var LOGODESC = ''
  if (global.LANG == 'EN') LOGODESC = '```Make logos on logo pack -1```'
  if (global.LANG == 'SI') LOGODESC = '```ලෝගෝ සෑදීම ආකාරය - 1```'
  var LOGODESC_2 = ''
  if (global.LANG == 'EN') LOGODESC_2 = '```Make logos on logo pack -2```'
  if (global.LANG == 'SI') LOGODESC_2 = '```ලෝගෝ සෑදීම ආකාරය - 2```'
  var LOGODESC_3 = ''
  if (global.LANG == 'EN') LOGODESC_3 = '```Make logos on logo pack -3```'
  if (global.LANG == 'SI') LOGODESC_3 = '```ලෝගෝ සෑදීම ආකාරය - 3```'
   
                        anu = `*◉────[ LOGO MENU ]────◉*
  
  ╭👸  *ᴏᴡɴᴇʀ* ${global.ownername}
  ├📡  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
  ╰⏰  *ᴛɪᴍᴇ* ${time}
  
  ${M_E} *.logo*   
      ${D_E}  ${LOGODESC}
  ${M_E} *.logo2*   
      ${D_E}  ${LOGODESC_2}
  ${M_E} *.logo3*
      ${D_E}  ${LOGODESC_3}
  
   *_Example : .logo1 Janiya_*
   
   *──────────◯*
   `,
  next = Lang.NEXT_BUTTON
  back = Lang.BACK_BUTTON
  
  footer = global.botname
                   buttons = [
                      {buttonId: `nilunocategorymenu`, buttonText: {displayText: back}, type: 1},
                      {buttonId: `nilusistemmenu`, buttonText: {displayText: next}, type: 1}
                      
                  ]
                  let buttonMessage = {
                      image: { url: 'https://telegra.ph/file/fe4955fa5a37e91f0ce85.jpg'},
                      caption: anu,
                      footer: footer,
                      buttons: buttons,
                      headerType: 4
                  }
                 QueenNilu.sendMessage(m.chat, buttonMessage, { quoted: m })
            
                     /* message = await prepareWAMessageMedia({ image : { url: 'https://telegra.ph/file/fe4955fa5a37e91f0ce85.jpg' } }, { upload:   QueenNilu.waUploadToServer })
                                    template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                        templateMessage: {
                                            hydratedTemplate: {
                                                imageMessage: message.imageMessage,
                                                hydratedContentText: anu ,
                                                hydratedFooterText: global.botname ,
                                                hydratedButtons: [{
                                                    urlButton: {
                                                        displayText: '❰ ʏᴏᴜᴛᴜʙᴇ ❱' ,
                                                        url: 'https://youtube.com/c/janithsadanuwan'
                                                    }
                                                }, {
                                                    quickReplyButton: {
                                                        displayText: `${back}` ,
                                                        id: 'niludatabasemenu'
                                                        }
                                                    },  {
                                                    quickReplyButton: {
                                                        displayText: `${next}` ,
                                                        id: 'ownermenu'
                                                        }
                                                }]
                                            }
                                        }
                                    }), { userJid: m.chat, quoted: m })
                                      QueenNilu.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              */
                                }
                    break
                    case 'nilusistemmenu': {
  const start = new Date().getTime()
    await QueenNilu.sendMessage(from, { react: { text: `♥️`, key: m.key }})
    const end = new Date().getTime()
    const ping = (end - start) + ' *_ᴍs_*' 
    const time = new Date().toLocaleString('HI', { timeZone: TIME_ZONE }).split(' ')[1]
  
                        anu = `*◉────[ SYSTEM MENU ]────◉*
  
  ╭👸  *ᴏᴡɴᴇʀ* ${global.ownername}
  ├📡  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
  ╰⏰  *ᴛɪᴍᴇ* ${time}
  
  ${M_E} ${prefix}mute
  ${M_E} ${prefix}antiwame
  
  *──────────◯*
  `
                    footer = global.botname
                   buttons = [
                      {buttonId: `logomenu`, buttonText: {displayText: back}, type: 1},
                      {buttonId: `ownermenu`, buttonText: {displayText: next}, type: 1}
                      
                  ]
                  let buttonMessage = {
                      image: { url: 'https://telegra.ph/file/5e9592ed3d63a4ecc2ae6.jpg'},
                      caption: anu,
                      footer: footer,
                      buttons: buttons,
                      headerType: 4
                  }
                 QueenNilu.sendMessage(m.chat, buttonMessage, { quoted: m })
            
                   /* const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                        templateMessage: {
                                            hydratedTemplate: {
                                                hydratedContentText: anu,
                                                locationMessage: {
                                                jpegThumbnail: fs.readFileSync('./image/nilu.jpg')},
                                                hydratedFooterText: `𝚀𝚞𝚎𝚎𝚗 𝙽𝚒𝚕𝚞 𝙿𝚞𝚋𝚕𝚒𝚌 𝙴𝚍𝚒𝚝𝚒𝚘𝚗 `,
                                                hydratedButtons: [{
                                                    urlButton: {
                                                        displayText: 'SUBSCRIBE',
                                                        url: 'https://www.youtube.com/c/janithsadanuwan'
                                                    }
                                                }, {
                                                    quickReplyButton: {
                                                        displayText: 'OWNER',
                                                        id: `${prefix}owner`
                                                    }
                                                }]
                                            }
                                        }
                                    }), { userJid: m.chat })
                                    QueenNilu.relayMessage(m.chat, template.message, { messageId: template.key.id })
                               */ }
                    break
                      case 'ownermenu': {  
  const start = new Date().getTime()
    await QueenNilu.sendMessage(from, { react: { text: `♥️`, key: m.key }})
    const end = new Date().getTime()
    const ping = (end - start) + ' *_ᴍs_*' 
    const time = new Date().toLocaleString('HI', { timeZone: TIME_ZONE }).split(' ')[1]
  
                            await QueenNilu.sendMessage(from, { react: { text: `🎭`, key: m.key }})
  
  var JOIN = ''
  if (global.LANG == 'EN') JOIN= '```Join yousing invite link```'
  if (global.LANG == 'SI') JOIN= '```ගෲප් ලින්ක් බාවිතාකරමින් ඒයට join වීමට```'
  var LEAVE = ''
  if (global.LANG == 'EN') LEAVE= '```Leave from group```'
  if (global.LANG == 'SI') LEAVE= '```ගෲප් එකකින් බොට්ව ඉවත් කිරීමට```'
  var SETPP = ''
  if (global.LANG == 'EN') SETPP= '```Change bit profile photo```'
  if (global.LANG == 'SI') SETPP= '```බොට්ගේ ෆ්‍රොෆයිල් ජායාරූපය වෙනස් කිරීම```'
  var BLOCK = ''
  if (global.LANG == 'EN') BLOCK= '```Block user```'
  if (global.LANG == 'SI') BLOCK= '```අයෙකු අවහිර කිරීමට```'
  var UNBLOCK = ''
  if (global.LANG == 'EN') UNBLOCK= '```unblock user```'
  if (global.LANG == 'SI') UNBLOCK= '```අවහිර කර අයෙකුගේ අවහිරතාවය ඉවත් කිරීම```'
  var BCGRP = ''
  if (global.LANG == 'EN') BCGRP= '```send broadcast All groups```'
  if (global.LANG == 'SI') BCGRP= '```සමූහ වලට පමනක් බ්‍රෝඩ්කාස්ට් යැවීමට```'
  var BCALL = ''
  if (global.LANG == 'EN') BCALL= '```Send broadcast all chats```'
  if (global.LANG == 'SI') BCALL= '```සියලුම චැට් සදහා බ්‍රෝඩ්කාස්ට් යැවීම```'
  prefix = '.'
  anu = `*◉────[ OWNER MENU ]────◉*
  
  ╭👸  *ᴏᴡɴᴇʀ* ${global.ownername}
  ├📡  *ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ* ${ping}
  ╰⏰  *ᴛɪᴍᴇ* ${time}
  
  ${M_E} *${prefix}join*   
      ${D_E}  ${JOIN}
  ${M_E} *${prefix}leave*   
      ${D_E}  ${LEAVE}
  ${M_E} *${prefix}setbotpp*   
      ${D_E}  ${SETPP}
  ${M_E} *${prefix}block*   
      ${D_E}  ${BLOCK}
  ${M_E} *${prefix}unblock*   
      ${D_E}  ${UNBLOCK}
  ${M_E} *${prefix}bcgroup*   
      ${D_E}  ${BCGRP}
  ${M_E} *${prefix}bcall*   
      ${D_E}  ${BCALL}
  
  *──────────◯*
  `
                        next = Lang.NEXT_BUTTON
  back = Lang.BACK_BUTTON
     
     footer = global.botname
                   buttons = [
                      {buttonId: `nilusistemmenu`, buttonText: {displayText: back}, type: 1},
                      {buttonId: `about`, buttonText: {displayText: 'ǫᴜᴇᴇɴ ɴɪʟᴜ'}, type: 1}
                      
                  ]
                  let buttonMessage = {
                      image: { url: 'https://telegra.ph/file/f9ef7247406e4a86c3a77.jpg' },
                      caption: anu,
                      footer: footer,
                      buttons: buttons,
                      headerType: 4
                  }
                 QueenNilu.sendMessage(m.chat, buttonMessage, { quoted: m })
                      }
                 break
/////////////////////////////////////Menu End-------------------------

case 'attp' :{
    if (!text) return reply ('Need some word \n ex - attp Mr janiya')
    const Stik = `https://api.akuari.my.id/other/attp?text=${text}`
    await QueenNilu.sendMedia(m.chat, Stik , '𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙻𝚄', '𝙱𝙾𝚃', m, {asSticker: true}).catch((err) => reply(err))
    
   }
   break
   case 'attp2' :{
   if (!text) return reply ('Need some word \n ex - attp Mr janiya')
   const Stik = `https://my-shinz.herokuapp.com/api/maker/attp?text=${text}`
    await QueenNilu.sendMedia(m.chat, Stik , '𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙻𝚄', '𝙱𝙾𝚃', m, {asSticker: true}).catch((err) => reply(err))
    
   }
   break
   case 'ttp' :{
   if (!text) return reply ('Need some word \n ex - ttp Mr janiya')
   //const Stik = `https://my-shinz.herokuapp.com/api/maker/attp?text=${text}`
    await QueenNilu.sendMedia(m.chat, `https://my-shinz.herokuapp.com/api/maker/ttp?text=${text}` , '𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙻𝚄', '𝙱𝙾𝚃', m, {asSticker: true}).catch((err) => reply(err))
    
   }
   break
   case 'short' :{
   if (!isUrl(args[0])) return reply('*💃 Please Give Me a Correct Link*\n_Example - .short https://youtube.com/c/Janithsadanuwan')
   const janiya = await fetchJson(`https://my-shinz.herokuapp.com/api/linkshort/cuttly?link=${text}`)
   m.reply(janiya.result)
   }
   break
   //https://my-shinz.herokuapp.com/api/linkshort/cuttly?link=https://api-alpis.herokuapp.com
   case 'short2' :{
   if (!isUrl(args[0])) return reply('*💃 Please Give Me a Correct Link*\n_Example - .short2 https://youtu.be/hbwvPcnuTlY_')
   const janiya = await fetchJson(`https://my-shinz.herokuapp.com/api/linkshort/tinyurlwithalias?link=${args[0]}&alias=${args[1]}`)
   m.reply(janiya.result)
   }
   break
   case 'triggered' :{
   if (!quoted) return reply('*💃 Please reply sticker.*')
   let media = await QueenNilu.downloadAndSaveMediaMessage(quoted)
   const img = `https://api.violetics.pw/api/converter/webp-to-image?apikey=b5cd-368b-055f&image=${media}`
   const stick = 'https://api.akuari.my.id/canvas/triggered2?link='+img
   await QueenNilu.sendMessage(from, { react: { text: `✨`, key: m.key }})
   await QueenNilu.sendMedia(m.chat, stick , '𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙻𝚄', '𝙱𝙾𝚃', m, {asSticker: true}).catch((err) => reply(err))
   }
   break

 
   case 'dltone' : {
   //await QueenNilu.sendText(m.chat, `\n*🔄 Please wait ${m.pushName}...*\n`, m, )
   await QueenNilu.sendMessage(m.chat, { audio: { url: text } , mimetype: 'audio/mpeg' }, { quoted: m })
    
   }
   break
   case 'ebinary': {
   if (!m.quoted.text && !text) throw `Send/reply text with caption ${prefix + command}`
   let { eBinary } = require('./lib/binary')
   let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
   let eb = await eBinary(teks)
   reply(eb)
}
break
   case 'dbinary': {
   if (!m.quoted.text && !text) throw `Send/reply text with caption ${prefix + command}`
   let { dBinary } = require('./lib/binary')
   let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
   let db = await dBinary(teks)
   reply(db)
}
break
   
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Find Partners', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    QueenNilu.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }       

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
