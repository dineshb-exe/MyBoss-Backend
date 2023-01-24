const ActivityList = require('./db');
function find_entry(delID){
    ActivityList.find({_id: delID},function(err,listNeeded){
        if(err){
            console.log(err);
        }
        else{
            console.log(listNeeded[0]["activities"]);
            return listNeeded[0]["activities"];
        }
    });
}
module.exports = {find_entry};