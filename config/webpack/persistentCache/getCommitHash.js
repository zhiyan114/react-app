const crypto = require("crypto")
// Hash Generator
module.exports = isShortHash => {
    const result = require('child_process')
        .execSync(`git rev-parse ${isShortHash ? "--short " : ""}HEAD`)
        .toString()
        .trim();
    if(!result.startsWith("fatal")) return result;
    // If git doesn't exist generate a random sha512 from current timestamp
    return crypto.createHash("sha512").update(Date.now()).digest().slice(0, isShortHash ? 7 : 40);
}