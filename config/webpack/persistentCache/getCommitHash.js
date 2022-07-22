const crypto = require("crypto")
// Create a consistant hash
let result = require('child_process')
    .execSync(`git rev-parse HEAD`)
    .toString()
    .trim();
// Generate a random hash from current timestamp if the project does not have a git repository
if(result.startsWith("fatal")) crypto.createHash("sha1").update(Date.now()).digest("hex");
result = result.toLowerCase();

module.exports = isShortHash => isShortHash ? result.slice(0,7) : result;