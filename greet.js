let CurrentDate = new Date();
module.exports.date = CurrentDate;

module.exports.getMassage = function(name){
    let.hour = CurrentDate.getHours();
    if (hour > 10)
        return "Good Afternoon " + name;
    if (hour > 16)
        return "Good Night " + name;
    else 
        return "Good Morning " + name;
}
