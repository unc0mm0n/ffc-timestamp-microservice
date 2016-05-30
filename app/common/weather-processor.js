var dateformat = require('dateformat');

module.exports = function(str) {
    
    var obj = {unix: null, natural: null}
    
    var dateRe = new RegExp(/^[a-zA-Z]+[,\s]+\d\d?[,\s]+\d+$/);
    console.log(str);
    if (/^\d+$/.test(str)) {
        obj.unix = str;
        obj.natural = dateformat(new Date(Number(str)), 'mmmm dS, yyyy');
    } else if (dateRe.test(str)) {
        var date = new Date(str);
        obj.natural = dateformat(date, 'mmmm dS, yyyy');
        obj.unix = date.getTime();
    }
    
    return obj;
}