
const sd = require('silly-datetime')
module.exports =  {
 formatTime(str){
        return sd.format(new Date(str*1000),'YYYY-MM-DD')
 }
};
