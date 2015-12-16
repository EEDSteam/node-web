var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var projects2= new Schema({
	"ID": Number,
    "傳染途徑": String,
    "疾病名稱": String,
    "簡介": String,
    "預防方法": String,
    "傳播方式": String,
    "治療方法與就醫資訊": String,
    "預防接種建議": String,
    "潛伏期":     String,
    "發病症狀": String,
    "影片連結": String,
    "頁面": String,
});

mongoose.model('projects2', projects2);
mongoose.connect('mongodb://127.0.0.1:27017/thesis', function(err, db) {
    if (err) {
        throw err;
    } 
    else {
        console.log("successfully connected to the database");
    }
});