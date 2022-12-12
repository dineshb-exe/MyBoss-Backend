const { v4: uuidv4 } = require('uuid');
function uuidCreation(actList){
    return uuidv4();
}
module.exports = uuidCreation;