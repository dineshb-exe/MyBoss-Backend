const mongoose = require('mongoose');

var db = mongoose.connect('mongodb://127.0.0.1:27017/myboss');

const activityList = new mongoose.Schema({
    activities: Array
});
const ActivityList = mongoose.model('ActivityList', activityList,'Activities');

module.exports = ActivityList;