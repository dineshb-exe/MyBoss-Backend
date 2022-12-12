const mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost:27017/myboss');

const activityList = new mongoose.Schema({
    uuid: String,
    activities: Array
});
const ActivityList = mongoose.model('ActivityList', activityList,'Activities');

module.exports = ActivityList;