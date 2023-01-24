const express = require('express');
const ActivityList = require('./db');
const app = express();
const { find_entry } = require('./utilities');
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
    var actEntryToBeDeleted = find_entry(idToBeRemoved);
    console.log("poda",actEntryToBeDeleted);
    ActivityList.deleteOne({_id: idToBeRemoved}).then(function(){
        res.send({"resultz ": actEntryToBeDeleted});
    }).catch(function(err){
        res.send(err);
    });
});

app.listen(port, () => {
    console.log(`Our server is running on port ${port}`);
})