const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_35_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI5LFxuICAgICAgICA0MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDk4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAzMSxcbiAgICAgICAgODUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxODksXG4gICAgICAgIDE3MixcbiAgICAgICAgMzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDgyLFxuICAgICAgICA5MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjExLFxuICAgICAgICA2LFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTksXG4gICAgICAgIDk1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0LFxuICAgICAgICAxMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICA1NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzQsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgwLFxuICAgICAgICA4MyxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDksXG4gICAgICAgIDUxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDkyLFxuICAgICAgICA3OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTUwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDcyLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTczLFxuICAgICAgICA1NixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgODksXG4gICAgICAgIDE3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDkyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDMzLFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODQsXG4gICAgICAgIDMwLFxuICAgICAgICAzMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjksXG4gICAgICAgIDczLFxuICAgICAgICAxODUsXG4gICAgICAgIDg4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDc4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTEyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDMxLFxuICAgICAgICAxODAsXG4gICAgICAgIDQsXG4gICAgICAgIDgyLFxuICAgICAgICA2MixcbiAgICAgICAgMTUxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSjRaN3hMdTVtMUJnTVNNNFlPc2lQRWgwZjBDOS84KzFrekU1c09kNWNUTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRTR1Vk5melNRQ0NsWmZxSzVfb3VwUVwiLFxuICBcInBob25lSWRcIjogXCIwOWVlZmQ5Zi1lZjVlLTQ2ZTQtOTUwMS00NzgyZjU0ZWE0YTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk1LFxuICAgICAgMTMxLFxuICAgICAgMTkwLFxuICAgICAgMTMsXG4gICAgICAyMzMsXG4gICAgICAxNjgsXG4gICAgICA1NixcbiAgICAgIDY2LFxuICAgICAgMTIwLFxuICAgICAgMTMyLFxuICAgICAgMTMwLFxuICAgICAgMTMxLFxuICAgICAgMTczLFxuICAgICAgODAsXG4gICAgICAyMTYsXG4gICAgICAyMSxcbiAgICAgIDE0OCxcbiAgICAgIDE0MSxcbiAgICAgIDEyMixcbiAgICAgIDE5NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjQsXG4gICAgICAxMCxcbiAgICAgIDY2LFxuICAgICAgMTYsXG4gICAgICAyMTcsXG4gICAgICAxMjgsXG4gICAgICAxOTIsXG4gICAgICA5MSxcbiAgICAgIDE1NCxcbiAgICAgIDk2LFxuICAgICAgNzYsXG4gICAgICA0OSxcbiAgICAgIDE3OSxcbiAgICAgIDExNixcbiAgICAgIDI1MCxcbiAgICAgIDk3LFxuICAgICAgMzYsXG4gICAgICAxNTksXG4gICAgICAxMDUsXG4gICAgICAxMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQlNHMlZHVzNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzg0NzQ1MTU1OjkyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiyoAu4bSALuG0hMqc4bSAyoDhtJzhtIvhtIAgfCDhtI3htIDKnOG0h+qcscqcXCIsXG4gICAgXCJsaWRcIjogXCIyMzUzMDQ0NDc0MjI3MDc6OTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTYveGRJRkVMclFzN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJEK2hkS0dINEl5U3lPOHhtZ2FtZTM2bkYyOEVGc3ZmOC9iNm9NRWIwMXdzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNSbGdFUGV0UDFndFYrbmFEbFlQNFV6L3o5RDJKd2hIMENhbzM2U3BJRFZMWmpIU2ppci92bm1FNHZaZitiS0hPc0pOSDhUSXhVYmZUV3F0OTFqS0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlc4L2pRSzNRQS9mV2pHdUZEV3JHMVNXTFN1R0V3UGpXdi9vZXNJMWMyVFNCV3ZTZCsyNjhKZ3AvS1NmTUtpaWduTUZvODRrbCs4ckR4Tk9nN1RYUWlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzg0NzQ1MTU1OjkyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTEwNTI1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
