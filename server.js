const express = require('express');
const ActivityList = require('./db');
const uuidCreation = require('./utilities');
const app = express();
const port = 3500;

app.use(express.json());

app.post('/store', (req,res) => {
   var myActList = req.body.result;
   var uuidAsResp=uuidCreation(myActList);
   var actEntry = new ActivityList({uuid: uuidAsResp,activities: myActList});
   actEntry.save().then(()=>{
    res.send(uuidAsResp);
   });
});

app.delete('/remove',(req,res) => {
    var uuidToBeRemoved = req.headers.uuid;
    ActivityList.deleteOne({uuid: uuidToBeRemoved}).then(function(){
        res.send(uuidToBeRemoved);
    }).catch(function(err){
        res.send(err);
    });
});

app.listen(port, () => {
    console.log(`Our server is running on port ${port}`);
})