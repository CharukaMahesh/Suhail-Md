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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_06_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAyLFxuICAgICAgICA1NixcbiAgICAgICAgMjIxLFxuICAgICAgICAyOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkzLFxuICAgICAgICA4OSxcbiAgICAgICAgODAsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAzMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MixcbiAgICAgICAgNTksXG4gICAgICAgIDY1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAzOCxcbiAgICAgICAgNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTk5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDExNixcbiAgICAgICAgOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0LFxuICAgICAgICAzNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjA4LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4MixcbiAgICAgICAgODgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgODMsXG4gICAgICAgIDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjI1LFxuICAgICAgICA1MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODUsXG4gICAgICAgIDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgODUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDcyLFxuICAgICAgICA0NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE3LFxuICAgICAgICA0MixcbiAgICAgICAgNjksXG4gICAgICAgIDE5LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiR2JEazJ0ZnhoUHVnaUdVZTRhMFE3TnFNWGV1YU5UcUQrb1BHWGM2S1UwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvMFF3bHliQ1M0aXNVeHpScU1peWh3XCIsXG4gIFwicGhvbmVJZFwiOiBcImU4MjRmZjljLTNlOWEtNGE5MS1hYjE4LTlkZGRjNGM1YjNkYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MixcbiAgICAgIDg4LFxuICAgICAgMTUwLFxuICAgICAgMTc5LFxuICAgICAgMjIsXG4gICAgICA1MixcbiAgICAgIDEyMCxcbiAgICAgIDE3NixcbiAgICAgIDE0NSxcbiAgICAgIDEzNyxcbiAgICAgIDIzOCxcbiAgICAgIDE1OCxcbiAgICAgIDExNCxcbiAgICAgIDExOSxcbiAgICAgIDE1NSxcbiAgICAgIDE4MSxcbiAgICAgIDIzNSxcbiAgICAgIDI1MCxcbiAgICAgIDE4OSxcbiAgICAgIDIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkxLFxuICAgICAgNixcbiAgICAgIDMxLFxuICAgICAgOTIsXG4gICAgICAxNjEsXG4gICAgICAxMDEsXG4gICAgICA0NyxcbiAgICAgIDI0MCxcbiAgICAgIDE5MixcbiAgICAgIDE1OSxcbiAgICAgIDExMSxcbiAgICAgIDE5NixcbiAgICAgIDE4OCxcbiAgICAgIDE2OCxcbiAgICAgIDQ3LFxuICAgICAgMTQ1LFxuICAgICAgMTk1LFxuICAgICAgMTU0LFxuICAgICAgMTAxLFxuICAgICAgMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNTFGQVJaUVNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzg0NzQ1MTU1Ojk3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiyoAu4bSALuG0hMqc4bSAyoDhtJzhtIvhtIAgfCDhtI3htIDKnOG0h+qcscqcXCIsXG4gICAgXCJsaWRcIjogXCIyMzUzMDQ0NDc0MjI3MDc6OTdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkcveGRJRkVPZW01TFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJEK2hkS0dINEl5U3lPOHhtZ2FtZTM2bkYyOEVGc3ZmOC9iNm9NRWIwMXdzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk1xY0xJcGJNQkpyQVJEd0ZGd3RiVzh6NVY0SmlGQTZJUTZYbkl6N3luZXA1R1pIMTFTRmo5UDIxY0JOelpza0pqYmMzdnlnQk1KNVYzSXA2Nk1xNkNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkRrUzVWRjVNS3lISjFGT25neURmS0o5a3RsZVBjTURqSXV5NG9oNytWZUozZk5uNHpSVCt0aUw1UndIV2ZWZzRzbDZmMWdSODk3OERIRWhKdndzdkJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzg0NzQ1MTU1Ojk3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzA4MDEwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
