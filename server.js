const express = require('express');
const ActivityList = require('./db');
const uuidCreation = require('./utilities');
const app = express();
const port = 3500;

app.use(express.json());

app.post('/store', (req,res) => {
   var myActList = req.body.result;
   var actEntry = new ActivityList({activities: myActList});
   actEntry.save().then(async ()=>{
    res.send(actEntry._id);
   });
});

app.delete('/remove',(req,res) => {
    var idToBeRemoved = req.headers.obid;
    ActivityList.deleteOne({_id: idToBeRemoved}).then(function(){
        res.send(idToBeRemoved);
    }).catch(function(err){
        res.send(err);
    });
});

app.listen(port, () => {
    console.log(`Our server is running on port ${port}`);
})