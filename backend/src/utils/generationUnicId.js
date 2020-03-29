const crypto = require('crypto')

module.exports = function generationUinicId(){
    return  crypto.randomBytes(4).toString('HEX');
}