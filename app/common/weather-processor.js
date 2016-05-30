var dateformat = require('dateformat');

module.exports = function(str) {
    var obj = {unix: null, natural: null}
    if (/^d+$/.test(str)) {
        obj.unix = str;
        obj.natural = dateformat(new Date(str), 'mmmm dS, yyyy');
    } else if (/[a-z]+\s*\d(\d)(,)\s*\d(\d)/.test(str)) {
        obj.str = str;
    }
    
    return obj;
}