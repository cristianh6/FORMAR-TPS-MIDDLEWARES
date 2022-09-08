const fs = require('fs'); 
const path = require('path');

let userLogs = path.join(__dirname, '../logs/userLogs.txt');
 
function logMiddleware(req,res,next) {
    fs.appendFileSync(userLogs, 'Se ingresó en la página: ' + req.url + '\n',)
        next()
    } 

module.exports = logMiddleware;