const fs = require('fs'); 
const path = require('path');

let admins = [ 'Ada', 'Greta', 'Vim', 'Tim']
 
function adminCheck(req,res,next) {
    let name = req.query.name;

    if(admins.includes(name)) {
        res.send('Hola Admin: ' + name)
        next()
    } else {
        res.send('No tienes los privilegios para ingresar')
    }

}


module.exports = adminCheck;