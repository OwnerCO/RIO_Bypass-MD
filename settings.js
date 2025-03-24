const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? '𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=bmwCVR5T#JTJ7r9GGoyBNKZ9-29rE_yv2es7eSv5SSrwPAjviADY' : process.env.SESSION_ID,
PORT: process.env.PORT === undefined ? "8000" : process.env.PORT,
SESSION_NAME: process.env.PORT === undefined ? "asitha" : process.env.SESSION_NAME,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgresql://knull69_user:pT6MLkMVYGxNRnVg9sbJCYJvDaafn6NU@dpg-cvd737an91rc73ddj0e0-a.virginia-postgres.render.com/knull69' : process.env.POSTGRESQL_URL,
};
